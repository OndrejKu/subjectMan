//@@viewOn:imports
import {createVisualComponent, useDataList, useMemo, useRoute, useUpdateEffect} from "uu5g05";
import Config from "./config/config.js";
import Calls from "../calls";
import StudyProgrammeContext from "./study-programme-context";
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

  // render({children}) {
  render(props) {
    //@@viewOn:hooks
    const [route,] = useRoute();

    let listDataValues = useDataList({
      pageSize: 200,
      handlerMap: {
        load: Calls.listStudyProgramme,
        createStudyProgramme: Calls.createStudyProgramme,
        updateStudyProgramme: Calls.updateStudyProgramme,
        getStudyProgramme: Calls.getStudyProgramme
      },
      // skipInitialLoad: False
    });

    useUpdateEffect(() => {
      listDataValues.handlerMap.getStudyProgramme({"id": route.params.id});
    }, [route.params?.id]);

    let { state, data, newData, pendingData, errorData, handlerMap } = listDataValues;

    //@@viewOff:hooks

    //@@viewOn:private
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render

    const providerValue = useMemo(() => {
      return listDataValues;
    }, [listDataValues]);

    // return children({
    //   state,
    //   data,
    //   newData,
    //   pendingData,
    //   errorData,
    //   handlerMap
    // });
    console.log("----study-programme-provider.js----");
    console.log("providerValue");
    console.log(providerValue);

    return (
      <StudyProgrammeContext.Provider value={providerValue}>
        {typeof props.children === "function" ? props.children(providerValue) : props.children}
      </StudyProgrammeContext.Provider>
    );
    // @@viewOff:render
  },
});

//@@viewOn:exports
export { StudyProgrammeProvider };
export default StudyProgrammeProvider;
//@@viewOff:exports
