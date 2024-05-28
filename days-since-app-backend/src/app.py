from utils.app_factory import create_app
from utils.DB import DB

db = DB()
app = create_app(db)


@app.get("/test")
def test():
    return "This test is successful"


if __name__ == "__main__":
    app.run()
