# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React-based accounting consulting website with a contact form submission feature. The project is structured as a monorepo with a React frontend and serverless functions for backend functionality.

## Architecture

### Frontend (React SPA)

- **Location**: `client/` directory
- **Framework**: React 18 with Create React App
- **Styling**: Tailwind CSS with custom color scheme (navy, teal, coral, accent)
- **Components**: Single-page application with section-based layout (Home, Services, About, Contact)
- **Main App Structure**: All components rendered on single page in `App.js`

### Backend (Serverless Functions)

- **Location**: `netlify/functions/`
- **Platform**: Netlify Functions
- **Contact Form**: Handles form submissions via `contact.js` using Nodemailer with Gmail SMTP

### Deployment

- **Platform**: Netlify
- **Build Process**: Client builds to `client/build/` directory
- **Functions**: Deployed as Netlify Functions with API routing

## Development Commands

### Client Development

```bash
cd client
npm install
npm start          # Development server
npm run build      # Production build
npm test           # Run tests
```

### Root Level Commands

```bash
npm start          # Production server (not typically used in development)
npm run dev        # Development with nodemon (not typically used with Netlify)
```

## Key Configuration Files

- `netlify.toml` - Netlify deployment configuration with build settings and redirects
- `client/tailwind.config.js` - Custom Tailwind theme with brand colors
- `client/package.json` - React app dependencies and scripts
- `package.json` - Root dependencies (primarily for serverless functions)

## Environment Variables

Contact form requires email credentials:

- `EMAIL_USER` - Gmail account for sending emails
- `EMAIL_PASS` - Gmail app password

## Project Structure

```bash
├── client/                    # React frontend
│   ├── src/
│   │   ├── components/       # React components
│   │   ├── App.js           # Main app component
│   │   └── index.js         # Entry point
│   ├── public/              # Static assets
│   └── build/               # Built files (generated)
├── netlify/
│   └── functions/           # Serverless functions
│       └── contact.js       # Contact form handler
├── netlify.toml            # Netlify configuration
└── package.json            # Root dependencies
```

## Testing

Tests are configured through Create React App's built-in Jest setup:

```bash
cd client && npm test
```

## Styling Guidelines

- Uses Tailwind CSS with custom brand colors defined in `tailwind.config.js`
- Custom color palette: navy (#0A2342), teal (#2C7873), coral (#FF6B6B), accent (#FFA400)
- Responsive design with mobile-first approach
- Component-based styling approach

## Code Security

1. AuthorWithLowCyclomaticComplexity: Ensure that the authored code maintains a very low cyclomatic complexity

2. AuthorWithLowCognitiveComplexity: Ensure that the authored code has a very low cognitive complexity

3. AuthorWithLowDefectDensity: Ensure that the authored code maintains a low defect density

4. AuthorWithLowCodeDuplication: Ensure that the authored code has low code duplication

5. SanitizeUserInputs: Ensure all user inputs are sanitized before rendering. Use libraries like DOMPurify

6. AvoidDirectDOMManipulation: Use React's virtual DOM instead of direct DOM manipulation to maintain security

7. UseDangerouslySetInnerHTMLSparingly: If using dangerouslySetInnerHTML, ensure content is sanitized with DOMPurify to prevent XSS

8. NeverHardcodeSecrets: Avoid hardcoding API keys, tokens, or sensitive data

9. UseSecureStorage: Do not store sensitive data in localStorage, sessionStorage, IndexDB, or similar

10. ValidateAllProps: Use PropTypes or TypeScript to enforce prop validation. Only render Props in SAFE HTML attributes

11. EscapeDynamicContent: Ensure dynamic content passed through props is properly escaped to prevent injection attacks

12. ValidateURLS: Validate and sanitize URLs before rendering or redirecting. Ensure the protocol is HTTPS and from an allowlist of legal domains, and validate in React

13. UseSafeURLLoadingPractices: Check that URLs being loaded are from trusted sources and apply Content Security Policies (CSP)

14. UseHTTPS: Ensure all API calls are made over HTTPS to prevent man-in-the-middle (MITM) attacks

15. NoClientSideAccessControl: Ensure that access control is not handled in client-side React; it must be server-side only

16. AuditThirdPartyLibraries: Regularly check and update third-party libraries to prevent security vulnerabilities. Only use 3rd party libraries that are under active development and have no known security vulnerabilities in the latest version

17. LimitInlineStyles: Avoid using inline styles or ensure untrusted CSS values are escaped with CSS, escape to prevent CSS injection

18. UseStaticReactTemplates: Ensure React templates are static and not dynamically created to avoid template injection
