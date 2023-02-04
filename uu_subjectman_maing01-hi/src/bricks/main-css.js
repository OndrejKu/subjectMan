import Config from "./config/config";

const setToCenterWithText = () => Config.Css.css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  text-align: center;
`;
const centerText = () => Config.Css.css`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
const degreeBadge = () => Config.Css.css`
  background-color: #2596be;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
  margin-left: 10px;
  border-radius: 50%;
  padding-top: 5px;
  padding-right: 5px;
  padding-bottom: 5px;
  padding-left: 5px;
  text-align: justify;
  text-align-last: center;
  color: white;
  `;

const header = () => Config.Css.css`
  margin-left: 32px;
  margin-right: 32px;
  `;

const uu5ElementsBox = () => Config.Css.css`
  margin-left: 16px;
  margin-right: 16px;
  `;


const test = () => Config.Css.css`
  position:absolute;
  left:0;
  bottom:0;
  right:0;
  `;

const studyProgrammeBackgroundImage = () => Config.Css.css`
  background-image: url("https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg?w=900&t=st=1675120765~exp=1675121365~hmac=3d2448664dbb5c0e3875e172e44e9691439453e6c5a094f5f28101ea644b2816");
  background-size: 400px;
  width: 250px;
  height: 250px;
  `;

const subjectBackgroundImage = () => Config.Css.css`
  background-image: url("https://img.freepik.com/free-vector/math-science-concept-with-school-lesson-items-retro-cartoon-style_1284-8084.jpg?w=740&t=st=1675537245~exp=1675537845~hmac=90ad6a6538b977cfc59e829da2d50237b5d207c08c1c2a60f80d17b93b2ed0ef");
  background-size: 490px;
  width: 600px;
  height: 200px;
  `;

const digitalContentBackgroundImage = () => Config.Css.css`
  background-image: url("https://static.vecteezy.com/system/resources/thumbnails/009/098/400/small/stack-of-books-illustration-personal-planners-notebooks-flat-design-free-vector.jpg");
  background-size: 420px;
  width: 250px;
  height: 250px;
  `;

const topicBackgroundImage = () => Config.Css.css`
  background-image: url("https://static.vecteezy.com/system/resources/previews/011/252/884/original/literature-school-subject-vector.jpg");
  background-size: 310px;
  width: 250px;
  height: 250px;
  `;

const adminPanelIcons = () => Config.Css.css`
  margin-left: 16px;
  margin-right: 32px;
  font-size: 30px;
  margin-right: 16px;
  float: right;
`;

export default {
  degreeBadge,
  header,
  setToCenterWithText,
  uu5ElementsBox,
  subjectBackgroundImage,
  topicBackgroundImage,
  digitalContentBackgroundImage,
  studyProgrammeBackgroundImage,
  test,
  adminPanelIcons,
  centerText,
};
