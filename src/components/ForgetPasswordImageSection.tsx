
import React from 'react';
import styled from 'styled-components';
import { Mail, Phone } from 'lucide-react';
import SocialIcons from './SocialIcons';

const ForgetPasswordImageContainer = styled.div.attrs({
  className: 'forget-password-image-container'
})`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
`;

const ForgetPasswordBackgroundImage = styled.img.attrs({
  className: 'forget-password-background-image'
})`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ForgetPasswordOverlay = styled.div.attrs({
  className: 'forget-password-overlay'
})`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0, 16, 59, 0.9) 0%, rgba(0, 16, 59, 0.7) 50%, transparent 100%);
  color: white;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  
  @media (max-width: 768px) {
    padding: 20px;
    text-align: center;
    align-items: center;
  }
`;

const ForgetPasswordLogo = styled.img.attrs({
  className: 'forget-password-logo'
})`
  width: 200px;
  height: auto;
  margin-bottom: 8px;
  display: block;
  object-fit: contain;
  
  @media (max-width: 768px) {
    width: 180px;
  }
`;

const ForgetPasswordContactInfo = styled.div.attrs({
  className: 'forget-password-contact-info'
})`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 16px;
  padding: 0;
  font-family: 'Sora', sans-serif;
  font-size: 14px;
`;

const ForgetPasswordContactItem = styled.div.attrs({
  className: 'forget-password-contact-item'
})`
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 0;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const ForgetPasswordImageSection = () => {
  return (
    <ForgetPasswordImageContainer>
      <ForgetPasswordBackgroundImage 
        src="/DMA-uploads/27ec01aa-2104-4f9f-9474-c97ad677852c.png" 
        alt="Digital Marketing Agency - Forget Password"
      />
      <ForgetPasswordOverlay>
        <ForgetPasswordLogo src="/DMA-uploads/81f50eda-4cdd-4aa2-b217-a1a96ca6757f.png" alt="Digital Marketing Agency Logo" />
        <ForgetPasswordContactInfo>
          <ForgetPasswordContactItem>
            <Mail size={16} />
            <span>help@digitalmarketingng.com</span>
          </ForgetPasswordContactItem>
          <ForgetPasswordContactItem>
            <Phone size={16} />
            <span>+234 123 456 7890</span>
          </ForgetPasswordContactItem>
        </ForgetPasswordContactInfo>
        <SocialIcons />
      </ForgetPasswordOverlay>
    </ForgetPasswordImageContainer>
  );
};

export default ForgetPasswordImageSection;
