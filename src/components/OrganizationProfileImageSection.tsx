
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
  ), url('/lovable-uploads/8deb37e4-5ae4-4872-992a-1c70885b9e34.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
`;

const ContactInfo = styled.div`
  padding: 20px;
  color: white;
`;

const Logo = styled.img`
  width: 80px;
  height: auto;
  margin: 0;
  margin-bottom: 0;
  display: block;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0;
  font-size: 14px;
  font-family: 'Poppins', sans-serif;
  line-height: 1.2;
`;

const ContactGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin: 0;
  padding: 0;
`;

const OrganizationProfileImageSection = () => {
  return (
    <ImageContainer>
      <ContactInfo>
        <Logo src="/lovable-uploads/bccf7651-1547-4753-9c4d-2fc337d2e22a.png" alt="Digital Marketing Agency Logo" />
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

export default OrganizationProfileImageSection;
