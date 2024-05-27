import aiosql, psycopg, os
from dotenv import load_dotenv, find_dotenv

load_dotenv(find_dotenv())

queries = aiosql.from_path("../sql/create_tables.sql", "psycopg")
conn = psycopg.connect(os.getenv("PG_CONN_STR"))

print(queries)
queries.create_schema(conn)
conn.commit()
# conn.commit()
