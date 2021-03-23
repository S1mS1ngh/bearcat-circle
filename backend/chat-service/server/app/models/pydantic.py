# server/app/models/pydantic.py

from typing import List, Optional

from pydantic import BaseModel, EmailStr


class Token(BaseModel):
    access_token: str
    token_type: str

class TokenData(BaseModel):
    username: Optional[str] = None

class User(BaseModel):
    username: str
    email: Optional[EmailStr] = None
    major: str
    first_name: Optional[str] = None
    last_name: Optional[str] = None
    m_number: str

class UserInDB(User):
    password_hash: str

class UserCreate(User):
    password: str