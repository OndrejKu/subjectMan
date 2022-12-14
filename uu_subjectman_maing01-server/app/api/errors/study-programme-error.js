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
  StudyProgrammeNameNotUnique: class extends SubjectmanMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Create.UC_CODE}studyProgrammeNameNotUnique`;
      this.message = "Name already exists";
    }
    ///
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
  StudyProgrammeNameNotUnique: class extends SubjectmanMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Update.UC_CODE}studyProgrammeNameNotUnique`;
      this.message = "Name already exists";
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
const List = {
  UC_CODE: `${STUDY_PROGRAMME_ERROR_PREFIX}list/`,
  InvalidDtoIn: class extends SubjectmanMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${List.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid";
    }
    ///
  },
};

module.exports = {
  Create,
  Update,
  Get,
  List,
};
