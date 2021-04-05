# server/app/api/auth.py

from datetime import timedelta

from fastapi import APIRouter, HTTPException, status, Response, Depends
from fastapi.security import OAuth2PasswordRequestForm

from app.api.crud import create_user
from app.config import get_settings, Settings
from app.models.pydantic import UserAuth as User
from app.authentication import authenticate_user, create_access_token


# Setting configs
settings: Settings = get_settings()

router = APIRouter()


@router.post("/login", response_model=User)
async def login_for_access_token(
    response: Response, form_data: OAuth2PasswordRequestForm = Depends()
):
    user = await authenticate_user(form_data.username, form_data.password)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    
    access_token_expires = timedelta(minutes=settings.access_token_expire_minutes)
    access_token = create_access_token(
        data={"sub": user.username},
        expires_delta=access_token_expires,
    )

    response.set_cookie(
        key="access_token", value=f"Bearer {access_token}", httponly=True
    )
    
    return user


@router.post("/logout", status_code=205)
async def user_logout(response: Response):
    response.delete_cookie(key="access_token")
    message = {
        "message": "User is logout"
    }
    return message