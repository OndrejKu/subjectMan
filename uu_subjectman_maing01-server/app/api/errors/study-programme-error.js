"use strict";

const SubjectmanMainUseCaseError = require("./subjectman-main-use-case-error.js");
const STUDY_PROGRAMME_ERROR_PREFIX = `${SubjectmanMainUseCaseError.ERROR_PREFIX}studyProgramme/`;

const Create = {
  UC_CODE: `${STUDY_PROGRAMME_ERROR_PREFIX}create/`,
  InvalidDtoIn: class extends SubjectmanMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Create.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid";
    }
    ///
  },
  DaoCreateFailed: class extends SubjectmanMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Create.UC_CODE}StudyProgrammeDaoCreateFailed`;
      this.message = "Creation of study programme failed.";
    }
  },
};

const Update = {
  UC_CODE: `${STUDY_PROGRAMME_ERROR_PREFIX}update/`,
  InvalidDtoIn: class extends SubjectmanMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Update.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid";
    }
    ///
  },
  DaoUpdateFailed: class extends SubjectmanMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Update.UC_CODE}StudyProgrammeDaoUpdateFailed`;
      this.message = "Creation of study programme failed.";
    }
  },
  StudyProgrammeNotFound: class extends SubjectmanMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Update.UC_CODE}StudyProgrammeNotFound`;
      this.message = "Requested study programme does not exist";
      this.status = 404;
    }
  },
};

const Get = {
  UC_CODE: `${STUDY_PROGRAMME_ERROR_PREFIX}get/`,
  InvalidDtoIn: class extends SubjectmanMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Get.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid";
    }
    ///
  },
  StudyProgrammeNotFound: class extends SubjectmanMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Get.UC_CODE}StudyProgrammeNotFound`;
      this.message = "Requested study programme does not exist";
      this.status = 404;
    }
  },
};

module.exports = {
  Create,
  Update,
  Get
};
