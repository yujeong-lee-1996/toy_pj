from flask import Blueprint, jsonify

main_bp = Blueprint("main", __name__)

@main_bp.route("/")
def index():
    print("연결완료")
    return jsonify({"message": "백엔드 연결"})

@main_bp.route("/members")
def members():
    return jsonify({"members": ["1", "2", "3"]})
