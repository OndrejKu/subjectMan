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
  }
};

module.exports = {
  Create
};
