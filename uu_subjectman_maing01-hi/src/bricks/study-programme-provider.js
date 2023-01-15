//@@viewOn:imports
import {createVisualComponent, useDataList} from "uu5g05";
import Config from "./config/config.js";
import Calls from "../calls";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:css
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

const StudyProgrammeProvider = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "StudyProgrammeProvider",
  //@@viewOff:statics

  //@@viewOn:propTypes
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  //@@viewOff:defaultProps

  render({ children }) {
    //@@viewOn:hooks
    let listDataValues = useDataList({
      pageSize: 200,
      handlerMap: {
        load: Calls.listStudyProgramme,
        createStudyProgramme: Calls.createStudyProgramme,
        updateStudyProgramme: Calls.updateStudyProgramme,
        getStudyProgramme: Calls.getStudyProgramme
      }
    });
    let { state, data, newData, pendingData, errorData, handlerMap } = listDataValues;
    console.log("----listDataValues----");
    console.log(listDataValues);
    //@@viewOff:hooks

    //@@viewOn:private
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    return children({
      state,
      data,
      newData,
      pendingData,
      errorData,
      handlerMap
    });
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { StudyProgrammeProvider };
export default StudyProgrammeProvider;
//@@viewOff:exports
