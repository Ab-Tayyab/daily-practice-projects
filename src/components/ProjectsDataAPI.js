import BackgroundColorChanger from "./backgroundColorChanger/BackgroundColorChanger";
import ClientCarousal from "./clientCarousal/ClientCarousal";
import DigitalClock from "./digitalClock/DigitalClock";
import Navbar from "./navbar/Navbar";
import NumberCounter from "./numberCounter/NumberCounter";
import Sidebar from "./sidebar/Sidebar";

const projectsList = [
  {
    name: "Background Color Changer",
    component: <BackgroundColorChanger />,
  },
  {
    name: "Digital Clock",
    component: <DigitalClock />,
  },
  {
    name: "Number Counter",
    component: <NumberCounter />,
  },
  {
    name: "Client Carousal",
    component: <ClientCarousal />,
  },
  {
    name: "Navbar",
    component: <Navbar />,
  },
  {
    name: "Sidebar",
    component: <Sidebar />,
  },
];

export default projectsList;
