/* eslint-disable */

const studyProgrammeCreateDToInType = shape({
  name: uu5String(255).isRequired(),
  description: uu5String(4000),
  degreeOfStudy: oneOf(["ING", "BC", "MGR", "PHDR", "RNDR"]).isRequired(),
});

const studyProgrammeUpdateDToInType = shape({
  id: id().isRequired(),
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
