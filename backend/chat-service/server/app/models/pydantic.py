# server/app/models/pydantic.py

from typing import List, Optional
from pydantic import BaseModel, EmailStr
from tortoise.contrib.pydantic import pydantic_model_creator

from app.models.tortoise import User, Post, PostComment, PostLike


class Token(BaseModel):
    access_token: str
    token_type: str

class TokenData(BaseModel):
    username: Optional[str] = None

class UserAuth(BaseModel):
    username: str
    email: Optional[EmailStr] = None
    major: str
    first_name: Optional[str] = None
    last_name: Optional[str] = None
    m_number: int

class UserInDB(UserAuth):
    password_hash: str

class UserCreate(UserAuth):
    password: str

User_Pydantic = pydantic_model_creator(User)

class UserIn(BaseModel):
    username: str
    email: Optional[EmailStr] = None
    major: str
    first_name: Optional[str] = None
    last_name: Optional[str] = None
    m_number: int

Post_Pydantic = pydantic_model_creator(Post)
PostComment_Pydantic = pydantic_model_creator(PostComment)
PostLike_Pydantic = pydantic_model_creator(PostLike)

class PostIn(BaseModel):
    title: str
    content: str

class PostCommentIn(BaseModel):
    content: str
    post_id: int

class PostCommentUpdate(BaseModel):
    content: str

class PostCommentAll(BaseModel):
    content: str
    comment_id: int
    post_id: int
    post_author: str
    username: str