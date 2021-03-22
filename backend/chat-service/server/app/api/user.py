# server/app/api/user.py

from fastapi import APIRouter, HTTPException, Security
from typing import List

from app.api import crud
from app.authentication import get_password_hash, get_current_user
from app.models.pydantic import UserCreate, User
from app.models.tortoise import UserSchema


router = APIRouter()

@router.post("/", response_model=UserSchema)
async def create_user(user: UserCreate):
    username = user.username
    existing_user = await crud.get_user(username)
    if existing_user:
        raise HTTPException(status_code=400, detail="User already exists")
    user_dict = user.dict()
    user_dict["password"] = get_password_hash(user_dict["password"])
    response = await crud.create_user(user_dict)
    return response

@router.get("/current-user", response_model=User)
async def get_active_user_through_cookies(
    active_user: User = Security(get_current_user)
):
    return active_user