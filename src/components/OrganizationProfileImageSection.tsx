
import React from 'react';
import styled from 'styled-components';
import { Phone } from 'lucide-react';
import SocialIcons from './SocialIcons';

const OrganizationProfileImageContainer = styled.div.attrs({
  className: 'organization-profile-image-container'
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

const OrganizationProfileGradientOverlay = styled.div.attrs({
  className: 'organization-profile-gradient-overlay'
})`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50%;
  background: linear-gradient(
    to top,
    rgba(0, 16, 59, 0.9) 0%,
    rgba(0, 16, 59, 0.6) 50%,
    transparent 100%
  );
`;

const OrganizationProfileContentWrapper = styled.div.attrs({
  className: 'organization-profile-content-wrapper'
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

const OrganizationProfileLogo = styled.img.attrs({
  className: 'organization-profile-logo'
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

const OrganizationProfileEmailText = styled.div.attrs({
  className: 'organization-profile-email-text'
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

const OrganizationProfileContactItem = styled.div.attrs({
  className: 'organization-profile-contact-item'
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
    <OrganizationProfileImageContainer>
      <OrganizationProfileGradientOverlay />
      <OrganizationProfileContentWrapper>
        <OrganizationProfileLogo src="/DMA-uploads/81f50eda-4cdd-4aa2-b217-a1a96ca6757f.png" alt="DMA Digital Marketing Agency Logo" />
        <OrganizationProfileEmailText>help@digitalmarketingng.com</OrganizationProfileEmailText>
        <OrganizationProfileContactItem>
          <Phone size={16} />
          +234 123 456 7890
        </OrganizationProfileContactItem>
        <SocialIcons />
      </OrganizationProfileContentWrapper>
    </OrganizationProfileImageContainer>
  );
};

export default OrganizationProfileImageSection;
