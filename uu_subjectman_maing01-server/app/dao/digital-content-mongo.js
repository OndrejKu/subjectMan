"use strict";
const { UuObjectDao } = require("uu_appg01_server").ObjectStore;

class DigitalContentMongo extends UuObjectDao {
  async createSchema() {
    await super.createIndex({ awid: 1 }, { unique: true });
    await super.createIndex({ awid: 1, name: 1 }, { unique: true, collation: this.collation });
  }
  async create(uuObject) {
    return await super.insertOne(uuObject);
  }

  async list(awid, pageInfo = {}) {
    return await super.find({ awid }, pageInfo);
  }

  async update(uuObject) {
    let filter = {
      awid: uuObject.awid,
      id: uuObject.id,
    };
    return await super.findOneAndUpdate(filter, uuObject, "NONE");
  }
}

module.exports = DigitalContentMongo;
