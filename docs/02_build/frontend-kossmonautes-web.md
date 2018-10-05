
initial inspiration : https://medium.com/@tiangolo/angular-in-docker-with-nginx-supporting-environments-built-with-multi-stage-docker-builds-bb9f1724e984

build
-----
cd frontend/kossmonautes-web
docker build -t kossmonautes-web:prod .

run
----
docker run -p 8080:80 kossmonautes-web:prod