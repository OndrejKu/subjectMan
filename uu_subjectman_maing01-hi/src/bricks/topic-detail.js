//@@viewOn:imports
import {createVisualComponent, useContext, useRoute, useState} from "uu5g05";
import {useDataObject, useDataList} from "uu5g04-hooks";
import Calls from "calls";
import Config from "./config/config.js";
import Uu5Elements from "uu5g05-elements";
import SubjectManCarousel from "./subject-man-carousel";
import Css from "./main-css"
import RouteBar from "../core/route-bar";
import UU5 from "uu5g04";
import {studyProgrammeContext} from "./study-programme-context";
import DigitalContentList from "./digital-content-list";
// import {StudyProgrammeContext} from "./study-programme-context";
// import { useStudyProgramme } from "./study-programme-context";

//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:css
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers
const TopicDetail = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "TopicDetail",
  nestingLevel: ["areaCollection", "area"],
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render() {
    //@@viewOn:hooks
    //@@viewOff:hooks

    //@@viewOn:private
    const [route] = useRoute();
    const topicId = route.params.id;
    const [hidden, setHidden] = useState(true);
    const topic = useDataObject({
      handlerMap: {
        load: handleLoad,
      }
    });
    let {state, data, errorData, pendingData, handlerMap} = topic;

    const digitalContentListResult = useDataList({
      handlerMap: {
        load: Calls.listDigitalContent,
      },
    });

    // console.log(value)
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    function onSubmit() {
      return alert("clicked button")
    }

    async function handleLoad() {
      console.log("handleLoad");
      console.log(topic.id);
      const dtoOut = await Calls.getTopic({id: topicId});
      return dtoOut;
    }

    function renderDigitalContentData(digitalContentData) {
      console.log("topicData");
      console.log(digitalContentData);
      return (
        <DigitalContentList digitalContent={digitalContentData}/>
        // <>
        //   {/*{digitalContentData.map((digitalContent) => {*/}
        //   {/*  return (*/}
        //       // <Uu5Elements.Block className={Css.backgroundImage()}
        //       //                    card="full"
        //       //                    colorScheme="dark-blue"
        //       //                    significance="highlighted"
        //       //                    headerType="title"
        //       //                    header={digitalContent.name}
        //       //                    key={digitalContent.id}
        //       //                    onClick={digitalContent}
        //       // >
        //       // </Uu5Elements.Block>
        //       <DigitalContentList digitalContent={digitalContentData}></DigitalContentList>
        //     )
        //   })}
        // </>
      );
    }

    function renderData(data) {
      console.log("renderData")
      console.log(data)
      return (
        <Uu5Elements.Block className={Css.uu5ElementsBox()}
                           card="full"
                           // background="light"
                           // colorScheme="#5dfff4"
                           // significance="highlighted"
                           headerType="title"
                           header={
                             <div>
                               {data.topic.name}
                               <Uu5Elements.Button className={Config.Css.css({marginLeft: "16px"})}
                                                   onClick={() => setHidden((hidden) => !hidden)}>
                                 {hidden ? "show detail" : "hide detail"}
                               </Uu5Elements.Button>
                             </div>}
                           footer={
                             <div>
                               <Uu5Elements.CollapsibleBox collapsed={hidden}>
                                 {digitalContentListResult.data != null ? renderDigitalContentData(digitalContentListResult.data) : null}
                               </Uu5Elements.CollapsibleBox>
                             </div>
                           }
        >
          {data.topic.description}

        </Uu5Elements.Block>
      );
    }

    return (
      <div>
        <RouteBar name="routeBar" id="6983038 "/>
        <SubjectManCarousel name="SubjectManCarousel" id="6438025"/>
        {data != null ? renderData(data) : null}
      </div>
    )
    //@@viewOff:render
  },
});

//@@viewOn:exports
export {TopicDetail};
export default TopicDetail;
//@@viewOff:exports
