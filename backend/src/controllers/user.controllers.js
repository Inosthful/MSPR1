const UserModel = require("../models/user.models.js");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

const signUp = (req, res) => {
  UserModel.getUserByEmail(req.body.emailUser, (err, results) => {
    if (results.length > 0) {
      res.status(409).json({ message: "email already exist!" });
    } else {
      //   bcryptjs.genSalt(10, function (err, salt) {
      bcryptjs.hash(req.body.motdepasseUser, 10, function (err, hash) {
        const user = {
          numeroUser: req.body.numeroUser,
          emailUser: req.body.emailUser,
          motdepasseUser: hash,
          isAdmin: req.body.isAdmin,
          prenomUser: req.body.prenomUser,
          nomUser: req.body.nomUser,
        };
        console.log(user);

        UserModel.createUser(user, (err, results) => {
          if (err) {
            res.status(500).json({
              message: "cannot create the user!",
            });
          } else {
            res.status(201).json({
              message: "user created!",
            });
          }
        });
      });
      //   });
    }
  });
};

const login = (req, res) => {
  UserModel.getUserByEmail(req.body.emailUser, (err, results) => {
    console.log(results);
    if (results.length === 0) {
      res.status(401).json({
        message: "Invalid!",
      });
    } else {
      bcryptjs.compare(
        req.body.motdepasseUser,
        results[0].motdepasseUser,
        function (err, result) {
          console.log(result);
          console.log(err);
          if (result) {
            const token = jwt.sign(
              {
                email: result.emailUser,
                userId: result.idUser,
              },
              "RANDOM_TOKEN_SECRET",
              function (err, token) {
                res.status(200).json({
                  message: "Authentification ok!",
                  token: token,
                  userId: results[0].idUser,
                  email: results[0].emailUser,
                  isAdmin: results[0].isAdmin,
                });
              }
            );
          } else {
            res.status(401).json({ message: "Invalid!" });
          }
        }
      );
    }
  });
};

//avoir la liste des utilisateurs
const getUserList = (req, res) => {
  //console.log('here all users list')
  UserModel.getAllUsers((err, user) => {
    console.log("We are here");
    if (err) {
      res.send(err);
    } else {
      console.log("Users", user);
      res.send(user);
    }
  });
};

//recuperer les utilisateurs par ID
const getUserByID = (req, res) => {
  console.log(req.params.iduser);
  UserModel.getUserByID(req.params.iduser, (err, user) => {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      console.log("single user data", user);
      res.send(user);
    }
  });
};

//recuperer les utilisateurs par nom
const getUserByName = (req, res) => {
  console.log(req.params.nomUser);
  UserModel.getUserByName(req.params.nomUser, (err, user) => {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      console.log("single user data", user);
      res.send(user);
    }
  });
};

//recuperer les utilisateurs par mail
const getUserByEmail = (req, res) => {
  console.log(req.params.emailUser);
  UserModel.getUserByEmail(req.params.emailUser, (err, user) => {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      console.log("single user data", user);
      res.send(user);
    }
  });
};

//creation de user
const createNewUser = (req, res) => {
  const userReqData = new UserModel(req.body);
  console.log("userReqData", userReqData);
  //check null
  if (req.body.constructor === Object && Object.keys(req.body).length == 0) {
    res.status(400).send({ success: false, message: "please fill all fields" });
  } else {
    UserModel.createUser(userReqData, (err, user) => {
      if (err) {
        res.send(err);
      } else {
        res.json({
          status: true,
          message: "User created successfully",
          data: user.insertId,
        });
      }
    });
  }
};

//update User
const updateUser = (req, res) => {
  const userReqData = new UserModel(req.body);
  console.log("userReqData update", userReqData);
  //check null
  if (req.body.constructor === Object && Object.keys(req.body).length == 0) {
    res.status(400).send({ success: false, message: "please fill all fields" });
  } else {
    UserModel.updateUser(req.params.idUser, userReqData, (err, user) => {
      if (err) {
        res.send(err);
      } else {
        res.json({ status: true, message: "User update successfully" });
      }
    });
  }
};

//supprimer user
const deleteUser = (req, res) => {
  UserModel.deleteUser(req.params.idUser, (err, user) => {
    if (err) {
      res.send(err);
    } else {
      res.json({ success: true, message: "User deleted successfully !" });
    }
  });
};

exports.login = login;
exports.deleteUser = deleteUser;
exports.updateUser = updateUser;
exports.createNewUser = createNewUser;
exports.getUserByEmail = getUserByEmail;
exports.getUserByID = getUserByID;
exports.getUserByName = getUserByName;
exports.getUserList = getUserList;
exports.signUp = signUp;
