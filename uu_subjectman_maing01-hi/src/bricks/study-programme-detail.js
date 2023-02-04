//@@viewOn:imports
import {createVisualComponent, useContext, useRoute} from "uu5g05";
import Config from "./config/config.js";
import Uu5Elements from "uu5g05-elements";
import SubjectManCarousel from "./subject-man-carousel";
import Css from "./main-css"
import RouteBar from "../core/route-bar";
import UU5 from "uu5g04";
import {StudyProgrammeContext, studyProgrammeContext, useStudyProgramme} from "./study-programme-context";
// import {StudyProgrammeContext} from "./study-programme-context";
// import { useStudyProgramme } from "./study-programme-context";

//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:css
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers
const StudyProgrammeDetail = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "StudyProgrammeDetail",
  nestingLevel: ["areaCollection", "area"],
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    // StudyProgramme:  UU5.PropTypes.shape({
    //   id: UU5.PropTypes.string.isRequired,
    //   name: UU5.PropTypes.string.isRequired
    // }),
    onDetail: UU5.PropTypes.func,
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {
    studyProgramme: {
      name: "",
      id: "",
      degreeOfStudy: "",
      description: ""
    }
  },
  //@@viewOff:defaultProps

  render() {
    //@@viewOn:private
    const [route] = useRoute()
    // const value = useContext(useStudyProgramme);
    // const studyProgrammmeID = route(route.params.id);
    //TODO: Remove this for better function call to get data from Calls.getStudyProgramme({"id": route.params.id})
    // const studyProgramme = route.params
    console.log("---study-programme-detail.js---")
    // console.log("useContext(useStudyProgramme)")
    console.log(useContext(StudyProgrammeContext))
    // console.log(value)
    const {addAlert, updateAlert} = Uu5Elements.useAlertBus();
    //@@viewOff:private
    console.log("---study-programme-detail.js---")
    console.log("context")
    console.log(useContext(StudyProgrammeContext))
    //@@viewOn:hooks
    // const value = useContext(useStudyProgramme);
    // studyProgrammeContext
    //@@viewOff:hooks

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    function onSubmit() {
      return alert("clicked button")
    }

    return (
      <div>
      </div>


    )
    //@@viewOff:render
  },
});

//@@viewOn:exports
export {StudyProgrammeDetail};
export default StudyProgrammeDetail;
//@@viewOff:exports
