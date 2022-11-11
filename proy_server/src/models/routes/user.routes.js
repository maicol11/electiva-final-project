// const express = require("express");
// const user_routes = express.Router();
// const user_schema = require("../user.model");

// user_routes.post("/user", (req, res, next) => {
//   const new_user = user_schema(req.params);
//   new_user
//     .save()
//     .then((data) => res.json(data))
//     .catch((err) => res.json({ message: err }));
// });
// user_routes.get("/people", (req, res, next) => {
//   user_schema
//     .find()
//     .then((data) => res.json(data))
//     .catch((err) => res.json({ message: err }));
// });

// user_routes.get("/:userId", (req, res, next) => {
//   const { userId } = req.params;
//   user_schema
//     .findOne({ userId })
//     .then((data) => res.json(data))
//     .catch((err) => res.json({ message: err }));
// });

// user_routes.put("/:userId", (req, res, next) => {
//   const { userId } = req.params;
//   const { user_name, lastname, email, contact, proffession } = req.body;
//   user_schema
//     .updateOne(
//       { userId },
//       { $set: { user_name, lastname, email, contact, proffession } }
//     )
//     .then((data) => res.json(data))
//     .catch((err) => res.json({ message: err }));
// });

// user_routes.delete("/:userId", (req, res, next) => {
//   const { userId } = req.params;
//   user_schema
//     .deleteOne({ userId })
//     .then((data) => res.json(data))
//     .catch((err) => res.json({ message: err }));
// });

// module.exports = user_routes;

const express = require("express");
const UserController = require("../../controllers/user");

const api = express.Router();

api.post("/signUp", UserController.signUp);
api.post("/signin", UserController.signIn);

module.exports = api;