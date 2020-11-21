const express = require("express");
const redis = require("redis");

// create redis client
const redis_client = redis.createClient({
  host: "redis-server",
  port: 6379, //redis default port
});

const app = express();

redis_client.set("number", 0);

app.get("/", (req, res) => {
  redis_client.get("number", (err, number) => {
    redis_client.set("number", parseInt(number) + 1);
    res.send("Number is going up " + number);
  });
});
app.listen(8080);
console.log("Server is running");
