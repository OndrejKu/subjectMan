"use strict";

const SubjectmanMainUseCaseError = require("./subjectman-main-use-case-error.js");
const DIGITAL_CONTENT_ERROR_PREFIX = `${SubjectmanMainUseCaseError.ERROR_PREFIX}digitalContent/`;

const Create = {
  UC_CODE: `${DIGITAL_CONTENT_ERROR_PREFIX}create/`,
  InvalidDtoIn: class extends SubjectmanMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Create.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid";
    }
    ///
  },
  DigitalContentDaoCreateFailed: class extends SubjectmanMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Create.UC_CODE}DigitalContentDaoCreateFailed`;
      this.message = "Creation of digital content failed.";
    }
  },
};

const Update = {
  UC_CODE: `${DIGITAL_CONTENT_ERROR_PREFIX}update/`,
  InvalidDtoIn: class extends SubjectmanMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Update.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid";
    }
    ///
  },
  DigitalContentDaoUpdateFailed: class extends SubjectmanMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Update.UC_CODE}DigitalContentDaoUpdateFailed`;
      this.message = "Creation of digital content failed.";
    }
  },
};

const List = {
  UC_CODE: `${DIGITAL_CONTENT_ERROR_PREFIX}list/`,
};

module.exports = {
  List,
  Update,
  Create,
};
