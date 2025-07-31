# Lavishh Beauty Salon - Luxury Beauty Website

## 🌟 **About Lavishh Beauty Salon**

**Website:** [www.lavishhbeautysalon.com](https://www.lavishhbeautysalon.com)

**Location:** Hanumantappa Circle, MG Rd, Joythinagar, Chikkamagaluru, Karnataka 577101

**Contact:** +91 9019309686

**Email:** lavishhbeautysalon@gmail.com

**Opening Hours:**
- **Mon – Sat:** 10:30 AM – 7:30 PM
- **Sunday:** 11:00 AM – 6:00 PM

---

## 🏗️ **Project Overview**

A modern, responsive beauty salon website built with modular architecture for easy maintenance and customization. Features include dynamic booking system, service management, discount cards, and elegant animations.

### ✨ **Key Features**

- 🎨 **Luxury Design** - Elegant gold and lavender color scheme
- 📱 **Fully Responsive** - Works perfectly on all devices
- 📅 **Smart Booking System** - Dynamic time slots based on day
- 💰 **Discount Card** - Animated pendulum discount display
- ✂️ **Service Management** - Easy to add/modify services
- 📸 **Gallery & Testimonials** - Showcase salon work
- 🎯 **SEO Optimized** - Meta tags and structured data
- ⚡ **Fast Loading** - Optimized for performance

---

## 📁 **Project Structure**

```
lavishh-salon-v2/
├── index.html              # 📄 Main HTML file
├── style.css              # 🎨 All CSS styles (4,648 lines)
├── config.js              # 🎛️ Configuration file (modify here!)
├── README.md              # 📖 This documentation
├── js/
│   ├── app.js            # 🚀 Main application orchestrator
│   └── features/
│       ├── discount.js   # 💰 Discount card functionality
│       ├── services.js   # ✂️ Services management
│       └── booking.js    # 📅 Booking system
└── image_assets/         # 🖼️ Images and assets
    ├── logo.png          # 🏷️ Salon logo
    ├── ribbon.png        # 🎀 Discount card ribbon
    ├── beauticians/      # 👩‍💼 Team photos
    ├── brands/           # 🏢 Brand logos
    ├── galleryImages/    # 📸 Gallery photos
    ├── services/         # ✂️ Service images
    └── testimonials/     # 💬 Testimonial avatars
```

---

## ⚙️ **Configuration File (`config.js`)**

**This is where you make changes without touching the code!**

### 🏢 **Business Information**
```javascript
business: {
  name: "Lavishh Beauty Salon",
  tagline: "Where Beauty Meets Luxury",
  description: "Transform yourself with our premium beauty services in the heart of Chikkamagaluru",
  address: "Hanumantappa Circle, MG Rd, Joythinagar, Chikkamagaluru, Karnataka 577101",
  phone: "+91 9019309686",
  email: "lavishhbeautysalon@gmail.com",
  whatsapp: "+91 9019309686",
  openingHours: {
    weekdays: "Mon – Sat: 10:30 AM – 7:30 PM",
    sunday: "Sunday: 11:00 AM – 6:00 PM"
  },
  googleMapsUrl: "https://maps.app.goo.gl/5XnrmCQHSybndTu47"
}
```

### 💰 **Discount Settings**
```javascript
discount: {
  percentage: 20,           // Change discount percentage
  label: "Limited Time Offer",
  enabled: true,            // Enable/disable discount
  card: {
    position: { top: "200px", right: "30px" },
    size: { minWidth: "220px", padding: "var(--space-20)" },
    colors: {
      background: "linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)",
      text: "white",
      border: "rgba(255, 255, 255, 0.3)"
    },
    animation: {
      pendulum: { duration: "3s", swing: "5deg" },
      pulse: { duration: "1.5s" },
      glow: { duration: "2s" }
    }
  }
}
```

### ✂️ **Services Configuration**
```javascript
services: {
  categories: [
    {
      name: "Facials",
      icon: "fas fa-spa",
      image: "image_assets/services/Facials/facial.jpg",
      description: "Rejuvenate your skin with our premium facial treatments",
      subServices: [
        {
          name: "Clean up",
          description: "Deep cleansing treatment for refreshed, glowing skin",
          price: 300,
          icon: "fas fa-leaf",
          image: "image_assets/services/Facials/Clean up/cleanup.jpeg"
        }
        // More services...
      ]
    }
    // 8 service categories total
  ]
}
```

### 🖼️ **Gallery Settings**
```javascript
gallery: {
  images: [
    { image: "image_assets/galleryImages/salon1.jpg", alt: "Salon interior 1" },
    { image: "image_assets/galleryImages/salon2.jpg", alt: "Salon interior 2" }
    // 8 gallery images total
  ],
  autoScroll: {
    enabled: true,
    speed: 3000,
    pauseOnHover: true
  }
}
```

### 👥 **Team Information**
```javascript
team: [
  {
    name: "Nagaratna Manohar",
    role: "Senior Stylist",
    photo: "image_assets/beauticians/Nagaratna.jpg",
    bio: "25+ years of experience in creative cuts and modern styling techniques."
  }
]
```

### 💬 **Testimonials**
```javascript
testimonials: [
  {
    name: "Revathi",
    role: "Regular Client",
    avatar: "image_assets/testimonials/rev.png",
    content: "Professional service with a personal touch. The staff really knows their craft and uses premium products.",
    rating: 5
  }
  // 4 testimonials total
]
```

### 📅 **Booking Settings**
```javascript
booking: {
  whatsapp: {
    enabled: true,
    number: "+91 9019309686",
    message: "Hi! I'd like to book an appointment at Lavishh Beauty Salon."
  },
  timeSlots: [
    "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM",
    "12:30 PM", "01:00 PM", "01:30 PM", "02:00 PM",
    "02:30 PM", "03:00 PM", "03:30 PM", "04:00 PM",
    "04:30 PM", "05:00 PM", "05:30 PM", "06:00 PM",
    "06:30 PM", "07:00 PM", "07:30 PM"
  ],
  maxAdvanceBooking: 30 // days
}
```

### 🏢 **Brands**
```javascript
brands: [
  { name: "Biotique", logo: "image_assets/brands/Biotique.jpg" },
  { name: "Lakme", logo: "image_assets/brands/Lakme.jpg" },
  { name: "L'Oreal Professional", logo: "image_assets/brands/loreal-professionnel.jpg" },
  { name: "Lotus", logo: "image_assets/brands/Lotus.jpg" },
  { name: "O3 Plus", logo: "image_assets/brands/O3Plus.png" },
  { name: "Sugar Cosmetics", logo: "image_assets/brands/sugar-cosmetics.jpg" }
]
```

---

## 🎨 **Design System**

### 🎨 **Color Palette**
```css
:root {
  /* Primary Colors */
  --color-primary: #d4af37;        /* Gold */
  --color-secondary: #1e293b;      /* Dark blue */
  --color-accent: #e74c3c;         /* Red */
  
  /* Lavender Theme */
  --color-lavender-50: rgba(250, 245, 255, 1);
  --color-lavender-500: rgba(168, 85, 247, 1);
  --color-lavender-600: rgba(147, 51, 234, 1);
  
  /* Text Colors */
  --color-text: #1e293b;
  --color-text-secondary: #64748b;
}
```

### 📱 **Responsive Breakpoints**
- **Mobile:** < 768px
- **Tablet:** 768px - 1024px
- **Desktop:** > 1024px

### 🎭 **Animations**
- **Welcome Animation** - Fade-in logo and text
- **Discount Card** - Pendulum swing with shimmer effect
- **Service Cards** - Hover animations with scale and glow
- **Team Cards** - Elegant hover effects with photo scaling
- **Gallery** - Smooth scrolling and fullscreen view

---

## 🚀 **How to Use**

### 1. **Modify Configuration**
- Open `config.js`
- Change any settings you want
- Save the file
- Refresh your website

### 2. **Add New Services**
```javascript
// In config.js, add to services.categories array:
{
  name: "New Service",
  icon: "fas fa-icon-name",
  image: "path/to/image.jpg",
  description: "Service description",
  subServices: [
    {
      name: "Sub Service",
      description: "Description",
      price: 500,
      icon: "fas fa-icon",
      image: "path/to/image.jpg"
    }
  ]
}
```

### 3. **Change Discount**
```javascript
// In config.js:
discount: {
  percentage: 25,  // Change to 25%
  enabled: true    // Set to false to disable
}
```

### 4. **Update Business Info**
```javascript
// In config.js:
business: {
  name: "Your Salon Name",
  phone: "+91 your-number",
  address: "Your Address"
}
```

### 5. **Update Opening Hours**
```javascript
// In config.js:
openingHours: {
  weekdays: "Mon – Sat: 9:00 AM – 8:00 PM",
  sunday: "Sunday: 10:00 AM – 6:00 PM"
}
```

---

## 🔧 **Technical Features**

### ✅ **Modular Architecture**
- **Feature-based organization**: Each feature has its own module
- **Easy maintenance**: Find and fix issues quickly
- **Scalable**: Add new features easily

### ✅ **Smart Booking System**
- **Dynamic time slots**: Different times for weekdays vs Sunday
- **WhatsApp integration**: Direct booking via WhatsApp
- **Form validation**: Client-side validation with error messages
- **Service selection**: Multi-service booking with total calculation

### ✅ **Performance Optimized**
- **Single CSS file**: Faster loading
- **Optimized images**: Proper sizing and formats
- **Lazy loading**: Features load when needed
- **Mobile optimized**: Responsive design

### ✅ **SEO Friendly**
- **Meta tags**: Proper title, description, keywords
- **Structured data**: Schema markup for local business
- **Social media**: Open Graph and Twitter Card tags
- **Accessibility**: ARIA labels and semantic HTML

---

## 📱 **Mobile Features**

### ✅ **Touch Optimized**
- **Swipe gestures**: Gallery navigation
- **Pull to refresh**: Gallery refresh
- **Haptic feedback**: Touch responses
- **Mobile menu**: Hamburger navigation

### ✅ **Responsive Design**
- **Fluid layouts**: Adapts to all screen sizes
- **Touch-friendly buttons**: Proper sizing for mobile
- **Optimized images**: Load appropriate sizes
- **Readable text**: Proper font sizes

---

## 🎯 **Benefits**

1. **Easy Updates**: Change content without touching code
2. **Better Organization**: Features are separated and organized
3. **Faster Development**: Work on features independently
4. **Easier Debugging**: Issues are isolated to specific features
5. **Scalable**: Add new features without affecting existing ones
6. **Maintainable**: Clean, readable code structure
7. **Professional**: Luxury design with smooth animations
8. **Business Ready**: Complete booking and contact system

---

## 🛠️ **Development**

### **File Structure**
- **HTML**: `index.html` - Main structure
- **CSS**: `style.css` - All styles (4,648 lines)
- **JavaScript**: Modular structure in `js/` folder
- **Configuration**: `config.js` - All customizable data
- **Assets**: `image_assets/` - All images and media

### **Key Technologies**
- **HTML5**: Semantic markup
- **CSS3**: Modern styling with animations
- **Vanilla JavaScript**: No frameworks, pure JS
- **Responsive Design**: Mobile-first approach

### **Browser Support**
- **Chrome**: Full support
- **Safari**: Full support
- **Firefox**: Full support
- **Edge**: Full support
- **Mobile browsers**: Full support

---

## 📞 **Contact Information**

**Website:** [www.lavishhbeautysalon.com](https://www.lavishhbeautysalon.com)

**Phone:** +91 9019309686

**Email:** lavishhbeautysalon@gmail.com

**Address:** Hanumantappa Circle, MG Rd, Joythinagar, Chikkamagaluru, Karnataka 577101

**Google Maps:** [View on Google Maps](https://maps.app.goo.gl/5XnrmCQHSybndTu47)

---

## 🎉 **Ready to Use**

The website is production-ready with:
- ✅ **Complete booking system**
- ✅ **Dynamic service management**
- ✅ **Responsive design**
- ✅ **SEO optimization**
- ✅ **Professional animations**
- ✅ **Easy customization**

**Need help?** The configuration file is your friend - most changes can be made there without touching any code!

---

*Built with ❤️ for Lavishh Beauty Salon* 