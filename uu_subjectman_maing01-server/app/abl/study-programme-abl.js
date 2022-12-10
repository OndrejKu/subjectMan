"use strict";
const { Validator } = require("uu_appg01_server").Validation;
const { DaoFactory, ObjectStoreError, DuplicateKey } = require("uu_appg01_server").ObjectStore;
const { ValidationHelper } = require("uu_appg01_server").AppServer;
const Errors = require("../api/errors/study-programme-error.js");
const Warnings = require("../api/warnings/study-programme-warnings");

class StudyProgrammeAbl {
  constructor() {
    this.validator = Validator.load();
    this.dao = DaoFactory.getDao("studyProgramme");
  }

  async get(awid, dtoIn) {
    let uuAppErrorMap = {};
    const validationResult = this.validator.validate("studyProgrammeGetDToInType", dtoIn);

    uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      uuAppErrorMap,
      Warnings.Get.UnsupportedKeys,
      Errors.Get.InvalidDtoIn
    );

    let dtoOut = await this.dao.get(awid, dtoIn.id);
    if (!dtoOut) throw new Errors.Get.StudyProgrammeNotFound({ uuAppErrorMap });

    dtoOut.uuAppErrorMap = uuAppErrorMap;
    return dtoOut;
  }

  async list(awid, dtoIn) {
    let uuAppErrorMap = {};
    const validationResult = this.validator.validate("studyProgrammeListDtoInType", dtoIn);

    uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      uuAppErrorMap,
      Warnings.List.UnsupportedKeys,
      Errors.List.InvalidDtoIn
    );
    let sort = {};
    switch (dtoIn.sortBy) {
      case "degreeOfStudy":
        sort = {
          degreeOfStudy: dtoIn.order === "desc" ? -1 : 1,
        };
        break;
      case "name":
        sort = {
          name: dtoIn.order === "desc" ? -1 : 1,
        };
        break;
      default:
        sort = {
          name: 1,
        };
        break;
    }

    let dtoOut = await this.dao.list(awid, sort, dtoIn.pageInfo);

    dtoOut.uuAppErrorMap = uuAppErrorMap;
    return dtoOut;
  }

  async update(awid, dtoIn) {
    let uuAppErrorMap = {};
    const validationResult = this.validator.validate("studyProgrammeUpdateDToInType", dtoIn);

    uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      uuAppErrorMap,
      Warnings.Update.UnsupportedKeys,
      Errors.Update.InvalidDtoIn
    );

    let origStudyProgramme = await this.dao.get(awid, dtoIn.id);
    if (!origStudyProgramme) throw new Errors.Update.StudyProgrammeNotFound({ uuAppErrorMap });

    const uuObject = {
      id: dtoIn.id,
      name: dtoIn.name ? dtoIn.name : origStudyProgramme.name,
      description: dtoIn.description ? dtoIn.description : origStudyProgramme.description,
      degreeOfStudy: dtoIn.degreeOfStudy ? dtoIn.degreeOfStudy : origStudyProgramme.degreeOfStudy,
      awid: awid,
    };

    let dtoOut = { ...uuObject };

    try {
      dtoOut = await this.dao.update(uuObject);
    } catch (e) {
      if (e instanceof DuplicateKey) {
        throw new Errors.Update.StudyProgrammeNameNotUnique({ uuAppErrorMap }, { studyProgrammeName: dtoIn.name });
      }
      if (e instanceof ObjectStoreError) {
        throw new Errors.Update.DaoUpdateFailed({ uuAppErrorMap }, e);
      }
      throw e;
    }

    dtoOut.uuAppErrorMap = uuAppErrorMap;
    return dtoOut;
  }

  async create(awid, dtoIn) {
    let uuAppErrorMap = {};
    const validationResult = this.validator.validate("studyProgrammeCreateDToInType", dtoIn);

    uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      uuAppErrorMap,
      Warnings.Create.UnsupportedKeys,
      Errors.Create.InvalidDtoIn
    );

    const uuObject = {
      name: dtoIn.name,
      description: dtoIn.description,
      degreeOfStudy: dtoIn.degreeOfStudy,
      awid: awid,
    };
    let dtoOut = { ...uuObject };

    try {
      dtoOut = await this.dao.create(uuObject);
    } catch (e) {
      if (e instanceof DuplicateKey) {
        throw new Errors.Create.StudyProgrammeNameNotUnique({ uuAppErrorMap }, { studyProgrammeName: dtoIn.name });
      }
      if (e instanceof ObjectStoreError) {
        throw new Errors.Create.StudyProgrammeDaoCreateFailed({ uuAppErrorMap }, e);
      }
      throw e;
    }

    dtoOut.uuAppErrorMap = uuAppErrorMap;

    return dtoOut;
  }
}

module.exports = new StudyProgrammeAbl();
