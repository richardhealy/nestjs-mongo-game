FROM mongo

WORKDIR /mongo-seed
COPY data.json data.json
RUN ls -la
CMD mongoimport --host mongodb --db game-test --collection operators --type json --file data.json --jsonArray
