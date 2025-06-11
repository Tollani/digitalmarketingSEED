
import React from 'react';
import styled from 'styled-components';
import OrganizationProfileForm from '../components/OrganizationProfileForm';
import OrganizationProfileImageSection from '../components/OrganizationProfileImageSection';
import ProgressIndicator from '../components/ProgressIndicator';

const OrganizationProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const ContentContainer = styled.div`
  display: flex;
  flex: 1;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const FormSection = styled.div`
  flex: 0 0 65%;
  background: #ffffff;
  padding: 40px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  
  @media (max-width: 1024px) {
    padding: 30px;
  }
  
  @media (max-width: 768px) {
    padding: 20px;
    order: 1;
    flex: 1;
  }
`;

const ImageSectionWrapper = styled.div`
  flex: 0 0 35%;
  
  @media (max-width: 768px) {
    height: 300px;
    order: 2;
    flex: none;
  }
  
  @media (min-width: 769px) {
    height: calc(100vh - 80px);
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
