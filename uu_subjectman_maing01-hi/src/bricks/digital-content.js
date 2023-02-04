//@@viewOn:imports
import {createVisualComponent, Utils, Content, useContext} from "uu5g05";
import Config from "./config/config.js";
import Uu5Elements from "uu5g05-elements";
import Css from "./main-css";
import DigitalContentContext from "./context/digital-content-context";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:css
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

const DigitalContent = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "DigitalContent",
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
    const data = digitalContent.data;
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    console.log("---digital-content.js---")
    console.log("context")
    console.log(useContext(DigitalContentContext))
    return (
      <Uu5Elements.Block
        card="full"
        colorScheme="dark-blue"
        headerType="title"
        header={data.title}
        // footer={}
        key={data.id}
      >
        <a href={data.link}>Link to {data.type}</a>
      </Uu5Elements.Block>
    )
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { DigitalContent };
export default DigitalContent;
//@@viewOff:exports
