/* eslint-disable */
const digitalContentCreateDToInType = shape({
  title: uu5String(255).isRequired(),
  type: uu5String(255).isRequired(), 
  link: uu5String(255).isRequired()
});

const digitalContentUpdateDToInType = shape({
  id: id().isRequired(),
  title: uu5String(255),
  type: uu5String(255), 
  link: uu5String(255)
});

const digitalContentListDtoInType = shape({
  sortBy: oneOf(["title", "type"]),
  order: oneOf(["asc", "desc"]),
  pageInfo: shape({
    pageIndex: integer(),
    pageSize: integer()
  })
});