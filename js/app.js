// ========================================
// LAVISHH SALON - MAIN APPLICATION
// ========================================

// Import configuration
// Note: In a real project, you'd use ES6 modules or a bundler
// For now, we'll assume CONFIG is loaded globally

class LavishhSalonApp {
  constructor() {
    this.currentPage = 'main';
    this.features = {};
    this.init();
  }

  async init() {
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.setupApp());
    } else {
      this.setupApp();
    }
  }

  setupApp() {
    // Ensure welcome overlay is visible first
    const welcomeOverlay = document.getElementById('welcome-overlay');
    const mainPage = document.getElementById('main-page');
    
    if (welcomeOverlay) {
      welcomeOverlay.style.display = 'flex';
      welcomeOverlay.style.zIndex = '10000';
    }
    
    if (mainPage) {
      mainPage.style.display = 'none';
    }

    // Remove welcome overlay after animation and show main page
    setTimeout(() => {
      const overlay = document.getElementById('welcome-overlay');
      if (overlay) {
        overlay.style.display = 'none';
        overlay.style.opacity = '0';
        overlay.style.visibility = 'hidden';
      }
      
      // Show main page content after welcome overlay with smooth transition
      if (mainPage) {
        mainPage.style.display = 'block';

      }
      
      // Show navbar and footer specifically
      const navbar = document.getElementById('navbar');
      const footer = document.querySelector('.footer');
      
      if (navbar) {
        navbar.style.display = 'block';
      }
      
      if (footer) {
        footer.style.display = 'block';
      }
      
      // Ensure all main page sections are visible
      const mainSections = document.querySelectorAll('.hero, .services, .gallery, .testimonials, .contact, .business-info, .cta-section, .team, .brands');
      mainSections.forEach(section => {
        if (section) {
          section.style.display = 'block';
          section.style.visibility = 'visible';
          section.style.opacity = '1';
        }
      });
      
      // Fallback: Force show main page if it's still hidden
      setTimeout(() => {
        if (mainPage && mainPage.style.display === 'none') {
          mainPage.style.display = 'block';
          mainPage.style.visibility = 'visible';
          mainPage.style.opacity = '1';
        }
      }, 100);
      
      // Initialize features and setup
      this.initializeFeatures();
      this.setupNavigation();
      this.setupEventListeners();
      this.handleInitialPage();
      
      // Check URL parameters to show appropriate page
      const params = new URLSearchParams(location.search);
      const cat = params.get('cat');
      if (cat !== null && !isNaN(cat)) {
        this.showCategoryPage(parseInt(cat));
      } else {
        this.showMainPage();
      }
      
      // Clear URL parameters to prevent auto-opening booking modal
      if (window.history && window.history.replaceState) {
        window.history.replaceState({}, document.title, window.location.pathname);
      }
      
    }, 2000); // 2 second delay for welcome animation
  }

  initializeFeatures() {
    // Initialize feature modules
    this.features.discount = new DiscountCard();
    this.features.services = new ServicesManager();
    this.features.booking = new BookingManager();
    
    // Initialize other features
    this.initializeGallery();
    this.initializeTestimonials();
    this.initializeTeam();
    this.initializeBrands();
  }

  setupNavigation() {
    // Mobile menu toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
      navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
      });
    }

    // Navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = link.getAttribute('href');
        this.navigateTo(target);
      });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
      if (navMenu && !navToggle.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove('active');
      }
    });
  }

  setupEventListeners() {
    // Booking button
    const bookButtons = document.querySelectorAll('.btn--primary, .nav-book-btn');
    bookButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        this.features.booking.openModal();
      });
    });

    // Back button
    const backBtn = document.getElementById('back-btn');
    if (backBtn) {
      backBtn.addEventListener('click', () => {
        history.pushState({}, '', location.pathname);
        this.showMainPage();
        setTimeout(() => {
          this.scrollToSection('services');
        }, 100);
      });
    }

    // Scroll to top button
    const scrollToTopBtn = document.querySelector('.scroll-to-top');
    if (scrollToTopBtn) {
      window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
          scrollToTopBtn.classList.add('show');
        } else {
          scrollToTopBtn.classList.remove('show');
        }
      });

      scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  }

  handleInitialPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const categoryIndex = urlParams.get('cat');
    
    if (categoryIndex !== null) {
      this.showCategoryPage(parseInt(categoryIndex));
    } else {
      this.showMainPage();
    }
  }

  showMainPage() {
    this.currentPage = 'main';
    document.getElementById('main-page').classList.remove('hidden');
    document.getElementById('category-page').classList.add('hidden');

    // Initialize all sections
    this.features.services.renderServices();
    this.initializeGallery();
    this.initializeTestimonials();
    this.initializeTeam();
    this.initializeBrands();

    // Start auto-scroll
    setTimeout(() => this.startAutoScroll(), 100);
  }

  showCategoryPage(categoryIndex) {
    this.currentPage = 'category';
    document.getElementById('main-page').classList.add('hidden');
    document.getElementById('category-page').classList.remove('hidden');

    // Stop auto-scroll on category page
    this.clearAutoScroll();
    
    // Render category details
    this.renderCategoryDetail(categoryIndex);
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'instant' });
  }

  renderCategoryDetail(categoryIndex) {
    const category = CONFIG.services.categories[categoryIndex];
    if (!category) return;

    // Update category title and description
    const titleElement = document.getElementById('category-title');
    const descElement = document.getElementById('category-description');
    const heroImage = document.getElementById('category-hero-image');
    
    if (titleElement) titleElement.textContent = category.name;
    if (descElement) descElement.textContent = category.description;
    if (heroImage) {
      // Clear existing content
      heroImage.innerHTML = '';
      
      // Create and add the image element
      const img = document.createElement('img');
      img.src = category.image;
      img.alt = category.name;
      img.style.width = '100%';
      img.style.height = '100%';
      img.style.objectFit = 'cover';
      
      heroImage.appendChild(img);
    }

    // Render sub-services
    this.renderSubServices(categoryIndex);
  }

  renderSubServices(categoryIndex) {
    const category = CONFIG.services.categories[categoryIndex];
    if (!category || !category.subServices) return;

    const container = document.getElementById('subcategory-grid');
    if (!container) return;

    container.innerHTML = '';
    
    category.subServices.forEach(service => {
      const serviceCard = document.createElement('div');
      serviceCard.className = 'subcategory-card';
      
      const discountedPrice = this.calculateDiscountedPrice(service.price);
      
      serviceCard.innerHTML = `
        <div class="subcategory-image-wrapper">
          <img src="${service.image}" alt="${service.name}" class="subcategory-image">
        </div>
        <div class="subcategory-content">
          <div class="subcategory-icon">
            <i class="${service.icon}"></i>
          </div>
          <h3>${service.name}</h3>
          <p>${service.description}</p>
          <div class="subcategory-price">
            <span class="original-price">₹${service.price}</span>
            <span class="discounted-price">₹${discountedPrice}</span>
          </div>
          <button class="btn btn--primary subcategory-book-btn" onclick="window.lavishhApp.features.booking.openModal('${category.name}', '${service.name}', ${service.price})">
            <i class="fas fa-calendar-alt"></i>
            Book Now
          </button>
        </div>
      `;
      
      container.appendChild(serviceCard);
    });
  }

  calculateDiscountedPrice(originalPrice) {
    if (!CONFIG.discount.enabled || CONFIG.discount.percentage <= 0) {
      return originalPrice;
    }
    const discount = (originalPrice * CONFIG.discount.percentage) / 100;
    return Math.round(originalPrice - discount);
  }

  initializeGallery() {
    const galleryContainer = document.querySelector('.gallery-scroll');
    if (!galleryContainer) return;

    galleryContainer.innerHTML = '';
    
    CONFIG.gallery.images.forEach((imageData, index) => {
      const galleryItem = document.createElement('div');
      galleryItem.className = 'gallery-item';
      galleryItem.innerHTML = `<img src="${imageData.image}" alt="${imageData.alt}">`;
      
      galleryItem.addEventListener('click', () => {
        this.openFullscreenGallery(imageData.image, imageData.alt, index);
      });
      
      galleryContainer.appendChild(galleryItem);
    });
  }

  initializeTestimonials() {
    const testimonialsContainer = document.querySelector('.testimonials-scroll');
    if (!testimonialsContainer) return;

    testimonialsContainer.innerHTML = '';
    
    CONFIG.testimonials.forEach(testimonial => {
      const testimonialCard = document.createElement('div');
      testimonialCard.className = 'testimonial-card';
      testimonialCard.innerHTML = `
        <div class="testimonial-content">
          <p>"${testimonial.content}"</p>
        </div>
        <div class="testimonial-author">
          <div class="testimonial-avatar">
            <img src="${testimonial.avatar}" alt="${testimonial.name}">
          </div>
          <div class="testimonial-info">
            <h4>${testimonial.name}</h4>
            <p>${testimonial.role}</p>
            <div class="testimonial-rating">
              ${'★'.repeat(testimonial.rating)}
            </div>
          </div>
        </div>
      `;
      
      testimonialsContainer.appendChild(testimonialCard);
    });
  }

  initializeTeam() {
    const teamContainer = document.querySelector('.team-grid');
    const teamLoading = document.getElementById('team-loading');
    
    if (!teamContainer) return;

    // Hide loading spinner and show team container
    if (teamLoading) {
      teamLoading.style.display = 'none';
    }
    teamContainer.style.display = 'grid';

    teamContainer.innerHTML = '';
    
    CONFIG.team.forEach(member => {
      const teamCard = document.createElement('div');
      teamCard.className = 'team-card';
      teamCard.innerHTML = `
        <div class="team-photo-wrapper">
          <img src="${member.photo}" alt="${member.name}" class="team-photo">
        </div>
        <h3 class="team-member-name">${member.name}</h3>
        <p class="team-member-role">${member.role}</p>
        <p class="team-member-bio">${member.bio}</p>
      `;
      
      teamContainer.appendChild(teamCard);
    });
  }

  initializeBrands() {
    const brandsContainer = document.querySelector('.brands-scroll');
    if (!brandsContainer) return;

    brandsContainer.innerHTML = '';
    
    CONFIG.brands.forEach(brand => {
      const brandItem = document.createElement('div');
      brandItem.className = 'brand-item';
      brandItem.innerHTML = `<img src="${brand.logo}" alt="${brand.name}">`;
      
      brandsContainer.appendChild(brandItem);
    });
  }

  startAutoScroll() {
    if (!CONFIG.gallery.autoScroll.enabled) return;

    const galleries = document.querySelectorAll('.gallery-scroll, .testimonials-scroll, .brands-scroll');
    
    galleries.forEach(gallery => {
      let scrollInterval;
      
      const startScroll = () => {
        scrollInterval = setInterval(() => {
          if (gallery.scrollLeft >= gallery.scrollWidth - gallery.clientWidth) {
            gallery.scrollLeft = 0;
          } else {
            gallery.scrollLeft += 1;
          }
        }, CONFIG.gallery.autoScroll.speed);
      };

      const stopScroll = () => {
        clearInterval(scrollInterval);
      };

      if (CONFIG.gallery.autoScroll.pauseOnHover) {
        gallery.addEventListener('mouseenter', stopScroll);
        gallery.addEventListener('mouseleave', startScroll);
      }

      startScroll();
    });
  }

  clearAutoScroll() {
    // Clear any existing auto-scroll intervals
    // This would need to be implemented based on how you store the intervals
  }

  scrollToSection(sectionId) {
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

  openFullscreenGallery(imageSrc, imageAlt, imageIndex = 0) {
    // Implementation for fullscreen gallery
    // This would be implemented based on your gallery requirements
  }

  navigateTo(target) {
    // Handle navigation to different sections
    if (target === '#services') {
      this.scrollToSection('services');
    } else if (target === '#gallery') {
      this.scrollToSection('gallery');
    } else if (target === '#contact') {
      this.scrollToSection('contact');
    }
  }
}

// Initialize the app when the script loads
const app = new LavishhSalonApp();

// Make app instance globally available for feature modules
window.lavishhApp = app;

// Make scrollToSection globally available for HTML onclick attributes
window.scrollToSection = function(sectionId) {
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
};

// Make openBookingModal globally available for HTML onclick attributes
window.openBookingModal = function() {
  if (window.lavishhApp && window.lavishhApp.features && window.lavishhApp.features.booking) {
    window.lavishhApp.features.booking.openModal();
  }
};

// Make shareLocation globally available for HTML onclick attributes
window.shareLocation = function() {
  const salonLocation = "Lavishh Beauty Salon, Hanumantappa Circle, MG Rd, Joythinagar, Chikkamagaluru, Karnataka 577101";
  const googleMapsUrl = "https://maps.app.goo.gl/5XnrmCQHSybndTu47";
  
  if (navigator.share) {
    navigator.share({
      title: 'Lavishh Beauty Salon',
      text: salonLocation,
      url: googleMapsUrl
    });
  } else {
    // Fallback for browsers that don't support Web Share API
    window.open(googleMapsUrl, '_blank');
  }
};

// Make scrollToTop globally available for HTML onclick attributes
window.scrollToTop = function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}; 