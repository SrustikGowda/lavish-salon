// ========================================
// LAVISHH SALON CONFIGURATION FILE
// ========================================
// Modify these settings without touching the main code

const CONFIG = {
  // ========================================
  // BUSINESS INFORMATION
  // ========================================
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
  },

  // ========================================
  // DISCOUNT SETTINGS
  // ========================================
  discount: {
    percentage: 20,
    label: "Limited Time Offer",
    enabled: true,
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
  },

  // ========================================
  // SERVICES CONFIGURATION
  // ========================================
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
          },
          {
            name: "Diamond Pearl Facial",
            description: "Luxurious diamond and pearl infused facial for radiant skin",
            price: 1200,
            icon: "fas fa-gem",
            image: "image_assets/services/Facials/Diamond_Pearl Facial/diamondfacial.jpg"
          },
          {
            name: "Fruit Facial",
            description: "Natural fruit extracts for healthy, vibrant skin",
            price: 600,
            icon: "fas fa-apple-alt",
            image: "image_assets/services/Facials/Fruit Facial/fruitfacial.webp"
          },
          {
            name: "Gold Facial",
            description: "24k gold treatment for ultimate luxury and anti-aging",
            price: 900,
            icon: "fas fa-crown",
            image: "image_assets/services/Facials/Gold Facial/goldfacial.webp"
          },
          {
            name: "Korean Facial",
            description: "K-beauty inspired multi-step facial treatment",
            price: 1500,
            icon: "fas fa-heart",
            image: "image_assets/services/Facials/Korean Facial/koreanfacial.jpg"
          },
          {
            name: "O3 Bridal Facial",
            description: "Special bridal package for your perfect day",
            price: 1500,
            icon: "fas fa-ring",
            image: "image_assets/services/Facials/O3 Bridal Facial/o3bridal.jpg"
          },
          {
            name: "O3 D-Tan Facial",
            description: "Advanced de-tanning treatment for even skin tone",
            price: 1300,
            icon: "fas fa-sun",
            image: "image_assets/services/Facials/O3 D-Tan Facial/detan.jpg"
          }
        ]
      },
      {
        name: "Haircuts and Styling",
        icon: "fas fa-cut",
        image: "image_assets/services/Haircuts and Styling/hair_service.jpg",
        description: "Complete hair care and styling solutions",
        subServices: [
          {
            name: "Haircut (Basic)",
            description: "Professional hair cutting and styling",
            price: 200,
            icon: "fas fa-scissors",
            image: "image_assets/services/Haircuts and Styling/Haircut (Basic)/haircutbasic.jpg"
          },
          {
            name: "Haircut (Advanced)",
            description: "Premium hair cutting with expert styling",
            price: 400,
            icon: "fas fa-magic",
            image: "image_assets/services/Haircuts and Styling/Haircut (Advanced)/haircutadvanced.jpg"
          },
          {
            name: "Hair Spa (Basic)",
            description: "Relaxing hair treatment and conditioning",
            price: 800,
            icon: "fas fa-water",
            image: "image_assets/services/Haircuts and Styling/Hair Spa (Basic)/spabasic.jpg"
          },
          {
            name: "Hair Spa (Advanced)",
            description: "Intensive hair treatment with premium products",
            price: 1300,
            icon: "fas fa-spa",
            image: "image_assets/services/Haircuts and Styling/Hair Spa (Advanced)/spaadvanced.jpg"
          },
          {
            name: "Head Massage (Oil)",
            description: "Therapeutic oil massage for hair and scalp",
            price: 300,
            icon: "fas fa-hand-sparkles",
            image: "image_assets/services/Haircuts and Styling/Head Massage (Oil)/massage.jpg"
          },
          {
            name: "Hair wash & Blow dry",
            description: "Deep cleansing hair wash followed by professional blow dry for a sleek, voluminous finish",
            price: 300,
            icon: "fas fa-hand-sparkles",
            image: "image_assets/services/Haircuts and Styling/Hair wash/hairwash.avif"
          },
          {
            name: "Hair Straightening/Curling",
            description: "Professional hair straightening or curling for a stunning transformation",
            price: 400,
            icon: "fas fa-magic-wand-sparkles",
            image: "image_assets/services/Haircuts and Styling/Hair Straightening-Curling/curling.webp"
          }
        ]
      },
      {
        name: "Hair Coloring",
        icon: "fas fa-palette",
        image: "image_assets/services/Hair Coloring/hair_coloring.jpg",
        description: "Transform your look with professional hair coloring",
        subServices: [
          {
            name: "Global Hair Color (Short)",
            description: "Full hair coloring for short hair",
            price: 3000,
            icon: "fas fa-brush",
            image: "image_assets/services/Hair Coloring/Global Hair Color (Short)/colorshort.jpg"
          },
          {
            name: "Global Hair Color (Medium)",
            description: "Full hair coloring for medium length hair",
            price: 4000,
            icon: "fas fa-brush",
            image: "image_assets/services/Hair Coloring/Global Hair Color (Medium)/medium.jpg"
          },
          {
            name: "Global Hair Color (Long)",
            description: "Full hair coloring for long hair",
            price: 5000,
            icon: "fas fa-brush",
            image: "image_assets/services/Hair Coloring/Global Hair Color (Long)/long.jpg"
          },
          {
            name: "Highlights per streak",
            description: "Professional highlights for stunning dimension",
            price: 200,
            icon: "fas fa-star",
            image: "image_assets/services/Hair Coloring/Highlights per streak/streak.jpg"
          },
          {
            name: "Root Touch Up",
            description: "Touch up your roots for a fresh look",
            price: 1000,
            icon: "fas fa-touch",
            image: "image_assets/services/Hair Coloring/Root Touch Up/root.jpg"
          },
          {
            name: "Henna Application",
            description: "Natural henna coloring for healthy hair",
            price: 400,
            icon: "fas fa-seedling",
            image: "image_assets/services/Hair Coloring/Henna Application/henna.jpg"
          }
        ]
      },
      {
        name: "Hair Treatment",
        icon: "fas fa-leaf",
        image: "image_assets/services/Hair Treatment/Keratin-treatment-2.jpg",
        description: "Advanced treatments for healthy, beautiful hair",
        subServices: [
          {
            name: "Keratin Treatment (Short)",
            description: "Smooth, frizz-free hair treatment for short hair",
            price: 4000,
            icon: "fas fa-wind",
            image: "image_assets/services/Hair Treatment/Keratin Treatment (Short)/short.jpg"
          },
          {
            name: "Keratin Treatment (Medium)",
            description: "Smooth, frizz-free hair treatment for medium hair",
            price: 5000,
            icon: "fas fa-wind",
            image: "image_assets/services/Hair Treatment/Keratin Treatment (Medium)/medium.jpg"
          },
          {
            name: "Keratin Treatment (Long)",
            description: "Smooth, frizz-free hair treatment for long hair",
            price: 6000,
            icon: "fas fa-wind",
            image: "image_assets/services/Hair Treatment/Keratin Treatment (Long)/long.jpg"
          },
          {
            name: "Botox Treatment (Short)",
            description: "Hair botox for damaged short hair restoration",
            price: 6000,
            icon: "fas fa-magic",
            image: "image_assets/services/Hair Treatment/Botox Treatment (Short)/short.jpg"
          },
          {
            name: "Botox Treatment (Medium)",
            description: "Hair botox for damaged medium hair restoration",
            price: 7000,
            icon: "fas fa-magic",
            image: "image_assets/services/Hair Treatment/Botox Treatment (Medium)/medium.jpg"
          },
          {
            name: "Botox Treatment (Long)",
            description: "Hair botox for damaged long hair restoration",
            price: 8000,
            icon: "fas fa-magic",
            image: "image_assets/services/Hair Treatment/Botox Treatment (Long)/long.jpg"
          },
          {
            name: "Straightening/Smoothening (Short)",
            description: "Permanent hair straightening for short hair",
            price: 3000,
            icon: "fas fa-align-center",
            image: "image_assets/services/Hair Treatment/Straightening_Smoothening (Short)/short.jpg"
          },
          {
            name: "Straightening/Smoothening (Medium)",
            description: "Permanent hair straightening for medium hair",
            price: 4000,
            icon: "fas fa-align-center",
            image: "image_assets/services/Hair Treatment/Straightening_Smoothening (Medium)/medium.jpg"
          },
          {
            name: "Straightening/Smoothening (Long)",
            description: "Permanent hair straightening for long hair",
            price: 5000,
            icon: "fas fa-align-center",
            image: "image_assets/services/Hair Treatment/Straightening_Smoothening (Long)/long.jpg"
          }
        ]
      },
      {
        name: "Waxing",
        icon: "fas fa-feather-alt",
        image: "image_assets/services/Waxing/waxing.jpg",
        description: "Professional waxing services for smooth skin",
        subServices: [
          {
            name: "Face (Normal)",
            description: "Gentle facial waxing with regular wax",
            price: 200,
            icon: "fas fa-smile",
            image: "image_assets/services/Waxing/Face (Normal)/normal.jpg"
          },
          {
            name: "Face (Rica)",
            description: "Premium facial waxing with Rica wax",
            price: 350,
            icon: "fas fa-smile-beam",
            image: "image_assets/services/Waxing/Face (Rica)/rica.jpg"
          },
          {
            name: "Full Arms (Normal)",
            description: "Complete arm waxing with regular wax",
            price: 300,
            icon: "fas fa-hand-paper",
            image: "image_assets/services/Waxing/Full Arms (Normal)/normal.jpg"
          },
          {
            name: "Full Arms (Rica)",
            description: "Complete arm waxing with Rica wax",
            price: 500,
            icon: "fas fa-hand-sparkles",
            image: "image_assets/services/Waxing/Full Arms (Rica)/rica.jpeg"
          },
          {
            name: "Full Legs (Normal)",
            description: "Complete leg waxing with regular wax",
            price: 400,
            icon: "fas fa-running",
            image: "image_assets/services/Waxing/Full Legs (Normal)/leg normal.jpeg"
          },
          {
            name: "Full Legs (Rica)",
            description: "Complete leg waxing with Rica wax",
            price: 600,
            icon: "fas fa-fire",
            image: "image_assets/services/Waxing/Full Legs (Rica)/leg rica.webp"
          },
          {
            name: "Underarms (Normal)",
            description: "Underarm waxing with regular wax",
            price: 100,
            icon: "fas fa-hand-holding-heart",
            image: "image_assets/services/Waxing/Underarms (Normal)/normal underarm.webp"
          },
          {
            name: "Underarms (Rica)",
            description: "Underarm waxing with Rica wax",
            price: 200,
            icon: "fas fa-heart",
            image: "image_assets/services/Waxing/Underarms (Rica)/rica underarm.jpeg"
          },
          {
            name: "Full Body (Normal)",
            description: "Complete body waxing with regular wax",
            price: 1300,
            icon: "fas fa-user",
            image: "image_assets/services/Waxing/Full Body (Normal)/full normal.jpg"
          },
          {
            name: "Full Body (Rica)",
            description: "Complete body waxing with Rica wax",
            price: 2000,
            icon: "fas fa-user-check",
            image: "image_assets/services/Waxing/Full Body (Rica)/full body.jpg"
          },
          {
            name: "Stomach (Normal)",
            description: "Stomach waxing with regular wax",
            price: 200,
            icon: "fas fa-hand-holding-heart",
            image: "image_assets/services/Waxing/Stomach (Normal)/stomach.webp"
          },
          {
            name: "Stomach (Rica)",
            description: "Stomach waxing with Rica wax",
            price: 350,
            icon: "fas fa-heart",
            image: "image_assets/services/Waxing/Stomach (Rica)/stomach rica.jpg"
          },
          {
            name: "Back (Normal)",
            description: "Back waxing with regular wax",
            price: 300,
            icon: "fas fa-user",
            image: "image_assets/services/Waxing/Back (Normal)/back.jpeg"
          },
          {
            name: "Back (Rica)",
            description: "Back waxing with Rica wax",
            price: 500,
            icon: "fas fa-user-check",
            image: "image_assets/services/Waxing/Back (Rica)/back rica.jpg"
          }
        ]
      },
      {
        name: "Manicure & Pedicure",
        icon: "fas fa-hand-holding-heart",
        image: "image_assets/services/Manicure & Pedicure/manicure.jpeg",
        description: "Pamper your hands and feet with professional care",
        subServices: [
          {
            name: "Manicure (Basic)",
            description: "Essential hand care and nail treatment",
            price: 400,
            icon: "fas fa-hand-sparkles",
            image: "image_assets/services/Manicure & Pedicure/Manicure (Basic)/basic.jpg"
          },
          {
            name: "Manicure (Advanced)",
            description: "Premium hand care with spa treatment",
            price: 700,
            icon: "fas fa-spa",
            image: "image_assets/services/Manicure & Pedicure/Manicure (Advanced)/adv.webp"
          },
          {
            name: "Pedicure (Basic)",
            description: "Essential foot care and nail treatment",
            price: 500,
            icon: "fas fa-shoe-prints",
            image: "image_assets/services/Manicure & Pedicure/Pedicure (Basic)/normal.jpg"
          },
          {
            name: "Pedicure (Advanced)",
            description: "Premium foot care with spa treatment",
            price: 800,
            icon: "fas fa-walking",
            image: "image_assets/services/Manicure & Pedicure/Pedicure (Advanced)/adv.avif"
          },
          {
            name: "Nail Polish Application",
            description: "Professional nail polish application",
            price: 100,
            icon: "fas fa-paint-brush",
            image: "image_assets/services/Manicure & Pedicure/Nail Polish Application/nail polish.avif"
          },
          {
            name: "Gel Nail Polish Application",
            description: "Long-lasting gel nail polish application",
            price: 300,
            icon: "fas fa-gem",
            image: "image_assets/services/Manicure & Pedicure/Gel Nail Polish application/gel.jpeg"
          }
        ]
      },
      {
        name: "Makeup",
        icon: "fas fa-palette",
        image: "image_assets/services/Makeup/makeup.jpg",
        description: "Professional makeup for all occasions",
        subServices: [
          {
            name: "Party Makeup",
            description: "Glamorous makeup for parties and events",
            price: 1500,
            icon: "fas fa-glass-cheers",
            image: "image_assets/services/Makeup/Party Makeup/party.jpeg"
          },
          {
            name: "Party Makeup (Kids)",
            description: "Safe and fun makeup for children's parties",
            price: 500,
            icon: "fas fa-child",
            image: "image_assets/services/Makeup/Party Makeup (Kids)/kids.webp"
          },
          {
            name: "HD Bridal Makeup (Basic Products)",
            description: "Professional bridal makeup with basic products",
            price: 5000,
            icon: "fas fa-ring",
            image: "image_assets/services/Makeup/HD Bridal Makeup (Basic Products)/hd basic.jpg"
          },
          {
            name: "HD Bridal Makeup (High-end Products)",
            description: "Luxury bridal makeup with premium products",
            price: 10000,
            icon: "fas fa-crown",
            image: "image_assets/services/Makeup/HD Bridal Makeup (High-end Products)/hd advanced.jpg"
          },
          {
            name: "Hair Styling",
            description: "Professional hair styling for special occasions",
            price: 500,
            icon: "fas fa-magic",
            image: "image_assets/services/Makeup/Hair Styling/hair style.png"
          },
          {
            name: "Saree Draping",
            description: "Professional saree draping service",
            price: 300,
            icon: "fas fa-tshirt",
            image: "image_assets/services/Makeup/Saree Draping/saree.webp"
          }
        ]
      },
      {
        name: "Threading",
        icon: "fas fa-palette",
        image: "image_assets/services/Threading/main.jpg",
        description: "Precise eyebrow shaping and facial hair removal",
        subServices: [
          {
            name: "Eyebrows/Cheeks",
            description: "Defined eyebrows and smooth cheeks for a clean look",
            price: 50,
            icon: "fas fa-glass-cheers",
            image: "image_assets/services/Threading/Eyebrow/eyebrow.jpg"
          },
          {
            name: "UpperLips/Forehead/Chin",
            description: "Gentle hair removal for a polished and fresh face",
            price: 30,
            icon: "fas fa-child",
            image: "image_assets/services/Threading/Lips/lip.webp"
          },
          {
            name: "Full Face",
            description: "Complete facial hair removal for a smooth, radiant finish",
            price: 150,
            icon: "fas fa-ring",
            image: "image_assets/services/Threading/Face/face.png"
          }
        ]
      }
    ]
  },

  // ========================================
  // GALLERY SETTINGS
  // ========================================
  gallery: {
    images: [
      { image: "image_assets/galleryImages/salon1.jpg", alt: "Salon interior 1" },
      { image: "image_assets/galleryImages/salon2.jpg", alt: "Salon interior 2" },
      { image: "image_assets/galleryImages/salon3.jpg", alt: "Salon interior 3" },
      { image: "image_assets/galleryImages/salon4.jpg", alt: "Salon interior 4" },
      { image: "image_assets/galleryImages/salon5.jpg", alt: "Salon interior 5" },
      { image: "image_assets/galleryImages/salon6.jpg", alt: "Salon interior 6" },
      { image: "image_assets/galleryImages/salon7.jpg", alt: "Salon interior 7" },
      { image: "image_assets/galleryImages/salon8.jpg", alt: "Salon interior 8" }
    ],
    autoScroll: {
      enabled: true,
      speed: 3000,
      pauseOnHover: true
    }
  },

  // ========================================
  // TESTIMONIALS
  // ========================================
  testimonials: [
    {
      name: "Revathi Gowda",
      role: "Regular Client",
      avatar: "image_assets/testimonials/rev.png",
      content: "Absolutely love the service! The staff is professional and the ambiance is so relaxing. My facial treatment was amazing!",
      rating: 5
    },
    {
      name: "Thanmai Gowda",
      role: "Bridal Client",
      avatar: "image_assets/testimonials/thanmai.png",
      content: "The bridal makeup service was exceptional. I felt like a princess on my wedding day. Highly recommend Lavishh!",
      rating: 5
    },
    {
      name: "Sumana Nagaraj",
      role: "Hair Care Client",
      avatar: "image_assets/testimonials/sumana.png",
      content: "Best salon experience ever! The hair treatment made my hair so soft and shiny. Will definitely be coming back!",
      rating: 5
    },
    {
      name: "Abhijna",
      role: "Regular Client",
      avatar: "image_assets/testimonials/abhi.png",
      content: "Professional service with a personal touch. The staff really knows their craft and uses premium products.",
      rating: 5
    }
  ],

  // ========================================
  // TEAM MEMBERS
  // ========================================
  team: [
    {
      name: "Nagaratna Manohar",
      role: "Senior Stylist",
      photo: "image_assets/beauticians/Nagaratna.jpg",
      bio: "25+ years of experience in creative cuts and modern styling techniques."
    }
  ],

  // ========================================
  // BRANDS
  // ========================================
  brands: [
    { name: "Biotique", logo: "image_assets/brands/Biotique.jpg" },
    { name: "Lakme", logo: "image_assets/brands/Lakme.jpg" },
    { name: "L'Oreal Professional", logo: "image_assets/brands/loreal-professionnel.jpg" },
    { name: "Lotus", logo: "image_assets/brands/Lotus.jpg" },
    { name: "O3 Plus", logo: "image_assets/brands/O3Plus.png" },
    { name: "Sugar Cosmetics", logo: "image_assets/brands/sugar-cosmetics.jpg" }
  ],

  // ========================================
  // BOOKING SETTINGS
  // ========================================
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
  },

  // ========================================
  // SOCIAL MEDIA
  // ========================================
  social: {
    facebook: "https://facebook.com/lavishhbeautysalon",
    instagram: "https://instagram.com/lavishhbeautysalon",
    whatsapp: "https://wa.me/919019309686"
  },

  // ========================================
  // ANIMATION SETTINGS
  // ========================================
  animations: {
    hero: {
      letterDelay: 0.1,
      titleAnimation: true,
      particleEffect: true
    },
    cards: {
      hoverEffect: true,
      transitionSpeed: "0.4s"
    },
    discount: {
      pendulum: true,
      pulse: true,
      glow: true
    }
  },

  // ========================================
  // THEME COLORS
  // ========================================
  theme: {
    primary: "#d4af37",
    secondary: "#1e293b",
    accent: "#e74c3c",
    text: {
      primary: "#ffffff",
      secondary: "#94a3b8"
    },
    background: {
      primary: "#0f172a",
      secondary: "#1e293b"
    }
  }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CONFIG;
} 