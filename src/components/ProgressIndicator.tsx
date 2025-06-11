
import React from 'react';
import { Progress } from '@/components/ui/progress';
import styled from 'styled-components';

const ProgressContainer = styled.div`
  width: 100%;
  padding: 20px 40px;
  background: white;
  border-bottom: 1px solid #E5E7EB;
  
  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const ProgressText = styled.p`
  font-size: 14px;
  color: #6B7280;
  margin-bottom: 8px;
  font-family: 'Poppins', sans-serif;
`;

const ProgressIndicator = () => {
  return (
    <ProgressContainer>
      <ProgressText>Step 6 of 6</ProgressText>
      <Progress value={100} className="h-2" />
    </ProgressContainer>
  );
};

export default ProgressIndicator;
