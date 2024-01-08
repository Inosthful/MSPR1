const dbConn = require("../../config/dbConfig.js");

var Role = function (role) {
  this.role = role.role;
};
//terrain by type
Role.getRoleByType = (role, result) => {
  dbConn.query("SELECT * from terrain WHERE role=?", role, (err, res) => {
    if (err) {
      console.log("Error while fetching role by type ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

Role.getRoleList = (result) => {
  dbConn.query("SELECT * FROM role", (err, res) => {
    if (err) {
      console.log("Error while fetching role types", err);
      result(null, err);
    } else {
      console.log("role types fetched successfully");
      result(null, res);
    }
  });
};

module.exports = Role;
