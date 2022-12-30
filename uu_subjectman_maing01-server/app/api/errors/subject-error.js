"use strict";

const SubjectmanMainUseCaseError = require("./subjectman-main-use-case-error.js");
const SUBJECT_ERROR_PREFIX = `${SubjectmanMainUseCaseError.ERROR_PREFIX}subject/`;

const Create = {
  UC_CODE: `${SUBJECT_ERROR_PREFIX}create/`,
  InvalidDtoIn: class extends SubjectmanMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Create.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid";
    }
  },
  SubjectDaoCreateFailed: class extends SubjectmanMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Create.UC_CODE}SubjectDaoCreateFailed`;
      this.message = "Creation of subject failed.";
    }
  },
  SubjectNameNotUnique: class extends SubjectmanMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Create.UC_CODE}SubjectNameNotUnique`;
      this.message = "Subject name is already in database.";
    }
  },
  TopicDoesNotExist: class extends SubjectmanMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Create.UC_CODE}topicDoesNotExist`;
      this.message = "UuObject topic does not exist.";
    }
  },
  StudyProgrammeDoesNotExist: class extends SubjectmanMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Create.UC_CODE}studyProgrammeDoesNotExist`;
      this.message = "UuObject studyProgramme does not exist.";
    }
  },
};

const Get = {
  UC_CODE: `${SUBJECT_ERROR_PREFIX}get/`,
  InvalidDtoIn: class extends SubjectmanMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Get.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid";
    }
  },
  SubjectDaoGetFailed: class extends SubjectmanMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Get.UC_CODE}SubjectDaoCreateFailed`;
      this.message = "Getting of subject failed.";
    }
  },
  SubjectNotFound: class extends SubjectmanMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Get.UC_CODE}SubjectNotFound`;
      this.message = "Subject not found.";
      this.status = 404;
    }
  },
};

const List = {
  UC_CODE: `${SUBJECT_ERROR_PREFIX}list/`,
  InvalidDtoIn: class extends SubjectmanMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${List.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid";
    }
  },
  SubjectDaoListFailed: class extends SubjectmanMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${List.UC_CODE}SubjectDaoListFailed`;
      this.message = "Getting list of subjects failed.";
    }
  },
};

const Update = {
  UC_CODE: `${SUBJECT_ERROR_PREFIX}update/`,
  InvalidDtoIn: class extends SubjectmanMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Update.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid";
    }
  },
  SubjectDaoGetFailed: class extends SubjectmanMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Update.UC_CODE}SubjectDaoCreateFailed`;
      this.message = "Update of subject failed.";
    }
  },
  SubjectNotFound: class extends SubjectmanMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Update.UC_CODE}SubjectNotFound`;
      this.message = "Subject not found.";
      this.status = 404;
    }
  },
  SubjectNameNotUnique: class extends SubjectmanMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Update.UC_CODE}SubjectNameNotUnique`;
      this.message = "Subject name is already in database.";
    }
  },
  TopicDoesNotExist: class extends SubjectmanMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Update.UC_CODE}topicDoesNotExist`;
      this.message = "UuObject topic does not exist.";
    }
  },
  StudyProgrammeDoesNotExist: class extends SubjectmanMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Update.UC_CODE}studyProgrammeDoesNotExist`;
      this.message = "UuObject studyProgramme does not exist.";
    }
  },
};

module.exports = {
  Update,
  List,
  Get,
  Create,
};
