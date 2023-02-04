//@@viewOn:imports
import {createVisualComponent, useRef, useRoute, useState, Utils} from "uu5g05";
import { createContext, useContext } from 'react';
import UU5 from "uu5g04";
import Uu5Elements from "uu5g05-elements";
import "uu5g04-bricks";
import Config from "./config/config.js";
import StudyProgrammeProvider from "../bricks/study-programme-provider";
import RouteBar from "../core/route-bar";
import SubjectManCarousel from "../bricks/subject-man-carousel";
import studyProgrammeDtoIn from "../bricks/hardcoded-data";
import StudyProgrammeList from "../bricks/study-programme-list";
import StudyProgrammeDetail from "../bricks/study-programme-detail";
import Css from "../bricks/main-css";
import routeBar from "../core/route-bar";
import StudyProgrammeContext from "../bricks/study-programme-context";
//@@viewOff:imports

//@@viewOn:constants
const [MyContext, useMyContext] = Utils.Context.create({})


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

let StudyProgrammes = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "StudyProgrammes",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render() {
    //@@viewOn:hooks
    // const {
    //   data: { authorizedProfileList }
    // } = useContext(SubjectmanInstanceContext);
    const [, setRoute] = useRoute();
    // const [StudyProgramme, setStudyProgramme] = useState();
    // const getStudyProgramme = useContext(null);
    const createStudyProgrammeRef = useRef();
    const updateStudyProgrammeRef = useRef();
    const deleteStudyProgrammeRef = useRef();
    const getStudyProgrammeRef = useRef();
    const detailRef = useRef();
    // const listStudyProgrammeRef = useRef();
    //@viewOff:hooks

    //@@viewOn:private
    // const { identity } = useSession();

    function showError(content) {
      UU5.Environment.getPage()
        .getAlertBus()
        .addAlert({
          content,
          colorSchema: "red"
        });
    }

    async function handleCreateStudyProgramme(studyProgramme) {
      try {
        await createStudyProgrammeRef.current({id: studyProgramme.id});
      } catch {
        showError(`Creation of ${studyProgramme.name} failed!`);
      }
    }

    async function handleUpdateStudyProgramme(studyProgramme, values) {
      try {
        await updateStudyProgrammeRef.current({id: studyProgramme.id, ...values});
      } catch {
        showError(`Update of ${studyProgramme.name} failed!`);
      }
    }

    async function handleDeleteStudyProgramme(studyProgramme) {
      try {
        await deleteStudyProgrammeRef.current({id: studyProgramme.id});
      } catch {
        showError(`Delete of ${studyProgramme.name} failed!`);
      }
    }

    function handleDetailStudyProgramme(studyProgramme) {
      // const value = useContext(StudyProgrammeContext)
      // console.log("handleDetailStudyProgramme");
      // console.log(studyProgramme)

      // useMyContext(studyProgramme)
      // setRoute("studyProgrammeDetail", {id: studyProgramme.id})
      setRoute("studyProgrammeDetail", {...studyProgramme})
    }

    //TODO: Do we need get handleGetStudyProgramme??
    // async function handleGetStudyProgramme(studyProgramme) {
    //   try {
    //     await updateStudyProgrammeRef.current({ id: studyProgramme.id, ...values });
    //   } catch {
    //     showError(`Update of ${studyProgramme.name} failed!`);
    //   }
    // }

    //TODO: Test out user authentication
    // function isCreateAuthorized() {
    //   return authorizedProfileList.some(
    //     profile => profile === Config.Profiles.AUTHORITIES || profile === Config.Profiles.EXECUTIVES
    //   );
    // }
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    function renderLoad() {
      return <UU5.Bricks.Loading/>;
    }

    function renderReady(studyProgrammes) {
      return (
        <div className={Config.Css.css({padding: 32})}>
          <Uu5Elements.Block>
            <StudyProgrammeList
              studyProgram={studyProgrammes}
              onUpdate={handleUpdateStudyProgramme}
              onCreate={handleCreateStudyProgramme}
              onDetail={handleDetailStudyProgramme}
              onDelete={handleDeleteStudyProgramme}
            />
          </Uu5Elements.Block>
        </div>
      );
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
        <StudyProgrammeProvider>
          {({state, data, errorData, pendingData, handlerMap}) => {
            createStudyProgrammeRef.current = handlerMap.createStudyProgramme;
            updateStudyProgrammeRef.current = handlerMap.updateStudyProgramme;
            getStudyProgrammeRef.current = handlerMap.getStudyProgramme;
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
                return renderReady(data);
            }
          }}
        </StudyProgrammeProvider>
      </div>
    );
    //@@viewOff:render
  },
});

//@@viewOn:exports
export {StudyProgrammes};
export default StudyProgrammes;
//@@viewOff:exports