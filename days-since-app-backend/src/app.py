from flask import request
from utils.app_factory import create_app
from utils.DB import DB
from types import GeneratorType

db = DB()
app = create_app(db)
print(db.queries)


@app.get("/test")
def test():
    with db.conn() as conn:
        r = db.queries.test2(conn, input=db.queries.test1(conn))
        for i in r:
            print(i)
    return "This test is successful"


@app.post("/add-new-habit")
def new_habit():
    # check that all required params are present
    if (
        "habitName" not in request.json
        or "reason" not in request.json
        or "goal" not in request.json
        or "iconName" not in request.json
    ):
        return "Missing reason for quitting and/or goal number of days", 400

    with db.conn() as conn:
        try:
            print(request.json)
            rows_affected = db.queries.add_new_habit(
                conn,
                habit_name=request.json["habitName"],
                reason=request.json["reason"],
                goal=request.json["goal"],
                icon_name=request.json["iconName"],
            )

            # return success only if the entry was properly added
            if rows_affected:
                return {"ok": True}, 201

        except Exception as e:
            print("Error in /add-new-habit: ", e)
            return "Error encountered when adding entry to the DB", 500


@app.post("/add-new-occurance")
def add_occurance():
    if "habitId" not in request.json:
        return "Missing habitId", 400

    with db.conn() as conn:
        try:
            rows_affected = db.queries.add_new_habit_record(
                conn, habitid=request.json["habitId"]
            )

            if rows_affected:
                return {"ok": True}, 201

        except Exception as e:
            print("Error in /add-new-occurance: ", e)
            return "Error encountered when recording habit in DB", 500


@app.get("/get-longest-streak-for-all")
def get_longest_habit_for_all():
    with db.conn() as conn:
        try:
            max_streak_for_all_habits = db.queries.get_longest_streak(conn)

            if not isinstance(max_streak_for_all_habits, GeneratorType):
                print(
                    "Error in /get-longest-streak-for-all: ",
                    "return object is not a generator",
                )
                return "Error encountered in DB", 500

            # index as [0][0] because the return type is a tuple
            max_streak_for_all_habits = [
                streak for streak in max_streak_for_all_habits
            ][0][0]

            return {"ok": True, "maxStreak": max_streak_for_all_habits}, 200

        except Exception as e:
            print("Error in /get-longest-streak-for-all: ", e)
            return "Error encountered in DB", 500


@app.get("/get-longest-streak/<habitid>")
def get_longest_streak_for_habit(habitid):
    print(habitid)
    with db.conn() as conn:
        try:
            max_streak = db.queries.get_longest_streak_for_habit(conn, habitid=habitid)

            if not isinstance(max_streak, GeneratorType):
                print(
                    "Error in /get-longest-streak: ", "return object is not a generator"
                )
                return "Error encountered in DB", 500

            # index as [0][0] because the return type is a tuple
            max_streak = [streak for streak in max_streak][0][0]

            return {"ok": True, "maxStreakForHabit": max_streak}, 200

        except Exception as e:
            print("Error in /get-longest-streak: ", e)
            return "Error encountered in DB", 500


if __name__ == "__main__":
    app.run(debug=True)
