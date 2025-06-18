
import React from 'react';
import styled from 'styled-components';
import { LucideIcon } from 'lucide-react';

const CardContainer = styled.div.attrs({
  className: 'stats-card'
})`
  background: white;
  border: 1px solid #E5E7EB;
  border-radius: 12px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: box-shadow 0.2s ease;
  
  &:hover {
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  }
`;

const IconContainer = styled.div.attrs({
  className: 'icon-container'
})`
  width: 48px;
  height: 48px;
  background: #F3F4F6;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Value = styled.div.attrs({
  className: 'stats-value'
})`
  font-family: 'Sora', sans-serif;
  font-size: 32px;
  font-weight: 700;
  color: #111827;
  line-height: 1;
`;

const Label = styled.div.attrs({
  className: 'stats-label'
})`
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  color: #6B7280;
  font-weight: 400;
`;

interface StatsCardProps {
  icon: LucideIcon;
  value: string | number;
  label: string;
}

const StatsCard: React.FC<StatsCardProps> = ({ icon: Icon, value, label }) => {
  return (
    <CardContainer>
      <IconContainer>
        <Icon size={24} color="#7642FE" />
      </IconContainer>
      <Value>{value}</Value>
      <Label>{label}</Label>
    </CardContainer>
  );
};

export default StatsCard;
