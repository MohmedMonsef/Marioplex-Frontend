FROM belalelhossany/start as builder
WORKDIR /app

COPY ./package.json /app/package.json

WORKDIR /app

RUN sudo npm install

COPY . /app
RUN sudo npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
ENTRYPOINT ["/bin/bash"]
CMD ["startcommand.sh"]
