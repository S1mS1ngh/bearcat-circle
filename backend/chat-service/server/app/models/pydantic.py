# server/app/models/pydantic.py

from pydantic import BaseModel


class SummaryPayloadSchema(BaseModel):
    url: str

class SummaryResponseSchema(SummaryPayloadSchema):
    id: int

class UserInSchema(BaseModel):
    username: str
    password_hash: str
    major: str
    first_name: str
    last_name: str
    m_number: str

class UserOutSchema(BaseModel):
    id: int