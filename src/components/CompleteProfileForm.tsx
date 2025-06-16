
import React, { useState } from 'react';
import styled from 'styled-components';
import { Camera } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import UploadArea from './UploadArea';

const ProfileFormContainer = styled.div.attrs({
  className: 'profile-form-container'
})`
  width: 100%;
  max-width: 500px;
  font-family: 'Sora', sans-serif;
`;

const ProfileFormTitle = styled.h1.attrs({
  className: 'profile-form-title'
})`
  font-size: 32px;
  font-weight: 700;
  color: #7642FE;
  margin-bottom: 8px;
  font-family: 'Sora', sans-serif;
  line-height: 40px;
  letter-spacing: -0.15px;
  width: 100%;
  max-width: 275px;
`;

const ProfileFormSubtitle = styled.p.attrs({
  className: 'profile-form-subtitle'
})`
  font-size: 16px;
  font-weight: 400;
  color: #666666;
  margin-bottom: 32px;
  line-height: 1.5;
  font-family: 'Sora', sans-serif;
`;

const ProfileForm = styled.form.attrs({
  className: 'profile-form'
})`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FormSection = styled.div.attrs({
  className: 'form-section'
})`
  margin-bottom: 24px;
`;

const SectionTitle = styled.h2.attrs({
  className: 'section-title'
})`
  font-size: 20px;
  font-weight: 600;
  color: #333333;
  margin-bottom: 12px;
  font-family: 'Sora', sans-serif;
`;

const SectionSubtitle = styled.p.attrs({
  className: 'section-subtitle'
})`
  font-size: 14px;
  font-weight: 400;
  color: #666666;
  margin-bottom: 16px;
  line-height: 1.4;
  font-family: 'Sora', sans-serif;
`;

const AdditionalText = styled.p.attrs({
  className: 'additional-text'
})`
  font-size: 12px;
  font-weight: 400;
  color: #777;
  margin-top: 8px;
  font-style: italic;
  font-family: 'Sora', sans-serif;
`;

const ProfilePictureUploadContainer = styled.div.attrs({
  className: 'profile-picture-upload-container'
})`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
`;

const CircularUploadArea = styled.div.attrs({
  className: 'circular-upload-area'
})`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #E5E7EB;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  color: #6B7280;
  cursor: pointer;
`;

const UploadActionButton = styled.button.attrs({
  className: 'upload-action-button'
})`
  background: #7642FE;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease;
  font-family: 'Sora', sans-serif;
  
  &:hover {
    background: #5f35cc;
  }
`;

const ProfilePictureContainer = styled.div.attrs({
  className: 'profile-picture-container'
})`
  position: relative;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 16px;
`;

const ProfilePictureImage = styled.img.attrs({
  className: 'profile-picture-image'
})`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ChangeImageButton = styled.button.attrs({
  className: 'change-image-button'
})`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 8px;
  font-size: 14px;
  cursor: pointer;
  font-family: 'Sora', sans-serif;
`;

const HiddenFileInput = styled.input.attrs({
  className: 'hidden-file-input'
})`
  display: none;
`;

const UploadedFilesGrid = styled.div.attrs({
  className: 'uploaded-files-grid'
})`
  display: flex;
  gap: 10px;
  margin-top: 10px;
  overflow-x: auto;
  padding-bottom: 10px;
`;

const UploadedImageThumbnail = styled.img.attrs({
  className: 'uploaded-image-thumbnail'
})`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 8px;
`;

const RadioFormSection = styled.div.attrs({
  className: 'radio-form-section'
})`
  margin: 10px 0;
`;

const RadioQuestion = styled.p.attrs({
  className: 'radio-question'
})`
  font-family: 'Sora', sans-serif;
  font-size: 14px;
  color: #000000;
  margin-bottom: 12px;
  line-height: 1.4;
`;

const RadioOptionsGroup = styled.div.attrs({
  className: 'radio-options-group'
})`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const RadioOptionLabel = styled.label.attrs({
  className: 'radio-option-label'
})`
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: 'Sora', sans-serif;
  font-size: 14px;
  color: #000000;
  cursor: pointer;
`;

const RadioInput = styled.input.attrs({
  className: 'radio-input'
})`
  width: 16px;
  height: 16px;
  margin-right: 8px;
  accent-color: #7642FE;
`;

const FormButtonContainer = styled.div.attrs({
  className: 'form-button-container'
})`
  display: flex;
  gap: 16px;
  margin-top: 32px;
`;

const SkipActionButton = styled.button.attrs({
  className: 'skip-action-button'
})`
  background: none;
  color: #666666;
  border: 1px solid #CED4DA;
  border-radius: 8px;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease;
  font-family: 'Sora', sans-serif;
  
  &:hover {
    background: #f8f9fa;
  }
`;

const CompleteProfileForm = () => {
  const [profilePicture, setProfilePicture] = useState<string | null>(null);
  const [identificationFiles, setIdentificationFiles] = useState<string[]>([]);
  const [ownsBusiness, setOwnsBusiness] = useState('');
  const [registerWithBusiness, setRegisterWithBusiness] = useState('');
  const navigate = useNavigate();

  const handleProfilePictureUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfilePicture(imageUrl);
      console.log('Profile picture uploaded:', file.name);
    }
  };

  const handleIdentificationUpload = (imageUrl: string) => {
    setIdentificationFiles(prev => [...prev, imageUrl]);
    console.log('Identification file uploaded');
  };

  const triggerProfilePictureUpload = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault(); // Prevent form submission
      e.stopPropagation(); // Stop event bubbling
    }
    const fileInput = document.getElementById('profile-picture-upload') as HTMLInputElement;
    if (fileInput) {
      fileInput.click();
    }
  };

  // Check if all required fields are filled before continuing
  const isFormValid = () => {
    return (
      profilePicture &&
      identificationFiles.length > 0 &&
      ownsBusiness &&
      registerWithBusiness
    );
  };

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (isFormValid()) {
      console.log({
        profilePicture,
        identificationFiles,
        ownsBusiness,
        registerWithBusiness
      });
      navigate('/organization-profile');
    }
  };

  const handleSkip = () => {
    console.log('Skipped profile completion');
    navigate('/organization-profile');
  };

  return (
    <ProfileFormContainer>
      <ProfileFormTitle>Complete Your Profile</ProfileFormTitle>
      <ProfileFormSubtitle>Complete your KYC registration</ProfileFormSubtitle>
      
      <ProfileForm>
        <FormSection>
          <SectionTitle>Upload Your Profile Picture</SectionTitle>
          {profilePicture ? (
            <ProfilePictureContainer>
              <ProfilePictureImage src={profilePicture} alt="Profile" />
              <ChangeImageButton onClick={triggerProfilePictureUpload}>
                Change image
              </ChangeImageButton>
            </ProfilePictureContainer>
          ) : (
            <ProfilePictureUploadContainer>
              <CircularUploadArea onClick={triggerProfilePictureUpload}>
                <Camera size={32} />
              </CircularUploadArea>
              <UploadActionButton 
                type="button" 
                onClick={triggerProfilePictureUpload}
              >
                Upload
              </UploadActionButton>
            </ProfilePictureUploadContainer>
          )}
          <HiddenFileInput
            id="profile-picture-upload"
            type="file"
            accept="image/*"
            onChange={handleProfilePictureUpload}
          />
        </FormSection>

        <FormSection>
          <SectionTitle>Upload Valid Means of Identification</SectionTitle>
          <SectionSubtitle>e.g. National ID, Drivers License, International Passport, Voters ID.</SectionSubtitle>
          <AdditionalText>Upload multiple high quality images for better results</AdditionalText>
          
          <UploadArea onImageUpload={handleIdentificationUpload} />
          
          {identificationFiles.length > 0 && (
            <UploadedFilesGrid>
              {identificationFiles.map((file, index) => (
                <UploadedImageThumbnail key={index} src={file} alt={`ID ${index + 1}`} />
              ))}
            </UploadedFilesGrid>
          )}
        </FormSection>

        <FormSection>
          <SectionTitle>Do you own a registered business?</SectionTitle>
          <RadioFormSection>
            <RadioQuestion>
              Please let us know if you own a registered business. This will help us tailor your experience and provide the most relevant services for your needs.
            </RadioQuestion>
            <RadioOptionsGroup>
              <RadioOptionLabel>
                <RadioInput
                  type="radio"
                  name="ownsBusiness"
                  value="yes"
                  checked={ownsBusiness === 'yes'}
                  onChange={(e) => setOwnsBusiness(e.target.value)}
                />
                Yes
              </RadioOptionLabel>
              <RadioOptionLabel>
                <RadioInput
                  type="radio"
                  name="ownsBusiness"
                  value="no"
                  checked={ownsBusiness === 'no'}
                  onChange={(e) => setOwnsBusiness(e.target.value)}
                />
                No
              </RadioOptionLabel>
            </RadioOptionsGroup>
          </RadioFormSection>
        </FormSection>

        <FormSection>
          <SectionTitle>Are you registered with a business or organization?</SectionTitle>
          <RadioFormSection>
            <RadioQuestion>
              Please let us know if you are registered with a business or organization. This will help us tailor your experience and provide the most relevant services for your needs.
            </RadioQuestion>
            <RadioOptionsGroup>
              <RadioOptionLabel>
                <RadioInput
                  type="radio"
                  name="registerWithBusiness"
                  value="yes"
                  checked={registerWithBusiness === 'yes'}
                  onChange={(e) => setRegisterWithBusiness(e.target.value)}
                />
                Yes
              </RadioOptionLabel>
              <RadioOptionLabel>
                <RadioInput
                  type="radio"
                  name="registerWithBusiness"
                  value="no"
                  checked={registerWithBusiness === 'no'}
                  onChange={(e) => setRegisterWithBusiness(e.target.value)}
                />
                No
              </RadioOptionLabel>
            </RadioOptionsGroup>
          </RadioFormSection>
        </FormSection>

        <FormButtonContainer>
          <SkipActionButton type="button" onClick={handleSkip}>Skip</SkipActionButton>
          <Button
            type="submit"
            onClick={handleSubmit}
            disabled={!isFormValid()}
          >
            Complete Profile
          </Button>
        </FormButtonContainer>
      </ProfileForm>
    </ProfileFormContainer>
  );
};

export default CompleteProfileForm;
