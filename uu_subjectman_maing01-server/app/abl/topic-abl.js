"use strict";
const { Validator } = require("uu_appg01_server").Validation;
const { DaoFactory, ObjectStoreError } = require("uu_appg01_server").ObjectStore;
const { ValidationHelper } = require("uu_appg01_server").AppServer;
const Errors = require("../api/errors/topic-error.js");
const WARNINGS = require("../api/warnings/topic-warnings");

class TopicAbl {
  constructor() {
    this.validator = Validator.load();
    this.dao = DaoFactory.getDao("topic");
  }

  async list(awid, dtoIn) {
    let validationResult = this.validator.validate("listGetDtoInType", dtoIn);

    let uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.getUnsupportedKeys.code,
      Errors.List.InvalidDtoIn
    );

    let dtoOut = {
      awid: awid,
      uuAppErrorMap: uuAppErrorMap,
      topics: [],
    };

    let topics = await this.dao.get(awid);

    console.log(uuAppErrorMap);
    dtoOut.topics = topics;
    return dtoOut;
  }

  async get(awid, dtoIn) {
    let validationResult = this.validator.validate("topicGetDtoInType", dtoIn);

    // HDS 1.2, 1.3 // A1, A2
    let uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.getUnsupportedKeys.code,
      Errors.Get.InvalidDtoIn
    );

    // HDS 2
    let dtoOut = {
      awid: awid,
      uuAppErrorMap: uuAppErrorMap,
      topic: {},
    };

    let topic = await this.dao.getById(awid, dtoIn.id);
    if (!topic) throw new Errors.Get.topicDoesNotExist({ uuAppErrorMap }, dtoIn);

    dtoOut.topic = topic;
    return dtoOut;
  }
  //TODO validace subjectu a digitalContentu
  async update(awid, dtoIn) {
    let validationResult = this.validator.validate("topicUpdateDtoInType", dtoIn);

    let uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.updateUnsupportedKeys.code,
      Errors.Update.InvalidDtoIn
    );

    let dtoOut = { ...dtoIn };
    dtoIn.awid = awid;

    try {
      dtoOut = await this.dao.update(dtoIn);
    } catch (e) {
      if (e instanceof ObjectStoreError) {
        throw new Errors.Update.TopicDaoUpdateFailed({ uuAppErrorMap }, e);
      }
      throw e;
    }

    dtoOut.awid = awid;
    dtoOut.uuAppErrorMap = uuAppErrorMap;
    return dtoOut;
  }
  //TODO validace subjectu a digitalContentu
  async create(awid, dtoIn) {
    let validationResult = this.validator.validate("topicCreateDtoInType", dtoIn);

    let uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.createUnsupportedKeys.code,
      Errors.Create.InvalidDtoIn
    );

    let dtoOut = { ...dtoIn };
    dtoIn.awid = awid;

    try {
      dtoOut = await this.dao.create(dtoIn);
    } catch (e) {
      if (e instanceof ObjectStoreError) {
        throw new Errors.Create.TopicDaoCreateFailed({ uuAppErrorMap }, e);
      }
      throw e;
    }

    dtoOut.awid = awid;
    dtoOut.uuAppErrorMap = uuAppErrorMap;
    return dtoOut;
  }
}

module.exports = new TopicAbl();