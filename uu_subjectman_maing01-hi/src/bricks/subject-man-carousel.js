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
  // paragraph: "Bakalářský studijní program softwarový vývoj vás naučí vyvíjet robustní cloudové aplikace s využitím moderních programovacích jazyků a porozumíte disciplínám z oblasti vývoje software."
  paragraph: "Are you interested in Business or IT, but your time availability is limited? Study online whether you are in an office, at home or travelling. With us, everything is online – from the admission process to the final state examinations. We start in FEBRUARY!\n"
}

const IMAGE_LIST = [
  // "https://static-abcblogs.abc.es/wp-content/uploads/sites/250/2019/09/Mula.jpg",
  "https://img.freepik.com/free-vector/blue-futuristic-networking-technology_53876-97395.jpg?w=1060&t=st=1673184278~exp=1673184878~hmac=a073b8c42599b2543acfcae354ebd1e98134e6302c7cd1b644ebe1d58c959041",

  // "https://img.freepik.com/free-vector/flat-cms-concept-illustrated_23-2148925794.jpg?w=1060&t=st=1673184181~exp=1673184781~hmac=d386779c3f390fa35c87179aed7c1467c706056c79ca353aefe225fa684a89d8",
  //
  // "https://img.freepik.com/free-vector/team-mobile-web-app-development_107791-12795.jpg?w=1380&t=st=1673184131~exp=1673184731~hmac=4a31afba8db2b06414b70a3e5b44083932cde20bfa90cb5d41ea69bc0fd676fe",
  // "https://img.freepik.com/free-vector/script-writing-software-engineering-coding-workshop-code-created-workshop-online-programming-course-apps-games-development-class-concept-pinkish-coral-bluevector-isolated-illustration_335657-1253.jpg?w=1060&t=st=1673184092~exp=1673184692~hmac=0c1c849371787bc9d224834a6172dddd955ddb445ad860c991ff5488f7c653ef",

];

function withControlledCarousel(Carousel) {
  return (props) => {
    const {index: propsIndex, onIndexChange} = props;
    const [index, setIndex] = useState(propsIndex || 0);

    return (
      <Carousel
        {...props}
        index={index}
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
          display: "block",
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
        // backgroundColor: "black",
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


const IMAGE_ITEM_LIST = generateImageItems(1);
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
          <Uu5Elements.Icon icon="mdi-home" />
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
