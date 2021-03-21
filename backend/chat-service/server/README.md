# Chat service backend

Built with:
- FastAPI framework for RESTful API design
- Postgres as the main SQL database
- Socketio for bidirectional communication
- TortoiseORM for mapping database requests to backend
- Pytest for unit testing

## Build database
- Start the project/server by running `docker-compose up`
- Open another process/terminal and run `docker-compose exec chat-service python app/db.py`
- Check for database initialization by connecting to port 5432