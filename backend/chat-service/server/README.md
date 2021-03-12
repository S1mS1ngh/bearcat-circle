# Chat service backend

Built with:
- FastAPI framework for RESTful API design
- Postgres as the main SQL database
- Socketio for bidirectional communication
- TortoiseORM for mapping database requests to backend
- Pytest for unit testing

## Setup
- Make sure to have python >=3.5 and Docker with latest version
- Run `docker-compose build` to build the image
- Run `docker-compose up` to start the contaners for both chat service and database