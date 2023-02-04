//@@viewOn:imports
import {createVisualComponent, Utils, Content, useScreenSize} from "uu5g05";
import Config from "./config/config.js";
import Uu5Elements from "uu5g05-elements";
import Css from "./main-css"
import Topic from "./topic";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:css
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

const TopicList = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "TopicList",
  nestingLevel: ["areaCollection", "area"],
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    topics: UU5.PropTypes.array,
    isAuthorized: UU5.PropTypes.boolean,
    onDetail: UU5.PropTypes.func,
    onUpdate: UU5.PropTypes.func,
    onDelete: UU5.PropTypes.func
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {
    topics: [],
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

  render({topics, isAuthorized, onDetail, onUpdate, onDelete, onCreate}) {
    //@@viewOn:private
    const [screensize] = useScreenSize();

    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    if (topics.length === 0) {
      return <UU5.Common.Error content="No topics to show!"/>;

    }

    function editBarPanel() {
      return (
        <Uu5Elements.Box shape="background" colorScheme="blue">
          <Uu5Elements.Icon
            icon="mdi-delete-sweep"
            className={Css.adminPanelIcons()}
            colorScheme="red"
            // onClick={onDelete}
            tooltip="Delete study programme"
            name="deleteStudyProgramme"
            id="8330618"
          />
          <Uu5Elements.Icon
            icon="mdi-file-document-edit"
            className={Css.adminPanelIcons()}
            colorScheme="yellow"
            // onClick={onUpdate}
            tooltip="Update study programme"
            name="updateStudyProgramme"
            id="3002449"
          />
          <Uu5Elements.Icon
            icon="fa-solid fa-plus"
            className={Css.adminPanelIcons()}
            colorScheme="green"
            // onClick={onCreate}
            tooltip="Create study programme"
            name="createStudyProgramme"
            id="7645133"
          />
        </Uu5Elements.Box>
      )
    }
    function contentPanel() {
      return (
        <Uu5Elements.Grid className={Css.setToCenterWithText()}
                          templateColumns={`repeat(${
                            screensize === "xl" ? 6 : screensize === "l" ? 4 : screensize === "m" ? 3 : screensize === "s" ? 2 : 1
                          }, 1fr)`}
                          rowGap={16}
                          columnGap={32}
        >
          {topics.map(program => (
            <Topic
              key={program.data.id}
              topic={program.data}
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
        header={isAuthorized ?editBarPanel():<></>}
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
export {TopicList};
export default TopicList;
//@@viewOff:exports
