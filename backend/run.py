import os

from server.app import create_app

config_name = os.getenv('APP_SETTINGS')  # config_name = "development"
app = create_app(config_name)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8081, threaded=True)
