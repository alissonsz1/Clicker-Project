@echo off
REM Ativa o ambiente virtual
call .\venv\Scripts\activate.bat

REM Inicia o servidor com livereload (reconhece mudanças)
start cmd /k "python devClicker/manage.py livereload"

REM Inicia o servidor principal
python devClicker/manage.py runserver
