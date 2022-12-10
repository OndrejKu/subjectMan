/* eslint-disable */
const subjectCreateDtoInType = shape({
  name: uu5String(255),
  description: uu5String(4000),
  credits: number(),
  garantId: uuIdentity().isRequired(),
  studyProgrammeId: uu5String(50).isRequired(),
  lang: uu5String(3).isRequired(),
  goal: uu5String(255).isRequired(),
  topicList: array(
    shape({
      id: uu5String(50).isRequired(),
      orderNumber: number().isRequired(),
    })
  ),
});

const subjectUpdateDtoInType = shape({
  id: uu5String(50).isRequired(),
  name: uu5String(255),
  description: uu5String(4000),
  credits: number(),
  garantId: uuIdentity().isRequired(),
  studyProgrammeId: uu5String(50).isRequired(),
  lang: uu5String(3).isRequired(),
  goal: uu5String(255).isRequired(),
  topicList: array(
    shape({
      id: uu5String(50).isRequired(),
      orderNumber: number().isRequired(),
    })
  ),
});

const subjectGetDtoInType = shape({
  id: string().isRequired(),
});

const subjectListDtoInType = shape({
  sortBy: oneOf(["name", "credits", "lang"]),
  order: oneOf(["asc", "desc"]),
  pageInfo: shape({
    pageIndex: integer(),
    pageSize: integer(),
  }),
});
