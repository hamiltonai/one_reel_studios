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

5. **Update the Configuration**:
   - Open `/src/pages/ContactPage.js`
   - Find the EmailJS configuration section at the top of the file
   - Replace the placeholder values with your actual EmailJS credentials:
     ```javascript
     const EMAILJS_SERVICE_ID = "service_eh4zsjw"; // Your EmailJS service ID
     const EMAILJS_TEMPLATE_ID = "template_a0gag2v"; // Your EmailJS template ID
     const EMAILJS_PUBLIC_KEY = "sf8I2u7LCqvizaWmk"; // Your EmailJS public key
     ```
   - To find your public key:
     - Log in to your EmailJS account
     - Go to "Account" > "API Keys"
     - Copy your "Public Key"

6. **Test the Form**:
   - Run the website locally
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

The website is deployed to [GitHub Pages/Netlify/Vercel/etc.].

## Technologies Used

- React
- Material UI
- Framer Motion
- EmailJS
- React Router
