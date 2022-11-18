"use strict";

const SubjectmanMainUseCaseError = require("./subjectman-main-use-case-error.js");
const TOPIC_ERROR_PREFIX = `${SubjectmanMainUseCaseError.ERROR_PREFIX}topic/`;

const Create = {
  UC_CODE: `${TOPIC_ERROR_PREFIX}create/`,
  
};

const Update = {
  UC_CODE: `${TOPIC_ERROR_PREFIX}update/`,
  
};

const Get = {
  UC_CODE: `${TOPIC_ERROR_PREFIX}get/`,
  
};

const List = {
  UC_CODE: `${TOPIC_ERROR_PREFIX}list/`,
  
};

module.exports = {
  List,
  Get,
  Update,
  Create
};
