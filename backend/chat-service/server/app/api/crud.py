# server/app/api/crud.py

from typing import Union, List

from app.models.pydantic import SummaryPayloadSchema, UserPayloadSchema, UserResponseSchema
from app.models.tortoise import TextSummary, User, Message


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


async def post_user(payload: UserPayloadSchema) -> int:
    user = User(name=payload.name)

    await user.save()
    return user.id

async def create_message(name: str, message: str):
    user = await User.filter(name=name).first().values()
    if user:
        return user[0]
    else:
        user = User(name=name)
    
    message = Message(
        user=user,
        message=message
    )
    message.save()

async def get_all_messages() -> List:
    messages = await Message.all().values()
    return messages