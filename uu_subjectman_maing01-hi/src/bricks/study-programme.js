//@@viewOn:imports
import {createVisualComponent, Utils, Content, useRef, useContext, useRoute} from "uu5g05";
import Config from "./config/config.js";
import Uu5Elements from "uu5g05-elements";
import UU5 from "uu5g04";
import Css from "./main-css";
import StudyProgrammeContext from "./study-programme-context";
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
    studyProgram:  UU5.PropTypes.shape({
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
    studyProgram: null,
    onDetail: () => {},
    onUpdate: () => {},
    onDelete: () => {}
  },
  //@@viewOff:defaultProps

  render({studyProgram, onDetail, onUpdate, onDelete }) {
    //@@viewOn:private
    function handleUpdate() {
      onUpdate(studyProgram);
    }

    function handleDetail(){
      onDetail(studyProgram)
      // return dtoInStudyProgramme
    }

    function handleDelete() {
      onDelete(studyProgram);
    }

    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    if (!studyProgram) return null;

    return (
      <Uu5Elements.Block className={Css.backgroundImage()}
                         card="full"
                         colorScheme="dark-blue"
                         significance="highlighted"
                         headerType="title"
                         header={studyProgram.name}
                         key={studyProgram.id}
                         onClick={handleDetail}
      >
        {<span className={Css.degreeBadge()}>{studyProgram.degreeOfStudy}</span>}
      </Uu5Elements.Block>
    )
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { StudyProgramme };
export default StudyProgramme;
//@@viewOff:exports
