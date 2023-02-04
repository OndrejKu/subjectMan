//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent, useRef, useContext } from "uu5g04-hooks";
import Config from "./config/config";
import DigitalContentProvider from "./context/digital-content-provider.js";
import DigitalContentContext from "./context/digital-content-context";
import DigitalContentList from "./digital-content-list";
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

const DigitalContentView = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "DigitalContentView",
  nestingLevel: ["areaCollection", "area"],
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    const { children } = props;
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    function renderLoad() {
      return <UU5.Bricks.Loading />;
    }

    function renderReady(list) {
      console.log(list);
      return (
        <>
          <DigitalContentList digitalContent={list} />
        </>
      );
    }

    function renderError(errorData) {
      switch (errorData.operation) {
        case "load":
        case "loadNext":
        default:
          return <UU5.Bricks.Error content="Error happened!" error={errorData.error} errorData={errorData.data} />;
      }
    }

    return (
      <UU5.Bricks.Container>
        <DigitalContentProvider>
          <DigitalContentContext.Consumer>
            {({ state, data, errorData }) => {
              // createJokeRef.current = handlerMap.createJoke;
              // updateJokeRef.current = handlerMap.updateJoke;
              // deleteJokeRef.current = handlerMap.deleteJoke;
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
          </DigitalContentContext.Consumer>
        </DigitalContentProvider>
      </UU5.Bricks.Container>
    );
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { DigitalContentView };
export default DigitalContentView;
//@@viewOff:exports
