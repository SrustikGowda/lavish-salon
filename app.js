// Discount Configuration - Edit this value to apply discounts site-wide
const DISCOUNT_PERCENT = 20; // Set to 0 for no discount, e.g., 20 for 20% discount

// Sample Data with exact image paths from user's folder structure
const sampleData = {
  services: [
    {
      name: "Facials",
      description: "Rejuvenate your skin with our premium facial treatments",
      icon: "fas fa-spa",
      image: "image_assets/services/Facials/facial.jpg",
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
      description: "Complete hair care and styling solutions",
      icon: "fas fa-cut",
      image: "image_assets/services/Haircuts and Styling/hair_service.jpg",
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
      description: "Transform your look with professional hair coloring",
      icon: "fas fa-palette",
      image: "image_assets/services/Hair Coloring/hair_coloring.jpg",
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
      description: "Advanced treatments for healthy, beautiful hair",
      icon: "fas fa-leaf",
      image: "image_assets/services/Hair Treatment/Keratin-treatment-2.jpg",
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
      description: "Professional waxing services for smooth skin",
      icon: "fas fa-feather-alt",
      image: "image_assets/services/Waxing/waxing.jpg",
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
      description: "Pamper your hands and feet with professional care",
      icon: "fas fa-hand-holding-heart",
      image: "image_assets/services/Manicure & Pedicure/manicure.jpeg",
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
      description: "Professional makeup for all occasions",
      icon: "fas fa-palette",
      image: "image_assets/services/Makeup/makeup.jpg",
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
      description: "Precise eyebrow shaping and facial hair removal",
      icon: "fas fa-palette",
      image: "image_assets/services/Threading/main.jpg",
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
  ],
  
  gallery: [
    { image: "image_assets/galleryImages/salon1.jpg", alt: "Salon interior 1" },
    { image: "image_assets/galleryImages/salon2.jpg", alt: "Salon interior 2" },
    { image: "image_assets/galleryImages/salon3.jpg", alt: "Salon interior 3" },
    { image: "image_assets/galleryImages/salon4.jpg", alt: "Salon interior 4" },
    { image: "image_assets/galleryImages/salon5.jpg", alt: "Salon interior 5" },
    { image: "image_assets/galleryImages/salon6.jpg", alt: "Salon interior 6" },
    { image: "image_assets/galleryImages/salon7.jpg", alt: "Salon interior 7" },
    { image: "image_assets/galleryImages/salon8.jpg", alt: "Salon interior 8" }
  ],
  
  testimonials: [
    {
      name: "Revathi Gowda",
      rating: 5,
      content: "Absolutely love the service! The staff is professional and the ambiance is so relaxing. My facial treatment was amazing!",
      image: "image_assets/testimonials/rev.png"
    },
    {
      name: "Thanmai Gowda",
      rating: 5,
      content: "The bridal makeup service was exceptional. I felt like a princess on my wedding day. Highly recommend Lavishh!",
      image: "image_assets/testimonials/thanmai.png"
    },
    {
      name: "Sumana Nagaraj",
      rating: 5,
      content: "Best salon experience ever! The hair treatment made my hair so soft and shiny. Will definitely be coming back!",
      image: "image_assets/testimonials/sumana.png"
    },
    {
      name: "Abhijna",
      rating: 5,
      content: "Professional service with a personal touch. The staff really knows their craft and uses premium products.",
      image: "image_assets/testimonials/abhi.png"
    }
  ],

  beauticians: [
    { 
      name: "Nagaratna Manohar", 
      role: "Senior Stylist", 
      photo: "image_assets/beauticians/Nagaratna.jpg", 
      bio: "12+ years of experience in creative cuts and modern styling techniques." 
    }
  ],
  
  brands: [
    { name: "Biotique", logo: "image_assets/brands/Biotique.jpg" },
    { name: "Lakme", logo: "image_assets/brands/Lakme.jpg" },
    { name: "L'Oreal Professional", logo: "image_assets/brands/loreal-professionnel.jpg" },
    { name: "Lotus", logo: "image_assets/brands/Lotus.jpg" },
    { name: "O3 Plus", logo: "image_assets/brands/O3Plus.png" },
    { name: "Sugar Cosmetics", logo: "image_assets/brands/sugar-cosmetics.jpg" }
  ]
};

/* -------------------------------------------------------------------------
   GLOBAL STATE
------------------------------------------------------------------------- */
let currentPage = 'main';
let autoScrollIntervals = [];

/* -------------------------------------------------------------------------
   INITIALISE APP
------------------------------------------------------------------------- */
window.addEventListener('DOMContentLoaded', () => {
  initialiseApp();
});

function initialiseApp() {

  // Hide main page content initially
  const mainPage = document.getElementById('main-page');
  if (mainPage) {
    mainPage.style.display = 'none';
  }

  // Remove welcome overlay after animation and show main page
  setTimeout(() => {
    const overlay = document.getElementById('welcome-overlay');
    if (overlay) {
      overlay.style.display = 'none';
    }
    
    // Show main page content after welcome overlay
    if (mainPage) {
      mainPage.style.display = 'block';
    }
    
    // Setup navigation
    setupNavigation();

    // Check URL parameters to show appropriate page
    const params = new URLSearchParams(location.search);
    const cat = params.get('cat');
    if (cat !== null && !isNaN(cat)) {
      showCategoryPage(parseInt(cat));
    } else {
      showMainPage();
    }

    // Setup scroll interaction handlers after short delay
    setTimeout(setupScrollInteractionHandlers, 1000);
    
    // Setup service search
    setupServiceSearch();
    
    // Render all sections immediately
    renderServices();
    renderGallery();
    renderTestimonials();
    renderTeam();
    renderBrands();
    
    // Ensure all service cards are visible on page load
    showAllServiceCards();
    
    // Preload critical images
    preloadCriticalImages();
  }, 2500);
}

/* -------------------------------------------------------------------------
   NAVIGATION FUNCTIONS
------------------------------------------------------------------------- */
function setupNavigation() {
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');

  // Mobile menu toggle
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  }

  // Navigation links
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      
      // Close mobile menu
      if (navMenu) {
        navMenu.classList.remove('active');
      }
      
      // Scroll to section
      scrollToSection(targetId);
    });
  });

  const homeLink = document.getElementById('nav-home');
  if (homeLink) {
    homeLink.addEventListener('click', e => {
      e.preventDefault();                     // prevent default scrolling or reload
      history.pushState({}, '', location.pathname);
      showMainPage();                         // switch back to services overview
    });
  }

  // Close mobile menu when clicking outside
  document.addEventListener('click', (e) => {
    if (navMenu && !navToggle.contains(e.target) && !navMenu.contains(e.target)) {
      navMenu.classList.remove('active');
    }
  });
}

function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    const navbar = document.querySelector('.navbar');
    const offset = navbar ? navbar.offsetHeight + 20 : 80;
    const elementPosition = element.offsetTop - offset;
    
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    });
  }
}

/* -------------------------------------------------------------------------
   PAGE VIEW FUNCTIONS
------------------------------------------------------------------------- */
function showMainPage() {
  currentPage = 'main';
  document.getElementById('main-page').classList.remove('hidden');
  document.getElementById('category-page').classList.add('hidden');

  // Render all sections
  renderServices();
  renderGallery();
  renderTestimonials();
  renderTeam()
  renderBrands();
  initBooking();
  
  // Ensure all service cards are visible
  showAllServiceCards();

  // Start auto-scroll after rendering
  setTimeout(startAutoScroll, 100);

  // Set minimum date for booking to today
  const today = new Date().toISOString().split('T')[0];
  const bookingDate = document.getElementById('booking-date');
  if (bookingDate) {
      bookingDate.min = today;
  }
}

function showCategoryPage(categoryIndex) {
  currentPage = 'category';
  document.getElementById('main-page').classList.add('hidden');
  document.getElementById('category-page').classList.remove('hidden');

  // Stop auto-scroll on category page
  clearAutoScroll();
  
  // Render category details
  renderCategoryDetail(categoryIndex);
  
  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'instant' });

  // Setup back button
  const backBtn = document.getElementById('back-btn');
  if (backBtn) {
    backBtn.onclick = () => {
      history.pushState({}, '', location.pathname);
      showMainPage();
    };
  }
}

/* -------------------------------------------------------------------------
   PRICE CALCULATION
------------------------------------------------------------------------- */
function calculatePrice(originalPrice) {
  if (DISCOUNT_PERCENT <= 0) return originalPrice;
  return Math.round(originalPrice * (1 - DISCOUNT_PERCENT / 100));
}

function formatPrice(originalPrice) {
  if (DISCOUNT_PERCENT > 0) {
    const discountedPrice = calculatePrice(originalPrice);
    return `<span class="original-price">₹${originalPrice}</span>₹${discountedPrice}`;
  }
  return `₹${originalPrice}`;
}

/* -------------------------------------------------------------------------
   RENDER FUNCTIONS
------------------------------------------------------------------------- */
function renderServices() {
  const grid = document.getElementById('services-grid');
  if (!grid) return;
  
  grid.innerHTML = '';

  sampleData.services.forEach((service, index) => {
    const serviceCard = document.createElement('div');
    serviceCard.className = 'service-card';

    serviceCard.innerHTML = `
    <a href="?cat=${index}" class="service-link">
      <div class="service-image-wrapper">
        <img src="${service.image}" alt="${service.name}" class="service-image">
      </div>
      <div class="service-info">
        <h3>${service.name}</h3>
        <p>${service.description}</p>
      </div>
    </a>`;

    // Add click handler for SPA navigation
    const link = serviceCard.querySelector('.service-link');
    link.addEventListener('click', (e) => {
      e.preventDefault();
      history.pushState({}, '', `?cat=${index}`);
      showCategoryPage(index);
    });

    grid.appendChild(serviceCard);
  });
}

function renderCategoryDetail(categoryIndex) {
  const category = sampleData.services[categoryIndex];
  if (!category) return;

  // Set category header
  document.getElementById('category-title').textContent = category.name;
  document.getElementById('category-description').textContent = category.description;
  
  // Set category hero image
  const heroImage = document.getElementById('category-hero-image');
  heroImage.innerHTML = `<img src="${category.image}" alt="${category.name}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                         <div style="display:none; width:100%; height:100%; background:var(--color-bg-3); align-items:center; justify-content:center; font-size:3rem; color:var(--color-primary);">
                           <i class="${category.icon}"></i>
                         </div>`;

  // Render sub-services
  const grid = document.getElementById('subcategory-grid');
  grid.innerHTML = '';

  category.subServices.forEach((subService, index) => {
    const subCard = document.createElement('div');
    subCard.className = 'subcategory-card';

    subCard.innerHTML = `
      <div class="subcategory-image">
        <img src="${subService.image}" alt="${subService.name}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
        <div style="display:none; width:100%; height:100%; background:var(--color-bg-4); align-items:center; justify-content:center; font-size:2rem; color:var(--color-primary);">
          <i class="${subService.icon}"></i>
        </div>
      </div>
      <div class="subcategory-content">
        <h3>${subService.name}</h3>
        <p>${subService.description}</p>
        <div class="subcategory-price">${formatPrice(subService.price)}</div>
        <button class="btn btn--primary" onclick="bookService('${subService.name}')">
          <i class="fas fa-calendar-alt"></i>
          Book Now
        </button>
      </div>
    `;

    grid.appendChild(subCard);
  });
}

function renderGallery() {
  const container = document.getElementById('gallery-scroll');
  if (!container) return;
  
  container.innerHTML = '';

  sampleData.gallery.forEach((item, index) => {
    const galleryItem = document.createElement('div');
    galleryItem.className = 'gallery-item';
    galleryItem.innerHTML = `<img src="${item.image}" alt="${item.alt}" loading="lazy">`;
    
    // Add click handler for fullscreen
    const img = galleryItem.querySelector('img');
    img.addEventListener('click', () => openFullscreenGallery(item.image, item.alt, index));
    
    container.appendChild(galleryItem);
  });
}

function renderTestimonials() {
  const container = document.getElementById('testimonials-scroll');
  if (!container) return;
  
  container.innerHTML = '';

  sampleData.testimonials.forEach((testimonial) => {
    const testimonialCard = document.createElement('div');
    testimonialCard.className = 'testimonial-card';
    testimonialCard.innerHTML = `
      <div class="testimonial-content">"${testimonial.content}"</div>
      <div class="testimonial-author">
        <div class="testimonial-avatar">
          <img src="${testimonial.image}" alt="${testimonial.name}" loading="lazy">
        </div>
        <div class="testimonial-info">
          <h4>${testimonial.name}</h4>
          <div class="testimonial-rating">${'★'.repeat(testimonial.rating)}</div>
        </div>
      </div>
    `;
    container.appendChild(testimonialCard);
  });
}

function renderTeam() {
  const teamContainer = document.getElementById('team-container');
  const teamLoading = document.getElementById('team-loading');
  // Hide loading spinner and show team grid
  if (teamLoading) teamLoading.style.display = 'none';
  if (teamContainer) teamContainer.style.display = 'grid';

  teamContainer.innerHTML = ''; // clear previous, if any

  if (sampleData.beauticians && sampleData.beauticians.length > 0) {
    sampleData.beauticians.forEach((member, index) => {
      const card = document.createElement('div');
      card.className = 'team-card';
      card.innerHTML = `
        <div class="team-photo-wrapper">
          <img src="${member.photo}" alt="${member.name}" class="team-photo" />
        </div>
        <h3 class="team-member-name">${member.name}</h3>
        <p class="team-member-role">${member.role}</p>
        <p class="team-member-bio">${member.bio}</p>
      `;
      teamContainer.appendChild(card);
    });
  } else {
    teamContainer.innerHTML = '<p>No team members found.</p>';
  }
}



function renderBrands() {
  const container = document.getElementById('brands-scroll');
  if (!container) return;
  
  container.innerHTML = '';

  sampleData.brands.forEach((brand) => {
    const brandItem = document.createElement('div');
    brandItem.className = 'brand-item';
    brandItem.innerHTML = `<img src="${brand.logo}" alt="${brand.name}" loading="lazy">`;
    container.appendChild(brandItem);
  });
}

/* -------------------------------------------------------------------------
   AUTO-SCROLL FUNCTIONALITY
------------------------------------------------------------------------- */
function startAutoScroll() {
  clearAutoScroll();
  if (currentPage !== 'main') return;

  const createAutoScroll = (element, scrollStep, interval) => {
    if (!element) return;
    
    const scrollInterval = setInterval(() => {
      if (currentPage !== 'main') {
        clearInterval(scrollInterval);
        return;
      }
      
      const maxScroll = element.scrollWidth - element.clientWidth;
      
      if (element.scrollLeft >= maxScroll - 5) {
        element.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        element.scrollBy({ left: scrollStep, behavior: 'smooth' });
      }
    }, interval);
    
    autoScrollIntervals.push(scrollInterval);
  };

  // Auto-scroll for different sections
  const gallery = document.getElementById('gallery-scroll');
  const testimonials = document.getElementById('testimonials-scroll');
  const brands = document.getElementById('brands-scroll');

  if (gallery) createAutoScroll(gallery, 420, 3000);      // Gallery: scroll by 420px every 3s
  if (testimonials) createAutoScroll(testimonials, 424, 4000);  // Testimonials: scroll by 424px every 4s  
  if (brands) createAutoScroll(brands, 200, 2500);        // Brands: scroll by 200px every 2.5s
}

function clearAutoScroll() {
  autoScrollIntervals.forEach(interval => clearInterval(interval));
  autoScrollIntervals = [];
}

function setupScrollInteractionHandlers() {
  const scrollContainers = ['gallery-scroll', 'testimonials-scroll', 'brands-scroll'];
  
  scrollContainers.forEach(id => {
    const element = document.getElementById(id);
    if (!element) return;

    // Pause auto-scroll on hover/touch
    ['mouseenter', 'touchstart'].forEach(event => {
      element.addEventListener(event, clearAutoScroll);
    });

    // Resume auto-scroll when not hovering/touching
    ['mouseleave', 'touchend'].forEach(event => {
      element.addEventListener(event, () => {
        setTimeout(startAutoScroll, 1000);
      });
    });
  });
}

/* -------------------------------------------------------------------------
   BOOKING FUNCTIONS
------------------------------------------------------------------------- */

// Initialize booking functionality
function initBooking() {
  console.log('Initializing booking...');
  
  try {
    // Set minimum date to today
    const today = new Date().toISOString().split('T')[0];
    const bookingDate = document.getElementById('booking-date');
    if (bookingDate) {
      bookingDate.min = today;
    }
    
    // Populate category dropdown
    const categorySelect = document.getElementById('booking-category');
    if (categorySelect && sampleData.services) {
      categorySelect.innerHTML = '<option value="">Select a category</option>';
      
      sampleData.services.forEach(service => {
        const option = document.createElement('option');
        option.value = service.name;
        option.textContent = service.name;
        categorySelect.appendChild(option);
      });
    }
    
    // Add event listeners
    if (categorySelect) {
      categorySelect.addEventListener('change', updateSubServices);
    }
    
    const bookingForm = document.getElementById('booking-form');
    if (bookingForm) {
      bookingForm.addEventListener('submit', handleBookingSubmit);
    }
    
    // Close modal when clicking overlay
    const modal = document.getElementById('booking-modal');
    if (modal) {
      const overlay = modal.querySelector('.booking-modal-overlay');
      if (overlay) {
        overlay.addEventListener('click', closeBookingModal);
      }
    }
    
    console.log('Booking initialized successfully');
  } catch (error) {
    console.error('Error initializing booking:', error);
  }
}

// Global variable to store all selected services
let selectedServices = new Map(); // category -> Set of selected services

// Update sub-services based on selected category
function updateSubServices() {
  const categorySelect = document.getElementById('booking-category');
  const subServicesContainer = document.getElementById('sub-services-container');
  const bookingSummary = document.getElementById('booking-summary');
  
  const selectedCategory = categorySelect.value;
  
  if (!selectedCategory) {
    subServicesContainer.innerHTML = '<p class="text-muted">Please select a category to view available services</p>';
    return;
  }
  
  const category = sampleData.services.find(cat => cat.name === selectedCategory);
  
  if (category && category.subServices) {
    // Get previously selected services for this category
    const previouslySelected = selectedServices.get(selectedCategory) || new Set();
    
    const subServicesHTML = category.subServices.map(service => {
      const isChecked = previouslySelected.has(service.name);
      return `
        <div class="service-checkbox-item">
          <label>
            <input type="checkbox" 
                   name="services" 
                   value="${service.name}" 
                   data-price="${service.price}" 
                   data-category="${selectedCategory}"
                   ${isChecked ? 'checked' : ''}
                   onchange="toggleService('${selectedCategory}', '${service.name}', ${service.price})">
            <span class="service-name">${service.name}</span>
          </label>
          <span class="service-price">₹${service.price}</span>
        </div>
      `;
    }).join('');
    
    subServicesContainer.innerHTML = subServicesHTML;
    updateBookingSummary();
  }
}

// Toggle service selection
function toggleService(category, serviceName, price) {
  if (!selectedServices.has(category)) {
    selectedServices.set(category, new Set());
  }
  
  const categoryServices = selectedServices.get(category);
  const checkbox = document.querySelector(`input[value="${serviceName}"][data-category="${category}"]`);
  
  if (checkbox.checked) {
    categoryServices.add(serviceName);
  } else {
    categoryServices.delete(serviceName);
  }
  
  updateBookingSummary();
}

// Update booking summary
function updateBookingSummary() {
  const summaryContent = document.getElementById('summary-content');
  const totalAmount = document.getElementById('total-amount');
  const bookingSummary = document.getElementById('booking-summary');
  
  // Collect all selected services from all categories
  let total = 0;
  const summaryItems = [];
  
  selectedServices.forEach((services, category) => {
    services.forEach(serviceName => {
      // Find the service price from the data
      const categoryData = sampleData.services.find(cat => cat.name === category);
      const serviceData = categoryData?.subServices.find(service => service.name === serviceName);
      
      if (serviceData) {
        total += serviceData.price;
        summaryItems.push({ 
          name: serviceName, 
          price: serviceData.price,
          category: category 
        });
      }
    });
  });
  
  if (summaryItems.length === 0) {
    bookingSummary.style.display = 'none';
    return;
  }
  
  const summaryHTML = summaryItems.map(item => `
    <div class="summary-item">
      <span>${item.name} <small style="color: var(--color-text-secondary);">(${item.category})</small></span>
      <span>₹${item.price}</span>
    </div>
  `).join('');
  
  summaryContent.innerHTML = summaryHTML;
  totalAmount.textContent = total;
  bookingSummary.style.display = 'block';
}

// Handle booking form submission
async function handleBookingSubmit(e) {
  e.preventDefault();
  
  const submitBtn = document.getElementById('submitBtn');
  const originalText = submitBtn.innerHTML;
  
  // Show loading state
  submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
  submitBtn.disabled = true;
  
  try {
    const formData = new FormData(e.target);
    const name = formData.get('booking-name');
    const contact = formData.get('booking-contact');
    const date = formData.get('booking-date');
    const time = formData.get('booking-time');
    const category = formData.get('booking-category');
    
    // Get selected services from all categories
    const allSelectedServices = [];
    let total = 0;
    
    selectedServices.forEach((services, category) => {
      services.forEach(serviceName => {
        const categoryData = sampleData.services.find(cat => cat.name === category);
        const serviceData = categoryData?.subServices.find(service => service.name === serviceName);
        
        if (serviceData) {
          allSelectedServices.push({
            name: serviceName,
            price: serviceData.price,
            category: category
          });
          total += serviceData.price;
        }
      });
    });
    
    if (allSelectedServices.length === 0) {
      showBookingResult('Please select at least one service.', 'error');
      return;
    }
    
    // Prepare booking data
    const bookingData = {
      name: name,
      contact: contact,
      date: date,
      time: time,
      services: allSelectedServices,
      total: total
    };
    
    // Send WhatsApp message
    sendWhatsAppMessage(bookingData);
    
    // Show success message
    showBookingResult('WhatsApp message sent successfully! Please check your WhatsApp for confirmation.', 'success');
    
    // Reset form and close modal after delay
    setTimeout(() => {
      e.target.reset();
      closeBookingModal();
      document.getElementById('booking-summary').style.display = 'none';
    }, 3000);
    
  } catch (error) {
    console.error('Booking error:', error);
    showBookingResult('There was an error sending your booking. Please try again.', 'error');
  } finally {
    // Reset button state
    submitBtn.innerHTML = originalText;
    submitBtn.disabled = false;
  }
}



// Send WhatsApp message
function sendWhatsAppMessage(bookingData) {
  // Group services by category
  const servicesByCategory = {};
  bookingData.services.forEach(service => {
    if (!servicesByCategory[service.category]) {
      servicesByCategory[service.category] = [];
    }
    servicesByCategory[service.category].push(service);
  });
  
  // Create formatted services list
  let servicesList = '';
  Object.entries(servicesByCategory).forEach(([category, services]) => {
    servicesList += `\n${category}:\n`;
    services.forEach(service => {
      servicesList += `• ${service.name} - ₹${service.price}\n`;
    });
  });
  
  const message = `Hello! I would like to book an appointment at Lavishh Beauty Salon.

Name: ${bookingData.name}
Contact: ${bookingData.contact}
Date: ${bookingData.date}
Time: ${bookingData.time}

Services:${servicesList}
Total: ₹${bookingData.total}

Please confirm my appointment. Thank you!`;
  
  const encodedMessage = encodeURIComponent(message);
  const whatsappURL = `https://wa.me/919019309686?text=${encodedMessage}`;
  window.open(whatsappURL, '_blank');
}

// Show booking result message
function showBookingResult(message, type) {
  const resultDiv = document.getElementById('booking-result');
  resultDiv.textContent = message;
  resultDiv.className = `booking-result ${type}`;
  resultDiv.style.display = 'block';
  
  // Auto-hide after 5 seconds
  setTimeout(() => {
    resultDiv.style.display = 'none';
  }, 5000);
}

// Modal functions
function openBookingModal() {
  const modal = document.getElementById('booking-modal');
  if (modal) {
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    
    // Reset form and selected services
    const form = document.getElementById('booking-form');
    if (form) {
      form.reset();
      selectedServices.clear(); // Clear all selected services
      document.getElementById('booking-summary').style.display = 'none';
      document.getElementById('booking-result').style.display = 'none';
    }
  }
}

function closeBookingModal() {
  const modal = document.getElementById('booking-modal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
  }
}

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeBookingModal();
  }
});

// Service search functionality
function setupServiceSearch() {
  const searchInput = document.getElementById('service-search');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const searchTerm = e.target.value.toLowerCase();
      const serviceCards = document.querySelectorAll('.service-card');
      
      // If search is empty, show all cards
      if (searchTerm === '') {
        serviceCards.forEach(card => {
          card.classList.remove('hidden');
        });
        return;
      }
      
      serviceCards.forEach(card => {
        const serviceName = card.querySelector('h3').textContent.toLowerCase();
        const serviceDesc = card.querySelector('p').textContent.toLowerCase();
        
        if (serviceName.includes(searchTerm) || serviceDesc.includes(searchTerm)) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  }
}

// Show all service cards (used on page load)
function showAllServiceCards() {
  const serviceCards = document.querySelectorAll('.service-card');
  serviceCards.forEach(card => {
    card.classList.remove('hidden');
  });
}

// Preload critical images for better performance
function preloadCriticalImages() {
  const criticalImages = [
    'image_assets/logo.png',
    'image_assets/services/Facials/facial.jpg',
    'image_assets/services/Haircuts and Styling/hair_service.jpg'
  ];
  
  criticalImages.forEach(src => {
    const img = new Image();
    img.src = src;
  });
}

// Add service to booking (called from service cards)
function bookService(serviceName) {
  openBookingModal();
  
  // Find the service in the data
  for (const category of sampleData.services) {
    const service = category.subServices.find(s => s.name === serviceName);
    if (service) {
      // Set the category
      const categorySelect = document.getElementById('booking-category');
      categorySelect.value = category.name;
      
      // Update sub-services
      updateSubServices();
      
      // Pre-select the service
      setTimeout(() => {
        const serviceCheckbox = document.querySelector(`input[value="${serviceName}"]`);
        if (serviceCheckbox) {
          serviceCheckbox.checked = true;
          toggleService(category.name, serviceName, service.price);
        }
      }, 100);
      break;
    }
  }
}


/* -------------------------------------------------------------------------
   BROWSER NAVIGATION (Back/Forward buttons)
------------------------------------------------------------------------- */
window.addEventListener('popstate', () => {
  const params = new URLSearchParams(location.search);
  const cat = params.get('cat');
  
  if (cat !== null && !isNaN(cat)) {
    showCategoryPage(parseInt(cat));
  } else {
    showMainPage();
  }
});

/* -------------------------------------------------------------------------
   UTILITY FUNCTIONS
------------------------------------------------------------------------- */
// Scroll to top function
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Share location functionality
function shareLocation() {
  const salonInfo = {
    title: 'Lavishh Beauty Salon',
    text: 'Visit us at Hanumantappa Circle, MG Rd, Chikkamagaluru',
    url: 'https://maps.app.goo.gl/5XnrmCQHSybndTu47'
  };

  if (navigator.share) {
    navigator.share(salonInfo)
      .then(() => console.log('Location shared successfully'))
      .catch((error) => console.log('Error sharing:', error));
  } else {
    // Fallback for browsers that don't support Web Share API
    const shareUrl = `https://wa.me/?text=${encodeURIComponent(`${salonInfo.title} - ${salonInfo.text} ${salonInfo.url}`)}`;
    window.open(shareUrl, '_blank');
  }
}

// Smooth scrolling for anchor links
document.addEventListener('click', (e) => {
  if (e.target.matches('a[href^="#"]')) {
    e.preventDefault();
    const targetId = e.target.getAttribute('href').substring(1);
    scrollToSection(targetId);
  }
});

// Update scroll to top button on scroll
window.addEventListener('scroll', () => {
  const scrollToTopBtn = document.getElementById('scroll-to-top');
  
  // Show/hide scroll to top button
  if (scrollToTopBtn) {
    if (window.scrollY > 300) {
      scrollToTopBtn.classList.add('show');
    } else {
      scrollToTopBtn.classList.remove('show');
    }
  }
});

/* -------------------------------------------------------------------------
   FULLSCREEN GALLERY FUNCTIONALITY
------------------------------------------------------------------------- */
function openFullscreenGallery(imageSrc, imageAlt, imageIndex = 0) {
  // Create fullscreen overlay
  const overlay = document.createElement('div');
  overlay.className = 'fullscreen-gallery-overlay';
  
  // Get current image index if not provided
  if (imageIndex === 0) {
    const currentImage = sampleData.gallery.findIndex(item => item.image === imageSrc);
    imageIndex = currentImage !== -1 ? currentImage : 0;
  }
  
  overlay.innerHTML = `
    <div class="fullscreen-gallery-content">
      <button class="fullscreen-close-btn" onclick="closeFullscreenGallery()">
        <i class="fas fa-times"></i>
      </button>
      <button class="fullscreen-nav-btn fullscreen-prev-btn" onclick="navigateGallery(-1)">
        <i class="fas fa-chevron-left"></i>
      </button>
      <button class="fullscreen-nav-btn fullscreen-next-btn" onclick="navigateGallery(1)">
        <i class="fas fa-chevron-right"></i>
      </button>
      <img src="${imageSrc}" alt="${imageAlt}" class="fullscreen-gallery-image" data-index="${imageIndex}">
      <div class="fullscreen-gallery-counter">
        <span class="current-image">${imageIndex + 1}</span> / <span class="total-images">${sampleData.gallery.length}</span>
      </div>
    </div>
  `;
  
  document.body.appendChild(overlay);
  document.body.style.overflow = 'hidden';
  
  // Store current index globally
  window.currentGalleryIndex = imageIndex;
  
  // Add click outside to close
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      closeFullscreenGallery();
    }
  });
  
  // Add escape key to close
  document.addEventListener('keydown', handleFullscreenKeydown);
}

function closeFullscreenGallery() {
  const overlay = document.querySelector('.fullscreen-gallery-overlay');
  if (overlay) {
    overlay.remove();
    document.body.style.overflow = '';
    document.removeEventListener('keydown', handleFullscreenKeydown);
  }
}

function handleFullscreenKeydown(e) {
  if (e.key === 'Escape') {
    closeFullscreenGallery();
  } else if (e.key === 'ArrowLeft') {
    navigateGallery(-1);
  } else if (e.key === 'ArrowRight') {
    navigateGallery(1);
  }
}

function navigateGallery(direction) {
  const totalImages = sampleData.gallery.length;
  let newIndex = window.currentGalleryIndex + direction;
  
  // Loop around
  if (newIndex < 0) {
    newIndex = totalImages - 1;
  } else if (newIndex >= totalImages) {
    newIndex = 0;
  }
  
  // Update global index
  window.currentGalleryIndex = newIndex;
  
  // Get the new image data
  const newImage = sampleData.gallery[newIndex];
  
  // Update the image and counter
  const imageElement = document.querySelector('.fullscreen-gallery-image');
  const counterElement = document.querySelector('.fullscreen-gallery-counter');
  
  if (imageElement && counterElement) {
    imageElement.src = newImage.image;
    imageElement.alt = newImage.alt;
    imageElement.setAttribute('data-index', newIndex);
    
    counterElement.innerHTML = `
      <span class="current-image">${newIndex + 1}</span> / <span class="total-images">${totalImages}</span>
    `;
  }
}