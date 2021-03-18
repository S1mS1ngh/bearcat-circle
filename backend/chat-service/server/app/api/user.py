# server/app/api/user.py

from fastapi import APIRouter, HTTPException
from typing import List

from app.api import crud
from app.models.pydantic import UserInSchema, UserOutSchema


router = APIRouter()

@router.post("/", response_model=UserOutSchema, status_code=201)
async def create_new_user(payload: UserInSchema) -> UserOutSchema:
    user = await crud.create_user(payload)
    response = {
        "id": user.id
    }
    return response