# server/app/api/forum.py

from fastapi import APIRouter, HTTPException, Security
from typing import List

from app.models.pydantic import Post_Pydantic, PostCommentAll, PostComment_Pydantic, PostCommentIn, PostCommentUpdate, UserIn, PostIn, UserAuth
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

@router.delete('/{id}/', response_model=Post_Pydantic)
async def delete_post(id: int, active_user: UserAuth = Security(get_current_user)):
    post = await crud.get_post_by_id(id)
    if not post:
        raise HTTPException(status_code=404, detail="Post not found or belong to current user")
    
    deleted_post = await crud.delete_post_by_id(id, active_user)
    if not deleted_post:
        raise HTTPException(status_code=401, detail="User not authorized to delete this")
    
    del post["updated_at"]
    del post["created_at"]
    del post["user_id"]
    return Post_Pydantic(**post)

@router.put('/{id}/', response_model=Post_Pydantic)
async def update_post(id: int, payload: PostIn, active_user: UserAuth = Security(get_current_user)):
    post = await crud.get_post_by_id(id)
    if not post:
        raise HTTPException(status_code=404, detail="Post not found or belong to current user")
    
    updated_post = await crud.update_post_by_id(id, payload, active_user)
    if not updated_post:
        raise HTTPException(status_code=404, detail="Post not found or user not authorized to update")
    return updated_post


@router.post('/comment/', response_model=PostComment_Pydantic, status_code=201)
async def create_comment(payload: PostCommentIn, active_user: UserAuth = Security(get_current_user)):
    post_comment = await crud.create_comment(payload, active_user)
    return post_comment

@router.get('/{id}/comments/', response_model=List[PostCommentAll])
async def get_all_comments_from_post(id: int) -> List[PostCommentAll]:
    return await crud.get_all_comment(id)

@router.put('/{post_id}/comment/{comment_id}/')
async def update_comment(post_id: int, comment_id: int, payload: PostCommentUpdate, active_user: UserAuth = Security(get_current_user)):
    comment = await crud.get_one_comment(comment_id)
    if not comment:
        raise HTTPException(status_code=404, detail="Comment does not exist")
    
    updated_comment = await crud.update_comment_by_id(comment_id, payload, active_user)
    if not updated_comment:
        raise HTTPException(status_code=404, detail="Comment not found or user not authorized to update")
    
    response = {
        "message": "Comment has been updated"
    }
    return response

@router.delete('/{post_id}/comment/{comment_id}')
async def delete_post(post_id: int, comment_id: int, active_user: UserAuth = Security(get_current_user)):
    comment = await crud.get_one_comment(comment_id)
    if not comment:
        raise HTTPException(status_code=404, detail="Comment not found or belong to current user")
    
    deleted_comment = await crud.delete_comment_by_id(comment_id, active_user)
    if not deleted_comment:
        raise HTTPException(status_code=401, detail="User not authorized to delete this")
    
    post = await crud.get_post_by_id(comment["post_id"])
    user = await crud.get_user_by_id(comment["user_id"])
    comment_id = comment["id"]
    
    comment.update(post_id=post["id"], comment_id=comment_id, username=user["username"])
    del comment["id"]
    del comment["updated_at"]
    del comment["created_at"]
    return comment