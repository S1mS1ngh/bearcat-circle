# server/app/models/tortoise.py

from tortoise import fields, models
from tortoise.contrib.pydantic import pydantic_model_creator


class User(models.Model):
    id = fields.IntField(pk=True)
    username = fields.CharField(max_length=20, unique=True)
    email = fields.CharField(max_length=50, unique=True)
    password_hash = fields.CharField(max_length=255)
    major = fields.CharField(max_length=50)
    first_name = fields.CharField(max_length=50)
    last_name = fields.CharField(max_length=50)
    m_number = fields.IntField()
    created_at = fields.DatetimeField(auto_now_add=True)
    updated_at = fields.DatetimeField(auto_now=True)

    # Reverse relation fields
    channel: fields.ReverseRelation["Channel"]
    channel_members: fields.OneToOneRelation["ChannelMember"]
    channel_messages: fields.ReverseRelation["ChannelMessage"]
    posts: fields.ReverseRelation["Post"]
    post_likes: fields.ReverseRelation["PostLike"]
    post_comments: fields.ReverseRelation["PostComment"]

    class PydanticMeta:
        exclude = ["password_hash", "created_at", "updated_at"]

    def __str__(self):
        return f"User: {self.username}. M-number: {self.m_number}. Major: {self.major}"

class Channel(models.Model):
    id = fields.IntField(pk=True)
    owner: fields.ForeignKeyRelation[User] = fields.ForeignKeyField(
        "models.User",
        related_name="channel"
    )
    title = fields.CharField(max_length=50)
    description = fields.TextField()
    created_at = fields.DatetimeField(auto_now_add=True)
    updated_at = fields.DatetimeField(auto_now=True)

    # Reverse relation fields
    channel_members: fields.ReverseRelation["ChannelMember"]
    channel_messages: fields.ReverseRelation["ChannelMessage"]

    class PydanticMeta:
        exclude = ["created_at", "updated_at"]

    def __str__(self):
        return f"Channel: {self.title}"

class ChannelMember(models.Model):
    id = fields.IntField(pk=True)
    user: fields.OneToOneRelation[User] = fields.OneToOneField(
        "models.User",
        related_name="channel_members",
        on_delete=fields.CASCADE,
    )
    channel: fields.ForeignKeyRelation[Channel] = fields.ForeignKeyField(
        "models.Channel",
        related_name="channel_members"
    )
    created_at = fields.DatetimeField(auto_now_add=True)
    updated_at = fields.DatetimeField(auto_now=True)

    class PydanticMeta:
        exclude = ["created_at", "updated_at"]

    def __str__(self):
        return f"Channel Member: {self.user.name} of channel {self.channel.name}"

class ChannelMessage(models.Model):
    id = fields.IntField(pk=True)
    sender: fields.ForeignKeyRelation[User] = fields.ForeignKeyField(
        "models.User",
        related_name="channel_messages",
    )
    channel: fields.ForeignKeyRelation[Channel] = fields.ForeignKeyField(
        "models.Channel",
        related_name="channel_messages"
    )
    message = fields.TextField()
    created_at = fields.DatetimeField(auto_now_add=True)
    updated_at = fields.DatetimeField(auto_now=True)

    class PydanticMeta:
        exclude = ["created_at", "updated_at"]

    def __str__(self):
        return f"Channel Message: {self.message} of user {self.sender.name}"

class Post(models.Model):
    id = fields.IntField(pk=True)
    user: fields.ForeignKeyRelation[User] = fields.ForeignKeyField(
        "models.User",
        related_name="posts",
    )
    title = fields.CharField(max_length=30)
    content = fields.TextField()
    created_at = fields.DatetimeField(auto_now_add=True)
    updated_at = fields.DatetimeField(auto_now=True)

    # Reverse relation fields
    post_likes: fields.ReverseRelation["PostLike"]
    post_comments: fields.ReverseRelation["PostComment"]

    class PydanticMeta:
        exclude = ["created_at", "updated_at"]

    def __str__(self):
        return f"Post: {self.title} of user {self.user.name}"

class PostLike(models.Model):
    id = fields.IntField(pk=True)
    post: fields.ForeignKeyRelation[Post] = fields.ForeignKeyField(
        "models.Post",
        related_name="post_likes",
    )
    user: fields.OneToOneRelation[User] = fields.OneToOneField(
        "models.User",
        related_name="post_likes",
    )
    created_at = fields.DatetimeField(auto_now_add=True)
    updated_at = fields.DatetimeField(auto_now=True)

    class PydanticMeta:
        exclude = ["created_at", "updated_at"]

    def __str__(self):
        return f"Like of: {self.user.name}"

class PostComment(models.Model):
    id = fields.IntField(pk=True)
    post: fields.ForeignKeyRelation[Post] = fields.ForeignKeyField(
        "models.Post",
        related_name="post_comments",
    )
    user: fields.OneToOneRelation[User] = fields.OneToOneField(
        "models.User",
        related_name="post_comments",
    )
    content = fields.TextField()
    created_at = fields.DatetimeField(auto_now_add=True)
    updated_at = fields.DatetimeField(auto_now=True)

    class PydanticMeta:
        exclude = ["created_at", "updated_at"]

    def __str__(self):
        return f"Comment of: {self.user.name}"