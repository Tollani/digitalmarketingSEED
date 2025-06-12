
import React from 'react';
import styled from 'styled-components';
import { Mail, Phone } from 'lucide-react';
import SocialIcons from './SocialIcons';

const ImageSectionContainer = styled.div`
  width: 100%;
  height: 100%;
  background-image: url('/lovable-uploads/8deb37e4-5ae4-4872-992a-1c70885b9e34.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const GradientOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50%;
  background: linear-gradient(
    to top,
    rgba(30, 58, 138, 0.7) 0%,
    rgba(30, 58, 138, 0.5) 50%,
    transparent 100%
  );
`;

const ContentWrapper = styled.div`
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

const BrandingOverlay = styled.div`
  position: absolute;
  top: -149px;
  left: -71px;
  width: 300px;
  height: 74px;
  z-index: 3;
  
  @media (max-width: 768px) {
    position: relative;
    top: 0;
    left: 0;
    margin: 0 auto 20px auto;
    width: 250px;
    height: auto;
  }
`;

const BrandingImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
`;

const ContactEmail = styled.div`
  color: white;
  font-weight: 400;
  font-size: 14px;
  font-family: 'Sora', sans-serif;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 14px;
  font-family: 'Sora', sans-serif;
  color: white;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const ImageSection = () => {
  return (
    <ImageSectionContainer>
      <GradientOverlay />
      <BrandingOverlay>
        <BrandingImage 
          src="/lovable-uploads/3cf04415-b0af-4cc0-87e4-d87dc84a2df4.png" 
          alt="DMA Digital Marketing Agency Logo" 
        />
      </BrandingOverlay>
      <ContentWrapper>
        <ContactEmail>help@digitalmarketingng.com</ContactEmail>
        <ContactItem>
          <Phone size={16} />
          +234 123 456 7890
        </ContactItem>
        <SocialIcons />
      </ContentWrapper>
    </ImageSectionContainer>
  );
};

export default ImageSection;
