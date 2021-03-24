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

@router.get('/{id}/', response_model=Post_Pydantic, status_code=200)
async def get_one_post(id: int) -> Post_Pydantic:
    post = await crud.get_post_by_id(id)
    del post["updated_at"]
    del post["created_at"]
    del post["user_id"]
    return Post_Pydantic(**post)

@router.delete("/{id}/", response_model=Post_Pydantic)
async def delete_post(id: int, active_user: UserAuth = Security(get_current_user)):
    post = await crud.get_post_by_id(id)
    if not post:
        raise HTTPException(status_code=404, detail="Post not found or belong to current user")
    
    deleted_post = await crud.delete_post_by_id(id, active_user)
    if not post:
        raise HTTPException(status_code=401, detail="User not authorized to delete this")
    
    del post["updated_at"]
    del post["created_at"]
    del post["user_id"]
    return Post_Pydantic(**post)