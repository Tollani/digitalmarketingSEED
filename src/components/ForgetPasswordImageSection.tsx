
import React from 'react';
import styled from 'styled-components';
import { Mail, Phone } from 'lucide-react';
import SocialIcons from './SocialIcons';

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0, 16, 59, 0.9) 0%, rgba(0, 16, 59, 0.7) 50%, transparent 100%);
  color: white;
  padding: 40px 30px 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
`;

const Logo = styled.img`
  width: 120px;
  height: auto;
  margin-bottom: 2px;
  display: block;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 20px;
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const ForgetPasswordImageSection = () => {
  return (
    <ImageContainer>
      <Image 
        src="/lovable-uploads/27ec01aa-2104-4f9f-9474-c97ad677852c.png" 
        alt="Digital Marketing Agency - Forget Password"
      />
      <Overlay>
        <ContactInfo>
          <Logo src="/lovable-uploads/62d34d9a-8807-4c0b-acfd-d014738bec3c.png" alt="Digital Marketing Agency Logo" />
          <ContactItem>
            <Mail size={16} />
            <span>help@digitalmarketingng.com</span>
          </ContactItem>
          <ContactItem>
            <Phone size={16} />
            <span>+234 123 456 7890</span>
          </ContactItem>
        </ContactInfo>
        <SocialIcons />
      </Overlay>
    </ImageContainer>
  );
};

export default ForgetPasswordImageSection;
