from flask import Flask
from flask_cors import CORS
from dotenv import load_dotenv, find_dotenv
from .DB import DB


load_dotenv(find_dotenv())


def create_app(db: DB) -> Flask:
    app = Flask(__name__)

    with app.app_context():
        # store the DB in the global object
        with db.conn() as conn:
            print("Setting up tables")
            db.queries.create_schema(conn)

    CORS(app, resources={"*": {"origins": "http://localhost:8081"}})

    return app
