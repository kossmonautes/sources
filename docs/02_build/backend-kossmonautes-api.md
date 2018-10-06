
followed this : https://docs.docker.com/engine/examples/dotnetcore/#create-a-dockerfile-for-an-aspnet-core-application
to create the dockerfile

build
-----
cd backend/api/Kossmonautes-api
docker build -t kossmonautes-api .

run
----
docker run -d -p 8080:80 --name k10s-api kossmonautes-api