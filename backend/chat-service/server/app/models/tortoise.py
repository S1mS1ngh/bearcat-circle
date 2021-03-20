# server/app/models/tortoise.py

from tortoise import fields, models
from tortoise.contrib.pydantic import pydantic_model_creator

class TextSummary(models.Model):
    url = fields.TextField()
    summary = fields.TextField()
    created_at = fields.DatetimeField(auto_now_add=True)

    def __str__(self):
        return self.url

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
    channel_members: fields.OneToOneRelation["ChannelMembers"]
    channel_messages: fields.ReverseRelation["ChannelMessages"]
    post: fields.ReverseRelation["Post"]
    post_likes: fields.ReverseRelation["PostLikes"]
    post_comments: fields.ReverseRelation["PostComments"]

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
    channel_members: fields.ReverseRelation["ChannelMembers"]
    channel_messages: fields.ReverseRelation["ChannelMessages"]

    def __str__(self):
        return f"Channel: {self.title}"

class ChannelMembers(models.Model):
    id = fields.IntField(pk=True)
    user: fields.OneToOneRelation[User] = fields.OneToOneField(
        "models.User",
        related_name="channel_members",
        on_delete=fields.CASCADE,
        to_field="id"
    )
    channel: fields.ForeignKeyRelation[Channel] = fields.ForeignKeyField(
        "models.Channel",
        related_name="channel_members"
    )
    created_at = fields.DatetimeField(auto_now_add=True)
    updated_at = fields.DatetimeField(auto_now=True)

    def __str__(self):
        return f"Channel Member: {self.user.name} of channel {self.channel.name}"

class ChannelMessages(models.Model):
    id = fields.IntField(pk=True)
    sender: fields.ForeignKeyRelation[User] = fields.ForeignKeyField(
        "models.User",
        related_name="channel_messages",
        to_field="id"
    )
    channel: fields.ForeignKeyRelation[Channel] = fields.ForeignKeyField(
        "models.Channel",
        related_name="channel_messages"
    )
    message = fields.TextField()
    created_at = fields.DatetimeField(auto_now_add=True)
    updated_at = fields.DatetimeField(auto_now=True)

    def __str__(self):
        return f"Channel Message: {self.message} of user {self.sender.name}"

class Post(models.Model):
    id = fields.IntField(pk=True)
    user: fields.ForeignKeyRelation[User] = fields.ForeignKeyField(
        "models.User",
        related_name="post",
        to_field="id"
    )
    post_id = fields.IntField()
    title = fields.CharField(max_length=30)
    content = fields.TextField()
    created_at = fields.DatetimeField(auto_now_add=True)
    updated_at = fields.DatetimeField(auto_now=True)

    # Reverse relation fields
    post_likes: fields.ReverseRelation["PostLikes"]
    post_comments: fields.ReverseRelation["PostComments"]

    def __str__(self):
        return f"Post: {self.title} of user {self.user.name}"

class PostLikes(models.Model):
    id = fields.IntField(pk=True)
    post: fields.ForeignKeyRelation[Post] = fields.ForeignKeyField(
        "models.Post",
        related_name="post_likes",
        to_field="id"
    )
    user: fields.OneToOneRelation[User] = fields.OneToOneField(
        "models.User",
        related_name="post_likes",
        to_field="id"
    )
    created_at = fields.DatetimeField(auto_now_add=True)
    updated_at = fields.DatetimeField(auto_now=True)

    def __str__(self):
        return f"Like of: {self.user.name}"

class PostComments(models.Model):
    id = fields.IntField(pk=True)
    post: fields.ForeignKeyRelation[Post] = fields.ForeignKeyField(
        "models.Post",
        related_name="post_comments",
        to_field="id"
    )
    user: fields.OneToOneRelation[User] = fields.OneToOneField(
        "models.User",
        related_name="post_comments",
        to_field="id"
    )
    content = fields.TextField()
    created_at = fields.DatetimeField(auto_now_add=True)
    updated_at = fields.DatetimeField(auto_now=True)

    def __str__(self):
        return f"Comment of: {self.user.name}"

SummarySchema = pydantic_model_creator(TextSummary)
UserSchema = pydantic_model_creator(User)