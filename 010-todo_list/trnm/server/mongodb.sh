#!/bin/bash
# Commands to run mongodb database with docker
docker run --rm -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=mongo -e MONGO_INITDB_ROOT_PASSWORD=mongo -e MONGO_INITDB_DATABASE=todolist --name some-mongo  mongo
docker run --rm -p 27017:27017 -e MONGO_INITDB_DATABASE=todolist --name some-mongo  mongo