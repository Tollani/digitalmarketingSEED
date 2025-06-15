
import React from 'react';
import styled from 'styled-components';
import { Mail, Phone } from 'lucide-react';
import SocialIcons from './SocialIcons';

const ContactPersonImageContainer = styled.div.attrs({
  className: 'contact-person-image-container'
})`
  width: 100%;
  height: 100%;
  background-image: url('/DMA-uploads/207b1138-6b5c-47f8-a2b1-e26cb35e6f02.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
`;

const ContactPersonGradientOverlay = styled.div.attrs({
  className: 'contact-person-gradient-overlay'
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

const ContactPersonInfoSection = styled.div.attrs({
  className: 'contact-person-info-section'
})`
  padding: 30px;
  color: white;
  position: relative;
  z-index: 2;
  
  @media (max-width: 768px) {
    padding: 20px;
    text-align: center;
  }
`;

const ContactPersonLogo = styled.img.attrs({
  className: 'contact-person-logo'
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

const ContactPersonInfoItem = styled.div.attrs({
  className: 'contact-person-info-item'
})`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 4px;
  font-size: 14px;
  font-family: 'Sora', sans-serif;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const ContactPersonInfoGroup = styled.div.attrs({
  className: 'contact-person-info-group'
})`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 16px;
  padding: 0;
`;

const ContactPersonProfileImageSection = () => {
  return (
    <ContactPersonImageContainer>
      <ContactPersonGradientOverlay />
      <ContactPersonInfoSection>
        <ContactPersonLogo src="/DMA-uploads/81f50eda-4cdd-4aa2-b217-a1a96ca6757f.png" alt="Digital Marketing Agency Logo" />
        <ContactPersonInfoGroup>
          <ContactPersonInfoItem>
            <Mail size={16} />
            help@digitalmarketingng.com
          </ContactPersonInfoItem>
          <ContactPersonInfoItem>
            <Phone size={16} />
            +234 123 456 7890
          </ContactPersonInfoItem>
        </ContactPersonInfoGroup>
        <SocialIcons />
      </ContactPersonInfoSection>
    </ContactPersonImageContainer>
  );
};

export default ContactPersonProfileImageSection;
