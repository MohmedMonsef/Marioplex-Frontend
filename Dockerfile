FROM belalelhossany/start as builder

WORKDIR '/app'

COPY ./package.json /app/package.json
#COPY ./default /etc/nginx/sites-available

WORKDIR /app
RUN npm install

COPY . /app
#EXPOSE 80
RUN npm run build

#ENTRYPOINT ["/bin/bash"]
#CMD ["startcommand.sh"]


FROM ubuntu
EXPOSE 80
RUN apt update
RUN apt-get install -y sudo
RUN sudo apt-get install -y nginx
# copy artifact build from the 'build environment'
#COPY --from=builder /app/dist /usr/share/nginx/html
# get configuration filees
COPY --from=builder /app/default /etc/nginx/sites-available/default
# expose port 80
COPY --from=builder /app/dist /app
#COPY --from=builder ./app/dist ./usr/share/nginx/html
# run nginx
CMD ["startcommand.sh"]
