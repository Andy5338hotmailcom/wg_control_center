from multiprocessing import Process, freeze_support
from flask import Flask
from flask_cors import CORS
import sys
from pathlib import Path

def get_base_path():
    if hasattr(sys, "_MEIPASS"):
        return Path(sys._MEIPASS)
    else:
        return Path(__file__).parent

BASE = get_base_path()

# ====================== 服务1：infoboard 端口8550 ======================
def run_infoboard():
    base = str(BASE / "./infoboard")
    # 完全沿用你写的模板
    app1 = Flask(
        __name__,
        static_folder=base,
        static_url_path="/"
    )
    CORS(app1)

    @app1.route('/ping')
    def ping():
        return "ok"

    app1.run(host="127.0.0.1", port=8550, debug=False)

# ====================== 服务2：main主系统 端口8549 ======================
def run_main_system():
    base = str(BASE / "./main")
    # 完全沿用你写的模板
    app2 = Flask(
        __name__,
        static_folder=base,
        static_url_path="/"
    )
    CORS(app2)

    @app2.route('/ping')
    def ping():
        return "ok"

    app2.run(host="127.0.0.1", port=8549, debug=False)

# ====================== 服务2：main主系统 端口8549 ======================
def run_sys_system():
    base = str(BASE / "./wgsys")
    # 完全沿用你写的模板
    app2 = Flask(
        __name__,
        static_folder=base,
        static_url_path="/"
    )
    CORS(app2)

    @app2.route('/ping')
    def ping():
        return "ok"

    app2.run(host="127.0.0.1", port=8551, debug=False)

# -------------------------- 主入口 --------------------------
if __name__ == "__main__":
    freeze_support()

    p1 = Process(target=run_infoboard)
    p2 = Process(target=run_main_system)
    p3 = Process(target=run_sys_system)

    print("✅ Infoboard: http://127.0.0.1:8550")
    print("✅ Main系统: http://127.0.0.1:8549")
    print("✅ Wildgoose BE-S系统: http://127.0.0.1:8551")

    p1.start()
    p2.start()
    p3.start()

    try:
        p1.join()
        p2.join()
        p3.join()
    except KeyboardInterrupt:
        print("\n🛑 收到关闭信号")
    finally:
        if p1.is_alive():
            p1.terminate()
        if p2.is_alive():
            p2.terminate()
        if p3.is_alive():
            p3.terminate()
