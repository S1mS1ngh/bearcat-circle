# server/app/models/pydantic.py

from typing import List, Optional

from pydantic import BaseModel, EmailStr


class SummaryPayloadSchema(BaseModel):
    url: str

class SummaryResponseSchema(SummaryPayloadSchema):
    id: int

class User(BaseModel):
    username: str
    email: Optional[EmailStr] = None
    major: str
    first_name: Optional[str] = None
    last_name: Optional[str] = None
    m_number: str

class UserInDB(User):
    password: str
    scopes: List[str]

class UserCreate(User):
    password: str
    scopes: List[str] = ["me", "viewer"]