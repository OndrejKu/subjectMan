"use strict";
const { Validator } = require("uu_appg01_server").Validation;
const { DaoFactory, ObjectStoreError } = require("uu_appg01_server").ObjectStore;
const { ValidationHelper } = require("uu_appg01_server").AppServer;
const Errors = require("../api/errors/digital-content-error.js");
const Warnings = require("../api/warnings/digital-content-warnings.js");

class DigitalContentAbl {
  constructor() {
    this.validator = Validator.load();
    this.dao = DaoFactory.getDao("digitalContent");
  }

  async get(awid, dtoIn) {
    let uuAppErrorMap = {};
    const validationResult = this.validator.validate("digitalContentGetDToInType", dtoIn);

    uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      uuAppErrorMap,
      Warnings.Get.UnsupportedKeys,
      Errors.Get.InvalidDtoIn
    );

    let dtoOut = await this.dao.get(awid, dtoIn.id);
    if (!dtoOut) throw new Errors.Get.DigitalContentNotFound({ uuAppErrorMap });

    dtoOut.uuAppErrorMap = uuAppErrorMap;
    return dtoOut;
  }

  async list(awid, dtoIn) {
    let uuAppErrorMap = {};
    const validationResult = this.validator.validate("digitalContentListDtoInType", dtoIn);

    uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      uuAppErrorMap,
      Warnings.Update.UnsupportedKeys,
      Errors.Update.InvalidDtoIn
    );
    let sort = {};
    switch (dtoIn.sortBy) {
      case "type":
        sort = {
          type: dtoIn.order === "desc" ? -1 : 1,
        };
        break;
      case "title":
        sort = {
          title: dtoIn.order === "desc" ? -1 : 1,
        };
        break;
      default:
        break;
    }

    let dtoOut = await this.dao.list(awid, sort, dtoIn.pageInfo);

    dtoOut.uuAppErrorMap = uuAppErrorMap;
    return dtoOut;
  }

  async update(awid, dtoIn) {
    let uuAppErrorMap = {};
    const validationResult = this.validator.validate("digitalContentUpdateDToInType", dtoIn);

    uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      uuAppErrorMap,
      Warnings.Update.UnsupportedKeys,
      Errors.Update.InvalidDtoIn
    );

    let origDigiContent = await this.dao.get(awid, dtoIn.id);
    if (!origDigiContent) throw new Errors.Update.DigitalContentNotFound({ uuAppErrorMap });

    const uuObject = {
      id: dtoIn.id,
      title: dtoIn.title ? dtoIn.title : origDigiContent.title,
      link: dtoIn.link ? dtoIn.link : origDigiContent.link,
      type: dtoIn.type ? dtoIn.type : origDigiContent.type,
      awid: awid,
    };

    let dtoOut = { ...uuObject };

    try {
      dtoOut = await this.dao.update(uuObject);
    } catch (e) {
      if (e instanceof ObjectStoreError) {
        throw new Errors.Update.DigitalContentDaoUpdateFailed({ uuAppErrorMap }, e);
      }
      throw e;
    }

    dtoOut.uuAppErrorMap = uuAppErrorMap;
    return dtoOut;
  }

  async create(awid, dtoIn) {
    let uuAppErrorMap = {};
    const validationResult = this.validator.validate("digitalContentCreateDToInType", dtoIn);

    uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      uuAppErrorMap,
      Warnings.Create.UnsupportedKeys,
      Errors.Create.InvalidDtoIn
    );

    const uuObject = {
      title: dtoIn.title,
      link: dtoIn.link,
      type: dtoIn.type,
      awid: awid,
    };
    let dtoOut = { ...uuObject };

    try {
      dtoOut = await this.dao.create(uuObject);
    } catch (e) {
      if (e instanceof ObjectStoreError) {
        throw new Errors.Create.DigitalContentDaoCreateFailed({ uuAppErrorMap }, e);
      }
      throw e;
    }

    dtoOut.uuAppErrorMap = uuAppErrorMap;

    return dtoOut;
  }
}

module.exports = new DigitalContentAbl();
