
import React from 'react';
import styled from 'styled-components';
import OrganizationProfileForm from '../components/OrganizationProfileForm';
import OrganizationProfileImageSection from '../components/OrganizationProfileImageSection';

const OrganizationProfileContainer = styled.div`
  display: flex;
  min-height: 100vh;
  font-family: 'Sora', sans-serif;
`;

const FormSection = styled.div`
  flex: 0 0 50%;
  background: #ffffff;
  padding: 40px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  overflow-y: auto;
  max-height: 100vh;
  
  @media (max-width: 1024px) {
    padding: 30px;
  }
  
  @media (max-width: 768px) {
    padding: 20px;
    flex: 1;
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
  max-width: 400px;
  margin-bottom: 32px;
`;

const ProgressBar = styled.div`
  height: 4px;
  flex: 1;
  border-radius: 2px;
  background-color: #7642FE;
`;

const ImageSectionWrapper = styled.div`
  flex: 0 0 50%;
  position: fixed;
  top: 0;
  right: 0;
  width: 50%;
  height: 100vh;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const OrganizationProfile = () => {
  return (
    <OrganizationProfileContainer>
      <FormSection>
        <FormWrapper>
          <ProgressBarsContainer>
            <ProgressBar />
            <ProgressBar />
          </ProgressBarsContainer>
          <OrganizationProfileForm />
        </FormWrapper>
      </FormSection>
      <ImageSectionWrapper>
        <OrganizationProfileImageSection />
      </ImageSectionWrapper>
    </OrganizationProfileContainer>
  );
};

export default OrganizationProfile;
