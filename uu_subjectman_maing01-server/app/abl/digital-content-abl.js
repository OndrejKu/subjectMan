"use strict";
const Path = require("path");
const { Validator } = require("uu_appg01_server").Validation;
const { DaoFactory } = require("uu_appg01_server").ObjectStore;
const { ValidationHelper } = require("uu_appg01_server").AppServer;
const Errors = require("../api/errors/digital-content-error.js");
const Warnings = require("../api/warnings/digital-content-warnings.js");

class DigitalContentAbl {

  constructor() {
    this.validator = Validator.load();
    this.dao = DaoFactory.getDao("digitalContent");
  }

  async list(awid, dtoIn) {
     
  }

  async update(awid, dtoIn) {
    
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
      ...dtoIn,
      awid,
    };

    try {
      await this.dao.create(uuObject);
    } catch (e) {
      if (e instanceof DuplicateKey) {
        throw new Errors.Create.SubjectNameNotUnique({ uuAppErrorMap }, { subjectName: dtoIn.name });
      }
      if (e instanceof ObjectStoreError) {
        throw new Errors.Create.SubjectDaoCreateFailed({ uuAppErrorMap }, e);
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
