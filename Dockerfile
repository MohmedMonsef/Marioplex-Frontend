FROM belalelhossany/start as builder

WORKDIR '/app'

COPY ./package.json /app/package.json
#COPY ./default /etc/nginx/sites-available

WORKDIR /app
RUN npm install

COPY . /app
EXPOSE 80
RUN npm run build

#ENTRYPOINT ["/bin/bash"]
#CMD ["startcommand.sh"]


FROM nginx:alpine

# copy artifact build from the 'build environment'
COPY --from=builder /app/dist /usr/share/nginx/html
# get configuration filees
COPY ./default.conf /etc/nginx/conf.d/default.conf
# expose port 80
EXPOSE 80

# run nginx
#CMD ["nginx", "-g", "daemon off;"]
CMD ["startcommand.sh"]
