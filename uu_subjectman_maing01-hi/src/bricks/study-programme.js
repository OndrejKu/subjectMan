//@@viewOn:imports
import {createVisualComponent, Utils, Content, useRef, useContext, useRoute} from "uu5g05";
import Config from "./config/config.js";
import Uu5Elements from "uu5g05-elements";
import UU5 from "uu5g04";
import Css from "./main-css";
import StudyProgrammeContext from "./study-programme-context";
import DigitalContentContext from "./context/digital-content-context";
import StudyProgrammeDetail from "./study-programme-detail";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:css
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
    studyProgramme:  UU5.PropTypes.shape({
      id: UU5.PropTypes.string.isRequired,
      name: UU5.PropTypes.string.isRequired
    }),
    onDetail: UU5.PropTypes.func,
    onUpdate: UU5.PropTypes.func,
    onDelete: UU5.PropTypes.func
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {
    StudyProgramme: null,
    onDetail: () => {},
    onUpdate: () => {},
    onDelete: () => {}
  },
  //@@viewOff:defaultProps

  render({studyProgramme, onDetail, onUpdate, onDelete }) {
    //@@viewOn:private
    const [, setRoute] = useRoute();
    // const {
    //   data: { newData }
    // } = useContext(StudyProgrammeContext);

    // const handleUpdate = () => "Updated!"
    // const handleCreate = () => "Updated!"
    // const handleDetail = () => setRoute("studyProgrammeDetail", { id: StudyProgramme.id })
    // const handleDetail = () => setRoute("studyProgrammeDetail", { ...StudyProgramme })

    function handleUpdate() {

      onUpdate(studyProgramme);
      // return newData
    }

    function handleDetail(){
      // onDetail(StudyProgramme)
      // return dtoInStudyProgramme
      return (
        <StudyProgrammeDetail>
          {setRoute("studyProgrammeDetail", {id: studyProgramme.id})}
        </StudyProgrammeDetail>
      )
    }

    function handleDelete() {
      onDelete(studyProgramme);
    }

    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    if (!StudyProgramme) return null;
    console.log("---study-programme.js---")
    console.log("context")
    console.log(useContext(StudyProgrammeContext))
    return (
      <Uu5Elements.Block className={Css.backgroundImage()}
        card="full"
        colorScheme="dark-blue"
        significance="highlighted"
        headerType="title"
        header={studyProgramme.name}
        // footer={}
        key={studyProgramme.id}
        onClick={handleDetail}
      >
        {<span className={Css.degreeBadge()}>{studyProgramme.degreeOfStudy}</span>}
      </Uu5Elements.Block>
    )
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { StudyProgramme };
export default StudyProgramme;
//@@viewOff:exports
