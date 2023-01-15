//@@viewOn:imports
import {createVisualComponent, Utils, Content } from "uu5g05";
import Config from "./config/config.js";
import Uu5Elements from "uu5g05-elements";
import SubjectManCarousel from "./subject-man-carousel";
import Css from "./main-css"
import RouteBar from "../core/route-bar";
import StudyProgrammeProvider from "./study-programme-provider";

//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:css
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers
const dtoIn = {
  id: "10289e66-b50f-43f3-a887-ecdabed2324f",
  name: "Software Development",
  description: "A Software Development bachelor's degree program is a four-year undergraduate program that provides students with the knowledge and skills needed to design, develop, and maintain software systems. The program typically includes coursework in computer science, programming languages, software engineering, and related technical and business subjects.\n" +
    "\n" +
    "During the program, students will learn how to analyze user requirements, design and implement software solutions, test and debug code, and deploy and maintain software systems. They will also learn about project management, teamwork, and communication skills, which are essential for success in the field of software development.\n" +
    "\n" +
    "Graduates of a Software Development bachelor's degree program will have the knowledge and skills needed to pursue careers as software developers, software engineers, systems analysts, and other technical roles in the software industry. They may work in a variety of settings, including software companies, government agencies, and businesses of all sizes.",
  degreeOfStudy: "Bc."
};

const StudyProgrammeDetail = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "StudyProgrammeDetail",
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
    const {addAlert, updateAlert} = Uu5Elements.useAlertBus();
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    function onSubmit() {
      return alert("clicked button")
    }

    return (
      <div>
        <RouteBar/>

          {/*<SubjectManCarousel/>*/}
          {/*<h1 className={Css.header()}>{dtoIn.name}<span className={Css.degreeBadge()}>{dtoIn.degreeOfStudy}</span></h1>*/}

          {/*<Uu5Elements.Box className={Css.uu5ElementsBox()}>*/}
          {/*  <Uu5Elements.Grid templateColumns="20% 80%">*/}
          {/*    <img*/}
          {/*      src="https://img.freepik.com/premium-vector/software-developers-programmers-work-man-sitting-desk-with-laptop-male-coder-working-web-development_102902-6454.jpg?w=900"*/}
          {/*      style={{width: "300px"}}*/}
          {/*    />*/}
          {/*    <Uu5Elements.Text category="story" segment="body" type="major">*/}
          {/*    */}
          {/*      {dtoIn.description}*/}
          {/*    </Uu5Elements.Text>*/}
          {/*  </Uu5Elements.Grid>*/}
          {/*</Uu5Elements.Box>*/}
          <div className={Config.Css.css({padding: 32})}>
            <Uu5Elements.Block
              header={
                <Uu5Elements.Grid templateColumns="80% 5%">
                  <h1>{dtoIn.name}<span className={Css.degreeBadge()}>{dtoIn.degreeOfStudy}</span></h1>
                  <Uu5Elements.Button style={'float: right'} size="xl" colorScheme={'green'}
                                      onClick={onSubmit}>Apply</Uu5Elements.Button>
                </Uu5Elements.Grid>
              }
            >
            </Uu5Elements.Block>
            <Uu5Elements.Grid templateColumns="20% 70%">
              <img
                src="https://img.freepik.com/premium-vector/software-developers-programmers-work-man-sitting-desk-with-laptop-male-coder-working-web-development_102902-6454.jpg?w=900"
                style={{width: "350px"}}
              />
              <Uu5Elements.Text category="story" segment="body" type="major">

                {dtoIn.description}
              </Uu5Elements.Text>
            </Uu5Elements.Grid>
          </div>

      </div>


    )
    //@@viewOff:render
  },
});

//@@viewOn:exports
export {StudyProgrammeDetail};
export default StudyProgrammeDetail;
//@@viewOff:exports
