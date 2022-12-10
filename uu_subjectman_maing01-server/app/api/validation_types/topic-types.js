/* eslint-disable */
const topicCreateDtoInType = shape({
  name: uu5String(255),
  description: uu5String(4000),
  digitalContentList: array(id().isRequired()),
});

const topicUpdateDtoInType = shape({
  id: id().isRequired(),
  name: uu5String(255),
  description: uu5String(4000),
  digitalContentList: array(id().isRequired()),
});

const topicGetDtoInType = shape({
  id: id().isRequired(),
});

const topicListDtoInType = shape({
  order: oneOf(["asc", "desc"]),
  pageInfo: shape({
    pageIndex: integer(),
    pageSize: integer(),
  }),
});
