//@@viewOn:imports
import { createVisualComponent, Utils, Content, useScreenSize } from "uu5g05";
import Config from "./config/config.js";
import Uu5Elements from "uu5g05-elements";
import Css from "./main-css";
import DigitalContent from "./digital-content.js";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:css
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

const DigitalContentList = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "DigitalContentList",
  nestingLevel: ["areaCollection", "area"],
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render({digitalContent}) {
    //@@viewOn:private
    const [screensize] = useScreenSize();
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    return (
      <>
        {/*<h2 className={Css.centerText()}>Digital Content</h2>*/}
        <Uu5Elements.Grid className={Css.setToCenterWithText()}
          templateColumns={`repeat(${
            screensize === "xl" ? 6 : screensize === "l" ? 4 : screensize === "m" ? 3 : screensize === "s" ? 2 : 1
          }, 1fr)`}
          rowGap={16}
          columnGap={32}
        >
          {digitalContent.map((dc) => (
            <DigitalContent digitalContent={dc} key={dc.data.id} />
          ))}
        </Uu5Elements.Grid>
      </>
    );
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { DigitalContentList };
export default DigitalContentList;
//@@viewOff:exports
