
# Class Name Convention

All class names in this React application must follow these strict guidelines:

## Rules for Class Names:
1. **Human-readable**: Use descriptive, meaningful names that clearly indicate the element's purpose
2. **Lowercase with hyphens**: Use kebab-case (e.g., `form-container`, `button-primary`)
3. **Context-specific**: Include component or page context when relevant
4. **Avoid random/hashed names**: Never use auto-generated class names like `sc-hXLMPs ygXpb`

## Naming Examples:

### Container Elements:
- `page-container` - Main page wrapper
- `form-container` - Form wrapper
- `content-wrapper` - Content section wrapper
- `image-container` - Image section wrapper

### Layout Elements:
- `header-section` - Page header
- `form-section` - Form section
- `contact-info-section` - Contact information area
- `gradient-overlay` - Overlay with gradient background

### Interactive Elements:
- `primary-action-button` - Main action buttons (purple #7642FE)
- `secondary-button` - Secondary buttons
- `social-icon-button` - Social media icon buttons
- `upload-media-button` - Upload action buttons

### Form Elements:
- `form-group` - Input field groups
- `input-field` - Individual input elements
- `otp-input-container` - OTP input wrapper
- `otp-input-box` - Individual OTP input boxes

### Progress and Status:
- `progress-bar-container` - Progress bar wrapper
- `progress-bar` - Individual progress bars
- `alert-container` - Alert message wrapper

### Page-Specific Examples:
- `organization-image-container` - Organization profile image section
- `contact-person-image-container` - Contact person profile image section
- `signup-contact-info` - Sign up page contact information
- `verify-otp-title` - Verify OTP page title

## Implementation:
- Use styled-components `.attrs()` method to set class names
- Apply this convention to all new components
- Refactor existing components to follow this pattern
- Maintain consistency across the entire codebase

This convention ensures code maintainability, debugging ease, and team collaboration efficiency.
