@echo off
REM Ativa o ambiente virtual
call .\venv\Scripts\activate.bat

REM Inicia o servidor com livereload (reconhece mudanças)
start cmd /k "python devClicker/manage.py livereload --ignore-file-extensions=sqlite3"

REM Inicia o servidor principal
python devClicker/manage.py runserver 0.0.0.0:8000
