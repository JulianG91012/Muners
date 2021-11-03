FROM ubuntu
ENV TZ=America/Bogota
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
RUN apt update
RUN apt install -y apache2
COPY Page/* /var/www/html/
EXPOSE 80
CMD [apachectl -D FOREGROUND]