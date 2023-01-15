import { Lsi } from "uu5g05";
import Uu5Elements from "uu5g05-elements";
import importLsi from "../lsi/import-lsi.js";

const About = {
  about: <Lsi import={importLsi} path={["AboutContent", "content"]} />,
  license: {
    termsOfUse: "https://unicorn.com/tou/your_product",
    organisation: {
      name: "Unicorn a.s.",
      uri: "https://www.unicorn.com/",
    },
    authorities: [
      {
        name: "Name Surname",
        uri: "https://www.unicorn.com/",
      },
    ],
  },
  leadingAuthors: [
    {
      name: "Jiří Teplický",
      uuIdentity: "3627-8321-1",
      role: "Backend developer",
    },
    {
      name: "Ondřej Kubala",
      uuIdentity: "411-6643-1",
      role: "Backend developer",
    },
    {
      name: "Pavel Hrdý",
      uuIdentity: "7220-5416-1",
      role: "Backend developer",
    },
  ],
  otherAuthors: [
    {
      name: "Tomáš Vyhňák",
      uuIdentity: "6-442-1",
      role: "Frontend developer",
    },
    {
      name: "Ondřej Martínek",
      uuIdentity: "4228-4339-1",
      role: "Frontend developer",
    },
  ],
  usedTechnologies: {
    technologies: [
      <Uu5Elements.Link key="uaf" href="https://docs.plus4u.net/uaf" target="_blank">
        UAF
      </Uu5Elements.Link>,
      <Uu5Elements.Link key="uuapp" href="https://docs.plus4u.net/uaf/uuapp" target="_blank">
        uuApp
      </Uu5Elements.Link>,
      <Uu5Elements.Link key="uu5" href="https://docs.plus4u.net/uaf/uuapp/uu5" target="_blank">
        uu5
      </Uu5Elements.Link>,
      <Uu5Elements.Link key="uuplus4u5" href="https://docs.plus4u.net/uaf/uuapp/plus4u5" target="_blank">
        uuPlus4U5
      </Uu5Elements.Link>,
      <Uu5Elements.Link
        key="uuproductcatalogue"
        href="https://uuapp.plus4u.net/uu-bookkit-maing01/7f743efd1bf6486d8e72b27a0df92ba7/book"
        target="_blank"
      >
        uuProductCatalogue
      </Uu5Elements.Link>,
      <Uu5Elements.Link key="uuappserver" href="https://docs.plus4u.net/uaf/uuapp/uuappserver" target="_blank">
        uuAppServer
      </Uu5Elements.Link>,
      <Uu5Elements.Link
        key="uuoidc"
        href="https://uuapp.plus4u.net/uu-bookkit-maing01/d684156f06004f2781c88777e74834ef"
        target="_blank"
      >
        uuOIDC
      </Uu5Elements.Link>,
      <Uu5Elements.Link key="uucloud" href="https://docs.plus4u.net/uaf/uuapp/uucloud" target="_blank">
        uuCloud
      </Uu5Elements.Link>,
    ],
    content: <Lsi import={importLsi} path={["AboutContent", "technologiesContent"]} />,
  },
};

export { About };
export default About;
