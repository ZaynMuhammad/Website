import Acomplishments from "../components/Acomplishments/Acomplishments";
import BgAnimation from "../components/BackgrooundAnimation/BackgroundAnimation";
import LaptopAnimation from "../components/BackgrooundAnimation/LaptopAnimation";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Technologies from "../components/Technologies/Technologies";
import Timeline from "../components/TimeLine/TimeLine";
import { Layout } from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";

const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Hero />
        <LaptopAnimation />
      </Section>
      <Projects />
      <Technologies />
      {/* Update these to reflect work accomplishsments  */}
      {/* NOTE: Maybe use this for school accomplishments?? */}
      {/* <Timeline />
      <Acomplishments /> */}
    </Layout>
  );
};

export default Home;
