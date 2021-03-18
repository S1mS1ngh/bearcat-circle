# server/app/api/crud.py

from typing import Union, List

from app.models.pydantic import SummaryPayloadSchema, UserInSchema, UserOutSchema
from app.models.tortoise import TextSummary, User


async def post(payload: SummaryPayloadSchema) -> int:
    summary = TextSummary(
        url=payload.url,
        summary="dummy summary",
    )
    await summary.save()
    return summary.id

async def get(id: int) -> Union[dict, None]:
    summary = await TextSummary.filter(id=id).first().values()
    if summary:
        return summary[0]
    return None

async def get_all() -> List:
    summaries = await TextSummary.all().values()
    return summaries

async def create_user(payload: UserInSchema) -> User:
    user = User(
        username=payload.username,
        password_hash=payload.password_hash,
        major=payload.major,
        first_name=payload.first_name,
        last_name=payload.last_name,
        m_number=payload.m_number,
    )
    print(type(user))
    await user.save()
    return user