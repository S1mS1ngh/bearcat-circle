# server/app/api/crud.py

from typing import Union, List

from app.models.pydantic import User
from app.models.tortoise import User


async def create_user(payload: dict) -> User:
    user = User(
        username=payload['username'],
        email=payload['email'],
        password_hash=payload['password'],
        major=payload['major'],
        first_name=payload['first_name'],
        last_name=payload['last_name'],
        m_number=payload['m_number'],
    )
    await user.save()
    return user

async def get_user(username: str) -> Union[dict, None]:
    user = await User.filter(username=username).first().values()
    if user:
        return user[0]
    return None