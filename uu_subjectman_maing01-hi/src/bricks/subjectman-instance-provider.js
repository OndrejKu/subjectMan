//@@viewOn:imports
import { createVisualComponent, Utils, Content, createComponent, useDataObject} from "uu5g05";
import Config from "./config/config.js";
import Calls from "calls";
import SubjectmanInstanceContext from "./subjectman-instance-context";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:css
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

const SubjectmanInstanceProvider = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "SubjectmanInstanceProvider",
  nestingLevel: ["areaCollection", "area"],
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(children) {
    //@@viewOn:hooks
    const state = useDataObject({
      handlerMap: {
        load: handleLoad
      }
    });
    //@@viewOff:hooks
    //@@viewOn:private
    async function handleLoad() {
      const dtoOut = await Calls.loadSubjectmanInstance();
      return { ...dtoOut.data, authorizedProfileList: dtoOut.sysData.profileData.uuIdentityProfileList };
    }
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    return <SubjectmanInstanceContext.Provider value={state}>{children}</SubjectmanInstanceContext.Provider>;
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { SubjectmanInstanceProvider };
export default SubjectmanInstanceProvider;
//@@viewOff:exports
