
import React from 'react';
import styled from 'styled-components';
import OrganizationProfileForm from '../components/OrganizationProfileForm';
import OrganizationProfileImageSection from '../components/OrganizationProfileImageSection';

// Add Sora font for the whole section
const OrganizationProfileContainer = styled.div`
  display: flex;
  min-height: 100vh;
  font-family: 'Sora', sans-serif;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const FormSection = styled.div`
  flex: 1;
  width: 50%;
  background: #ffffff;
  padding: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Sora', sans-serif;
  
  @media (max-width: 1024px) {
    padding: 30px;
  }
  
  @media (max-width: 768px) {
    padding: 20px;
    order: 1;
    width: 100%;
  }
`;

const FormWrapper = styled.div`
  width: 100%;
  max-width: 500px;
  
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

const ProgressBar = styled.div<{ isCompleted: boolean }>`
  height: 4px;
  flex: 1;
  border-radius: 2px;
  background-color: ${props => props.isCompleted ? '#7642FE' : '#E5E7EB'};
`;

const ImageSectionWrapper = styled.div`
  flex: 1;
  width: 50%;
  position: fixed;
  right: 0;
  top: 0;
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
            <ProgressBar isCompleted={true} />
            <ProgressBar isCompleted={false} />
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
