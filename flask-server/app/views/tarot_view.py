from flask import Blueprint, request, jsonify

tarot_bp = Blueprint("tarot", __name__)

@tarot_bp.route("/draw-random", methods=["GET"])
def draw_random():
    print("요청확인 : random")
    return jsonify({"cards": ["The Fool", "The Star", "The Magician"]})