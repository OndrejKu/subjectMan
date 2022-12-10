"use strict";

const SubjectmanMainUseCaseError = require("./subjectman-main-use-case-error.js");
const TOPIC_ERROR_PREFIX = `${SubjectmanMainUseCaseError.ERROR_PREFIX}topic/`;

const Create = {
  UC_CODE: `${TOPIC_ERROR_PREFIX}create/`,

  InvalidDtoIn: class extends SubjectmanMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Create.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },
  TopicDaoCreateFailed: class extends SubjectmanMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Create.UC_CODE}topicDaoCreateFail`;
      this.message = "Creation of topic failed";
    }
  },
  DigitalContentDoesNotExistFailed: class extends SubjectmanMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Create.UC_CODE}digitalContentDoesNotExist`;
      this.message = "Digital content does not exist.";
    }
  },
  UserNotAuthorizedFailed: class extends SubjectmanMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Create.UC_CODE}userNotAuthorized`;
      this.message = "User's role is insufficient.";
    }
  },
};

const Update = {
  UC_CODE: `${TOPIC_ERROR_PREFIX}update/`,
  InvalidDtoIn: class extends SubjectmanMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Update.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },
  TopicDaoUpdateFailed: class extends SubjectmanMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Update.UC_CODE}topicDaoUpdateFail`;
      this.message = "Update of topic failed";
    }
  },
  DigitalContentDoesNotExistFailed: class extends SubjectmanMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Update.UC_CODE}digitalContentDoesNotExist`;
      this.message = "Digital content does not exist.";
    }
  },
  UserNotAuthorizedFailed: class extends SubjectmanMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Update.UC_CODE}userNotAuthorized`;
      this.message = "User's role is insufficient.";
    }
  },
};

const Get = {
  UC_CODE: `${TOPIC_ERROR_PREFIX}get/`,

  InvalidDtoIn: class extends SubjectmanMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Get.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },
  TopicDoesNotExist: class extends SubjectmanMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Get.UC_CODE}topicDoesNotExist`;
      this.message = "UuObject topic does not exist.";
      this.status = 404;
    }
  },
  TopicDaoGetFailed: class extends SubjectmanMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Update.UC_CODE}topicDaoGetFail`;
      this.message = "Fetch of topic has failed";
    }
  },
};

const List = {
  UC_CODE: `${TOPIC_ERROR_PREFIX}list/`,

  InvalidDtoIn: class extends SubjectmanMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${List.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },
  TopicDaoListFailed: class extends SubjectmanMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Update.UC_CODE}topicDaoListFail`;
      this.message = "Fetch of topics has failed";
    }
  },
};

module.exports = {
  List,
  Get,
  Update,
  Create,
};
