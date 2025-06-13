
import React from 'react';
import styled from 'styled-components';
import LoginForm from '../components/LoginForm';
import ImageSection from '../components/ImageSection';

const LoginContainer = styled.div`
  display: flex;
  min-height: 100vh;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const FormSection = styled.div`
  flex: 1;
  background: #ffffff;
  padding: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 1024px) {
    padding: 30px;
  }
  
  @media (max-width: 768px) {
    padding: 20px;
    order: 1;
  }
`;

const ImageSectionWrapper = styled.div`
  flex: 1;
  
  @media (max-width: 768px) {
    display: none;
  }
  
  @media (min-width: 769px) {
    height: 100vh;
  }
`;

const Index = () => {
  return (
    <LoginContainer>
      <FormSection>
        <LoginForm />
      </FormSection>
      <ImageSectionWrapper>
        <ImageSection />
      </ImageSectionWrapper>
    </LoginContainer>
  );
};

export default Index;
