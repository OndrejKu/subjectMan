//@@viewOn:imports
import { createVisualComponent, useContext, useRoute, useScreenSize } from "uu5g05";
import { useDataObject, useDataList } from "uu5g04-hooks";
import Calls from "../calls";
import Config from "./config/config.js";
import Uu5Elements from "uu5g05-elements";
import SubjectManCarousel from "./subject-man-carousel";
import Css from "./main-css"
import RouteBar from "../core/route-bar";
import UU5 from "uu5g04";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:css
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers
const SubjectDetail = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "SubjectDetail",
  nestingLevel: ["areaCollection", "area"],
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:hooks
    //@@viewOff:hooks

    //@@viewOn:private
    const [route] = useRoute();
    const subjectData = useDataObject({
      handlerMap: {
        load: handleLoad,
      },
    });
    let { state, data, errorData, pendingData, handlerMap } = subjectData;
    async function handleLoad() {
      const dtoOut = await Calls.getSubject({ id: route.params.id });
      return dtoOut;
    }
    function renderData(data) {
      console.log(data)
      return (
        <>
          <div className={Config.Css.css({ padding: 32 })}>
            <Uu5Elements.Block
              header={
                <Uu5Elements.Grid templateColumns={"80% 5%"}>
                  <h1>{data.name}<span className={Css.degreeBadge()}>{data.credits} credits</span></h1>
                </Uu5Elements.Grid>
              }
            >
              <Uu5Elements.Text category="story" segment="body" type="major">
                {data.description}
              </Uu5Elements.Text>
            </Uu5Elements.Block>

          </div>
        </>
      );
    }
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render

    return (
      <div>
        <RouteBar name="routeBar" id="6983038 " />
        <SubjectManCarousel name="SubjectManCarousel" id="6438025" />
        {data != null ? renderData(data) : null}
      </div>
    )
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { SubjectDetail };
export default SubjectDetail;
//@@viewOff:exports
