import aiosql, os
from dotenv import load_dotenv, find_dotenv
from contextlib import contextmanager
from psycopg_pool import ConnectionPool
from psycopg import Connection
from typing import Iterator

load_dotenv(find_dotenv())


class DB:
    def __init__(self):
        self.queries = aiosql.from_path("sql/create_tables.sql", "psycopg")
        self.pool = ConnectionPool(os.getenv("PG_CONN_STR"), open=True)

    # this is like a destructor in C++
    def __del__(self):
        self.pool.close()

    @contextmanager
    def conn(self) -> Iterator[Connection]:
        with self.pool.connection() as conn:
            try:
                yield conn

            except Exception as e:
                print(e)
                conn.rollback()

            # NOTE: no need to put a finally block here to close the connection as the context manager will do so itself


if __name__ == "__main__":
    db = DB()
    with db.conn() as conn:
        r = conn.execute("SELECT 1")
        for i in r:
            print(i)

    with db.conn() as conn:
        r = conn.execute("SELECT 2")
        for i in r:
            print(i)

    print("script finished")
