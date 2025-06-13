
import React from 'react';
import styled from 'styled-components';
import ContactPersonProfileForm from '../components/ContactPersonProfileForm';
import ContactPersonProfileImageSection from '../components/ContactPersonProfileImageSection';

const PageContainer = styled.div`
  min-height: 100vh;
  position: relative;
`;

const PurpleBars = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  pointer-events: none;
`;

const PurpleBar = styled.div`
  height: 4px;
  background: #7642FE;
  margin-bottom: 8px;
  
  &:first-child {
    width: 60px;
    margin-left: 40px;
  }
  
  &:last-child {
    width: 40px;
    margin-left: 60px;
  }
  
  @media (max-width: 768px) {
    &:first-child {
      width: 50px;
      margin-left: 20px;
    }
    
    &:last-child {
      width: 30px;
      margin-left: 40px;
    }
  }
`;

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
  padding: 60px 40px 40px 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 1024px) {
    padding: 50px 30px 30px 30px;
  }
  
  @media (max-width: 768px) {
    padding: 40px 20px 20px 20px;
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

const ContactPersonProfile = () => {
  return (
    <PageContainer>
      <PurpleBars>
        <PurpleBar />
        <PurpleBar />
      </PurpleBars>
      <ContactPersonProfileContainer>
        <FormSection>
          <ContactPersonProfileForm />
        </FormSection>
        <ImageSectionWrapper>
          <ContactPersonProfileImageSection />
        </ImageSectionWrapper>
      </ContactPersonProfileContainer>
    </PageContainer>
  );
};

export default ContactPersonProfile;
