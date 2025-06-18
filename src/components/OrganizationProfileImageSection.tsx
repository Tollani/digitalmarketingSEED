
import React from 'react';
import styled from 'styled-components';
import { Phone } from 'lucide-react';
import SocialIcons from './SocialIcons';

const OrganizationImageContainer = styled.div.attrs({
  className: 'organization-image-container'
})`
  width: 100%;
  height: 100%;
  background-image: url('/DMA-uploads/8deb37e4-5ae4-4872-992a-1c70885b9e34.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const OrganizationGradientOverlay = styled.div.attrs({
  className: 'organization-gradient-overlay'
})`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  bottom: 0;
  height: 50%;
  width: 100%;
  background: linear-gradient(
    to bottom,
    rgba(30, 58, 138, 0) 0%,
    rgba(30, 58, 138, 0.7) 50%,
    rgba(30, 58, 138, 0.7) 100%
  );
`;

const OrganizationContentWrapper = styled.div.attrs({
  className: 'organization-content-wrapper'
})`
  position: relative;
  z-index: 2;
  margin-top: auto;
  padding: 30px;
  color: white;
  
  @media (max-width: 768px) {
    padding: 20px;
    text-align: center;
  }
`;

const OrganizationLogo = styled.img.attrs({
  className: 'organization-logo'
})`
  width: 200px;
  height: auto;
  margin-bottom: 8px;
  display: block;
  object-fit: contain;
  
  @media (max-width: 768px) {
    width: 180px;
    margin: 0 auto 8px auto;
  }
`;

const OrganizationEmailText = styled.div.attrs({
  className: 'organization-email-text'
})`
  color: white;
  font-weight: 400;
  font-size: 14px;
  font-family: 'Sora', sans-serif;
  margin-bottom: 4px;
  
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const OrganizationContactItem = styled.div.attrs({
  className: 'organization-contact-item'
})`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 14px;
  font-family: 'Sora', sans-serif;
  color: white;
  margin-bottom: 16px;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const OrganizationProfileImageSection = () => {
  return (
    <OrganizationImageContainer>
      <OrganizationGradientOverlay />
      <OrganizationContentWrapper>
        <OrganizationLogo src="/DMA-uploads/81f50eda-4cdd-4aa2-b217-a1a96ca6757f.png" alt="DMA Digital Marketing Agency Logo" />
        <OrganizationEmailText>help@digitalmarketingng.com</OrganizationEmailText>
        <OrganizationContactItem>
          <Phone size={16} />
          +234 123 456 7890
        </OrganizationContactItem>
        <SocialIcons />
      </OrganizationContentWrapper>
    </OrganizationImageContainer>
  );
};

export default OrganizationProfileImageSection;
