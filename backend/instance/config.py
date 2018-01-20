import os


class Config(object):
    """Parent configuration class."""
    DEBUG = False
    CSRF_ENABLED = True
    MONGO_DBNAME = os.getenv('MONGO_INITDB_DATABASE')
    MONGO_HOST = 'db'
    MONGO_USERNAME = os.getenv('MONGO_INITDB_ROOT_USERNAME')
    MONGO_PASSWORD = os.getenv('MONGO_INITDB_ROOT_PASSWORD')
    JWT_SECRET_KEY = os.getenv('JWT_SECRET')


class DevelopmentConfig(Config):
    """Configurations for Development."""
    DEBUG = True


class ProductionConfig(Config):
    """Configurations for Production."""
    DEBUG = False
    TESTING = False


app_config = {
    'development': DevelopmentConfig,
    'production': ProductionConfig
}
