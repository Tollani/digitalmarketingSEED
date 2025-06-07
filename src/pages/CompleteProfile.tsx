
import React from 'react';
import styled from 'styled-components';
import CompleteProfileForm from '../components/CompleteProfileForm';
import CompleteProfileImageSection from '../components/CompleteProfileImageSection';

const CompleteProfileContainer = styled.div`
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
    height: 300px;
    order: 2;
  }
  
  @media (min-width: 769px) {
    height: 100vh;
  }
`;

const CompleteProfile = () => {
  return (
    <CompleteProfileContainer>
      <FormSection>
        <CompleteProfileForm />
      </FormSection>
      <ImageSectionWrapper>
        <CompleteProfileImageSection />
      </ImageSectionWrapper>
    </CompleteProfileContainer>
  );
};

export default CompleteProfile;
