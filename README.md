# One Reel Studios Website

This is the official website for One Reel Studios, a professional video production and photography service.

## Contact Form Email Setup

The contact form is configured to send emails to sales@1ReelStudios.com using EmailJS. To set up the email functionality, follow these steps:

1. **Create an EmailJS Account**:
   - Go to [EmailJS](https://www.emailjs.com/) and create an account
   - The free tier allows 200 emails per month

2. **Create an Email Service**:
   - In your EmailJS dashboard, go to "Email Services"
   - Click "Add New Service"
   - Choose your email provider (Gmail, Outlook, etc.)
   - Follow the instructions to connect your email account
   - Note the Service ID for later use

3. **Create an Email Template**:
   - In your EmailJS dashboard, go to "Email Templates"
   - Click "Create New Template"
   - Design your email template using the variables below
   - Note the Template ID for later use

4. **Template Variables**:
   The contact form sends the following variables to your email template:
   - `{{from_name}}` - The name of the person submitting the form
   - `{{from_email}}` - The email address of the person submitting the form
   - `{{from_phone}}` - The phone number of the person submitting the form
   - `{{service}}` - The service they're interested in
   - `{{message}}` - The message they've written
   - `{{to_email}}` - The destination email (sales@1ReelStudios.com)

5. **Set Up Environment Variables**:
   
   **For Local Development:**
   - Create a `.env` file in the root directory (use `.env.example` as a template)
   - Add your EmailJS credentials:
     ```
     REACT_APP_EMAILJS_SERVICE_ID=your_service_id_here
     REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id_here
     REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key_here
     ```
   - Replace the placeholder values with your actual EmailJS credentials
   - Note: The `.env` file is included in `.gitignore` to prevent exposing your credentials

   **For AWS Amplify Deployment:**
   - Log in to the AWS Management Console
   - Navigate to AWS Amplify and select your application
   - Go to "Environment variables" in the left navigation menu
   - Click "Manage variables" and then "Add variable"
   - Add each of your EmailJS credentials:
     - Variable: `REACT_APP_EMAILJS_SERVICE_ID` | Value: Your Service ID
     - Variable: `REACT_APP_EMAILJS_TEMPLATE_ID` | Value: Your Template ID
     - Variable: `REACT_APP_EMAILJS_PUBLIC_KEY` | Value: Your Public Key
   - Save your changes and redeploy your application

6. **Finding Your Credentials**:
   - **Service ID**: Found in the "Email Services" section of your EmailJS dashboard
   - **Template ID**: Found in the "Email Templates" section of your EmailJS dashboard
   - **Public Key**: Go to "Account" > "API Keys" and copy your "Public Key"

7. **Test the Form**:
   - Run the website locally or visit your deployed site
   - Fill out the contact form and submit
   - Check that you receive the email at sales@1ReelStudios.com

## Development

### Installation

```bash
npm install
```

### Running Locally

```bash
npm start
```

### Building for Production

```bash
npm run build
```

## Deployment

The website is deployed to AWS Amplify. For deployment instructions, see the AWS Amplify documentation.

## Technologies Used

- React
- Material UI
- Framer Motion
- EmailJS
- React Router
