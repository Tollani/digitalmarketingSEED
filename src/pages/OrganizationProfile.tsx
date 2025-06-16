
import React from 'react';
import styled from 'styled-components';
import OrganizationProfileForm from '../components/OrganizationProfileForm';
import OrganizationProfileImageSection from '../components/OrganizationProfileImageSection';
import ProgressIndicator from '../components/ProgressIndicator';

const OrganizationProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: 'Sora', sans-serif;
`;

const ContentContainer = styled.div`
  display: flex;
  flex: 1;
  height: calc(100vh - 80px);
  
  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

const FormSection = styled.div`
  flex: 1;
  width: 50%;
  background: #ffffff;
  padding: 40px;
  overflow-y: auto;
  font-family: 'Sora', sans-serif;
  
  @media (max-width: 1024px) {
    padding: 30px;
  }
  
  @media (max-width: 768px) {
    padding: 20px;
    order: 1;
    width: 100%;
    overflow-y: visible;
  }
`;

const ImageSectionWrapper = styled.div`
  flex: 1;
  position: fixed;
  right: 0;
  top: 80px;
  width: 50%;
  height: calc(100vh - 80px);
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const OrganizationProfile = () => {
  return (
    <OrganizationProfileContainer>
      <ProgressIndicator />
      <ContentContainer>
        <FormSection>
          <OrganizationProfileForm />
        </FormSection>
        <ImageSectionWrapper>
          <OrganizationProfileImageSection />
        </ImageSectionWrapper>
      </ContentContainer>
    </OrganizationProfileContainer>
  );
};

export default OrganizationProfile;
