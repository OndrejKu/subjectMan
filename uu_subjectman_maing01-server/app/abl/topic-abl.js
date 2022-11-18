"use strict";
const Path = require("path");
const { Validator } = require("uu_appg01_server").Validation;
const { DaoFactory } = require("uu_appg01_server").ObjectStore;
const { ValidationHelper } = require("uu_appg01_server").AppServer;
const Errors = require("../api/errors/topic-error.js");

const WARNINGS = {

};

class TopicAbl {

  constructor() {
    this.validator = Validator.load();
    this.dao = DaoFactory.getDao("topic");
  }

  async list(awid, dtoIn) {
    
  }

  async get(awid, dtoIn) {
    
  }

  async update(asid, dtoIn) {
    
  }

  async create(asid, dtoIn) {
    
  }

}

module.exports = new TopicAbl();
