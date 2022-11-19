"use strict";
const { UuObjectDao } = require("uu_appg01_server").ObjectStore;

class DigitalContentMongo extends UuObjectDao {

  async createSchema(){
  }

}

module.exports = DigitalContentMongo;
