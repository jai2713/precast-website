# Southwest Precast Concrete — Website

A premium, modern, responsive 5-page website for Southwest Precast Concrete, a Melbourne-based commercial construction company.

## Features

### Design
- **Color Scheme**: Dark charcoal (#1a1a1a) with orange/amber accents (#E87C2A)
- **Typography**: Inter font (Google Fonts) — clean, professional, bold
- **Style**: Industrial premium — strong, confident, impactful
- **Responsive**: Fully mobile and desktop optimized
- **Animations**: Smooth scrolling, subtle hover effects, fade-in on load
- **No Dependencies**: Pure HTML, CSS, and JavaScript — no WordPress, no CMS

### Pages

1. **Home**
   - Full-width hero section with bold tagline
   - Services overview grid
   - "Why Choose Us" benefits section
   - Clear CTA buttons

2. **Services**
   - 5 service cards with detailed descriptions
   - Icons and feature lists for each service
   - Hover animations and transitions
   - Services included:
     - Commercial Construction
     - Warehouse Buildings
     - Precast Panels
     - Onsite Panels
     - Bulk Excavation Operations

3. **Gallery**
   - Clean responsive image grid
   - High-quality construction/concrete images from Unsplash
   - Hover zoom effects
   - Lazy loading for performance

4. **About**
   - Company story and history
   - Core values (6 items)
   - Why Southwest Precast is different (4 key differentiators)
   - Professional narrative and positioning

5. **Contact**
   - Contact information display
   - Phone number, location, email
   - Interactive contact form
   - Service interest dropdown
   - Form validation and success messaging

## File Structure

```
/root/projects/southwest-precast/
├── index.html          # Main HTML file with all 5 pages
├── styles.css          # Complete styling and responsive design
├── script.js           # Navigation, interactions, form handling
└── README.md           # This file
```

## Getting Started

### 1. Local Development

Simply open `index.html` in your browser:
```bash
open /root/projects/southwest-precast/index.html
# or
firefox /root/projects/southwest-precast/index.html
```

### 2. Web Server (Recommended)

For better performance and testing:
```bash
cd /root/projects/southwest-precast/
python3 -m http.server 8000
# Then visit: http://localhost:8000
```

Or with Node.js:
```bash
npx serve /root/projects/southwest-precast/
```

## Features Implemented

### Navigation
- Sticky navigation bar with logo
- Mobile-responsive hamburger menu
- Active link highlighting
- Smooth page transitions
- Keyboard navigation (Escape to close menu)

### Interactivity
- Smooth scroll behavior
- Hover effects on all interactive elements
- Button ripple animations
- Gallery image zoom on hover
- Form validation and success messaging

### Performance
- Lazy loading for images
- Optimized CSS with modern flexbox/grid layouts
- Smooth animations without jank
- Mobile-first responsive design

### Design Polish
- Gradient backgrounds for visual depth
- Accent color highlights throughout
- Professional spacing and typography
- Subtle animations and transitions
- Dark mode suitable for industrial aesthetic

## Contact Information

- **Phone**: +61 430 343 388
- **Location**: Melbourne, Victoria, Australia
- **Email**: info@southwestprecast.com.au
- **Services**: Commercial Construction, Warehouse Buildings, Precast Panels, Onsite Panels, Bulk Excavation

## Customization

### Update Company Info
Edit the following in `index.html`:
- Phone number (search for "+61 430 343 388")
- Email (search for "info@southwestprecast.com.au")
- Company description (in each relevant section)

### Change Colors
Update these CSS variables in `styles.css`:
```css
--dark-bg: #1a1a1a;        /* Main background */
--accent: #E87C2A;         /* Orange accent */
--accent-dark: #d46b1a;    /* Darker orange */
```

### Update Gallery Images
Replace image URLs in the Gallery section (`id="gallery"`). Currently uses Unsplash images.

### Add More Services
Duplicate a service card in the Services section and update the content.

## Browser Support

- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support
- Mobile browsers: Full support

## Performance Metrics

- Fully responsive (320px - 4K)
- Load time optimized with lazy loading
- CSS-only animations for smooth performance
- ~46KB total size (HTML + CSS + JS)

## License

This website is custom built for Southwest Precast Concrete.

## Notes

- The contact form uses `mailto:` for email submission. For production, connect to a backend service or email API.
- All images are from Unsplash and are free to use commercially.
- The logo image is loaded from the provided FAL media URL.
- Smooth scrolling works on all modern browsers.

---

Built with attention to detail for a premium commercial presence.
