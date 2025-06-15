
import React from 'react';
import styled from 'styled-components';

const AlertContainer = styled.div.attrs({
  className: 'alert-container'
})<{ visible: boolean }>`
  display: ${props => props.visible ? 'flex' : 'none'};
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  background-color: #FEF2F2;
  border: 1px solid #FECACA;
  border-radius: 8px;
  margin-bottom: 8px;
`;

const AlertIcon = styled.div.attrs({
  className: 'alert-icon'
})`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: #EF4444;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 12px;
  font-weight: bold;
  flex-shrink: 0;
`;

const AlertMessage = styled.span.attrs({
  className: 'alert-message'
})`
  color: #991B1B;
  font-size: 14px;
  font-family: 'Poppins', sans-serif;
  line-height: 1.4;
`;

interface AlertProps {
  message: string;
  visible: boolean;
}

const Alert: React.FC<AlertProps> = ({ message, visible }) => {
  return (
    <AlertContainer visible={visible}>
      <AlertIcon>!</AlertIcon>
      <AlertMessage>{message}</AlertMessage>
    </AlertContainer>
  );
};

export default Alert;
