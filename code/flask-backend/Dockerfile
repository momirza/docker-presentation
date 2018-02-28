FROM ubuntu:16.04

RUN apt-get update && apt-get install -y python-pip

RUN pip install flask==0.12.2
RUN pip install -U flask-cors==3.0.3
RUN pip install -U pymongo==3.6.0

COPY ./app /app

WORKDIR /app/

EXPOSE 5000

CMD ["flask", "run", "--host=0.0.0.0"]
