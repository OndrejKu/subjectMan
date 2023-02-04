//@@viewOn:imports
import {createVisualComponent, useRef, useRoute, useSession, useState, Utils} from "uu5g05";
import UU5 from "uu5g04";
import Uu5Elements from "uu5g05-elements";
import "uu5g04-bricks";
import Config from "./config/config.js";
import TopicProvider from "../bricks/topic-provider";
import TopicDetail from "../bricks/study-programme-detail";
import TopicList from "../bricks/topic-list";
import StudyProgrammeList from "../bricks/study-programme-list";
import RouteBar from "../core/route-bar";
import SubjectManCarousel from "../bricks/subject-man-carousel";
import {adminList} from "../config/authorities"
//@@viewOff:imports

//@@viewOn:constants


//@@viewOff:constants

//@@viewOn:css
// const Css = {
//   icon: () =>
//     Config.Css.css({
//       fontSize: 48,
//       lineHeight: "1em",
//     }),
// };
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

let Topics = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "Topics",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render() {
    //@@viewOn:hooks
    //@viewOff:hooks

    //@@viewOn:private
    const [, setRoute] = useRoute();
    const {identity} = useSession();

    function showError(content) {
      UU5.Environment.getPage()
        .getAlertBus()
        .addAlert({
          content,
          colorSchema: "red"
        });
    }

    async function handleCreateTopic(topic) {
      alert("User pressed create")
      // try {
      //   await createTopicRef.current({id: Topic.id});
      // } catch {
      //   showError(`Creation of ${Topic.name} failed!`);
      // }
    }

    async function handleUpdateTopic(topic, values) {
      alert("User pressed update")
      // try {
      //   await updateTopicRef.current({id: Topic.id, ...values});
      // } catch {
      //   showError(`Update of ${Topic.name} failed!`);
      // }
    }

    async function handleDeleteTopic(topic) {
      console.log(isUserAuthorized())
      alert("User pressed delete")
      // try {
      //   await deleteTopicRef.current({id: Topic.id});
      // } catch {
      //   showError(`Delete of ${Topic.name} failed!`);
      // }
    }

    function handleDetailTopic(topic) {
      setRoute("topicDetail", {id: topic.id});
    }

    function isUserAuthorized() {
      return adminList.includes(identity.uuIdentity)
    }
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    function renderLoad() {
      return <UU5.Bricks.Loading/>;
    }

    function renderTopicList(topics) {
      console.log("---renderTopicList---")
      console.log(topics)
      // return<h2>data loaded</h2>
      return (
        <div className={Config.Css.css({padding: 16})}>
          <TopicList
            topics={topics}
            isAuthorized={isUserAuthorized()}
            onUpdate={handleUpdateTopic}
            onCreate={handleCreateTopic}
            onDetail={handleDetailTopic}
            onDelete={handleDeleteTopic}
          />
        </div>
      )
    }

    function renderError(errorData) {
      switch (errorData.operation) {
        case "load":
        case "loadNext":
        default:
          return <UU5.Bricks.Error content="Error happened!" error={errorData.error} errorData={errorData.data}/>;
      }
    }

    return (
      <div>
        <RouteBar name="routeBar" id="6983038 "/>
        <SubjectManCarousel name="SubjectManCarousel" id="6438025"/>
        <TopicProvider>
          {({state, data, errorData, pendingData, handlerMap}) => {
            // createTopicRef.current = handlerMap.createTopic;
            // updateTopicRef.current = handlerMap.updateTopic;
            // getTopicRef.current = handlerMap.getTopic;
            console.log("---topics.js---")
            console.log(data)
            console.log(state)
            switch (state) {
              case "pending":
              case "pendingNoData":
                return renderLoad();
              case "error":
              case "errorNoData":
                return renderError(errorData);
              case "itemPending":
              case "ready":
              case "readyNoData":
              default:
                return renderTopicList(data);
            }
          }}
        </TopicProvider>
      </div>
    );
    //@@viewOff:render
  },
});

//@@viewOn:exports
export {Topics};
export default Topics;
//@@viewOff:exports
