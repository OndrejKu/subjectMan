"use strict";
const DigitalContentAbl = require("../../abl/digital-content-abl.js");

class DigitalContentController {

  get(ucEnv) {
    return DigitalContentAbl.get(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }

  list(ucEnv) {
    return DigitalContentAbl.list(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }

  update(ucEnv) {
    return DigitalContentAbl.update(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }

  create(ucEnv) {
    return DigitalContentAbl.create(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }

}

module.exports = new DigitalContentController();
