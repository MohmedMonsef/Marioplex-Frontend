FROM belalelhossany/start

WORKDIR '/app'

COPY ./package.json /app/package.json
COPY ./default /etc/nginx/sites-available

WORKDIR /app
RUN npm install

COPY . /app
EXPOSE 80
RUN npm run build

ENTRYPOINT ["/bin/bash"]
CMD ["startcommand.sh"]
