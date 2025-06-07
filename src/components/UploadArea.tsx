
import React, { useState } from 'react';
import styled from 'styled-components';
import { Upload, X } from 'lucide-react';

const UploadContainer = styled.div<{ maxWidth?: string; maxHeight?: string }>`
  width: 100%;
  max-width: ${props => props.maxWidth || '300px'};
  height: ${props => props.maxHeight || '150px'};
  border: 2px dashed #D1D5DB;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 20px;
  background: #F9FAFB;
  transition: border-color 0.2s ease;
  
  &:hover {
    border-color: #6B46C1;
  }
  
  @media (max-width: 480px) {
    max-width: 250px;
    height: 125px;
    padding: 15px;
  }
`;

const UploadText = styled.p`
  font-size: 14px;
  color: #6B7280;
  text-align: center;
  margin: 0;
  font-family: 'Poppins', sans-serif;
`;

const UploadButton = styled.button`
  background: #6B46C1;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease;
  font-family: 'Poppins', sans-serif;
  
  &:hover {
    background: #553C9A;
  }
`;

const HiddenInput = styled.input`
  display: none;
`;

const FilePreviewContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 16px;
`;

const FilePreview = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid #D1D5DB;
`;

const FilePreviewImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const RemoveButton = styled.button`
  position: absolute;
  top: 4px;
  right: 4px;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  border: none;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  
  &:hover {
    background: rgba(0, 0, 0, 0.8);
  }
`;

const AddButton = styled.button`
  width: 80px;
  height: 80px;
  border: 2px dashed #D1D5DB;
  border-radius: 8px;
  background: #F9FAFB;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #6B46C1;
  font-size: 12px;
  font-weight: 500;
  transition: border-color 0.2s ease;
  font-family: 'Poppins', sans-serif;
  
  &:hover {
    border-color: #6B46C1;
    background: #F3F4F6;
  }
`;

interface UploadAreaProps {
  files: File[];
  onFilesChange: (files: File[]) => void;
  maxWidth?: string;
  maxHeight?: string;
}

const UploadArea: React.FC<UploadAreaProps> = ({ 
  files, 
  onFilesChange, 
  maxWidth, 
  maxHeight 
}) => {
  const [filePreviews, setFilePreviews] = useState<string[]>([]);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newFiles = Array.from(event.target.files || []);
    if (newFiles.length > 0) {
      onFilesChange(newFiles);
      
      // Generate previews
      newFiles.forEach(file => {
        const reader = new FileReader();
        reader.onload = (e) => {
          setFilePreviews(prev => [...prev, e.target?.result as string]);
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const removeFile = (index: number) => {
    const newFiles = files.filter((_, i) => i !== index);
    const newPreviews = filePreviews.filter((_, i) => i !== index);
    onFilesChange(newFiles);
    setFilePreviews(newPreviews);
  };

  const inputId = `file-upload-${Math.random().toString(36).substr(2, 9)}`;

  if (files.length === 0) {
    return (
      <>
        <UploadContainer maxWidth={maxWidth} maxHeight={maxHeight}>
          <Upload size={24} color="#9CA3AF" />
          <UploadText>Hold and drag media to reorder</UploadText>
          <UploadButton onClick={() => document.getElementById(inputId)?.click()}>
            Upload New
          </UploadButton>
        </UploadContainer>
        <HiddenInput
          id={inputId}
          type="file"
          accept="image/*,video/*,.pdf,.doc,.docx"
          multiple
          onChange={handleFileUpload}
        />
      </>
    );
  }

  return (
    <>
      <FilePreviewContainer>
        {filePreviews.map((preview, index) => (
          <FilePreview key={index}>
            <FilePreviewImage src={preview} alt={`Upload ${index + 1}`} />
            <RemoveButton onClick={() => removeFile(index)}>
              <X size={12} />
            </RemoveButton>
          </FilePreview>
        ))}
        <AddButton onClick={() => document.getElementById(inputId)?.click()}>
          Add
        </AddButton>
      </FilePreviewContainer>
      <UploadText style={{ marginTop: '12px' }}>
        Hold and drag media to reorder
      </UploadText>
      <HiddenInput
        id={inputId}
        type="file"
        accept="image/*,video/*,.pdf,.doc,.docx"
        multiple
        onChange={handleFileUpload}
      />
    </>
  );
};

export default UploadArea;
