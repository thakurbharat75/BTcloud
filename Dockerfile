FROM ubuntu:latest


RUN apt-get update

RUN apt-get install -y apache2 

EXPOSE 80
CMD ["apachectl", "-D", "FOREGROUND"]
