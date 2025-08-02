"""
ASGI config for devClicker project.

It exposes the ASGI callable as a module-level variable named ``application``.

Para mais detalhes veja:
https://docs.djangoproject.com/en/5.2/howto/deployment/asgi/
"""

import os
from channels.routing import ProtocolTypeRouter, URLRouter
from django.core.asgi import get_asgi_application
from channels.auth import AuthMiddlewareStack
from mainApp.routing import websocket_urlpatterns

# Define a variável de ambiente com a configuração Django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'devClicker.settings')

# Inicializa a aplicação ASGI do Django (semelhante ao WSGI para HTTP tradicional)
# Isso garante que a AppRegistry do Django esteja pronta antes de usar modelos, etc.
django_asgi_app = get_asgi_application()

# A variável `application` é o ponto de entrada ASGI para o seu app Channels
application = ProtocolTypeRouter({
    # Quando chegar uma requisição HTTP tradicional,
    # encaminha para o Django ASGI app que lida com views, URLs e middleware normais
    "http": django_asgi_app,

    # Quando chegar uma conexão WebSocket,
    # usa AuthMiddlewareStack para adicionar suporte a autenticação
    # e depois encaminha para os consumers via URLRouter usando as rotas definidas.
    "websocket": AuthMiddlewareStack(
        URLRouter(
            websocket_urlpatterns
        )
    ),
})

