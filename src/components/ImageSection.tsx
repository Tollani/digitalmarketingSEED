
import React from 'react';
import styled from 'styled-components';
import { Mail, Phone } from 'lucide-react';
import SocialIcons from './SocialIcons';

const MainImageContainer = styled.div.attrs({
  className: 'main-image-container'
})`
  width: 50%;
  height: 100%;
  background-image: linear-gradient(
    to top,
    rgba(0, 16, 59, 0.7) 0%,
    transparent 100%
  ), url('/DMA-uploads/12ff7025-87d4-426c-9a19-eca147fe2274.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: fixed;
`;

const ContactInfoSection = styled.div.attrs({
  className: 'contact-info-section'
})`
  padding: 30px;
  color: white;
  
  @media (max-width: 768px) {
    padding: 20px;
    text-align: center;
  }
`;

const CompanyLogo = styled.img.attrs({
  className: 'company-logo'
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

const ContactInfoItem = styled.div.attrs({
  className: 'contact-info-item'
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

const ContactInfoGroup = styled.div.attrs({
  className: 'contact-info-group'
})`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 16px;
  padding: 0;
`;

const ImageSection = () => {
  return (
    <MainImageContainer>
      <ContactInfoSection>
        <CompanyLogo src="/DMA-uploads/81f50eda-4cdd-4aa2-b217-a1a96ca6757f.png" alt="Digital Marketing Agency Logo" />
        <ContactInfoGroup>
          <ContactInfoItem>
            <Mail size={16} />
            help@digitalmarketingng.com
          </ContactInfoItem>
          <ContactInfoItem>
            <Phone size={16} />
            +234 123 456 7890
          </ContactInfoItem>
        </ContactInfoGroup>
        <SocialIcons />
      </ContactInfoSection>
    </MainImageContainer>
  );
};

export default ImageSection;
