"use strict";
const Path = require("path");
const { Validator } = require("uu_appg01_server").Validation;
const { DaoFactory } = require("uu_appg01_server").ObjectStore;
const { ValidationHelper } = require("uu_appg01_server").AppServer;
const Errors = require("../api/errors/study-programme-error.js");
const Warnings = require("../api/warnings/study-programme-warnings");

class StudyProgrammeAbl {

  constructor() {
    this.validator = Validator.load();
    this.dao = DaoFactory.getDao("studyProgramme");
  }

  async create(awid, dtoIn) {
    let uuAppErrorMap = {};
    const validationResult = this.validator.validate("studyProgrammeCreateDtoInType", dtoIn);
    uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      uuAppErrorMap,
      Warnings.Create.UnsupportedKeys,
      Errors.Create.InvalidDtoIn
    )

    const uuObject = {
      ...dtoIn,
      awid
    }
    let studyProgramme;

    try {
      studyProgramme = await this.dao.create(uuObject);
    } catch (error) {
      if (e instanceof DuplicateKey) {
        throw new Errors.Create.StudyProgrammeNameNotUnique({ uuAppErrorMap }, { studyProgrammeName: dtoIn.name })
      }
      if (e instanceof ObjectStoreError) {
        throw new Errors.Create.StudyProgrammeDaoCreateFailed({ uuAppErrorMap }, error)
      }
      throw error;
    }

    const dtoOut = {
      ...uuObject,
      uuAppErrorMap
    }
    return dtoOut;
  }

}

module.exports = new StudyProgrammeAbl();
