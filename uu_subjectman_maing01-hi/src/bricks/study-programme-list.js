//@@viewOn:imports
import {createVisualComponent, Utils, Content, useScreenSize} from "uu5g05";
import Config from "./config/config.js";
import StudyProgramme from "./study-programme";
import Uu5Elements from "uu5g05-elements";
import Css from "./main-css"
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:css
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

const StudyProgrammeList = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "StudyProgrammeList",
  nestingLevel: ["areaCollection", "area"],
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    studyProgram: UU5.PropTypes.array,
    onDetail: UU5.PropTypes.func,
    onUpdate: UU5.PropTypes.func,
    onDelete: UU5.PropTypes.func
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {
    studyProgram: [],
    onDetail: () => {},
    onUpdate: () => {},
    onDelete: () => {}
  },
  //@@viewOff:defaultProps

  render({studyProgram, onDetail, onUpdate, onDelete, onCreate}) {
    //@@viewOn:private
    const [screensize] = useScreenSize();

    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    if (studyProgram.length === 0) {
      return <UU5.Common.Error content="No study programme to show"/>;
    }
    return (
      <Uu5Elements.Grid className={Css.setToCenterWithText()}
        templateColumns={`repeat(${
          screensize === "xl" ? 6 : screensize === "l" ? 4 : screensize === "m" ? 3 : screensize === "s" ? 2 : 1
        }, 1fr)`}
        rowGap={16}
        columnGap={32}
      >
        {studyProgram.map(program => (
          <StudyProgramme
            key={program.data.id}
            StudyProgramme={program.data}
            onDetail={onDetail}
            onUpdate={onUpdate}
            onDelete={onDelete}
          />
        ))}
      </Uu5Elements.Grid>
    )
    //@@viewOff:render
  },
});

//@@viewOn:exports
export {StudyProgrammeList};
export default StudyProgrammeList;
//@@viewOff:exports
