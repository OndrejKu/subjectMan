"use strict";
const SubjectmanMainAbl = require("../../abl/subjectman-main-abl.js");

class SubjectmanMainController {
  init(ucEnv) {
    return SubjectmanMainAbl.init(ucEnv.getUri(), ucEnv.getDtoIn(), ucEnv.getSession());
  }

  load(ucEnv) {
    return SubjectmanMainAbl.load(ucEnv.getUri(), ucEnv.getSession());
  }

  loadBasicData(ucEnv) {
    return SubjectmanMainAbl.loadBasicData(ucEnv.getUri(), ucEnv.getSession());
  }
}

module.exports = new SubjectmanMainController();
