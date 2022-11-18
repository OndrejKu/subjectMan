"use strict";

const Errors = require("../errors/study-programme-error");

const Warnings = {
  Create: {
    UnsupportedKeys: {
      code: `${Errors.Create.UU_CODE}unsupportedKeys`,
    },
  },
};

module.exports = Warnings;
