import BackgroundColorChanger from "./backgroundColorChanger/BackgroundColorChanger";
import ClientCarousal from "./clientCarousal/ClientCarousal";
import DigitalClock from "./digitalClock/DigitalClock";
import NumberCounter from "./numberCounter/NumberCounter";

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
];

export default projectsList;
