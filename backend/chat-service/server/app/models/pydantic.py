# server/app/models/pydantic.py

from typing import List, Optional
from pydantic import BaseModel, EmailStr
from tortoise.contrib.pydantic import pydantic_model_creator

from app.models.tortoise import User, Post


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

class PostIn(BaseModel):
    title: str
    content: str