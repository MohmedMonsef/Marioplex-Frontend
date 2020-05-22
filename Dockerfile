FROM belalelhossany/start

WORKDIR '/app'

COPY ./package.json /app/package.json
COPY ./default /etc/nginx/sites-available
RUN  sudo service nginx restart

WORKDIR /app
RUN npm install

COPY . /app
EXPOSE 80

ENTRYPOINT ["/bin/bash"]
CMD ["startcommand.sh"]
