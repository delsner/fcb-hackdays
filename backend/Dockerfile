FROM ubuntu:16.04

RUN apt-get update \
    && apt-get install -yq --no-install-recommends \
    python3 \
    python3-pip \
    && pip3 install --upgrade pip

EXPOSE 8081

ADD . /app
WORKDIR /app

# install dependencies
RUN ./install.sh

CMD python3 app.py


