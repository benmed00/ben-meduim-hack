FROM node:12 AS ui-build
WORKDIR /usr/src/app
COPY frontEnd/ ./frontEnd/
RUN cd frontEnd && npm install @angular/cli && npm install && npm run build

FROM node:12 AS server-build
WORKDIR /root/
COPY --from=ui-build /usr/src/app/frontEnd/dist ./frontEnd/dist
COPY backend/package*.json ./
RUN npm install
COPY backend/server.js .

EXPOSE 3080

CMD ["node", "server.js"]
