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
    this.digitalContentDao = DaoFactory.getDao("digitalContent");
  }

  async list(awid, dtoIn) {
    let uuAppErrorMap = {};
    const validationResult = this.validator.validate("topicListDtoInType", dtoIn);

    uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      uuAppErrorMap,
      WARNINGS.List.UnsupportedKeys,
      Errors.List.InvalidDtoIn
    );

    let dtoOut = await this.dao.list(awid, { name: dtoIn.order === "desc" ? -1 : 1 }, dtoIn.pageInfo);

    dtoOut.uuAppErrorMap = uuAppErrorMap;
    return dtoOut;
  }

  async get(awid, dtoIn) {
    let validationResult = this.validator.validate("topicGetDtoInType", dtoIn);

    // HDS 1.2, 1.3 // A1, A2
    let uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.Get.UnsupportedKeys.code,
      Errors.Get.InvalidDtoIn
    );

    // HDS 2
    let dtoOut = {
      topic: {},
      uuAppErrorMap: uuAppErrorMap,
    };

    let topic = await this.dao.getById(awid, dtoIn.id);
    if (!topic) throw new Errors.Get.TopicDoesNotExist({ uuAppErrorMap }, dtoIn);

    dtoOut.topic = topic;
    return dtoOut;
  }
  //TODO validace subjectu a digitalContentu
  async update(awid, dtoIn) {
    let validationResult = this.validator.validate("topicUpdateDtoInType", dtoIn);

    let uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.Update.UnsupportedKeys.code,
      Errors.Update.InvalidDtoIn
    );

    let dtoOut = { ...dtoIn };
    dtoIn.awid = awid;

    let topic = await this.dao.getById(awid, dtoIn.id);
    if (!topic) throw new Errors.Update.TopicDoesNotExist({ uuAppErrorMap }, dtoIn);

    if (dtoIn.digitalContentList?.length > 0) {
      let digitalContents = [];

      dtoIn.digitalContentList.concat(topic.digitalContentList).forEach((element) => {
        if (!digitalContents.includes(element)) {
          digitalContents.push(element);
        }
      });
      dtoIn.digitalContentList = digitalContents;

      for (let index = 0; index < dtoIn.digitalContentList.length; index++) {
        let check = await this.digitalContentDao.get(awid, dtoIn.digitalContentList[index]);
        if (!check) {
          throw new Errors.Update.DigitalContentDoesNotExistFailed({ uuAppErrorMap });
        }
      }
    }

    try {
      dtoOut = await this.dao.update({
        id: dtoIn.id,
        name: dtoIn.name,
        description: dtoIn.description,
        awid: dtoIn.awid,
        digitalContentList: dtoIn.digitalContentList,
      });
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
      WARNINGS.Create.UnsupportedKeys.code,
      Errors.Create.InvalidDtoIn
    );

    let dtoOut = { ...dtoIn };
    dtoIn.awid = awid;

    if (dtoIn.digitalContentList?.length > 0) {
      let digitalContents = [];
      dtoIn.digitalContentList.forEach((element) => {
        if (!digitalContents.includes(element)) {
          digitalContents.push(element);
        }
      });
      dtoIn.digitalContentList = digitalContents;
      for (let index = 0; index < dtoIn.digitalContentList.length; index++) {
        let check = await this.digitalContentDao.get(awid, dtoIn.digitalContentList[index]);
        if (check === null) {
          throw new Errors.Create.DigitalContentDoesNotExistFailed({ uuAppErrorMap });
        }
      }
    }

    try {
      dtoOut = await this.dao.create({
        name: dtoIn.name,
        description: dtoIn.description,
        awid: dtoIn.awid,
        digitalContentList: dtoIn.digitalContentList,
      });
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
