/* eslint-disable */
const subjectCreateDtoInType = shape({
    name: uu5String(255).isRequired(),
    description: uu5String(4000),
    credits: number(),
    garantId: string().isRequired(),
    studyProgrammeId: string().isRequired(),
    lang: uu5String(3).isRequired(),
    goal: uu5String(255).isRequired(),
    digitalContentIdList: array(string(), 10),
    topicIdList: array(string(), 10)
});

const subjectUpdateDtoInType = shape({
    name: uu5String(255),
    id: string().isRequired(),
    description: uu5String(4000),
    credits: number(),
    garantId: string(),
    studyProgrammeId: string(),
    lang: uu5String(3),
    goal: uu5String(255),
    digitalContentIdList: array(string(), 10),
    topicIdList: array(string(), 10)
});

const subjectGetDtoInType = shape({
    id: string().isRequired()
});

const subjectListDtoInType = shape({
    name: string(255).isRequired()
});