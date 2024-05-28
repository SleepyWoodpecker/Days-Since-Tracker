from flask import request
from utils.app_factory import create_app
from utils.DB import DB

db = DB()
app = create_app(db)
print(db.queries)


@app.get("/test")
def test():
    return "This test is successful"


@app.post("/add-new-habit")
def new_habit():
    # check that all required params are present
    if "reason" not in request.json or "goal" not in request.json:
        return "Missing reason for quitting and/or goal number of days", 400

    with db.conn() as conn:
        db.queries.add_new_habit(
            conn, reason=request.json["reason"], goal=request.json["goal"]
        )

    return {"ok": True}, 201


@app.post("/add-new-occurance")
def add_occurance():
    if "habitId" not in request.json:
        return "Missing habitId", 400

    with db.conn() as conn:
        db.queries.add_new_habit_record(conn, habitid=request.json["habitId"])

    return {"ok": True}, 201


if __name__ == "__main__":
    app.run(debug=True)
