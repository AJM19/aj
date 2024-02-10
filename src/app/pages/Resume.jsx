import Layout from '../components/Layout';
import styled from 'styled-components';

const Resume = () => {
  return (
    <Layout>
      <ResumeContainer>
        <iframe
          width={'80%'}
          title="resume"
          src="./assets/files/RESUME.pdf"
        ></iframe>
      </ResumeContainer>
    </Layout>
  );
};

export default Resume;

const ResumeContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  height: 100%;
`;
