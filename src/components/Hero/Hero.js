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
        Welcome to <br />
        My Personal Website
      </SectionTitle>
      <SectionText>
        My name is Brandford, and I am a front-end React developer.
      </SectionText>
      <Button
        onClick={() => (window.location = 'mailto:brandfordjunior@gmail.com')}
      >
        Hire Me
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
