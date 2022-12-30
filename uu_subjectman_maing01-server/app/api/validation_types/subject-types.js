/* eslint-disable */
const subjectCreateDtoInType = shape({
  name: uu5String(255),
  description: uu5String(4000),
  credits: number(),
  garantId: uuIdentity().isRequired(),
  studyProgrammeId: id().isRequired(),
  lang: uu5String(3).isRequired(),
  goal: uu5String(255).isRequired(),
  topicIdList: array(id().isRequired()),
});

const subjectUpdateDtoInType = shape({
  id: id().isRequired(),
  name: uu5String(255),
  description: uu5String(4000),
  credits: number(),
  garantId: uuIdentity(),
  studyProgrammeId: id(),
  lang: uu5String(3),
  goal: uu5String(255),
  topicIdList: array(id().isRequired()),
});

const subjectGetDtoInType = shape({
  id: id().isRequired(),
});

const subjectListDtoInType = shape({
  sortBy: oneOf(["name", "credits", "lang"]),
  order: oneOf(["asc", "desc"]),
  pageInfo: shape({
    pageIndex: integer(),
    pageSize: integer(),
  }),
});
