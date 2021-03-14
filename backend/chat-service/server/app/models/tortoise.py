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
    name = fields.TextField()

    def __str__(self):
        return self.name

class Message(models.Model):
    id = fields.IntField(pk=True)
    message = fields.TextField()
    user = fields.ForeignKeyField('models.User')

    def __str__(self):
        return self.message


SummarySchema = pydantic_model_creator(TextSummary)