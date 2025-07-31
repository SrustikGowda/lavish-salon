// ========================================
// SERVICES FEATURE
// ========================================

class ServicesManager {
  constructor() {
    this.servicesGrid = document.getElementById('services-grid');
    this.searchInput = document.getElementById('service-search');
    this.init();
  }

  init() {
    this.renderServices();
    this.setupSearch();
  }

  renderServices() {
    if (!this.servicesGrid) return;

    this.servicesGrid.innerHTML = '';
    
    CONFIG.services.categories.forEach((service, index) => {
      const serviceCard = this.createServiceCard(service, index);
      this.servicesGrid.appendChild(serviceCard);
    });
  }

  createServiceCard(service, index) {
    const serviceCard = document.createElement('div');
    serviceCard.className = 'service-card';
    serviceCard.style.cursor = 'pointer';
    
    serviceCard.innerHTML = `
      <div class="service-image-wrapper">
        <img src="${service.image}" alt="${service.name}" class="service-image">
      </div>
      <div class="service-icon">
        <i class="${service.icon}"></i>
      </div>
      <h3>${service.name}</h3>
      <p>${service.description}</p>
    `;

    // Add click handler
    serviceCard.addEventListener('click', () => {
      history.pushState({}, '', `?cat=${index}`);
      // Call the main app's showCategoryPage method
      if (window.lavishhApp) {
        window.lavishhApp.showCategoryPage(index);
      }
    });

    return serviceCard;
  }

  setupSearch() {
    if (!this.searchInput) return;

    this.searchInput.addEventListener('input', (e) => {
      const searchTerm = e.target.value.toLowerCase();
      this.filterServices(searchTerm);
    });
  }

  filterServices(searchTerm) {
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
      const title = card.querySelector('h3').textContent.toLowerCase();
      const description = card.querySelector('p').textContent.toLowerCase();
      
      if (title.includes(searchTerm) || description.includes(searchTerm)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  }

  showAllServiceCards() {
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
      card.style.display = 'block';
    });
  }
}

// Export for use in main app
if (typeof module !== 'undefined' && module.exports) {
  module.exports = ServicesManager;
} 