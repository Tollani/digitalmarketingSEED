
import React from 'react';
import styled from 'styled-components';
import { Mail, Phone } from 'lucide-react';
import SocialIcons from './SocialIcons';

const SignUpImageContainer = styled.div.attrs({
  className: 'signup-image-container'
})`
  width: 50%;
  height: 100%;
  background-image: linear-gradient(
    to top,
    rgba(0, 16, 59, 0.7) 0%,
    transparent 100%
  ), url('/DMA-uploads/d73df5b9-3489-4658-b8a1-cd4c182998f5.png');
  background-size:auto;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: fixed;
`;

const SignUpContactInfo = styled.div.attrs({
  className: 'signup-contact-info'
})`
  padding: 30px;
  color: white;
  
  @media (max-width: 768px) {
    padding: 20px;
    text-align: center;
  }
`;

const SignUpLogo = styled.img.attrs({
  className: 'signup-logo'
})`
  width: 200px;
  height: auto;
  margin-bottom: 8px;
  
  @media (max-width: 768px) {
    width: 180px;
    margin: 0 auto 8px auto;
  }
`;

const SignUpContactItem = styled.div.attrs({
  className: 'signup-contact-item'
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

const SignUpContactGroup = styled.div.attrs({
  className: 'signup-contact-group'
})`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 16px;
  padding: 0;
`;

const SignUpImageSection = () => {
  return (
    <SignUpImageContainer>
      <SignUpContactInfo>
        <SignUpLogo src="/DMA-uploads/81f50eda-4cdd-4aa2-b217-a1a96ca6757f.png" alt="Digital Marketing Agency Logo" />
        <SignUpContactGroup>
          <SignUpContactItem>
            <Mail size={16} />
            help@digitalmarketingng.com
          </SignUpContactItem>
          <SignUpContactItem>
            <Phone size={16} />
            +234 123 456 7890
          </SignUpContactItem>
        </SignUpContactGroup>
        <SocialIcons />
      </SignUpContactInfo>
    </SignUpImageContainer>
  );
};

export default SignUpImageSection;
