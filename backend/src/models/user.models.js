const dbConn = require("../../config/dbConfig.js");

var User = function (utilisateur) {
  this.emailUser = utilisateur.emailUser;
  this.motdepasseUser = utilisateur.motdepasseUser;
  this.telephoneUser = utilisateur.telephoneUser;
  this.administrateur = utilisateur.administrateur;
  this.nomUser = utilisateur.nomUser;
  this.prenomUser = utilisateur.prenomUser;
  //this.status         =   user.status ? user.status : 1;
};

//all user
User.getAllutilisateur = (result) => {
  dbConn.query("SELECT * FROM utilisateur", (err, res) => {
    if (err) {
      console.log("Error while fetching utilisateur", err);
      result(null, err);
    } else {
      console.log("utilisateur fetched successfully");
      result(null, res);
    }
  });
};

//all user
User.getUserByEmail = (email, result) => {
  dbConn.query(
    "SELECT * FROM utilisateur where emailUser = ?",
    [email],
    (err, res) => {
      if (err) {
        console.log("Error while fetching utilisateur", err);
        result(err, null);
      } else {
        console.log("utilisateur fetched successfully");
        console.log(res);
        result(null, res);
      }
    }
  );
};

//user by ID
User.getUserByID = (idUser, result) => {
  dbConn.query(
    "SELECT * from utilisateur WHERE idUser=?",
    idUser,
    (err, res) => {
      if (err) {
        console.log("Error while fetching user by id ", err);
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};

//user by first name
User.getUserByPrenom = (prenomUser, result) => {
  dbConn.query(
    "SELECT * from utilisateur WHERE prenomUser=?",
    prenomUser,
    (err, res) => {
      if (err) {
        console.log("Error while fetching user by first name ", err);
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};

//user by name
User.getUserByName = (nomUser, result) => {
  dbConn.query(
    "SELECT * from utilisateur WHERE nomUser=?",
    nomUser,
    (err, res) => {
      if (err) {
        console.log("Error while fetching user by name ", err);
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};

//new user
User.createUser = (userReqData, result) => {
  userReqData.administrateur = 0;
  console.log(dbConn);
  dbConn.query("INSERT INTO utilisateur SET ?", userReqData, (err, res) => {
    if (err) {
      console.log("Error while inserting data");
      result(null, err);
    } else {
      console.log("User created successfully");
      result(null, res);
    }
  });
};

//uptade user
User.updateUser = (idUser, userReqData, result) => {
  dbConn.query(
    "UPDATE utilisateur SET emailUser=?, motdepasseUser=?, telephoneUser=?, administrateur=?, nomUser=?, prenomUser=? WHERE idUser=?",
    [
      userReqData.emailUser,
      userReqData.motdepasseUser,
      userReqData.telephoneUser,
      userReqData.administrateur,
      userReqData.nomUser,
      userReqData.prenomUser,
      idUser,
    ],
    (err, res) => {
      if (err) {
        console.log("Error while uptading the user");
        result(null, err);
      } else {
        console.log("User update successfully");
        result(null, res);
      }
    }
  );
};

//delete user by id
User.deleteUser = (idUser, result) => {
  dbConn.query(
    "DELETE FROM utilisateur WHERE idUser=?",
    [idUser],
    (err, res) => {
      if (err) {
        console.log("Error while deleting user");
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};

//delete user by email
User.deleteUser = (emailUser, result) => {
  dbConn.query(
    "DELETE FROM utilisateur WHERE emailUser=?",
    [emailUser],
    (err, res) => {
      if (err) {
        console.log("Error while deleting user");
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};

module.exports = User;
//exports.User = User
