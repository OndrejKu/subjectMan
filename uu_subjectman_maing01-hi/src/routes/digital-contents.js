//@@viewOn:imports
import { createVisualComponent } from "uu5g04-hooks";
import "uu5g04-bricks";
import { withRoute } from "uu_plus4u5g02-app";

import Config from "./config/config.js";
import RouteBar from "../core/route-bar.js";
import UU5 from "uu5g04";
//@@viewOff:imports

//@@viewOn:constants


//@@viewOff:constants

//@@viewOn:css
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

let DigitalContents = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "DigitalContents",
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
    // const { identity } = useSession();

    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    function renderLoad() {
      return <UU5.Bricks.Loading/>;
    }

    return (
      <div>
        <RouteBar />
        <h1>Hello</h1>
      </div>
    );
    //@@viewOff:render
  },
});

DigitalContents = withRoute(DigitalContents, { authenticated: true });

//@@viewOn:exports
export { DigitalContents };
export default DigitalContents;
//@@viewOff:exports
