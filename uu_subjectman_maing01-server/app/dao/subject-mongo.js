"use strict";
const { UuObjectDao } = require("uu_appg01_server").ObjectStore;

class SubjectMongo extends UuObjectDao {
  constructor(...args) {
    super(...args);
    this._collation = { locale: "en", strenght: 1 };
  }

  async createSchema() {
    await super.createIndex({ awid: 1, _id: 1 }, { unique: true });
    await super.createIndex({ awid: 1, name: 1 }, { unique: true, collation: this.collation });
  }

  async create(uuObject) {
    return await super.insertOne(uuObject);
  }
  async getById(awid, id) {
    let filter = {
      awid: awid,
      id: id,
    };
    return await super.findOne(filter);
  }
  async list(awid, sort = {}, pageInfo = {}, studyProgrammeId = 0) {
    let list = await super.find({ awid }, pageInfo, sort)
    //studyy programe filter
    if (studyProgrammeId != 0) {
      list = await list.itemList.filter((item) => item.studyProgrammeId == studyProgrammeId);
    }
    return list;
  }

  async update(uuObject) {
    let filter = {
      awid: uuObject.awid,
      id: uuObject.id,
    };
    return await super.findOneAndUpdate(filter, uuObject, "NONE");
  }
}

module.exports = SubjectMongo;
