/* eslint-disable */
const topicCreateDtoInType = shape({
  name: uu5String(255),
  description: uu5String(4000),
  _digitalContentId: uu5String(255).isRequired(),
  _subjectId: uu5String(255).isRequired(),
});

const topicUpdateDtoInType = shape({
  id: uu5String(255).isRequired(),
  name: uu5String(255),
  description: uu5String(4000),
  _digitalContentId: uu5String(255).isRequired(),
  _subjectId: uu5String(255).isRequired(),
});

const topicGetDtoInType = shape({
  id: uu5String(255).isRequired(),
});

const topicListDtoInType = shape({
  name: uu5String(255),
  _digitalContentId: uu5String(255),
  _subjectId: uu5String(255),
});
