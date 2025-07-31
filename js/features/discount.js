// ========================================
// DISCOUNT CARD FEATURE
// ========================================

class DiscountCard {
  constructor() {
    this.card = document.getElementById('discount-card');
    this.percentageElement = this.card?.querySelector('.discount-percentage-number');
    this.init();
  }

  init() {
    if (!this.card) return;
    
    this.updatePercentage();
    this.showCard();
  }

  updatePercentage() {
    if (this.percentageElement && CONFIG.discount.enabled) {
      this.percentageElement.textContent = CONFIG.discount.percentage;
    }
  }

  showCard() {
    if (this.card && CONFIG.discount.enabled) {
      this.card.style.display = 'block';
    } else if (this.card) {
      this.card.style.display = 'none';
    }
  }

  // Apply discount to price
  calculateDiscountedPrice(originalPrice) {
    if (!CONFIG.discount.enabled) return originalPrice;
    
    const discountAmount = (originalPrice * CONFIG.discount.percentage) / 100;
    return originalPrice - discountAmount;
  }

  // Format price with discount
  formatDiscountedPrice(originalPrice) {
    if (!CONFIG.discount.enabled) return `₹${originalPrice}`;
    
    const discountedPrice = this.calculateDiscountedPrice(originalPrice);
    return `
      <span class="original-price">₹${originalPrice}</span>
      <span class="discounted-price">₹${discountedPrice}</span>
    `;
  }
}

// Export for use in main app
if (typeof module !== 'undefined' && module.exports) {
  module.exports = DiscountCard;
} 