"use strict";
const { Validator } = require("uu_appg01_server").Validation;
const { DaoFactory, ObjectStoreError, DuplicateKey } = require("uu_appg01_server").ObjectStore;
const { ValidationHelper } = require("uu_appg01_server").AppServer;
const Errors = require("../api/errors/subject-error.js");
const Warnings = require("../api/warnings/subject-warnings");

class SubjectAbl {
  constructor() {
    this.validator = Validator.load();
    this.dao = DaoFactory.getDao("subject");
    this.daoTopic = DaoFactory.getDao("topic");
  }

  async update(awid, dtoIn) {
    let uuAppErrorMap = {};
    const validationResult = this.validator.validate("subjectUpdateDtoInType", dtoIn);

    uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      uuAppErrorMap,
      Warnings.Update.UnsupportedKeys,
      Errors.Update.InvalidDtoIn
    );

    const uuObject = {
      ...dtoIn,
      awid,
    };
    let updatedItem;
    try {
      //TODO: Validace že topicId a digitalContentIds existují
      updatedItem = await this.dao.update(uuObject);
    } catch (e) {
      if (e instanceof DuplicateKey) {
        throw new Errors.Update.SubjectNameNotUnique({ uuAppErrorMap }, { subjectName: dtoIn.name });
      }
      if (e instanceof ObjectStoreError) {
        throw new Errors.Update.SubjectDaoGetFailed({ uuAppErrorMap }, e);
      }
      throw e;
    }

    const dtoOut = {
      ...updatedItem,
      uuAppErrorMap,
    };
    return dtoOut;
  }

  async list(awid, dtoIn) {
    let uuAppErrorMap = {};
    const validationResult = this.validator.validate("subjectListDtoInType", dtoIn);

    uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      uuAppErrorMap,
      Warnings.List.UnsupportedKeys,
      Errors.List.InvalidDtoIn
    );

    let dtoOut = { ...dtoIn };
    let sort = {};
    switch (dtoIn.sortBy) {
      case "name":
        sort = {
          name: dtoIn.order === "desc" ? -1 : 1,
        };
        break;
      case "credits":
        sort = {
          credits: dtoIn.order === "desc" ? -1 : 1,
        };
        break;
      case "lang":
        sort = {
          lang: dtoIn.order === "desc" ? -1 : 1,
        };
        break;
      default:
        break;
    }
    try {
      dtoOut = await this.dao.list(awid, sort, dtoIn.pageInfo);
    } catch (e) {
      if (e instanceof ObjectStoreError) {
        throw new Errors.List.SubjectDaoListFailed({ uuAppErrorMap }, e);
      }
      throw e;
    }

    dtoOut.uuAppErrorMap = uuAppErrorMap;
    return dtoOut;
  }

  async get(awid, dtoIn) {
    let uuAppErrorMap = {};
    const validationResult = this.validator.validate("subjectGetDtoInType", dtoIn);

    uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      uuAppErrorMap,
      Warnings.Get.UnsupportedKeys,
      Errors.Get.InvalidDtoIn
    );

    let subject;

    try {
      subject = await this.dao.get(awid, dtoIn.id);

      if (!subject) {
        throw new Errors.Get.SubjectNotFound({ uuAppErrorMap });
      }
    } catch (e) {
      if (e instanceof ObjectStoreError) {
        throw new Errors.Get.SubjectDaoGetFailed({ uuAppErrorMap }, e);
      }
      throw e;
    }

    const dtoOut = {
      ...subject,
      uuAppErrorMap,
    };
    return dtoOut;
  }

  async create(awid, dtoIn) {
    let uuAppErrorMap = {};
    const validationResult = this.validator.validate("subjectCreateDtoInType", dtoIn);

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
      //TODO: Validace že topicId a digitalContentIds existují
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

module.exports = new SubjectAbl();
