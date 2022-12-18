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
    this.daoStudyProgramme = DaoFactory.getDao("studyProgramme");
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

    let subject = await this.dao.getById(awid, dtoIn.id);
    if (!subject) throw new Errors.Update.TopicDoesNotExist({ uuAppErrorMap }, dtoIn);

    if (dtoIn.studyProgrammeId) {
      let check = await this.daoStudyProgramme.get(awid, dtoIn.studyProgrammeId);
      if (check === null) {
        throw new Errors.Update.StudyProgrammeDoesNotExist({ uuAppErrorMap });
      }
    }

    if (dtoIn.topicIdList?.length > 0) {
      let topics = [];
      dtoIn.topicIdList.concat(subject.topicIdList).forEach((element) => {
        if (!topics.includes(element)) {
          topics.push(element);
        }
      });
      dtoIn.topicIdList = topics.filter((n) => n);

      for (let index = 0; index < dtoIn.topicIdList.length; index++) {
        const element = dtoIn.topicIdList[index];

        let check = await this.daoTopic.getById(awid, element);

        if (check === null) {
          throw new Errors.Update.TopicDoesNotExist({ uuAppErrorMap });
        }
      }
    } else {
      dtoIn.topicIdList = subject.topicIdList;
    }

    subject = {
      id: dtoIn.id,
      name: dtoIn.name ? dtoIn.name : subject.name,
      description: dtoIn.description ? dtoIn.description : subject.description,
      credits: dtoIn.credits ? dtoIn.credits : subject.credits,
      garantId: dtoIn.garantId ? dtoIn.garantId : subject.garantId,
      studyProgrammeId: dtoIn.studyProgrammeId ? dtoIn.studyProgrammeId : subject.studyProgrammeId,
      lang: dtoIn.lang ? dtoIn.lang : subject.lang,
      goal: dtoIn.goal ? dtoIn.goal : subject.goal,
      topicIdList: dtoIn.topicIdList,
      awid,
    };

    try {
      //TODO: Validace že topicId a digitalContentIds existují
      subject = await this.dao.update(subject);
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
      ...subject,
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
      subject = await this.dao.getById(awid, dtoIn.id);

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

    if (dtoIn.studyProgrammeId) {
      let check = await this.daoStudyProgramme.get(awid, dtoIn.studyProgrammeId);
      if (check === null) {
        throw new Errors.Create.StudyProgrammeDoesNotExist({ uuAppErrorMap });
      }
    }

    if (dtoIn.topicIdList?.length > 0) {
      let topics = [];
      dtoIn.topicIdList.forEach((element) => {
        if (!topics.includes(element)) {
          topics.push(element);
        }
      });
      dtoIn.topicIdList = topics;
      for (let index = 0; index < dtoIn.topicIdList.length; index++) {
        let check = await this.daoTopic.getById(awid, dtoIn.topicIdList[index]);
        if (check === null) {
          throw new Errors.Create.TopicDoesNotExist({ uuAppErrorMap });
        }
      }
    }

    let subject = {
      name: dtoIn.name,
      description: dtoIn.description,
      credits: dtoIn.credits,
      garantId: dtoIn.garantId,
      studyProgrammeId: dtoIn.studyProgrammeId,
      lang: dtoIn.lang,
      goal: dtoIn.goal,
      topicIdList: dtoIn.topicIdList,
      awid,
    };

    try {
      //TODO: Validace že topicId a digitalContentIds existuje

      subject = await this.dao.create(subject);
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
      ...subject,
      uuAppErrorMap,
    };
    return dtoOut;
  }
}

module.exports = new SubjectAbl();
