FROM ubuntu:16.04

RUN apt-get update && apt-get install -y python-pip

RUN pip install flask==0.12.2
COPY ./app /app

WORKDIR /app/

CMD ['./run_app.sh']
