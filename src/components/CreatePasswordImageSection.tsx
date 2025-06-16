
import React from 'react';
import styled from 'styled-components';
import { Mail, Phone } from 'lucide-react';
import SocialIcons from './SocialIcons';

const CreatePasswordImageContainer = styled.div.attrs({
  className: 'create-password-image-container'
})`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  overflow: hidden;
`;

const CreatePasswordBackgroundImage = styled.div.attrs({
  className: 'create-password-background-image'
})`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('/DMA-uploads/aec76fd4-e352-49eb-b87b-68bdb9022190.png');
  background-size: cover;
  background-position: center;
`;

const CreatePasswordGradientOverlay = styled.div.attrs({
  className: 'create-password-gradient-overlay'
})`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60%;
  background: linear-gradient(to top, rgba(0, 16, 59, 0.9) 0%, rgba(0, 16, 59, 0.7) 50%, transparent 100%);
  z-index: 1;
`;

const CreatePasswordContentOverlay = styled.div.attrs({
  className: 'create-password-content-overlay'
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

const CreatePasswordLogo = styled.img.attrs({
  className: 'create-password-logo'
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

const CreatePasswordContactInfo = styled.div.attrs({
  className: 'create-password-contact-info'
})`
  margin-bottom: 16px;
  padding: 0;
`;

const CreatePasswordContactItem = styled.p.attrs({
  className: 'create-password-contact-item'
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

const CreatePasswordImageSection = () => {
  return (
    <CreatePasswordImageContainer>
      <CreatePasswordBackgroundImage />
      <CreatePasswordGradientOverlay />
      <CreatePasswordContentOverlay>
        <CreatePasswordLogo src="/DMA-uploads/81f50eda-4cdd-4aa2-b217-a1a96ca6757f.png" alt="Digital Marketing Agency Logo" />
        <CreatePasswordContactInfo>
          <CreatePasswordContactItem>
            <Mail size={16} />
            help@digitalmarketingng.com
          </CreatePasswordContactItem>
          <CreatePasswordContactItem>
            <Phone size={16} />
            +234 123 456 7890
          </CreatePasswordContactItem>
        </CreatePasswordContactInfo>
        <SocialIcons />
      </CreatePasswordContentOverlay>
    </CreatePasswordImageContainer>
  );
};

export default CreatePasswordImageSection;
