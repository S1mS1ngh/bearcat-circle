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
