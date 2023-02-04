//@@viewOn:imports
import { createComponent, useDataList } from "uu5g04-hooks";
import Calls from "calls";
import Config from "../config/config";
import DigitalContentContext from "./digital-content-context";
//@@viewOff:imports

const DigitalContentProvider = createComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "DigitalContentProvider",
  //@@viewOff:statics

  render({ children }) {
    //@@viewOn:hooks
    const dataListResult = useDataList({
      handlerMap: {
        load: Calls.listDigitalContent,
      },
    });
    //@@viewOff:hooks

    //@@viewOn:private
    //@@viewOff:private

    //@@viewOn:render
    return <DigitalContentContext.Provider value={dataListResult}>{children}</DigitalContentContext.Provider>;
    //@@viewOff:render
  }
});

export default DigitalContentProvider;