from datetime import datetime, timedelta
from typing import Optional

from fastapi import Depends, HTTPException, status, Security, Request
from fastapi.openapi.models import OAuthFlow as OAuthFlowsModel
from fastapi.security import OAuth2PasswordBearer, SecurityScopes, OAuth2
from fastapi.security.utils import get_authorization_scheme_param

from jose import JWTError, jwt
from passlib.context import CryptContext
from pydantic import ValidationError

from app.config import get_settings, Settings
from app.models.tortoise import UserSchema, User
from app.models.pydantic import UserInDB


# Load environment variables
settings: Settings = get_settings()

class OAuth2PasswordBearerWithCookie(OAuth2):
    def __init__(
        self,
        tokenUrl: str,
        scheme_name: str = None,
        scopes: dict = None,
        auto_error: bool = True,
    ):
        if not scopes:
            scopes = {}
        flows = OAuthFlowsModel(password={"tokenUrl": tokenUrl, "scopes": scopes})
        super().__init__(flows=flows, scheme_name=scheme_name, auto_error=auto_error)
    
    async def __call__(self, request: Request) -> Optional[str]:
        authorization: str = request.cookies.get("access_token")
        scheme, param = get_authorization_scheme_param(authorization)
        if not authorization or scheme.lower() != "bearer":
            if self.auto_error:
                raise HTTPException(
                    status_code=status.HTTP_401_UNAUTHORIZED,
                    detail="Not authenticated",
                    headers={"WWW-Authenticate": "Bearer"}
                )
            return None
        
        return param

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

oauth2_scheme = OAuth2PasswordBearerWithCookie(
    tokenUrl="token",
    scopes={
        "me": "Read information about the current user.",
        "viewer": "Has read-only access",
        "admin": "Has full access to all resources",
    }
)

async def get_user(username: str):
    user = await UserSchema.from_queryset_single(User.get(username=username)).first()
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
        )
    
    return UserInDB(**user.to_dict())

async verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)

async get_password_hash(password):
    return pwd_context.hash(password)

async def authenticate_user(username: str, password: str):
    user = await get_user(username=username)
    if not user:
        return None
    if not verify_password(password, user.password):
        return None
    return user

def create_access_token(data: dict, expires_delta: Optional[timedelta] = None):
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(minutes=15)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, str(settings.secret_key), algorithm=settings.algorithm)
    return encoded_jwt

