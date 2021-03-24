# server/app/api/forum.py

from fastapi import APIRouter, HTTPException, Security
from typing import List

from app.models.pydantic import Post_Pydantic, UserIn, PostIn, UserAuth
from app.api import crud
from app.authentication import get_current_user


router = APIRouter()


@router.post('/', response_model=Post_Pydantic, status_code=201)
async def create_post(payload: PostIn, active_user: UserAuth = Security(get_current_user)):
    post = await crud.create_post(payload, active_user)
    return post

@router.get('/all', response_model=List[Post_Pydantic])
async def get_all_post() -> List[Post_Pydantic]:
    return await crud.get_all_post()