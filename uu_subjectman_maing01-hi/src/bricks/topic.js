//@@viewOn:imports
import {createVisualComponent, Utils, Content, useRef, useContext, useRoute} from "uu5g05";
import Config from "./config/config.js";
import Uu5Elements from "uu5g05-elements";
import UU5 from "uu5g04";
import Css from "./main-css";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:css
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

const Topic = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "Topic",
  nestingLevel: ["areaCollection", "area"],
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    topic:  UU5.PropTypes.shape({
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
    topic: null,
    onDetail: () => {},
    onUpdate: () => {},
    onDelete: () => {}
  },
  //@@viewOff:defaultProps

  render({topic, onDetail, onUpdate, onDelete }) {
    //@@viewOn:private
    const [, setRoute] = useRoute();

    function handleUpdate() {
      onUpdate(topic);
    }

    function handleDetail(){
      onDetail(topic)

    }

    function handleDelete() {
      onDelete(topic);
    }

    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    if (!topic) return null;

    return (
      <Uu5Elements.Block className={Css.backgroundImage()}
        card="full"
        colorScheme="dark-blue"
        significance="highlighted"
        headerType="title"
        header={topic.name}
        // footer={}
        key={topic.id}
        onClick={handleDetail}
      >
        {/*{<span className={Css.degreeBadge()}>{Topic.degreeOfStudy}</span>}*/}
      </Uu5Elements.Block>
    )
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { Topic };
export default Topic;
//@@viewOff:exports
