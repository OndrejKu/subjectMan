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
    isAuthorized: UU5.PropTypes.boolean,
    onDetail: UU5.PropTypes.func,
    onUpdate: UU5.PropTypes.func,
    onDelete: UU5.PropTypes.func
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {
    studyProgram: [],
    isAuthorized: false,
    onDetail: () => {
    },
    onUpdate: () => {
    },
    onDelete: () => {
    },
    onCreate: () => {
    }
  },
  //@@viewOff:defaultProps

  render({studyProgram, isAuthorized, onDetail, onUpdate, onDelete, onCreate}) {
    //@@viewOn:private
    const [screensize] = useScreenSize();
    console.log(studyProgram)

    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    if (studyProgram.length === 0) {
      return <UU5.Common.Error content="No study programme to show"/>;
    }

    function editBarPanel() {
      return (
        <Uu5Elements.Box shape="background" colorScheme="blue">
          <Uu5Elements.Icon
            icon="mdi-delete-sweep"
            className={Css.adminPanelIcons()}
            colorScheme="red"
            onClick={onDelete}
            tooltip="Delete study programme"
            name="deleteStudyProgramme"
            id="8330618"
          />
          <Uu5Elements.Icon
            icon="mdi-file-document-edit"
            className={Css.adminPanelIcons()}
            colorScheme="yellow"
            onClick={onUpdate}
            tooltip="Update study programme"
            name="updateStudyProgramme"
            id="3002449"
          />
          <Uu5Elements.Icon
            icon="fa-solid fa-plus"
            className={Css.adminPanelIcons()}
            colorScheme="green"
            onClick={onCreate}
            tooltip="Create study programme"
            name="createStudyProgramme"
            id="7645133"
          />
        </Uu5Elements.Box>
      )
    }

    function contentPanel() {
      return (
        <Uu5Elements.Grid className={Css.centerText()}
                          templateColumns={`repeat(${
                            screensize === "xl" ? 6 : screensize === "l" ? 4 : screensize === "m" ? 3 : screensize === "s" ? 2 : 1
                          }, 1fr)`}
                          rowGap={16}
                          columnGap={32}
        >
          {studyProgram.map(program => (
            <StudyProgramme
              key={program.data.id}
              studyProgram={program.data}
              onDetail={onDetail}
              onUpdate={onUpdate}
              onDelete={onDelete}
            />
          ))}
        </Uu5Elements.Grid>
      )
    }

    return (
      <Uu5Elements.Block
        header={isAuthorized ? editBarPanel() : <></>}
        footer={(
          <div className={Config.Css.css({paddingTop: 40})}>
            {contentPanel()}
          </div>
        )}
      >
      </Uu5Elements.Block>
    )
    //@@viewOff:render
  },
});

//@@viewOn:exports
export {StudyProgrammeList};
export default StudyProgrammeList;
//@@viewOff:exports
