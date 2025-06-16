
import React from 'react';
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

const ProgressBarsContainer = styled.div`
  display: flex;
  gap: 8px;
  width: 100%;
  max-width: 200px;
`;

const ProgressBar = styled.div<{ isCompleted: boolean }>`
  height: 4px;
  flex: 1;
  border-radius: 2px;
  background-color: ${props => props.isCompleted ? '#7642FE' : '#E5E7EB'};
`;

const ProgressIndicator = () => {
  return (
    <ProgressContainer>
      <ProgressBarsContainer>
        <ProgressBar isCompleted={true} />
        <ProgressBar isCompleted={false} />
      </ProgressBarsContainer>
    </ProgressContainer>
  );
};

export default ProgressIndicator;
