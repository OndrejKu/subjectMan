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
  },
  StudyProgrammeDaoCreateFailed: class extends SubjectmanMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Create.UC_CODE}StudyProgrammeDaoCreateFailed`;
      this.message = "Creation of study Programme failed.";
    }
  },
  StudyProgrammeNameNotUnique: class extends SubjectmanMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Create.UC_CODE}StudyProgrammeNameNotUnique`;
      this.message = "Study Programme name already in database.";
    }
  }
};

module.exports = {
  Create
};
