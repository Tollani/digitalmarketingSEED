
import React, { useState } from 'react';
import styled from 'styled-components';
import { Clock, FileText, TrendingUp, Calendar, ExternalLink } from 'lucide-react';
import DashboardHeader from '../components/DashboardHeader';
import StatsCard from '../components/StatsCard';
import Footer from '../components/Footer';

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
  background: #7642FE;
  color: white;
  padding: 6px 12px;
  border-radius: 20px;
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  font-weight: 500;
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

const ChartDropdown = styled.select.attrs({
  className: 'chart-dropdown'
})`
  background: #F9FAFB;
  border: 1px solid #E5E7EB;
  border-radius: 6px;
  padding: 6px 12px;
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  color: #6B7280;
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

const ProjectList = styled.div.attrs({
  className: 'project-list'
})`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ProjectItem = styled.div.attrs({
  className: 'project-item'
})`
  border: 1px solid #E5E7EB;
  border-radius: 8px;
  padding: 16px;
  background: #F9FAFB;
`;

const ProjectHeader = styled.div.attrs({
  className: 'project-header'
})`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 12px;
`;

const ProjectInfo = styled.div.attrs({
  className: 'project-info'
})`
  flex: 1;
`;

const ProjectName = styled.h4.attrs({
  className: 'project-name'
})`
  font-family: 'Sora', sans-serif;
  font-size: 16px;
  font-weight: 600;
  color: #111827;
  margin: 0 0 4px 0;
`;

const ProjectDate = styled.span.attrs({
  className: 'project-date'
})`
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  color: #6B7280;
`;

const ViewLink = styled.a.attrs({
  className: 'view-link'
})`
  color: #7642FE;
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 4px;
  
  &:hover {
    text-decoration: underline;
  }
`;

const ProgressSection = styled.div.attrs({
  className: 'progress-section'
})`
  margin-top: 8px;
`;

const ProgressLabel = styled.div.attrs({
  className: 'progress-label'
})`
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  color: #6B7280;
  margin-bottom: 4px;
`;

const ProgressBar = styled.div.attrs({
  className: 'progress-bar'
})`
  background: #E5E7EB;
  height: 6px;
  border-radius: 3px;
  overflow: hidden;
`;

const ProgressFill = styled.div.attrs({
  className: 'progress-fill'
})<{ progress: number }>`
  background: #7642FE;
  height: 100%;
  width: ${props => props.progress}%;
  transition: width 0.3s ease;
`;

const ActivityList = styled.div.attrs({
  className: 'activity-list'
})`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const ActivityItem = styled.div.attrs({
  className: 'activity-item'
})`
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  color: #6B7280;
  line-height: 1.5;
`;

const DashboardReturningUser = () => {
  return (
    <DashboardContainer>
      <DashboardHeader isReturningUser={true} />
      
      <MainContent>
        <GreetingSection>
          <GreetingText>Hello, John! Good evening</GreetingText>
          <Badge>Payment</Badge>
        </GreetingSection>

        <StatsGrid>
          <StatsCard icon={Clock} value="2" label="Pending Requests" />
          <StatsCard icon={FileText} value="10" label="Total Projects" />
          <StatsCard icon={TrendingUp} value="1" label="In Progress" />
          <StatsCard icon={Calendar} value="7 days" label="Average Completion Time" />
        </StatsGrid>

        <ChartsGrid>
          <ChartContainer>
            <ChartHeader>
              <ChartTitle>Amount Spent ($)</ChartTitle>
              <ChartDropdown>
                <option>Monthly</option>
              </ChartDropdown>
            </ChartHeader>
            <ChartPlaceholder>
              Peak spending: $224.0
            </ChartPlaceholder>
          </ChartContainer>

          <ChartContainer>
            <ChartHeader>
              <ChartTitle>Project Stats</ChartTitle>
              <ChartDropdown>
                <option>Monthly</option>
              </ChartDropdown>
            </ChartHeader>
            <ChartPlaceholder>
              Pending: 2, Active: 1, Completed: 7
            </ChartPlaceholder>
          </ChartContainer>
        </ChartsGrid>

        <PanelsGrid>
          <Panel>
            <PanelTitle>Your Projects</PanelTitle>
            <ProjectList>
              <ProjectItem>
                <ProjectHeader>
                  <ProjectInfo>
                    <ProjectName>UI/UX Design</ProjectName>
                    <ProjectDate>Started: Jan 15, 2025</ProjectDate>
                  </ProjectInfo>
                  <ViewLink href="/project/1">
                    View Order <ExternalLink size={12} />
                  </ViewLink>
                </ProjectHeader>
                <ProgressSection>
                  <ProgressLabel>Progress: 50%</ProgressLabel>
                  <ProgressBar>
                    <ProgressFill progress={50} />
                  </ProgressBar>
                </ProgressSection>
              </ProjectItem>

              <ProjectItem>
                <ProjectHeader>
                  <ProjectInfo>
                    <ProjectName>SEO</ProjectName>
                    <ProjectDate>Started: Jan 10, 2025</ProjectDate>
                  </ProjectInfo>
                  <ViewLink href="/project/2">
                    View Order <ExternalLink size={12} />
                  </ViewLink>
                </ProjectHeader>
                <ProgressSection>
                  <ProgressLabel>Progress: 50%</ProgressLabel>
                  <ProgressBar>
                    <ProgressFill progress={50} />
                  </ProgressBar>
                </ProgressSection>
              </ProjectItem>
            </ProjectList>
          </Panel>

          <Panel>
            <PanelTitle>Recent Activities</PanelTitle>
            <ActivityList>
              <ActivityItem>Recent login 12:35</ActivityItem>
              <ActivityItem>Your UI/UX project is complete! 12:35</ActivityItem>
            </ActivityList>
          </Panel>
        </PanelsGrid>
      </MainContent>

      <Footer />
    </DashboardContainer>
  );
};

export default DashboardReturningUser;
