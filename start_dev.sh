#!/bin/bash

# Ativa o ambiente virtual
source ./venv/bin/activate

# Inicia o livereload em segundo plano
python manage.py livereload &

# Inicia o servidor principal
python manage.py runserver
