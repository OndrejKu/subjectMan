import Config from "./config/config";


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
  margin-left: 32px;
  margin-right: 32px;
  `;


export default {
  degreeBadge,
  header,
  uu5ElementsBox
};
