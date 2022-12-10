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
  DaoCreateFailed: class extends SubjectmanMainUseCaseError {
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
  DaoUpdateFailed: class extends SubjectmanMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Update.UC_CODE}DigitalContentDaoUpdateFailed`;
      this.message = "Creation of digital content failed.";
    }
  },
  DigitalContentNotFound: class extends SubjectmanMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Update.UC_CODE}DigitalContentNotFound`;
      this.message = "Requested digital content does not exist";
      this.status = 404;
    }
  },
};

const Get = {
  UC_CODE: `${DIGITAL_CONTENT_ERROR_PREFIX}get/`,
  InvalidDtoIn: class extends SubjectmanMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Get.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid";
    }
    ///
  },
  DigitalContentNotFound: class extends SubjectmanMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Get.UC_CODE}DigitalContentNotFound`;
      this.message = "Requested digital content does not exist";
      this.status = 404;
    }
  },
};

const List = {
  UC_CODE: `${DIGITAL_CONTENT_ERROR_PREFIX}list/`,
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
  Get,
  List,
  Update,
  Create,
};
