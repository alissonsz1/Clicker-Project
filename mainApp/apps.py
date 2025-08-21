from django.apps import AppConfig
import logging
import time


logger = logging.getLogger(__name__)

class MainappConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'mainApp'

    def ready(self):
        deploy_time = time.strftime("%Y-%m-%d %H:%M:%S", time.localtime())
        logger.info(f"🚀 App iniciado (possível deploy) em {deploy_time}")