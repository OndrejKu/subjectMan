import { Environment } from "uu5g05";
import Plus4U5 from "uu_plus4u5g02";

// the base URI of calls for development / staging environments can be configured in *-hi/env/development.json
// (or <stagingEnv>.json), e.g.:
//   "uu5Environment": {
//     "callsBaseUri": "http://localhost:8080/vnd-app/awid"
//   }
const CALLS_BASE_URI =
  (process.env.NODE_ENV !== "production" ? Environment.get("callsBaseUri") : null) || Environment.appBaseUri;

const Calls = {
  async call(method, url, dtoIn, clientOptions) {
    const response = await Plus4U5.Utils.AppClient[method](url, dtoIn, clientOptions);
    return response.data;
  },

  // // example for mock calls
  // loadDemoContent(dtoIn) {
  //   const commandUri = Calls.getCommandUri("loadDemoContent");
  //   return Calls.call("get", commandUri, dtoIn);
  // },

  loadIdentityProfiles() {
    const commandUri = Calls.getCommandUri("sys/uuAppWorkspace/initUve");
    return Calls.call("get", commandUri);
  },

  loadSubjectmanInstance(dtoIn) {
    let commandUri = Calls.getCommandUri("sys/uuAppWorkspace/load");
    return Calls.call("get", commandUri, dtoIn);
  },

  initWorkspace(dtoInData) {
    const commandUri = Calls.getCommandUri("sys/uuAppWorkspace/init");
    return Calls.call("post", commandUri, dtoInData);
  },

  getWorkspace() {
    const commandUri = Calls.getCommandUri("sys/uuAppWorkspace/get");
    return Calls.call("get", commandUri);
  },

  async initAndGetWorkspace(dtoInData) {
    await Calls.initWorkspace(dtoInData);
    return await Calls.getWorkspace();
  },

  getCommandUri(useCase, baseUri = CALLS_BASE_URI) {
    console.log(useCase)
    console.log(baseUri)
    return (!baseUri.endsWith("/") ? baseUri + "/" : baseUri) + (useCase.startsWith("/") ? useCase.slice(1) : useCase);
  },

  listStudyProgramme(dtoIn) {
    let commandUri = Calls.getCommandUri("studyProgramme/list");
    // console.log("listStudyProgramme")
    // console.log(dtoIn)
    return Calls.call("get", commandUri, dtoIn);
  },

  createStudyProgramme(dtoIn) {
    console.log("---calls.js----")
    console.log(dtoIn)
    let commandUri = Calls.getCommandUri("studyProgramme/create");
    return Calls.call("post", commandUri, dtoIn);
  },

  getStudyProgramme(dtoIn) {
    let commandUri = Calls.getCommandUri("studyProgramme/get");
    return Calls.call("get", commandUri, dtoIn);
  },

  updateStudyProgramme(dtoIn) {
    console.log("---calls.js----")
    console.log(dtoIn)
    let commandUri = Calls.getCommandUri("studyProgramme/update");
    return Calls.call("post", commandUri, dtoIn);
  },
  listDigitalContent(dtoIn) {
    let commandUri = Calls.getCommandUri("digitalContent/list");
    return Calls.call("get", commandUri, dtoIn);
  },
  listSubjects(dtoIn) {
    let commandUri = Calls.getCommandUri("subject/list");
    return Calls.call("get", commandUri, dtoIn);
  },
  listTopic(dtoIn) {
    console.log("---listTopic---")
    console.log(dtoIn)
    let commandUri = Calls.getCommandUri("topic/list");
    return Calls.call("get", commandUri, dtoIn);
  },
};

export default Calls;
