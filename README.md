# Suvam Nanda - Portfolio Website

A modern, animated portfolio website built with React, Tailwind CSS, and Vite.

## 🚀 Features

- **Responsive Design** - Works perfectly on all devices
- **Smooth Animations** - Eye-catching scroll animations and transitions
- **Contact Form** - Functional contact form that sends emails directly to your inbox
- **Modern UI** - Dark theme with purple/pink gradient accents
- **Fast Performance** - Built with Vite for optimal loading speed
- **SEO Optimized** - Meta tags for better search engine visibility

## 📁 Project Structure

```
portfolio/
├── public/
│   └── profile.jpg          # Add your profile photo here
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Navigation bar
│   │   ├── Hero.jsx         # Hero section with intro
│   │   ├── About.jsx        # About section
│   │   ├── Experience.jsx   # Work experience & education
│   │   ├── Skills.jsx       # Skills showcase
│   │   ├── Contact.jsx      # Contact form
│   │   └── Footer.jsx       # Footer section
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles & animations
├── index.html               # HTML template
├── package.json             # Dependencies
├── vite.config.js           # Vite configuration
├── tailwind.config.js       # Tailwind CSS configuration
└── postcss.config.js        # PostCSS configuration
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Step 1: Clone or Download
Download all the files to your local machine or clone the repository.

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Add Your Profile Photo
1. Place your photo in the `public` folder as `profile.jpg`
2. Update the Hero component in `src/components/Hero.jsx`:
   - Uncomment line: `<img src="/profile.jpg" alt="Suvam Nanda" className="w-full h-full object-cover" />`
   - Comment out the placeholder div with "SN"

### Step 4: Run Development Server
```bash
npm run dev
```

The site will be available at `http://localhost:3000`

### Step 5: Build for Production
```bash
npm run build
```

This creates an optimized build in the `dist` folder.

## 📧 Contact Form Setup

The contact form uses FormSubmit (https://formsubmit.co/) which is free and doesn't require backend setup.

**How it works:**
1. Form submissions are sent to `suvamnanda02@gmail.com` (configured in Contact.jsx)
2. First submission will send a verification email to confirm
3. After verification, all future submissions will be delivered directly

**To change the email:**
Edit `src/components/Contact.jsx` and replace the email in the fetch URL:
```javascript
fetch('https://formsubmit.co/ajax/YOUR_EMAIL@gmail.com', {
```

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to change the color scheme:
```javascript
colors: {
  primary: {
    // Your custom colors here
  },
}
```

### Content
All content is in the individual component files:
- Personal info: `Hero.jsx`, `About.jsx`
- Work experience: `Experience.jsx`
- Skills: `Skills.jsx`
- Contact info: `Contact.jsx`, `Footer.jsx`

### Animations
Custom animations are defined in:
- `index.css` - CSS keyframes
- `tailwind.config.js` - Tailwind animation classes

## 🌐 Deployment

### Deploy to Vercel (Recommended)
1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Deploy!

### Deploy to Netlify
1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to [Netlify](https://netlify.com)

### Deploy to GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
   ```json
   "homepage": "https://yourusername.github.io/portfolio",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Run: `npm run deploy`

## 📦 Technologies Used

- **React 18** - UI framework
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **FormSubmit** - Contact form handling

## 🔧 Troubleshooting

**Profile image not showing:**
- Make sure the image is in the `public` folder
- Check the file name matches exactly
- Try clearing cache and rebuilding

**Contact form not working:**
- Check console for errors
- Verify email address is correct
- Complete FormSubmit verification

**Build errors:**
- Delete `node_modules` and `package-lock.json`
- Run `npm install` again
- Make sure Node.js version is 16+

## 📝 License

This project is open source and available for personal and commercial use.

## 👤 Author

**Suvam Nanda**
- Email: nandasuvam2001@gmail.com
- LinkedIn: [linkedin.com/in/suvam-nanda](https://www.linkedin.com/in/suvam-nanda/)
- GitHub: [github.com/suvamkumarnanda](https://github.com/suvamkumarnanda)

---

Built with ❤️ by Suvam Nanda