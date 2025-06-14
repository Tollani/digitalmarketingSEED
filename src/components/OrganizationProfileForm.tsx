
import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Camera } from 'lucide-react';
import Button from './Button';
import DMAMediaUploadArea from './UploadArea';

const OrganizationFormContainer = styled.div`
  width: 100%;
  max-width: 500px;
  font-family: 'Sora', sans-serif;
`;

const FormTitle = styled.h1`
  font-size: 32px;
  font-weight: 700;
  color: #7642FE;
  margin: 0 0 8px 0;
  text-align: left;
  font-family: 'Sora', sans-serif;
  line-height: 40px;
  letter-spacing: -0.15px;
  width: 100%;
  max-width: 275px;
`;

const FormDescription = styled.p`
  font-size: 16px;
  color: #6B7280;
  margin: 0 0 32px 0;
  text-align: left;
  font-family: 'Sora', sans-serif;
`;

const FormSection = styled.div`
  margin-bottom: 24px;
`;

const SectionHeader = styled.h3`
  font-size: 16px;
  font-weight: 400;
  color: #1F2937;
  margin: 0 0 16px 0;
  font-family: 'Sora', sans-serif;
`;

const InputGroup = styled.div`
  margin-bottom: 20px;
`;

const InputLabel = styled.label`
  display: block;
  font-size: 16px;
  color: #1F2937;
  margin-bottom: 8px;
  font-weight: 400;
  font-family: 'Sora', sans-serif;
`;

const TextInput = styled.input`
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

const SelectDropdown = styled.select`
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

const ProfileImageSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ProfileImageUploadArea = styled.div`
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

const ProfileImagePreview = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;

const HiddenFileInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
`;

const DocumentUploadSection = styled.div`
  margin-bottom: 32px;
`;

const DocumentDescription = styled.p`
  font-size: 14px;
  color: #6B7280;
  margin: 8px 0;
  line-height: 1.4;
  font-family: 'Sora', sans-serif;
`;

const SkipFormButton = styled.button`
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

interface OrganizationData {
  profilePicture: string | null;
  organizationName: string;
  address: string;
  country: string;
  organizationType: string;
  industry: string;
  rcNumber: string;
  staffSize: string;
  documents: string[];
}

const OrganizationProfileForm = () => {
  const navigate = useNavigate();
  const [organizationProfileImage, setOrganizationProfileImage] = useState<string | null>(null);
  const [organizationData, setOrganizationData] = useState<OrganizationData>({
    profilePicture: null,
    organizationName: '',
    address: '',
    country: '',
    organizationType: '',
    industry: '',
    rcNumber: '',
    staffSize: '',
    documents: []
  });

  const handleProfileImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      const imageUrl = URL.createObjectURL(selectedFile);
      setOrganizationProfileImage(imageUrl);
      setOrganizationData(prev => ({ ...prev, profilePicture: imageUrl }));
      console.log('Organization profile image uploaded');
    }
  };

  const handleDocumentUpload = (documentUrl: string) => {
    setOrganizationData(prev => ({
      ...prev,
      documents: [...prev.documents, documentUrl]
    }));
    console.log('Organization document uploaded');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setOrganizationData(prev => ({ ...prev, [name]: value }));
  };

  const isFormComplete = () => {
    return organizationData.organizationName && 
           organizationData.address && 
           organizationData.country && 
           organizationData.organizationType && 
           organizationData.industry && 
           organizationData.rcNumber && 
           organizationData.staffSize && 
           organizationData.documents.length > 0;
  };

  const handleFormSubmission = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (isFormComplete()) {
      const completeOrganizationData = {
        ...organizationData,
        profilePicture: organizationProfileImage
      };
      console.log('Organization profile data submitted:', completeOrganizationData);
      navigate('/contact-person-profile');
    }
  };

  const handleSkipRegistration = () => {
    console.log('Organization profile registration skipped');
    navigate('/');
  };

  return (
    <OrganizationFormContainer>
      <FormTitle>Organization Profile</FormTitle>
      <FormDescription>Complete the KYC registration for your organization</FormDescription>
      
      <form onSubmit={handleFormSubmission}>
        <FormSection>
          <SectionHeader>Upload Your Profile Picture</SectionHeader>
          <ProfileImageSection>
            <ProfileImageUploadArea>
              {organizationProfileImage ? (
                <ProfileImagePreview src={organizationProfileImage} alt="Organization Profile" />
              ) : (
                <Camera size={32} color="#6B7280" />
              )}
              <HiddenFileInput
                type="file"
                accept="image/*"
                onChange={handleProfileImageUpload}
              />
            </ProfileImageUploadArea>
          </ProfileImageSection>
        </FormSection>

        <InputGroup>
          <InputLabel>Organization Name</InputLabel>
          <TextInput
            type="text"
            name="organizationName"
            value={organizationData.organizationName}
            onChange={handleInputChange}
            placeholder=""
          />
        </InputGroup>

        <InputGroup>
          <InputLabel>Organization Address</InputLabel>
          <TextInput
            type="text"
            name="address"
            value={organizationData.address}
            onChange={handleInputChange}
            placeholder=""
          />
        </InputGroup>

        <InputGroup>
          <InputLabel>Country</InputLabel>
          <SelectDropdown
            name="country"
            value={organizationData.country}
            onChange={handleInputChange}
          >
            <option value="">Select...</option>
            <option value="Nigeria">Nigeria</option>
            <option value="Niger">Niger</option>
            <option value="South Africa">South Africa</option>
            <option value="Cuba">Cuba</option>
          </SelectDropdown>
        </InputGroup>

        <InputGroup>
          <InputLabel>Organization Type</InputLabel>
          <SelectDropdown
            name="organizationType"
            value={organizationData.organizationType}
            onChange={handleInputChange}
          >
            <option value="">Select...</option>
            <option value="Sole Proprietorship">Sole Proprietorship</option>
            <option value="Limited Liability Company">Limited Liability Company</option>
            <option value="Non-Governmental Organization">Non-Governmental Organization</option>
            <option value="Start-up">Start-up</option>
          </SelectDropdown>
        </InputGroup>

        <InputGroup>
          <InputLabel>Organization Industry/Sector</InputLabel>
          <SelectDropdown
            name="industry"
            value={organizationData.industry}
            onChange={handleInputChange}
          >
            <option value="">Select...</option>
            <option value="Public Sector">Public Sector</option>
            <option value="Agriculture">Agriculture</option>
            <option value="Financial Services">Financial Services</option>
            <option value="Education">Education</option>
          </SelectDropdown>
        </InputGroup>

        <InputGroup>
          <InputLabel>Organization RC Number</InputLabel>
          <TextInput
            type="text"
            name="rcNumber"
            value={organizationData.rcNumber}
            onChange={handleInputChange}
            placeholder=""
          />
        </InputGroup>

        <InputGroup>
          <InputLabel>Organization Staff Size</InputLabel>
          <SelectDropdown
            name="staffSize"
            value={organizationData.staffSize}
            onChange={handleInputChange}
          >
            <option value="">Select...</option>
            <option value="1-10">1-10</option>
            <option value="11-50">11-50</option>
            <option value="51-100">51-100</option>
            <option value="Over 101">Over 101</option>
          </SelectDropdown>
        </InputGroup>

        <DocumentUploadSection>
          <SectionHeader>Upload Valid Organization Documents</SectionHeader>
          <DocumentDescription>
            e.g. Certificate of Incorporation, Memorandum of Association, Proof of Business Address, Company Status Report
          </DocumentDescription>
          <DocumentDescription>
            Upload multiple high quality images for better results
          </DocumentDescription>
          <DMAMediaUploadArea onImageUpload={handleDocumentUpload} />
        </DocumentUploadSection>

        <Button 
          type="submit" 
          onClick={handleFormSubmission}
          disabled={!isFormComplete()}
        >
          Continue
        </Button>
        
        <SkipFormButton type="button" onClick={handleSkipRegistration}>
          Skip
        </SkipFormButton>
      </form>
    </OrganizationFormContainer>
  );
};

export default OrganizationProfileForm;
