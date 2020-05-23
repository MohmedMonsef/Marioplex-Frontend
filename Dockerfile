FROM belalelhossany/start as builder
WORKDIR '/app'
COPY ./package.json /app/package.json
RUN npm install
COPY . .
RUN npm run build

EXPOSE 80
COPY ./default /etc/nginx/sites-available/
RUN sudo systemctl restart nginx
