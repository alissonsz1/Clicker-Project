# INSTALAÇÃO E RODAR O SERVIDOR

## SETUP

### Criação e ativação do ambiente
Executar no terminal na pasta do projeto
```
python -m venv .venv

source .venv/bin/activate # ativar no linux ou mac
.\.venv\Scripts\activate  # ativer no windows
```

### INSTALAÇÃO DAS BIBLIOTECAS
Executar no terminal na pasta do projeto
```
pip install -r requirements.txt
```

## INICIALIZAÇÃO DO SERVIDOR

### Criação do banco de dados e carregar as configurações

Executar no terminal, com o ambiente inicializado e na pasta em que se encontra o manage.py
```
# Executar os dois em sequência, um vai verificar as migrações e outros irá fazer as migrações
python manage.py makemigrations
python manage.py migrate
```

### Inicializar server
Executar no terminal na pasta em que se encontra o manage.py, com o ativado

```
python manage.py runserver
```

Em outro, com a mesma configuração
```
# Esse aqui é um facilitador, em que toda vez que se atualiza algo ele atualiza automaticamente a tela
python manage.py livereload
```
# DICAS DE DESENVOLVIMENTO

## BACKEND

Qualquer modificação nas configurações de servidor, rota etc., rodar no terminal com o ambiente ativo e na pasta de manage.py:
```
python manage.py makemigrations
python manage.py migrate
```

## FRONTEND

Os arquivos estáticos são "localizados" na pasta /static/ para o servidor. Por conta disso, passar os arquivos da maneira convencional ("./pasta/arquivo.png") não funciona, precisando fazer algumas coisas.

** NO PROJETO, O STATIC FOI DEFINIDO NA RAIZ (/static/)**

### HTML
No html, no seu início, colocar:
```
{ % load static % }
```

E ao chamar os arquivos:

```
<img src="{ % static "pasta/imagem.png" % }" />
<script src="{ % staic "script.js" % }"></script.js>
```

## HTML SEM O {% LOAD STATIC %} (NÃO RECOMENDÁVEL)
Pode-se usar:
```
<img src="/static/assets/placeholder.png" />
<img src="/static/placeholder.png"/>
```

## JAVASCRIPT

Aqui, de maneira mais rápida e sem ajuste técnico, pode-se:

```

imagem.innerHTML = `<img src"/static/pasta/imagem.png"/ >`
imagem.innerHTML = `<img src"/static/imagem.png"/ >`

```

Sem modificar o html, pode-se usar direto:

```
./pasta/arquivo
./arquivo
```
** Só não pode usar o dois pontos, caso o arquivo esteja na raiz, pois irá para o endereço do servidor, não encontrando nenhum arquivo estático **

## CSS
Se o código não adicionar nenhum endereço no html, pode-se

```
./pasta/arquivo
./arquivo
```