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

  async get(awid, id) {
    return await super.findOne({ id, awid });
  }

  async list(awid, name) {
    const allItems = await super.find({ awid });
    let x = allItems.itemList.filter((subject) => subject.name.toLowerCase().includes(name.toLowerCase()));
    console.log(x);
    return x;
  }

  async update(uuObject) {
    let filter = { id: uuObject.id, awid: uuObject.awid };
    return await super.findOneAndUpdate(filter, uuObject, "NONE");
  }
}

module.exports = SubjectMongo;
