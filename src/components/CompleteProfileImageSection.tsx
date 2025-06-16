
import React from 'react';
import styled from 'styled-components';
import { Mail, Phone } from 'lucide-react';
import SocialIcons from './SocialIcons';

const CompleteProfileImageContainer = styled.div.attrs({
  className: 'complete-profile-image-container'
})`
  width: 50%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  overflow: hidden;
  position:fixed
`;

const CompleteProfileBackgroundImage = styled.div.attrs({
  className: 'complete-profile-background-image'
})`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('/DMA-uploads/0589d284-827d-4b54-96dc-a6b830dded54.png');
  background-size: cover;
  background-position: center;
`;

const CompleteProfileGradientOverlay = styled.div.attrs({
  className: 'complete-profile-gradient-overlay'
})`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60%;
  background: linear-gradient(to top, rgba(0, 16, 59, 0.9) 0%, rgba(0, 16, 59, 0.7) 50%, transparent 100%);
  z-index: 1;
`;

const CompleteProfileContentOverlay = styled.div.attrs({
  className: 'complete-profile-content-overlay'
})`
  position: relative;
  z-index: 2;
  color: white;
  text-align: left;
  padding: 30px;
  max-width: 400px;
  width: 100%;
  
  @media (max-width: 768px) {
    padding: 20px;
    text-align: center;
  }
`;

const CompleteProfileLogo = styled.img.attrs({
  className: 'complete-profile-logo'
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

const CompleteProfileContactInfo = styled.div.attrs({
  className: 'complete-profile-contact-info'
})`
  margin-bottom: 16px;
  padding: 0;
`;

const CompleteProfileContactItem = styled.p.attrs({
  className: 'complete-profile-contact-item'
})`
  font-size: 14px;
  font-weight: 400;
  font-family: 'Sora', sans-serif;
  margin-bottom: 4px;
  display: flex;
  align-items: center;
  gap: 12px;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const CompleteProfileImageSection = () => {
  return (
    <CompleteProfileImageContainer>
      <CompleteProfileBackgroundImage />
      <CompleteProfileGradientOverlay />
      <CompleteProfileContentOverlay>
        <CompleteProfileLogo src="/DMA-uploads/81f50eda-4cdd-4aa2-b217-a1a96ca6757f.png" alt="Digital Marketing Agency Logo" />
        <CompleteProfileContactInfo>
          <CompleteProfileContactItem>
            <Mail size={16} />
            help@digitalmarketingng.com
          </CompleteProfileContactItem>
          <CompleteProfileContactItem>
            <Phone size={16} />
            +234 123 456 7890
          </CompleteProfileContactItem>
        </CompleteProfileContactInfo>
        <SocialIcons />
      </CompleteProfileContentOverlay>
    </CompleteProfileImageContainer>
  );
};

export default CompleteProfileImageSection;
