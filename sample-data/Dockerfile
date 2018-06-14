FROM mysql:5

ENV MYSQL_ROOT_PASSWORD 1234
ENV MYSQL_DATABASE project_nomad_booking
ENV MYSQL_USER booking-service
ENV MYSQL_PASSWORD 1234

ADD schema.sql /docker-entrypoint-initdb.d