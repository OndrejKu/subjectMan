//@@viewOn:imports
import {createVisualComponent, Lsi, useRoute, useState} from "uu5g05";
import Plus4U5App from "uu_plus4u5g02-app";
import Uu5Elements from "uu5g05-elements";
import Config from "./config/config.js";
import importLsi from "../lsi/import-lsi.js";
// import Plus4U5 from "uu_plus4u5g01";
import UU5 from "uu5g04";
import "uu5g04-bricks";
// import "uu_plus4u5g01-app";
import Css from "../bricks/main-css";
import Home from "../routes/home";
import About from "../routes/about";
//@@viewOff:imports

//@@viewOn:constants
const icons = () => Config.Css.css`
  margin-left: 16px;
  margin-right: 32px;
  font-size: 30px;
  margin-right: 16px;
  color: #2196f3;
  `;
const lastIcons = () => Config.Css.css`
  margin-left: 16px;
  margin-right: 32px;
  font-size: 30px;
  margin-right: 16px;
  color: #2196f3;
  float: right;
  `;
//@@viewOff:constants

//@@viewOn:css
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

const DEFAULT_USE_CASE = "home";

const ROUTES = {
  "": DEFAULT_USE_CASE,
  home: {component: <Home/>},
  about: {component: <About/>},
  // jokes: { component: <Jokes /> }
};

const RouteBar = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "RouteBar",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    const [, setRoute] = useRoute();
    let [initialActiveItemId] = useState(() => {
      let url = UU5.Common.Url.parse(window.location.href);
      return url.useCase || DEFAULT_USE_CASE;
    });
    // const appActionList = [
    //   {children: <Lsi import={importLsi} path={["Menu", "home"]}/>, onClick: () => setRoute("home")},
    //   {
    //     children: <Uu5Elements.Icon icon="mdi-home" style={'font-size: 36px'}/>,
    //     onClick: () => setRoute("studyProgrammeDetail")
    //   },
    //   {
    //     children: <Lsi import={importLsi} path={["Menu", "about"]}/>,
    //     onClick: () => setRoute("about"),
    //     collapsed: true,
    //   },
    // ];

    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    // return <Plus4U5App.RouteBar appActionList={appActionList} {...props} />;
    return (
        <Uu5Elements.Box className={Config.Css.css({padding: 8})}>
          <Uu5Elements.Icon
            icon="mdi-home"
            className={icons()}
            onClick={() => setRoute("home")}
            tooltip="Home"
            name="homeIcon"
            id="7658133"
          />
          <Uu5Elements.Icon
            icon="fa-solid fa-graduation-cap"
            className={icons()}
            onClick={() => setRoute("studyProgrammes")}
            tooltip="Study Programme"
            name="studyProgrammesIcon"
            id="3002449"
          />
          <Uu5Elements.Icon
            icon="fa-graduation-cap"
            className={icons()}
            onClick={() => setRoute("digitalContents")}
            tooltip=""
            name=""
          />
          <Uu5Elements.Icon
            icon="mdi-information"
            className={lastIcons()}
            onClick={() => setRoute("about")}
            tooltip="About page"
            name="aboutIcon"
            id="8330618"
          />
          <Uu5Elements.Icon
            icon="mdi-book-open"
            className={icons()}
            onClick={() => setRoute()}
            tooltip=""
            name=""
            id="2320075"
          />
          <Uu5Elements.Icon
            icon="mdiGoogleClassroom"
            className={icons()}
            onClick={() => setRoute()}
            tooltip=""
            name=""
            id="5470808"
          />
        </Uu5Elements.Box>
    )
    //@@viewOff:render
  },
});

//@@viewOn:exports
export {RouteBar};
export default RouteBar;
//@@viewOff:exports
