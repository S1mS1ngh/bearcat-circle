# server/app/api/crud.py

from typing import Union, List

from app.models.pydantic import Post_Pydantic, User_Pydantic, PostIn, UserIn, UserAuth, PostCommentIn, PostComment_Pydantic, PostCommentAll, PostCommentUpdate
from app.models.tortoise import User, Post, PostComment


async def create_user(payload: dict) -> User_Pydantic:
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

async def get_user_by_id(id: int) -> Union[dict, None]:
    user = await User.filter(id=id).first().values()
    if user:
        return user[0]
    return None

async def create_post(payload: PostIn, current_user: UserAuth) -> Post_Pydantic:
    user = await User.get(username=current_user.username)
    post = Post(
        title=payload.title,
        content=payload.content,
        user=user
    )
    await post.save()
    return post

async def get_all_post() -> List[Post_Pydantic]:
    posts = await Post_Pydantic.from_queryset(Post.all())
    return posts

async def get_post_by_id(id: int) -> Union[dict, None]:
    post = await Post.filter(id=id).first().values()
    if post:
        return post[0]
    return None

async def delete_post_by_id(id: int, current_user: UserAuth) -> Union[Post_Pydantic, None]:
    post = await Post.filter(id=id).first()
    user = await get_user(current_user.username)
    if post.user_id == user['id']:
        post = await Post.filter(id=id).first().delete()
        return post
    return None

async def update_post_by_id(id: int, payload: PostIn, current_user: UserAuth) -> Union[Post_Pydantic, None]:
    post = await Post.filter(id=id).first()
    user = await User.filter(username=current_user.username).first()
    if post.user_id == user.id:
        post = await Post.filter(id=id).update(title=payload.title, content=payload.content)
        
        if post:
            updated_post = await Post.filter(id=id).first()
            return updated_post
    
    return None

async def create_comment(payload: PostCommentIn, current_user: UserAuth) -> PostComment_Pydantic:
    user = await User.get(username=current_user.username)
    post = await Post.get(id=payload.post_id)
    post_comment = PostComment(
        content=payload.content,
        post=post,
        user=user,
    )
    await post_comment.save()
    return post_comment

async def get_one_comment(id: int) -> Union[dict, None]:
    comment = await PostComment.filter(id=id).first().values()
    if comment:
        return comment[0]
    return None

async def get_all_comment(id: int) -> List[PostCommentAll]:
    post_comments = await PostComment.filter(post_id=id).values_list(
        "id",
        "content",
        "user__username",
        "post__user__username",
        "post__id",
    )

    result = []
    for post_comment in post_comments:
        comment_id, content, username, post_author, post_id = post_comment
        result.append(
            PostCommentAll(
                comment_id=comment_id,
                content=content,
                username=username,
                post_id=post_id,
                post_author=post_author
            )
        )
    return result

async def update_comment_by_id(id: int, payload: PostCommentUpdate, current_user: UserAuth) -> Union[PostCommentAll, None]:
    user = await User.filter(username=current_user.username).first()
    comment = await PostComment.filter(id=id).first()
    if comment.user_id == user.id:
        comment = await PostComment.filter(id=id).update(content=payload.content)
        
        if comment:
            updated_comment = await PostComment.filter(id=id).first()
            return updated_comment
    
    return None

async def delete_comment_by_id(comment_id: int, current_user: UserAuth) -> Union[PostComment_Pydantic, None]:
    comment = await PostComment.filter(id=comment_id).first()
    user = await get_user(current_user.username)
    if comment.user_id == user['id']:
        comment = await PostComment.filter(id=comment_id).first().delete()
        return comment
    return None