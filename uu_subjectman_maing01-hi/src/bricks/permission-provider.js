//@@viewOn:imports
import { createComponent, useMemo, useState } from "uu5g05";
import Uu5Elements from "uu5g05-elements";
import Config from "../config/config";
import PermissionContext from "./permission-context";
//@@viewOff:imports

export const PermissionProvider = createComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "PermissionProvider",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    // authorities, readers
    const [permission, setPermission] = useState("readers");

    function permissionSelector() {
      return (
        <Uu5Elements.Dropdown
          label={permission}
          itemList={["authorities", "readers"].map((item) => {
            return {
              children: item,
              onClick: () =>
                setPermission((currentValue) => {
                  if (currentValue === "authorities") return "readers";
                  else return "authorities";
                }),
            };
          })}
        ></Uu5Elements.Dropdown>
      );
    }

    const providerValue = useMemo(() => {
      return {
        isAuthorities: permission === "authorities",
        permissionSelector,
      };
    }, [permission]);
    //@@viewOff:private

    //@@viewOn:render
    return (
      <PermissionContext.Provider value={providerValue}>
        {typeof props.children === "function" ? props.children(providerValue) : props.children}
      </PermissionContext.Provider>
    );
    //@@viewOff:render
  },
});

export default PermissionProvider;
