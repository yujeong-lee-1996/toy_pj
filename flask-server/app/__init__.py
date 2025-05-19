from flask import Flask
from flask_cors import CORS
from dotenv import load_dotenv
import os

def create_app():
    app = Flask(__name__)
    CORS(app)

    # .env 로드
    # load_dotenv()

    # Blueprint 등록
    from app.views.main_view import main_bp
    from app.views.tarot_view import tarot_bp

    app.register_blueprint(main_bp)
    app.register_blueprint(tarot_bp, url_prefix="/api/tarot")

    return app