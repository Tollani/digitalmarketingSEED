
import React from 'react';
import styled from 'styled-components';
import { Mail, Phone } from 'lucide-react';
import SocialIcons from './SocialIcons';

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
    to top,
    rgba(0, 16, 59, 0.7) 0%,
    transparent 100%
  ), url('/lovable-uploads/d73df5b9-3489-4658-b8a1-cd4c182998f5.png');
  background-size:auto;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: fixed;
`;

const ContactInfo = styled.div`
  padding: 30px;
  color: white;
  
  @media (max-width: 768px) {
    padding: 20px;
    text-align: center;
  }
`;

const Logo = styled.img`
  width: 200px;
  height: auto;
  margin-bottom: 8px;
  
  @media (max-width: 768px) {
    width: 180px;
    margin: 0 auto 8px auto;
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 4px;
  font-size: 14px;
  font-family: 'Poppins', sans-serif;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const ContactGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 16px;
  padding: 0;
`;

const SignUpImageSection = () => {
  return (
    <ImageContainer>
      <ContactInfo>
        <Logo src="/lovable-uploads/81f50eda-4cdd-4aa2-b217-a1a96ca6757f.png" alt="Digital Marketing Agency Logo" />
        <ContactGroup>
          <ContactItem>
            <Mail size={16} />
            help@digitalmarketingng.com
          </ContactItem>
          <ContactItem>
            <Phone size={16} />
            +234 123 456 7890
          </ContactItem>
        </ContactGroup>
        <SocialIcons />
      </ContactInfo>
    </ImageContainer>
  );
};

export default SignUpImageSection;
