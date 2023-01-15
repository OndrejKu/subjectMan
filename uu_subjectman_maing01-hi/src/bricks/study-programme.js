//@@viewOn:imports
import {createVisualComponent, Utils, Content, useRef, useContext} from "uu5g05";
import Config from "./config/config.js";
import Uu5Elements from "uu5g05-elements";
import UU5 from "uu5g04";

//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:css
const Css = {
  main: () => Config.Css.css({}),
};
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

const StudyProgramme = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "StudyProgramme",
  nestingLevel: ["areaCollection", "area"],
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    StudyProgramme:  UU5.PropTypes.shape({
      id: UU5.PropTypes.string.isRequired,
      name: UU5.PropTypes.string.isRequired
    }),
    onDelete: UU5.PropTypes.func,
    onUpdate: UU5.PropTypes.func
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {
    StudyProgramme: null,
    onUpdate: () => {},
    onCreate: () => {}
  },
  //@@viewOff:defaultProps

  render({StudyProgramme, onUpdate, onCreate }) {
    //@@viewOn:private
    const handleUpdate = () => "Updated!"
    const handleCreate = () => "Updated!"
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    if (!StudyProgramme) return null;

    return (
    <div>
      <h2>Test</h2>
    </div>
    )
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { StudyProgramme };
export default StudyProgramme;
//@@viewOff:exports
