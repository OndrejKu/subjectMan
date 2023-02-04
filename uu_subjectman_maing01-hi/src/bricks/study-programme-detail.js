//@@viewOn:imports
import {createVisualComponent, useContext, useRoute} from "uu5g05";
import { useDataObject, useDataList } from "uu5g04-hooks";
import Calls from "calls";
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

  render(props) {
    //@@viewOn:hooks
    //@@viewOff:hooks

    //@@viewOn:private
    const [route] = useRoute();
    const studyProgrammeId = route.params.id;
    const studyProgramme = useDataObject({
      handlerMap: {
        load: handleLoad,
      }
    });
    let { state, data, errorData, pendingData, handlerMap } = studyProgramme;

    const subjectListResult = useDataList({
      handlerMap: {
        load: Calls.listSubjects,
      },
    });

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

    async function handleLoad() {
      const dtoOut = await Calls.getStudyProgramme({ id: studyProgrammeId });
      console.log(dtoOut);
      return dtoOut;
    }

    function renderSubjectData(subjectData) {
      console.log(subjectData);
      return (
        <>
          {subjectData.map((subject) => {
            return (<h2 key={subject.data.id}>{subject.data.name}</h2>)
          })}
        </>
      );
    }

    function renderData(data) {
      return (
        <>
          <div className={Config.Css.css({padding: 32})}>
            <Uu5Elements.Block
              header={
                <Uu5Elements.Grid templateColumns={"80% 5%"}>
                  <h1>{data.name}<span className={Css.degreeBadge()}>{data.degreeOfStudy}</span></h1>
                  <Uu5Elements.Button style={'float: right'} size="xl" colorScheme={'green'}
                                      onClick={onSubmit}>Apply</Uu5Elements.Button>
                </Uu5Elements.Grid>
              }
            >
            </Uu5Elements.Block>
            <Uu5Elements.Text category="story" segment="body" type="major">
              {data.description}
            </Uu5Elements.Text>
            {/*</Uu5Elements.Grid>*/}
          </div>
          <img className={Config.Css.css({padding: 32})}
                src="https://img.freepik.com/free-vector/awesome-mobile-software-application-development-concept-mobile-phone-with-big-gear_39422-984.jpg?w=900&t=st=1675210344~exp=1675210944~hmac=9d6e234877b8bca7d6c9535b7c83acdc3eb4f922bb3403a5720e8a8998922845"
            // style={{width: "350px"}}
          />
        </>
      );
    }
    return (
      <div>
        <RouteBar name="routeBar" id="6983038 " />
        <SubjectManCarousel name="SubjectManCarousel" id="6438025" />
        {data != null ? renderData(data) : null}
        {subjectListResult.data != null ? renderSubjectData(subjectListResult.data) : null}
      </div>
    )
    //@@viewOff:render
  },
});

//@@viewOn:exports
export {StudyProgrammeDetail};
export default StudyProgrammeDetail;
//@@viewOff:exports
