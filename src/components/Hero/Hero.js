import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Zayn <br />
        Muhammad
      </SectionTitle>
      <SectionText>
        I am a recent Computer Science graduate looking to use my skills to
        apply my skills to build fast and responsive web applications. I can
        build both in the front-end and the back-end. Website built using
        ReactJS and styled components.
      </SectionText>
      <Button
        onClick={() =>
          (window.location =
            "https://docs.google.com/document/d/1dhKl05Qyd3aWkOoLIRq643nPf8LWBWeuM7Qku6L1v5E/edit?usp=sharing")
        }
      >
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
