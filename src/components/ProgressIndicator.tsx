
import React from 'react';
import styled from 'styled-components';

const ProgressContainer = styled.div.attrs({
  className: 'progress-container'
})`
  width: 100%;
  height: 80px;
  background: #F8FAFC;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #E2E8F0;
`;

const ProgressWrapper = styled.div.attrs({
  className: 'progress-wrapper'
})`
  display: flex;
  gap: 8px;
  width: 100%;
  max-width: 200px;
`;

const ProgressStep = styled.div.attrs({
  className: 'progress-step'
})<{ active: boolean }>`
  height: 4px;
  flex: 1;
  border-radius: 2px;
  background-color: ${props => props.active ? '#7642FE' : '#E2E8F0'};
  transition: background-color 0.3s ease;
`;

const ProgressIndicator = () => {
  return (
    <ProgressContainer>
      <ProgressWrapper>
        <ProgressStep active={true} />
        <ProgressStep active={false} />
      </ProgressWrapper>
    </ProgressContainer>
  );
};

export default ProgressIndicator;
