
import React, { useState } from 'react';
import styled from 'styled-components';
import { Search, ChevronDown, User } from 'lucide-react';

const HeaderContainer = styled.header.attrs({
  className: 'header'
})`
  background: white;
  padding: 16px 24px;
  border-bottom: 1px solid #E5E7EB;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

const LogoSection = styled.div.attrs({
  className: 'logo-section'
})`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const LogoImage = styled.img.attrs({
  className: 'logo-image'
})`
  width: 40px;
  height: 40px;
`;

const LogoText = styled.div.attrs({
  className: 'logo-text'
})`
  color: #7642FE;
  font-family: 'Sora', sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.2;
`;

const Navigation = styled.nav.attrs({
  className: 'navigation'
})`
  display: flex;
  align-items: center;
  gap: 32px;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a.attrs({
  className: 'nav-link'
})`
  color: #374151;
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  text-decoration: none;
  transition: color 0.2s ease;
  
  &:hover {
    color: #7642FE;
  }
`;

const MessagesBadge = styled.span.attrs({
  className: 'messages-badge'
})`
  background: #7642FE;
  color: white;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  margin-left: 4px;
`;

const RightSection = styled.div.attrs({
  className: 'right-section'
})`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const SearchContainer = styled.div.attrs({
  className: 'search-container'
})`
  position: relative;
  display: flex;
  align-items: center;
`;

const SearchInput = styled.input.attrs({
  className: 'search-input'
})`
  background: #F9FAFB;
  border: 1px solid #E5E7EB;
  border-radius: 8px;
  padding: 8px 12px 8px 36px;
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  width: 200px;
  
  &:focus {
    outline: 2px solid #7642FE;
    outline-offset: -2px;
  }
`;

const SearchIcon = styled(Search).attrs({
  className: 'search-icon'
})`
  position: absolute;
  left: 10px;
  color: #9CA3AF;
  width: 16px;
  height: 16px;
`;

const UserProfileContainer = styled.div.attrs({
  className: 'user-profile-container'
})`
  position: relative;
`;

const UserProfileButton = styled.button.attrs({
  className: 'user-profile-button'
})`
  background: #F3F4F6;
  border: 1px solid #E5E7EB;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.2s ease;
  
  &:hover {
    background: #E5E7EB;
  }
`;

const DropdownMenu = styled.div.attrs({
  className: 'dropdown-menu'
})<{ isOpen: boolean }>`
  position: absolute;
  top: 100%;
  right: 0;
  background: white;
  border: 1px solid #E5E7EB;
  border-radius: 8px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  padding: 8px 0;
  min-width: 160px;
  z-index: 50;
  display: ${props => props.isOpen ? 'block' : 'none'};
  margin-top: 8px;
`;

const DropdownItem = styled.a.attrs({
  className: 'dropdown-item'
})`
  display: block;
  padding: 8px 16px;
  color: #374151;
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  text-decoration: none;
  transition: background 0.2s ease;
  
  &:hover {
    background: #F3F4F6;
  }
`;

interface DashboardHeaderProps {
  isReturningUser?: boolean;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({ isReturningUser = false }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogout = () => {
    console.log('Logout clicked');
    // Navigate to sign in page
    window.location.href = '/';
  };

  return (
    <HeaderContainer>
      <LogoSection>
        <LogoImage src="/lovable-uploads/9151f3ef-ba23-444e-98d3-3f78b4ab32a2.png" alt="DMA Logo" />
        <LogoText>
          DMA
        </LogoText>
      </LogoSection>

      <Navigation>
        <NavLink href="/services">Services</NavLink>
        <NavLink href="/messages">
          Messages
          <MessagesBadge>2</MessagesBadge>
        </NavLink>
        <NavLink href="/projects">Projects</NavLink>
        <NavLink href="/payments-billings">Payments & Billings</NavLink>
      </Navigation>

      <RightSection>
        <SearchContainer>
          <SearchIcon />
          <SearchInput placeholder="Search..." />
        </SearchContainer>

        <UserProfileContainer>
          <UserProfileButton onClick={toggleDropdown}>
            <User size={20} color="#6B7280" />
          </UserProfileButton>
          
          {isReturningUser && (
            <DropdownMenu isOpen={dropdownOpen}>
              <DropdownItem href="/profile">Your Profile</DropdownItem>
              <DropdownItem href="/dashboard">Dashboard</DropdownItem>
              <DropdownItem href="/settings">Settings</DropdownItem>
              <DropdownItem href="#" onClick={handleLogout}>Logout</DropdownItem>
            </DropdownMenu>
          )}
        </UserProfileContainer>
      </RightSection>
    </HeaderContainer>
  );
};

export default DashboardHeader;
