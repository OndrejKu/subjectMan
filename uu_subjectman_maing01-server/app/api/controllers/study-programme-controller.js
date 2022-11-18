"use strict";
const StudyProgrammeAbl = require("../../abl/study-programme-abl.js");

class StudyProgrammeController {
  create(ucEnv) {
    return StudyProgrammeAbl.create(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }
}

module.exports = new StudyProgrammeController();
