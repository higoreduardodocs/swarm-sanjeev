FROM node:18

WORKDIR /app
COPY ./package.json .

ARG NODE_ENV
RUN if [ "$NODE_ENV" = "development" ]; \
          then yarn; \
          else yarn --only=production; \
          fi

COPY . .

ENV PORT 3000

EXPOSE $PORT

# RUN yarn;
# EXPOSE 3000
# CMD ["node", "index.js'"]
# CMD ["yarn", "dev"]