"use strict";
const { UuObjectDao } = require("uu_appg01_server").ObjectStore;

class DigitalContentMongo extends UuObjectDao {
  async createSchema() {
    await super.createIndex({ awid: 1 }, { unique: true });
    await super.createIndex({ awid: 1, name: 1 }, { collation: this.collation });
  }
  async create(uuObject) {
    return await super.insertOne(uuObject);
  }

  async list(awid, sort = {}, pageInfo = {}) {
    return await super.find({ awid }, pageInfo, sort);
  }

  async update(uuObject) {
    let filter = {
      awid: uuObject.awid,
      id: uuObject.id,
    };
    return await super.findOneAndUpdate(filter, uuObject, "NONE");
  }
  async get(awid, id) {
    let filter = {
      awid,
      id,
    };
    return await super.findOne(filter);
  }
}

module.exports = DigitalContentMongo;
