//@@viewOn:imports
import {createVisualComponent, Utils, Content, useState} from "uu5g05";
import Config from "./config/config.js";
import Uu5Elements from "uu5g05-elements";
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

const carouselTemplateText = {
  header: "Online study",
  paragraph: "Are you interested in Business or IT, but your time availability is limited? Study online whether you are in an office, at home or travelling. With us, everything is online – from the admission process to the final state examinations. We start in FEBRUARY!\n"
}

const IMAGE_LIST = [
  "https://img.freepik.com/free-vector/server-room-rack-blockchain-technology-token-api-access-data-center_39422-442.jpg?w=1060&t=st=1675122148~exp=1675122748~hmac=f1fb881d0517c0653ac9ec2f60a4881be9a3879361941b6be0d43cf563d0d38e",
  "https://img.freepik.com/free-vector/server-room-cloud-storage-icon-datacenter-database-concept-data-exchange-process_39422-556.jpg?w=900&t=st=1675123450~exp=1675124050~hmac=6732c6c201d3a5a50dc44afd16f16c46f25054f4406812a5251b704fc9f79eb4",
  "https://img.freepik.com/free-vector/abstract-banner-data-visualization-big-data-processing-cloud-storage-server-hosting_39422-978.jpg?w=900&t=st=1675123497~exp=1675124097~hmac=d747ba90c1d78685f82b09056513cf0cae89ff0f3990b91cce2df26d1ab70918",
  "https://img.freepik.com/free-vector/blue-futuristic-networking-technology_53876-97395.jpg?w=1060&t=st=1673184278~exp=1673184878~hmac=a073b8c42599b2543acfcae354ebd1e98134e6302c7cd1b644ebe1d58c959041",
];

function withControlledCarousel(Carousel) {
  return (props) => {
    const {index: propsIndex, onIndexChange} = props;
    const [index, setIndex] = useState(propsIndex || 0);
    return (
      <Carousel
        {...props}
        index={index}
        key={(Math.floor(100000 + Math.random() * 900000))}
        onIndexChange={(e) => {
          typeof onIndexChange === "function" && onIndexChange(e);
          setIndex(e.data.index);
        }}
      />
    );
  };
}

function generateImageItems(count) {
  return [...new Array(count)].map((it, i) => (
    <div className={Config.Css.css({position: "relative"})}>
      <img
        src={IMAGE_LIST[i]}
        key={i}
        className={Config.Css.css({
          height: 400,
          width: "100%",
          maxWidth: "100%",
          objectFit: "fill",
        })}
      />
      <div className={Config.Css.css({
        position: "absolute",
        bottom: "40px",
        right: "20px",
        left: "20px",
        color: "white",
        paddingLeft: "20px",
        paddingRight: "20px",
      })}>
        <h1>{carouselTemplateText.header}</h1>
        <p>{carouselTemplateText.paragraph}</p>
      </div>
    </div>

  ));
}


const IMAGE_ITEM_LIST = generateImageItems(3);
const Carousel = withControlledCarousel(Uu5Elements.Carousel);

const SubjectManCarousel = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "SubjectManCarousel",
  nestingLevel: ["areaCollection", "area"],
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render() {
    return (
      <div>
        <div className={Config.Css.css({
          top: "20px",
          position: "absolute",
        })}>
          <Uu5Elements.Icon icon="mdi-home"/>
        </div>
        <Carousel
          virtualization
          type="infinite"
          stepper="inner"
          buttons="inner"
          contentHeight={400}>
          {IMAGE_ITEM_LIST}
        </Carousel>
      </div>
    )
    //@@viewOff:render
  },
});

//@@viewOn:exports
export {SubjectManCarousel};
export default SubjectManCarousel;
//@@viewOff:exports
