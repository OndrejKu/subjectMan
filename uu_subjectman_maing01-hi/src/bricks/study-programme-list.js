//@@viewOn:imports
import { createVisualComponent, Utils, Content } from "uu5g05";
import Config from "./config/config.js";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:css
const Css = {
  main: () => Config.Css.css({}),
};
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

const StudyProgrammeList = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "StudyProgrammeList",
  nestingLevel: ["areaCollection", "area"],
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {
    studyProgram: [],
    onDetail: () => {},
    onUpdate: () => {},
    onDelete: () => {}
  },
  //@@viewOff:defaultProps

  render({ studyProgramme, onDetail, onUpdate, onDelete }) {
    //@@viewOn:private
    const { children } = props;
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    if (studyProgram.length === 0) {
      return <UU5.Common.Error content="No study programme to show" />;
    }

    return (
      <UU5.Bricks.Row>
        {studyProgramme.map(program => {
          if (!program) return null;

          return (
            <UU5.Bricks.Column key={program.data.id} colWidth="xs-12 m-6 l-4 xl-3">
              <Joke joke={program.data} colorSchema="green" onDetail={onDetail} onUpdate={onUpdate} onDelete={onDelete} />
            </UU5.Bricks.Column>
          );
        })}
        <Joke />
      </UU5.Bricks.Row>
    )
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { StudyProgrammeList };
export default StudyProgrammeList;
//@@viewOff:exports
