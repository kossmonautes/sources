
# Identity web

## Prerequisite

- installed .net core sdk 2.1.403


# Identity db

### create the db script from ef

> dotnet ef migrations add <name_migration>
> dotnet ef migrations script | out-file ./script.sql

### create the docker image

> cd backend/identity-db
> docker build -t kossmonautes-identity-db .


### run the image

docker run --name identity-db -p 5432:5432 -d kossmonautes-identity-db

### connect to the image

install pgAdmin 4 and connect to the database
