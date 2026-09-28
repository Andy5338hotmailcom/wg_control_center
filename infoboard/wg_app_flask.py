from flask import Flask
from flask_cors import CORS
import sys, os

def get_base_path():
    if hasattr(sys, '_MEIPASS'):
        return os.path.abspath(sys._MEIPASS)
    return os.path.abspath(".")

base = get_base_path()

app = Flask(
    __name__,
    static_folder=base,
    static_url_path="/"
)
CORS(app)   # 全局开启跨域

@app.route('/ping')
def ping():
    return "ok"

if __name__ == "__main__":
    app.run(host="127.0.0.1", port=8550, debug=False)
