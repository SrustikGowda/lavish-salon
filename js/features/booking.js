// ========================================
// BOOKING FEATURE
// ========================================

class BookingManager {
  constructor() {
    this.selectedServices = new Set();
    
    // Wait for DOM to be ready before initializing
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.delayedInit());
    } else {
      this.delayedInit();
    }
  }

  delayedInit() {
    this.modal = document.getElementById('booking-modal');
    this.form = document.getElementById('booking-form');
    
    // If form is not found, try again after a short delay
    if (!this.form) {
      setTimeout(() => this.delayedInit(), 100);
      return;
    }
    
    this.init();
  }

  init() {
    this.setupEventListeners();
    this.populateTimeSlots();
    this.setMinDate();
    this.populateCategoryDropdown();
  }

  setupEventListeners() {
    // Booking form submission
    if (this.form) {
      this.form.addEventListener('submit', (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.handleBookingSubmit(e);
      });
    } else {
      console.error('Booking form not found!');
    }

    // Close modal
    const closeBtn = document.querySelector('.booking-close-btn');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => this.closeModal());
    }

    // Modal overlay click
    const overlay = document.querySelector('.booking-modal-overlay');
    if (overlay) {
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) this.closeModal();
      });
    }

    // Direct submit button click handler as backup
    const submitBtn = document.getElementById('submitBtn');
    if (submitBtn) {
      submitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.handleBookingSubmit(e);
      });
    } else {
      console.error('Submit button not found!');
    }

    // Date input change handler to update time slots
    const dateInput = document.getElementById('booking-date');
    if (dateInput) {
      dateInput.addEventListener('change', () => {
        this.populateTimeSlots();
      });
    }
  }

  populateTimeSlots() {
    const timeSelect = document.getElementById('booking-time');
    if (!timeSelect) return;

    timeSelect.innerHTML = '<option value="">Select Time</option>';
    
    // Get the selected date to determine if it's Sunday
    const dateInput = document.getElementById('booking-date');
    const selectedDate = dateInput ? new Date(dateInput.value) : new Date();
    const isSunday = selectedDate.getDay() === 0; // 0 = Sunday
    
    // Define time slots based on the day
    let timeSlots;
    if (isSunday) {
      // Sunday: 11:00 AM to 6:00 PM
      timeSlots = [
        "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM",
        "01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM",
        "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM",
        "05:00 PM", "05:30 PM", "06:00 PM"
      ];
    } else {
      // Weekdays: 10:30 AM to 7:30 PM
      timeSlots = [
        "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM",
        "12:30 PM", "01:00 PM", "01:30 PM", "02:00 PM",
        "02:30 PM", "03:00 PM", "03:30 PM", "04:00 PM",
        "04:30 PM", "05:00 PM", "05:30 PM", "06:00 PM",
        "06:30 PM", "07:00 PM", "07:30 PM"
      ];
    }
    
    timeSlots.forEach(time => {
      const option = document.createElement('option');
      option.value = time;
      option.textContent = time;
      timeSelect.appendChild(option);
    });
  }

  setMinDate() {
    const dateInput = document.getElementById('booking-date');
    if (!dateInput) return;

    const today = new Date().toISOString().split('T')[0];
    dateInput.min = today;
    
    // Set max date
    const maxDate = new Date();
    maxDate.setDate(maxDate.getDate() + CONFIG.booking.maxAdvanceBooking);
    dateInput.max = maxDate.toISOString().split('T')[0];
  }

  populateCategoryDropdown() {
    const categorySelect = document.getElementById('booking-category');
    if (!categorySelect) return;

    categorySelect.innerHTML = '<option value="">Select a category</option>';
    
    CONFIG.services.categories.forEach((category, index) => {
      const option = document.createElement('option');
      option.value = index;
      option.textContent = category.name;
      categorySelect.appendChild(option);
    });

    // Add change event listener to populate sub-services
    categorySelect.addEventListener('change', (e) => {
      const selectedIndex = e.target.value;
      if (selectedIndex !== '') {
        this.populateSubServices(parseInt(selectedIndex));
      } else {
        this.clearSubServices();
      }
      // Update booking summary when category changes
      this.updateBookingSummary();
    });
  }

  populateSubServices(categoryIndex) {
    const container = document.getElementById('sub-services-container');
    if (!container) return;

    const category = CONFIG.services.categories[categoryIndex];
    if (!category || !category.subServices) return;

    container.innerHTML = '';
    
    category.subServices.forEach(service => {
      const serviceItem = document.createElement('div');
      serviceItem.className = 'service-checkbox-item';
      
      const discountedPrice = this.calculateDiscountedPrice(service.price);
      const serviceKey = `${category.name}-${service.name}`;
      const isSelected = this.selectedServices.has(serviceKey);
      
      serviceItem.innerHTML = `
        <label>
          <input type="checkbox" name="services" value="${category.name}-${service.name}" data-price="${service.price}" ${isSelected ? 'checked' : ''}>
          <span class="service-name">${service.name}</span>
          <span class="service-price">₹${discountedPrice}</span>
        </label>
      `;
      
      // Add change event listener
      const checkbox = serviceItem.querySelector('input[type="checkbox"]');
      checkbox.addEventListener('change', (e) => {
        this.toggleService(category.name, service.name, service.price);
      });
      
      container.appendChild(serviceItem);
    });
  }

  clearSubServices() {
    const container = document.getElementById('sub-services-container');
    if (container) {
      if (this.selectedServices.size > 0) {
        // Show selected services summary
        let summaryHTML = '<h4>Selected Services:</h4>';
        this.selectedServices.forEach(serviceKey => {
          const [category, serviceName] = serviceKey.split('-');
          const price = this.getServicePrice(category, serviceName);
          const discountedPrice = this.calculateDiscountedPrice(price);
          summaryHTML += `
            <div class="service-checkbox-item">
              <span class="service-name">${serviceName} (${category})</span>
              <span class="service-price">₹${discountedPrice}</span>
            </div>
          `;
        });
        container.innerHTML = summaryHTML;
      } else {
        container.innerHTML = '<p class="text-muted">Please select a category to view available services</p>';
      }
    }
  }

  calculateDiscountedPrice(originalPrice) {
    if (!CONFIG.discount.enabled || CONFIG.discount.percentage <= 0) {
      return originalPrice;
    }
    const discount = (originalPrice * CONFIG.discount.percentage) / 100;
    return Math.round(originalPrice - discount);
  }

  openModal(categoryName = null, serviceName = null, servicePrice = null) {
    if (this.modal) {
      this.modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
      
      // If service details are provided, pre-select them
      if (categoryName && serviceName && servicePrice !== null) {
        this.preSelectService(categoryName, serviceName, servicePrice);
      }
    }
  }

  preSelectService(categoryName, serviceName, servicePrice) {
    // Add the pre-selected service (don't clear existing selections)
    const serviceKey = `${categoryName}-${serviceName}`;
    this.selectedServices.add(serviceKey);
    
    // Update the booking summary
    this.updateBookingSummary();
    
    // Update the category dropdown if it exists
    const categorySelect = document.getElementById('booking-category');
    if (categorySelect) {
      // Find the category in CONFIG and set it
      const categoryIndex = CONFIG.services.categories.findIndex(cat => cat.name === categoryName);
      if (categoryIndex !== -1) {
        categorySelect.value = categoryIndex;
        // Trigger change event to populate sub-services
        categorySelect.dispatchEvent(new Event('change'));
        
        // After a short delay, select the specific service
        setTimeout(() => {
          this.selectServiceInCheckbox(categoryName, serviceName);
        }, 100);
      }
    }
  }

  selectServiceInCheckbox(categoryName, serviceName) {
    // Find and check the specific service checkbox
    const serviceCheckboxes = document.querySelectorAll('.service-checkbox-item input[type="checkbox"]');
    serviceCheckboxes.forEach(checkbox => {
      const label = checkbox.nextElementSibling;
      if (label && label.textContent.includes(serviceName)) {
        checkbox.checked = true;
        // Trigger change event to update the booking summary
        checkbox.dispatchEvent(new Event('change'));
      }
    });
  }

  closeModal() {
    if (this.modal) {
      this.modal.classList.add('hidden');
      document.body.style.overflow = '';
    }
  }

  toggleService(category, serviceName, price) {
    const serviceKey = `${category}-${serviceName}`;
    
    if (this.selectedServices.has(serviceKey)) {
      this.selectedServices.delete(serviceKey);
    } else {
      this.selectedServices.add(serviceKey);
    }
    
    this.updateBookingSummary();
  }

  updateBookingSummary() {
    const summaryContainer = document.querySelector('.booking-summary');
    if (!summaryContainer) return;

    // Show summary if there are selected services
    if (this.selectedServices.size > 0) {
      summaryContainer.style.display = 'block';
    } else {
      summaryContainer.style.display = 'none';
      return;
    }

    let total = 0;
    let summaryHTML = '';

    this.selectedServices.forEach(serviceKey => {
      const [category, serviceName] = serviceKey.split('-');
      const price = this.getServicePrice(category, serviceName);
      total += price;
      
      summaryHTML += `
        <div class="summary-item">
          <span>${serviceName} (${category})</span>
          <span>₹${price}</span>
        </div>
      `;
    });

    if (CONFIG.discount.enabled && total > 0) {
      const discountAmount = (total * CONFIG.discount.percentage) / 100;
      const discountedTotal = total - discountAmount;
      
      summaryHTML += `
        <div class="summary-item">
          <span>Discount (${CONFIG.discount.percentage}%)</span>
          <span>-₹${discountAmount}</span>
        </div>
        <div class="summary-item total-amount">
          <span>Total</span>
          <span>₹${discountedTotal}</span>
        </div>
      `;
    } else {
      summaryHTML += `
        <div class="summary-item total-amount">
          <span>Total</span>
          <span>₹${total}</span>
        </div>
      `;
    }

    summaryContainer.innerHTML = summaryHTML;
  }

  getServicePrice(category, serviceName) {
    // Find the category in CONFIG
    const categoryData = CONFIG.services.categories.find(cat => cat.name === category);
    if (!categoryData || !categoryData.subServices) return 0;
    
    // Find the service in the category
    const service = categoryData.subServices.find(service => service.name === serviceName);
    return service ? service.price : 0;
  }

  handleBookingSubmit(e) {
    const submitBtn = document.getElementById('submitBtn');
    if (!submitBtn) {
      console.error('Submit button not found!');
      this.showBookingResult('Error: Submit button not found.', 'error');
      return;
    }
    
    const originalText = submitBtn.innerHTML;
    
    // Show loading state
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitBtn.disabled = true;
    
    // Form validation
    const name = this.form.querySelector('#booking-name').value.trim();
    const contact = this.form.querySelector('#booking-contact').value.trim();
    const date = this.form.querySelector('#booking-date').value;
    const time = this.form.querySelector('#booking-time').value;
    
    // Validate required fields
    if (!name) {
      this.showBookingResult('Please enter your full name.', 'error');
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
      return;
    }
    
    if (!contact) {
      this.showBookingResult('Please enter your contact number.', 'error');
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
      return;
    }
    
    if (!date) {
      this.showBookingResult('Please select a preferred date.', 'error');
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
      return;
    }
    
    if (!time) {
      this.showBookingResult('Please select a preferred time.', 'error');
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
      return;
    }
    
    if (this.selectedServices.size === 0) {
      this.showBookingResult('Please select at least one service.', 'error');
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
      return;
    }
    
    // Get selected services with proper structure
    const allSelectedServices = [];
    let total = 0;
    
    this.selectedServices.forEach(serviceKey => {
      const [category, serviceName] = serviceKey.split('-');
      const categoryData = CONFIG.services.categories.find(cat => cat.name === category);
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
    
    // Apply discount if enabled
    if (CONFIG.discount.enabled && total > 0) {
      const discountAmount = (total * CONFIG.discount.percentage) / 100;
      total = total - discountAmount;
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
    this.sendWhatsAppMessage(bookingData);
    
    // Show success message
    this.showBookingResult('WhatsApp message sent successfully! Please check your WhatsApp for confirmation.', 'success');
    
    // Reset button state
    submitBtn.innerHTML = originalText;
    submitBtn.disabled = false;
    
    // Reset form and close modal after delay
    setTimeout(() => {
      this.form.reset();
      this.closeModal();
      this.selectedServices.clear();
      this.updateBookingSummary();
    }, 3000);
  }

  calculateTotal() {
    let total = 0;
    this.selectedServices.forEach(serviceKey => {
      const [category, serviceName] = serviceKey.split('-');
      total += this.getServicePrice(category, serviceName);
    });

    if (CONFIG.discount.enabled) {
      const discountAmount = (total * CONFIG.discount.percentage) / 100;
      return total - discountAmount;
    }

    return total;
  }

  sendWhatsAppMessage(bookingData) {
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

  showBookingResult(message, type) {
    const resultDiv = document.querySelector('.booking-result');
    if (!resultDiv) return;

    resultDiv.textContent = message;
    resultDiv.className = `booking-result ${type}`;
    resultDiv.style.display = 'block';

    setTimeout(() => {
      resultDiv.style.display = 'none';
    }, 5000);
  }
}

// Export for use in main app
if (typeof module !== 'undefined' && module.exports) {
  module.exports = BookingManager;
} 