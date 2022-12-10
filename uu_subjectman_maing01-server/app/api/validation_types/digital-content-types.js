/* eslint-disable */
const digitalContentCreateDToInType = shape({
  title: uu5String(255).isRequired(),
  type: uu5String(255).isRequired(), 
  link: uri().isRequired()
});

const digitalContentUpdateDToInType = shape({
  id: id().isRequired(),
  title: uu5String(255),
  type: uu5String(255), 
  link: uri()
});

const digitalContentListDtoInType = shape({
  sortBy: oneOf(["title", "type"]),
  order: oneOf(["asc", "desc"]),
  pageInfo: shape({
    pageIndex: integer(),
    pageSize: integer(),
  }),
});

const digitalContentGetDToInType = shape({
  id: id().isRequired(),
});