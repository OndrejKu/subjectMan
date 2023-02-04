import Uu5Elements from "uu5g05-elements";
import {createComponent, useState} from "uu5g05";

const deleteDialog = createComponent({
  render() {
    const [open, setOpen] = useState(false);

    return (
      <div>
        <Uu5Elements.Button onClick={() => setOpen(true)}>Open Dialog</Uu5Elements.Button>
        <Uu5Elements.Dialog
          open={open}
          onClose={() => setOpen(false)}
          header={"Delete this file?"}
          icon={<Uu5Elements.Svg code="uugdssvg-svg-delete" />}
          info={"File data cannot be recovered"}/>
          }
          actionDirection="horizontal"
          actionList={[
            {
              children: "Cancel",
              onClick: () => console.log("Cancel"),
              significance: "distinct",
            },
            {
              children: "Delete",
              onClick: () => console.log("Delete"),
              colorScheme: "red",
              significance: "highlighted",
            },
          ]}
        />
      </div>
    );
  },
});

export {deleteDialog};
export default deleteDialog;
