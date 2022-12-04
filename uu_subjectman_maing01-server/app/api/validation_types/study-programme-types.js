/* eslint-disable */

const studyProgrammeCreateDtoInType = shape({
  name: uu5String(255).isRequired(),
  description: uu5String(4000),
  degreeOfStudy: uu5String(255).isRequired(),
});

const studyProgrammeUpdateDToInType = shape({
  id: id().isRequired(),
  name: uu5String(255).isRequired(),
  description: uu5String(4000),
  degreeOfStudy: oneOf(["ING", "BC", "MGR", "PHDR", "RNDR"]).isRequired(),
});

const studyProgrammeListDtoInType = shape({
  sortBy: oneOf(["name", "degreeOfStudy"]),
  order: oneOf(["asc", "desc"]),
  pageInfo: shape({
    pageIndex: integer(),
    pageSize: integer(),
  }),
});

const studyProgrammeGetDToInType = shape({
  id: id().isRequired(),
});