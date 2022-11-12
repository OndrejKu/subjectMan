/* eslint-disable */

const studyProgrammeCreateDtoInType = shape({
  name: uu5String(255).isRequired(),
  description: uu5String(4000),
  degreeOfStudy: uu5String(255).isRequired(),
});