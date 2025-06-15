
import React from 'react';
import styled from 'styled-components';
import { AlertCircle } from 'lucide-react';

const AlertContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  padding: 10px;
  background-color: #FEE2E2;
  border-left: 3px solid #EF4444;
  border-radius: 8px;
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #1F2937;
  line-height: 1.4;
`;

const IconWrapper = styled.div`
  color: #EF4444;
  margin-top: 1px;
`;

const AlertText = styled.span`
  flex: 1;
`;

interface AlertProps {
  message: string;
  visible: boolean;
}

const Alert: React.FC<AlertProps> = ({ message, visible }) => {
  if (!visible) return null;

  return (
    <AlertContainer>
      <IconWrapper>
        <AlertCircle size={16} />
      </IconWrapper>
      <AlertText>{message}</AlertText>
    </AlertContainer>
  );
};

export default Alert;
