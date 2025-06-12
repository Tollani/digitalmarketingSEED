
import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Camera } from 'lucide-react';
import Button from './Button';
import UploadArea from './UploadArea';

const OrganizationFormContainer = styled.div`
  width: 100%;
  max-width: 500px;
  font-family: 'Sora', sans-serif;
`;

const PageHeaderTitle = styled.h1`
  font-size: 32px;
  font-weight: 700;
  line-height: 40px;
  letter-spacing: -0.15px;
  width: 275px;
  height: 40px;
  color: #7642FE;
  margin: 0 0 8px 0;
  text-align: left;
`;

const PageSubtitle = styled.p`
  font-size: 16px;
  color: #6B7280;
  margin: 0 0 32px 0;
  text-align: left;
`;

const OrganizationFormSection = styled.div`
  margin-bottom: 24px;
`;

const OrganizationSectionTitle = styled.h3`
  font-size: 16px;
  font-weight: 400;
  color: #1F2937;
  margin: 0 0 16px 0;
`;

const OrganizationFieldGroup = styled.div`
  margin-bottom: 20px;
`;

const OrganizationFieldLabel = styled.label`
  display: block;
  font-size: 16px;
  color: #1F2937;
  margin-bottom: 8px;
  font-weight: 400;
`;

const OrganizationInputField = styled.input`
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #D1D5DB;
  border-radius: 8px;
  font-size: 16px;
  font-family: 'Sora', sans-serif;
  box-sizing: border-box;
  
  &:focus {
    outline: none;
    border-color: #7642FE;
    box-shadow: 0 0 0 3px rgba(118, 66, 254, 0.1);
  }
`;

const OrganizationSelectField = styled.select`
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #D1D5DB;
  border-radius: 8px;
  font-size: 16px;
  font-family: 'Sora', sans-serif;
  background-color: white;
  box-sizing: border-box;
  
  &:focus {
    outline: none;
    border-color: #7642FE;
    box-shadow: 0 0 0 3px rgba(118, 66, 254, 0.1);
  }
`;

const OrganizationProfilePictureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const OrganizationProfilePictureUpload = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 2px dashed #D1D5DB;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  background: #F9FAFB;
  
  @media (max-width: 480px) {
    width: 100px;
    height: 100px;
  }
`;

const OrganizationProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;

const OrganizationHiddenInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
`;

const OrganizationDocumentSection = styled.div`
  margin-bottom: 32px;
`;

const OrganizationDocumentSubtitle = styled.p`
  font-size: 14px;
  color: #6B7280;
  margin: 8px 0;
  line-height: 1.4;
`;

const OrganizationSkipLink = styled.button`
  background: none;
  border: none;
  color: #7642FE;
  font-size: 14px;
  cursor: pointer;
  text-decoration: underline;
  margin-top: 16px;
  font-family: 'Sora', sans-serif;
  
  &:hover {
    color: #5f35cc;
  }
`;

const OrganizationProfileForm = () => {
  const navigate = useNavigate();
  const [profilePicture, setProfilePicture] = useState<string | null>(null);
  const [organizationName, setOrganizationName] = useState('');
  const [address, setAddress] = useState('');
  const [country, setCountry] = useState('');
  const [organizationType, setOrganizationType] = useState('');
  const [industry, setIndustry] = useState('');
  const [rcNumber, setRcNumber] = useState('');
  const [staffSize, setStaffSize] = useState('');
  const [documents, setDocuments] = useState<string[]>([]);

  const handleProfilePictureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfilePicture(imageUrl);
    }
  };

  const handleDocumentUpload = (imageUrl: string) => {
    setDocuments([...documents, imageUrl]);
  };

  const isFormValid = () => {
    return organizationName && address && country && organizationType && industry && rcNumber && staffSize && documents.length > 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid()) {
      const formData = {
        profilePicture,
        organizationName,
        address,
        country,
        organizationType,
        industry,
        rcNumber,
        staffSize,
        documents
      };
      console.log('Organization profile data:', formData);
      navigate('/');
    }
  };

  const handleSkip = () => {
    console.log('Profile completion skipped');
    navigate('/');
  };

  return (
    <OrganizationFormContainer>
      <PageHeaderTitle>Organization Profile</PageHeaderTitle>
      <PageSubtitle>Complete the KYC registration for your organization</PageSubtitle>
      
      <form onSubmit={handleSubmit}>
        <OrganizationFormSection>
          <OrganizationSectionTitle>Upload Your Profile Picture</OrganizationSectionTitle>
          <OrganizationProfilePictureContainer>
            <OrganizationProfilePictureUpload>
              {profilePicture ? (
                <OrganizationProfileImage src={profilePicture} alt="Profile" />
              ) : (
                <Camera size={32} color="#6B7280" />
              )}
              <OrganizationHiddenInput
                type="file"
                accept="image/*"
                onChange={handleProfilePictureChange}
              />
            </OrganizationProfilePictureUpload>
          </OrganizationProfilePictureContainer>
        </OrganizationFormSection>

        <OrganizationFieldGroup>
          <OrganizationFieldLabel>Organization Name</OrganizationFieldLabel>
          <OrganizationInputField
            type="text"
            value={organizationName}
            onChange={(e) => setOrganizationName(e.target.value)}
            placeholder=""
          />
        </OrganizationFieldGroup>

        <OrganizationFieldGroup>
          <OrganizationFieldLabel>Organization Address</OrganizationFieldLabel>
          <OrganizationInputField
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder=""
          />
        </OrganizationFieldGroup>

        <OrganizationFieldGroup>
          <OrganizationFieldLabel>Country</OrganizationFieldLabel>
          <OrganizationSelectField
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          >
            <option value="">Select...</option>
            <option value="Nigeria">Nigeria</option>
            <option value="Niger">Niger</option>
            <option value="South Africa">South Africa</option>
            <option value="Cuba">Cuba</option>
          </OrganizationSelectField>
        </OrganizationFieldGroup>

        <OrganizationFieldGroup>
          <OrganizationFieldLabel>Organization Type</OrganizationFieldLabel>
          <OrganizationSelectField
            value={organizationType}
            onChange={(e) => setOrganizationType(e.target.value)}
          >
            <option value="">Select...</option>
            <option value="Sole Proprietorship">Sole Proprietorship</option>
            <option value="Limited Liability Company">Limited Liability Company</option>
            <option value="Non-Governmental Organization">Non-Governmental Organization</option>
            <option value="Start-up">Start-up</option>
          </OrganizationSelectField>
        </OrganizationFieldGroup>

        <OrganizationFieldGroup>
          <OrganizationFieldLabel>Organization Industry/Sector</OrganizationFieldLabel>
          <OrganizationSelectField
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
          >
            <option value="">Select...</option>
            <option value="Public Sector">Public Sector</option>
            <option value="Agriculture">Agriculture</option>
            <option value="Financial Services">Financial Services</option>
            <option value="Education">Education</option>
          </OrganizationSelectField>
        </OrganizationFieldGroup>

        <OrganizationFieldGroup>
          <OrganizationFieldLabel>Organization RC Number</OrganizationFieldLabel>
          <OrganizationInputField
            type="text"
            value={rcNumber}
            onChange={(e) => setRcNumber(e.target.value)}
            placeholder=""
          />
        </OrganizationFieldGroup>

        <OrganizationFieldGroup>
          <OrganizationFieldLabel>Organization Staff Size</OrganizationFieldLabel>
          <OrganizationSelectField
            value={staffSize}
            onChange={(e) => setStaffSize(e.target.value)}
          >
            <option value="">Select...</option>
            <option value="1-10">1-10</option>
            <option value="11-50">11-50</option>
            <option value="51-100">51-100</option>
            <option value="Over 101">Over 101</option>
          </OrganizationSelectField>
        </OrganizationFieldGroup>

        <OrganizationDocumentSection>
          <OrganizationSectionTitle>Upload Valid Organization Documents</OrganizationSectionTitle>
          <OrganizationDocumentSubtitle>
            e.g. Certificate of Incorporation, Memorandum of Association, Proof of Business Address, Company Status Report
          </OrganizationDocumentSubtitle>
          <OrganizationDocumentSubtitle>
            Upload multiple high quality images for better results
          </OrganizationDocumentSubtitle>
          <UploadArea onImageUpload={handleDocumentUpload} />
        </OrganizationDocumentSection>

        <Button 
          type="submit" 
          disabled={!isFormValid()}
        >
          Continue
        </Button>
        
        <OrganizationSkipLink type="button" onClick={handleSkip}>
          Skip
        </OrganizationSkipLink>
      </form>
    </OrganizationFormContainer>
  );
};

export default OrganizationProfileForm;
