import Layout from '../components/Layout';
import styled from 'styled-components';
import ProjectCard from '../components/ProjectCard';
import { BodyText, colors, Header1, SubHeader1 } from '../styles/styledcomps';

const Projects = () => {
  return (
    <Layout>
      <HeaderContainer>
        <Header1 style={{ textAlign: 'center' }} color={'white'}>
          Project Binder
        </Header1>
        <SubHeader1 color={'white'}>
          Click a Project Card to learn more...{' '}
        </SubHeader1>
        <BodyText color="white">
          {'(Modeled after Topps Baseball cards )'}
        </BodyText>
      </HeaderContainer>
      <StyledContainer>
        <ProjectCard
          titleColor={'#fbb418'}
          mainColor={'#f15c22'}
          background={'./assets/images/cozy-bitmoji.png'}
          name="Cozy Threads"
          logo={'./assets/images/cozy-threads-logo.png'}
          year="2025"
          logoColor={'white'}
          link="https://cozy-threads-app.onrender.com/"
          isExternalLink={true}
          description={
            'Cozy Threads is a demo e-commerce application that integrates the Stripe API. Frontend built in React and Backend built in Node.js w/ Express. Source code located on Github.'
          }
        />
        <ProjectCard
          titleColor={'#525252'}
          mainColor={'#87d6e4'}
          background={'./assets/images/hmmm.png'}
          name="Who's Here?"
          logo={'./assets/images/qmark.png'}
          year="2025"
          logoColor={'white'}
          link="https://whos-here-app.onrender.com/"
          isExternalLink={true}
          description={`Who's Here? integrates Socket.io into a Node.js w/ Express backend. The fronend is built in React w/ Vite. The premise of Who's Here? is that anyone can be using the site, updating the 900 available buttons, so it leaves you wondering who's on the other end.`}
        />
        <ProjectCard
          titleColor={'#7d1f00'}
          mainColor={'#db5b37'}
          background={'./assets/images/d3Background.png'}
          name="Athlete Charts"
          logo={'./assets/images/d3Logo.png'}
          year="2023"
          logoColor={'#7d1f00'}
          link="/projects/athlete-charts"
          description={
            'Athlete Charts is a project using a public API server, allowing a user to select two athletes within the database. These two athletes can then be compared in 2 views. Basic View and Chart View. The chart view is created by using D3js.'
          }
        />
        <ProjectCard
          titleColor={'#044759'}
          mainColor={'#0a7e9e'}
          background={'./assets/images/bitmoji-computer.png'}
          name="Finders Keepers"
          logo={'./assets/images/flashlight.png'}
          year="2023"
          logoColor={'#044759'}
          link="/projects/finders-keepers"
          description={
            'Finders Keepers is a user-interactive game that allows a user to use their mouse like a flashlight to find my icon. Click my icon as many times as you can and rack up a high score!'
          }
        />
        <ProjectCard
          titleColor={'#2e355e'}
          mainColor={'#142167'}
          background={'./assets/images/bitmoji-football.png'}
          name="Fantasy Football"
          logo={'./assets/images/sleeper.png'}
          year="2024"
          logoColor={'white'}
          link="/projects/sleeper-dynasty"
          description={
            'Fantasy Football App integrates the Sleeper API to track and analyze statistics in my Dynasty Fantasy Football League'
          }
        />
        <ProjectCard
          titleColor={'#73abe3'}
          mainColor={'#5572c3'}
          background={'./assets/images/bitmoji-frustrated.png'}
          name="Impossible Signup"
          logo={'./assets/images/computer.svg'}
          year="2024"
          logoColor={'#73d2e3'}
          link="/projects/impossible-signup"
          description={
            'Impossible Signup. Enter your username and password, then click Submit...if you can.'
          }
        />
        <ProjectCard
          titleColor={'black'}
          mainColor={'#e1b406'}
          background={'./assets/images/star-wars.png'}
          name="Star Wars Intro"
          logo={'./assets/images/star-wars-logo.png'}
          year="2024"
          logoColor={'black'}
          link="/projects/star-wars-intro"
          description={
            'Recreate your very own live Star Wars Intro crawl text. Use the force to propel your text through the galaxy like a true jedi.'
          }
          isSmallLogo={true}
        />
        <ProjectCard
          titleColor={colors.darkBlue}
          mainColor={colors.mainBlue}
          background={'./assets/images/univend.png'}
          name="Univend"
          logo={'./assets/images/univendLogo.png'}
          year="2020"
          link="/projects/univend"
          description={
            "Univend is a mobile-application (prototype) intended to be used by college students all over the United States. Univend allows users to access useful information about where snack machines, drink machines, and water fountains are located on your campus! Search for specific foods, drinks or filter your view options. Univend is a user-friendly, easy to understand application that fulfills all your vending machine inquiries. Let's start snacking!"
          }
        />
      </StyledContainer>
    </Layout>
  );
};

export default Projects;

const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 15px;
  margin: 3%;
  justify-items: center;
  row-gap: 30px;
  background: white;
  padding: 50px 15px;
  border-radius: 10px;
  justify-content: space-around;
  box-shadow: 5px 4px 9px 1px #73707099;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 25px;
  flex-direction: column;
`;
