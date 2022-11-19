"use strict";

const SubjectmanMainUseCaseError = require("./subjectman-main-use-case-error.js");
const DIGITAL_CONTENT_ERROR_PREFIX = `${SubjectmanMainUseCaseError.ERROR_PREFIX}digitalContent/`;

const Create = {
  UC_CODE: `${DIGITAL_CONTENT_ERROR_PREFIX}create/`,
  
};

const Update = {
  UC_CODE: `${DIGITAL_CONTENT_ERROR_PREFIX}update/`,
  
};

const List = {
  UC_CODE: `${DIGITAL_CONTENT_ERROR_PREFIX}list/`,
  
};

module.exports = {
  List,
  Update,
  Create
};
