
import React, { useState } from 'react';
import styled from 'styled-components';
import { Clock, FileText, TrendingUp, Calendar, X } from 'lucide-react';
import DashboardHeader from '../components/DashboardHeader';
import StatsCard from '../components/StatsCard';
import Footer from '../components/Footer';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const DashboardContainer = styled.div.attrs({
  className: 'container'
})`
  min-height: 100vh;
  background: #F9FAFB;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main.attrs({
  className: 'main-content'
})`
  flex: 1;
  padding: 32px 24px;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;

const GreetingSection = styled.div.attrs({
  className: 'greeting-section'
})`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 32px;
`;

const GreetingText = styled.h1.attrs({
  className: 'greeting-text'
})`
  font-family: 'Sora', sans-serif;
  font-size: 28px;
  font-weight: 700;
  color: #111827;
  margin: 0;
`;

const Badge = styled.span.attrs({
  className: 'greeting-badge'
})`
  background: white;
  border: 2px solid #7642FE;
  color: #7642FE;
  padding: 6px 12px;
  border-radius: 20px;
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  font-weight: 500;
`;

const NotificationBanner = styled.div.attrs({
  className: 'notification-banner'
})<{ visible: boolean }>`
  background: #EFF6FF;
  border: 1px solid #DBEAFE;
  border-radius: 12px;
  padding: 16px 20px;
  margin-bottom: 32px;
  display: ${props => props.visible ? 'flex' : 'none'};
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  position: relative;
`;

const NotificationContent = styled.div.attrs({
  className: 'notification-content'
})`
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1;
`;

const NotificationIcon = styled.div.attrs({
  className: 'notification-icon'
})`
  width: 40px;
  height: 40px;
  background: #7642FE;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 18px;
  flex-shrink: 0;
`;

const NotificationTextContainer = styled.div.attrs({
  className: 'notification-text-container'
})`
  flex: 1;
`;

const NotificationTitle = styled.h4.attrs({
  className: 'notification-title'
})`
  font-family: 'Sora', sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: #111827;
  margin: 0 0 4px 0;
`;

const NotificationText = styled.p.attrs({
  className: 'notification-text'
})`
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  color: #6B7280;
  margin: 0;
`;

const NotificationActions = styled.div.attrs({
  className: 'notification-actions'
})`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const UpdateButton = styled.button.attrs({
  className: 'update-button'
})`
  background: #7642FE;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 8px;
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s ease;
  
  &:hover {
    background: #5f35cc;
  }
`;

const CloseButton = styled.button.attrs({
  className: 'close-button'
})`
  background: none;
  border: none;
  color: #6B7280;
  cursor: pointer;
  padding: 4px;
  transition: color 0.2s ease;
  
  &:hover {
    color: #374151;
  }
`;

const StatsGrid = styled.div.attrs({
  className: 'stats-grid'
})`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 24px;
  margin-bottom: 32px;
`;

const ChartsGrid = styled.div.attrs({
  className: 'charts-grid'
})`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-bottom: 32px;
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
  }
`;

const ChartContainer = styled.div.attrs({
  className: 'graph-container'
})`
  background: white;
  border: 1px solid #E5E7EB;
  border-radius: 12px;
  padding: 24px;
`;

const ChartHeader = styled.div.attrs({
  className: 'chart-header'
})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const ChartTitle = styled.h3.attrs({
  className: 'chart-title'
})`
  font-family: 'Sora', sans-serif;
  font-size: 18px;
  font-weight: 600;
  color: #111827;
  margin: 0;
`;

const ChartDropdownButton = styled.button.attrs({
  className: 'chart-dropdown-button'
})`
  background: #F9FAFB;
  border: 1px solid #E5E7EB;
  border-radius: 6px;
  padding: 6px 12px;
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  color: #6B7280;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
  
  &:hover {
    background: #F3F4F6;
  }
`;

const ChartPlaceholder = styled.div.attrs({
  className: 'chart-placeholder'
})`
  height: 200px;
  background: #F9FAFB;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #9CA3AF;
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
`;

const PanelsGrid = styled.div.attrs({
  className: 'panels-grid'
})`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Panel = styled.div.attrs({
  className: 'panel'
})`
  background: white;
  border: 1px solid #E5E7EB;
  border-radius: 12px;
  padding: 24px;
`;

const PanelTitle = styled.h3.attrs({
  className: 'panel-title'
})`
  font-family: 'Sora', sans-serif;
  font-size: 18px;
  font-weight: 600;
  color: #111827;
  margin: 0 0 16px 0;
`;

const PanelContent = styled.p.attrs({
  className: 'panel-content'
})`
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  color: #6B7280;
  margin: 0;
  line-height: 1.5;
`;

const DashboardNewClient = () => {
  const [showNotification, setShowNotification] = useState(true);

  const handleUpdateProfile = () => {
    console.log('Update profile clicked');
    // Navigate to profile update page or show modal
  };

  const handleCloseNotification = () => {
    setShowNotification(false);
  };

  return (
    <DashboardContainer>
      <DashboardHeader isReturningUser={false} />
      
      <MainContent>
        <GreetingSection>
          <GreetingText>Hello, John!</GreetingText>
          <Badge>Good evening</Badge>
        </GreetingSection>

        <NotificationBanner visible={showNotification}>
          <NotificationContent>
            <NotificationIcon>ℹ</NotificationIcon>
            <NotificationTextContainer>
              <NotificationTitle>Complete your profile</NotificationTitle>
              <NotificationText>
                Your profile is 60% complete. Complete your profile for a better experience
              </NotificationText>
            </NotificationTextContainer>
          </NotificationContent>
          <NotificationActions>
            <UpdateButton onClick={handleUpdateProfile}>
              Update profile
            </UpdateButton>
            <CloseButton onClick={handleCloseNotification}>
              <X size={16} />
            </CloseButton>
          </NotificationActions>
        </NotificationBanner>

        <StatsGrid>
          <StatsCard icon={Clock} value="0" label="Pending Requests" />
          <StatsCard icon={FileText} value="0" label="Total Projects" />
          <StatsCard icon={TrendingUp} value="0" label="In Progress" />
          <StatsCard icon={Calendar} value="0 days" label="Average Completion Time" />
        </StatsGrid>

        <ChartsGrid>
          <ChartContainer>
            <ChartHeader>
              <ChartTitle>Amount Spent ($)</ChartTitle>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <ChartDropdownButton>
                    Monthly ▼
                  </ChartDropdownButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white">
                  <DropdownMenuItem>Daily</DropdownMenuItem>
                  <DropdownMenuItem>Monthly</DropdownMenuItem>
                  <DropdownMenuItem>Yearly</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </ChartHeader>
            <ChartPlaceholder>
              You have no projects.<br />
              Select on 'New request' to request for a service
            </ChartPlaceholder>
          </ChartContainer>

          <ChartContainer>
            <ChartHeader>
              <ChartTitle>Project Stats</ChartTitle>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <ChartDropdownButton>
                    Monthly ▼
                  </ChartDropdownButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white">
                  <DropdownMenuItem>Daily</DropdownMenuItem>
                  <DropdownMenuItem>Monthly</DropdownMenuItem>
                  <DropdownMenuItem>Yearly</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </ChartHeader>
            <ChartPlaceholder>
              No project data available
            </ChartPlaceholder>
          </ChartContainer>
        </ChartsGrid>

        <PanelsGrid>
          <Panel>
            <PanelTitle>Your Projects</PanelTitle>
            <PanelContent>
              You have no projects.<br />
              Select on 'New request' to request for a service
            </PanelContent>
          </Panel>

          <Panel>
            <PanelTitle>Recent Activities</PanelTitle>
            <PanelContent>
              Recent login<br />
              12:35
            </PanelContent>
          </Panel>
        </PanelsGrid>
      </MainContent>

      <Footer />
    </DashboardContainer>
  );
};

export default DashboardNewClient;
