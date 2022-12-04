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

  async get(awid, dtoIn) {}

  async list(awid, dtoIn) {}

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

    const uuObject = {
      id: dtoIn.id,
      title: dtoIn.title,
      link: dtoIn.link,
      type: dtoIn.type,
      awid: awid,
    };

    try {
      await this.dao.update(uuObject);
    } catch (e) {
      if (e instanceof ObjectStoreError) {
        throw new Errors.Update.DigitalContentDaoUpdateFailed({ uuAppErrorMap }, e);
      }
      throw e;
    }

    const dtoOut = {
      ...uuObject,
      uuAppErrorMap,
    };
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

    try {
      await this.dao.create(uuObject);
    } catch (e) {
      if (e instanceof ObjectStoreError) {
        throw new Errors.Create.DigitalContentDaoCreateFailed({ uuAppErrorMap }, e);
      }
      throw e;
    }

    const dtoOut = {
      ...uuObject,
      uuAppErrorMap,
    };
    return dtoOut;
  }
}

module.exports = new DigitalContentAbl();
