
import React from 'react';
import styled from 'styled-components';
import ContactPersonProfileForm from '../components/ContactPersonProfileForm';
import ContactPersonProfileImageSection from '../components/ContactPersonProfileImageSection';

const ContactPersonProfileContainer = styled.div`
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

const FormWrapper = styled.div`
  width: 100%;
  max-width: 400px;
  
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const ProgressBarsContainer = styled.div`
  display: flex;
  gap: 8px;
  width: 100%;
  max-width: 200px;
  margin-bottom: 32px;
`;

const ProgressBar = styled.div`
  height: 4px;
  flex: 1;
  border-radius: 2px;
  background-color: #7642FE;
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

const ContactPersonProfile = () => {
  return (
    <ContactPersonProfileContainer>
      <FormSection>
        <FormWrapper>
          <ProgressBarsContainer>
            <ProgressBar />
            <ProgressBar />
          </ProgressBarsContainer>
          <ContactPersonProfileForm />
        </FormWrapper>
      </FormSection>
      <ImageSectionWrapper>
        <ContactPersonProfileImageSection />
      </ImageSectionWrapper>
    </ContactPersonProfileContainer>
  );
};

export default ContactPersonProfile;
