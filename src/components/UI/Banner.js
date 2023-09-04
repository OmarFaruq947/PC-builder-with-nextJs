import Ram from "@/pages/ram";
import { Divider } from "antd";
import CarouselPage from "./Carousel/CarouselPage";
import Monitor from "./HomePageProduct/Monitor";
import MotherboardShow from "./HomePageProduct/MotherboardShow";
import Oaters from "./HomePageProduct/Oaters";
import PowerSupply from "./HomePageProduct/PowerSupply";
import ProcessorsShow from "./HomePageProduct/ProcessorsShow";
import Storage from "./HomePageProduct/Storage";

const contentStyle = {
  color: "#001529",
  fontSize: "30px",
};

const Banner = () => (
  <div>
    <CarouselPage />
    <br />
    <br />
    <Divider orientation="left" orientationMargin="0" style={contentStyle}>
      Processor/ CPU
    </Divider>
    <ProcessorsShow />
    <Divider orientation="left" orientationMargin="0" style={contentStyle}>
      Motherboard
    </Divider>
    <MotherboardShow />
    <Divider orientation="left" orientationMargin="0" style={contentStyle}>
      RAM
    </Divider>
    <Ram />
    <Divider orientation="left" orientationMargin="0" style={contentStyle}>
      PowerSupply
    </Divider>
    <PowerSupply />
    <Divider orientation="left" orientationMargin="0" style={contentStyle}>
      Monitor
    </Divider>
    <Monitor />
    <Divider orientation="left" orientationMargin="0" style={contentStyle}>
      Storage / Memory / Hard disk
    </Divider>
    <Storage />
    <Divider orientation="left" orientationMargin="0" style={contentStyle}>
      Oaters Accessories
    </Divider>
    <Oaters />
  </div>
);
export default Banner;
