// import AwesomeSlider from "react-awesome-slider";
// import "react-awesome-slider/dist/styles.css";

import ProjectSlider from "../ProjectSlider";
import Section from "../Section";
export default function Projects() {
  return (
    <Section has="projects" classes="py-20">
      <span className=" span">70+ projects</span>
      <h3 className="h3">Projects for portfolio</h3>
      <ProjectSlider />
    </Section>
  );
}
