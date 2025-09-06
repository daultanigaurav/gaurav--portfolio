# Gaurav Daultani - Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 **Modern Design** - Clean, elegant layout with generous white space
- 🌙 **Dark/Light Mode** - Toggle between themes with smooth transitions
- 📱 **Responsive** - Works perfectly on all device sizes
- ⚡ **Fast Loading** - Optimized for performance
- 🎭 **Animations** - Subtle micro-interactions and smooth transitions
- 🖼️ **Static Export** - Ready for GitHub Pages deployment

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI + shadcn/ui
- **Icons**: Lucide React
- **Fonts**: Inter (sans-serif) + Playfair Display (serif)

## Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/gaurav--portfolio.git
   cd gaurav--portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment to GitHub Pages

This project is configured for automatic deployment to GitHub Pages:

1. **Push to main branch** - The workflow will automatically build and deploy
2. **Manual deployment** - Run `npm run export` to build static files
3. **GitHub Pages** - Enable GitHub Pages in repository settings

### GitHub Pages Setup

1. Go to your repository settings
2. Navigate to "Pages" section
3. Select "GitHub Actions" as the source
4. The workflow will automatically deploy on every push to main

### Custom Domain (Optional)

If you want to use a custom domain:

1. Add a `CNAME` file to the `public` folder with your domain
2. Configure your domain's DNS to point to GitHub Pages
3. Update the `basePath` in `next.config.mjs` if needed

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── ui/               # UI components
│   └── theme-provider.tsx # Theme context
├── lib/                  # Utilities and data
│   ├── data.ts          # Portfolio content
│   └── utils.ts         # Helper functions
├── public/              # Static assets
│   └── images/         # Images
├── .github/workflows/   # GitHub Actions
│   └── deploy.yml      # Deployment workflow
└── next.config.mjs     # Next.js configuration
```

## Customization

### Content
Edit `lib/data.ts` to update:
- Personal information
- Skills and technologies
- Project details
- Social media links

### Styling
- Colors: Update CSS variables in `app/globals.css`
- Fonts: Modify font imports in `app/layout.tsx`
- Components: Customize UI components in `components/ui/`

### Images
- Replace `images/image-1.png` with your profile picture
- Add project screenshots to `public/images/`

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

- **Email**: gauravdaultani7@gmail.com
- **GitHub**: [@daultanigaurav](https://github.com/daultanigaurav)
- **LinkedIn**: [Gaurav Daultani](https://linkedin.com/in/daultanigaurav)
- **Portfolio**: [gauravdaultani.me](https://gauravdaultani.me)
