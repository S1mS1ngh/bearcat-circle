# server/app/sockets/__init__.py

from socketio import AsyncServer, ASGIApp


sio = AsyncServer(
    async_mode='asgi',
    cors_allowed_origins='*'
)

sio_app = ASGIApp(sio)

from . import index