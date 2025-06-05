
import React from 'react';
import styled from 'styled-components';

const ImageContainer = styled.div`
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

const ForgetPasswordImageSection = () => {
  return (
    <ImageContainer>
      <Image 
        src="/lovable-uploads/27ec01aa-2104-4f9f-9474-c97ad677852c.png" 
        alt="Digital Marketing Agency - Forget Password"
      />
    </ImageContainer>
  );
};

export default ForgetPasswordImageSection;
