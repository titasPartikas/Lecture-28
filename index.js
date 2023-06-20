const express = require("express");

const server = express();
server.set("view engine", "ejs");
server.use(express.static(__dirname + "/views/styles"));

server.get("/", (_, res) => {
  res.render("pages/index");
});

server.get("/users", (_, res) => {
  const users = [
    { firstName: "<script>document.body.remove()</script>", age: 10 },
    { firstName: "Bill", age: 37 },
    { firstName: "Jessica", age: 42 },
  ];

  users.forEach((user) => {
    `<li>User name: ${user.firstName}, age: ${user.age} </li>`;
  });

  const welcomingMessage = "Hello to users page";
  res.render("pages/users", {
    users: users,
    welcomingMessage: welcomingMessage,
  });
});

server.listen(8080, () => console.log("listening to 8080"));
