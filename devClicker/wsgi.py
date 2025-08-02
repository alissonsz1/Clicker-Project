"""
WSGI config for devClicker project.

Ele expõe o callable WSGI como variável de módulo chamada `application`.

Para mais informações: https://docs.djangoproject.com/en/5.2/howto/deployment/wsgi/
"""

import os
from django.core.wsgi import get_wsgi_application

# Define a variável de ambiente que aponta para o arquivo de configurações do Django
# o nome do módulo fica devClicker.settings por padrão
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'devClicker.settings')

# Cria a "aplicação WSGI" usada pelo servidor web
# Esse callable implementa a interface padrão WSGI e é o ponto de integração com servidores como
# Gunicorn, uWSGI, mod_wsgi (Apache) ou mesmo o `runserver` no modo de desenvolvimento
application = get_wsgi_application()
