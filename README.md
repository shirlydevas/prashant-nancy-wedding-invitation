# Animated Wedding Invitation

A beautiful, animated wedding invitation built with Next.js, featuring all wedding events including Haldi, Sangeet, Engagement, Mass, and Reception. This Christian wedding invitation includes stunning animations, particle effects, and interactive elements.

## Features

✨ **Beautiful Design**
- Elegant Christian wedding theme with gold and cream colors
- Animated particle background
- Smooth scroll animations
- Responsive design for all devices

🎵 **Interactive Elements**
- Background music player
- Floating heart animations
- Smooth page transitions
- Interactive event cards

📱 **Modern Technology**
- Built with Next.js 14
- TypeScript for type safety
- Tailwind CSS for styling
- Framer Motion for animations
- React Intersection Observer for scroll animations

## Events Included

1. **Haldi Ceremony** - Traditional turmeric ceremony
2. **Sangeet** - Music and dance celebration
3. **Engagement Ceremony** - Pre-wedding celebration
4. **Wedding Mass** - Sacred Christian ceremony
5. **Reception** - Dinner and celebration

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Invitation
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

### Customization

#### Couple Information
Edit the following files to customize:
- `components/HeroSection.tsx` - Update couple names, date, and venue
- `components/EventsSection.tsx` - Modify event details, dates, and venues
- `components/Footer.tsx` - Update contact information

#### Styling
- `tailwind.config.js` - Customize colors and fonts
- `app/globals.css` - Add custom styles
- `components/` - Modify individual component styles

#### Music
- Add your wedding music files to `public/audio/`
- Update the audio source in `components/MusicPlayer.tsx`

## Project Structure

```
Invitation/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── EventCard.tsx
│   ├── EventsSection.tsx
│   ├── Footer.tsx
│   ├── HeroSection.tsx
│   ├── MusicPlayer.tsx
│   └── ParticleBackground.tsx
├── public/
│   └── audio/
│       ├── wedding-music.mp3
│       └── wedding-music.ogg
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **React Intersection Observer** - Scroll animations

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
- Netlify
- AWS Amplify
- Railway
- Heroku

## Customization Guide

### Colors
The wedding theme uses a custom color palette:
- Wedding Gold: `#D4AF37`
- Wedding Cream: `#F5F5DC`
- Wedding Ivory: `#FFFFF0`
- Wedding Navy: `#1B2951`
- Wedding Rose: `#E8B4B8`

### Fonts
Three elegant fonts are used:
- Dancing Script (Script font for titles)
- Playfair Display (Elegant serif for headings)
- Inter (Clean sans-serif for body text)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support or questions, please contact the wedding couple or create an issue in the repository.

---

Made with ❤️ for a special day
