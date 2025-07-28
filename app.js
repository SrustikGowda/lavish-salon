// Global state to store all data
let appData = {
    general: {},
    services: {},
    beauticians: {},
    testimonials: {},
    brands: {},
    selectedServices: []
};

// Sample data (simulating YAML files for demo purposes)
const sampleData = {
    general: {
        name: "Lavish Beauty Salon",
        address: "123 Glam Street, New Delhi, 110048",
        phone: "919999888777",
        email: "info@lavishbeauty.in",
        instagram: "lavishbeautyindia",
        facebook: "lavishbeautyofficial"
    },
    services: {
        categories: [
            {
                name: "Hair Services",
                image: "https://pplx-res.cloudinary.com/image/upload/v1748689467/pplx_project_search_images/833b146d4667d34615c345cc58cb19b203f021e8.jpg",
                sub: [
                    { name: "Haircut (Basic)", price: 200, description: "Classic trim with wash and style", image: "https://pplx-res.cloudinary.com/image/upload/v1753724498/pplx_project_search_images/b488e465e52d6af99f62a369ad211fe1b36d5746.jpg" },
                    { name: "Haircut (Advanced)", price: 400, description: "Professional restyle with blow-dry", image: "https://pplx-res.cloudinary.com/image/upload/v1748689467/pplx_project_search_images/833b146d4667d34615c345cc58cb19b203f021e8.jpg" },
                    { name: "Hair Spa (Basic)", price: 800, description: "Relaxing moisture spa treatment", image: "https://pplx-res.cloudinary.com/image/upload/v1753620744/pplx_project_search_images/b4948669a138f8e43c6e50fd06ac016f8f52526a.jpg" },
                    { name: "Hair Spa (Advanced)", price: 1300, description: "Intensive repair and nourishment ritual", image: "https://pplx-res.cloudinary.com/image/upload/v1753724498/pplx_project_search_images/d7c72362678ffbe3df73520f599674506af35d7e.jpg" },
                    { name: "Head Massage (Oil)", price: 300, description: "15-minute aromatic oil massage", image: "https://pplx-res.cloudinary.com/image/upload/v1753724498/pplx_project_search_images/614ef1bf4d8406c52851ca37d102427a3cc1901a.jpg" }
                ]
            },
            {
                name: "Hair Coloring",
                image: "https://pplx-res.cloudinary.com/image/upload/v1749995781/pplx_project_search_images/fdaabcb14f81a0454dda6caf096df2a6a83676c2.jpg",
                sub: [
                    { name: "Global Hair Color (Short)", price: 3000, description: "Ammonia-free global color transformation", image: "https://pplx-res.cloudinary.com/image/upload/v1749995781/pplx_project_search_images/fdaabcb14f81a0454dda6caf096df2a6a83676c2.jpg" },
                    { name: "Global Hair Color (Medium)", price: 4000, description: "Medium length global color service", image: "https://pplx-res.cloudinary.com/image/upload/v1749995781/pplx_project_search_images/fdaabcb14f81a0454dda6caf096df2a6a83676c2.jpg" },
                    { name: "Global Hair Color (Long)", price: 5000, description: "Full length global color application", image: "https://pplx-res.cloudinary.com/image/upload/v1749995781/pplx_project_search_images/fdaabcb14f81a0454dda6caf096df2a6a83676c2.jpg" },
                    { name: "Root Touch Up", price: 1000, description: "Perfect coverage for regrowth", image: "https://pplx-res.cloudinary.com/image/upload/v1749995781/pplx_project_search_images/fdaabcb14f81a0454dda6caf096df2a6a83676c2.jpg" },
                    { name: "Highlights per streak", price: 200, description: "Customize your hair with beautiful streaks", image: "https://pplx-res.cloudinary.com/image/upload/v1749995781/pplx_project_search_images/fdaabcb14f81a0454dda6caf096df2a6a83676c2.jpg" },
                    { name: "Henna Application", price: 400, description: "Natural henna color and conditioning", image: "https://pplx-res.cloudinary.com/image/upload/v1749995781/pplx_project_search_images/fdaabcb14f81a0454dda6caf096df2a6a83676c2.jpg" }
                ]
            },
            {
                name: "Hair Treatment",
                image: "https://pplx-res.cloudinary.com/image/upload/v1753724498/pplx_project_search_images/d7c72362678ffbe3df73520f599674506af35d7e.jpg",
                sub: [
                    { name: "Straightening/Smoothening (Short)", price: 3000, description: "Professional hair straightening for short hair", image: "https://pplx-res.cloudinary.com/image/upload/v1753724498/pplx_project_search_images/d7c72362678ffbe3df73520f599674506af35d7e.jpg" },
                    { name: "Straightening/Smoothening (Medium)", price: 4000, description: "Professional hair straightening for medium hair", image: "https://pplx-res.cloudinary.com/image/upload/v1753724498/pplx_project_search_images/d7c72362678ffbe3df73520f599674506af35d7e.jpg" },
                    { name: "Straightening/Smoothening (Long)", price: 5000, description: "Professional hair straightening for long hair", image: "https://pplx-res.cloudinary.com/image/upload/v1753724498/pplx_project_search_images/d7c72362678ffbe3df73520f599674506af35d7e.jpg" },
                    { name: "Keratin Treatment (Short)", price: 4000, description: "Intensive keratin repair for short hair", image: "https://pplx-res.cloudinary.com/image/upload/v1753724498/pplx_project_search_images/d7c72362678ffbe3df73520f599674506af35d7e.jpg" },
                    { name: "Keratin Treatment (Medium)", price: 5000, description: "Intensive keratin repair for medium hair", image: "https://pplx-res.cloudinary.com/image/upload/v1753724498/pplx_project_search_images/d7c72362678ffbe3df73520f599674506af35d7e.jpg" },
                    { name: "Keratin Treatment (Long)", price: 6000, description: "Intensive keratin repair for long hair", image: "https://pplx-res.cloudinary.com/image/upload/v1753724498/pplx_project_search_images/d7c72362678ffbe3df73520f599674506af35d7e.jpg" },
                    { name: "Botox Treatment (Short)", price: 6000, description: "Hair botox treatment for short hair", image: "https://pplx-res.cloudinary.com/image/upload/v1753724498/pplx_project_search_images/d7c72362678ffbe3df73520f599674506af35d7e.jpg" },
                    { name: "Botox Treatment (Medium)", price: 7000, description: "Hair botox treatment for medium hair", image: "https://pplx-res.cloudinary.com/image/upload/v1753724498/pplx_project_search_images/d7c72362678ffbe3df73520f599674506af35d7e.jpg" },
                    { name: "Botox Treatment (Long)", price: 8000, description: "Hair botox treatment for long hair", image: "https://pplx-res.cloudinary.com/image/upload/v1753724498/pplx_project_search_images/d7c72362678ffbe3df73520f599674506af35d7e.jpg" }
                ]
            },
            {
                name: "Facials",
                image: "https://pplx-res.cloudinary.com/image/upload/v1753620744/pplx_project_search_images/b4948669a138f8e43c6e50fd06ac016f8f52526a.jpg",
                sub: [
                    { name: "Clean up", price: 300, description: "Basic facial cleanup and moisturizing", image: "https://pplx-res.cloudinary.com/image/upload/v1753620744/pplx_project_search_images/b4948669a138f8e43c6e50fd06ac016f8f52526a.jpg" },
                    { name: "Fruit Facial", price: 600, description: "Refreshing fruit-based facial treatment", image: "https://pplx-res.cloudinary.com/image/upload/v1753620744/pplx_project_search_images/b4948669a138f8e43c6e50fd06ac016f8f52526a.jpg" },
                    { name: "Gold Facial", price: 900, description: "Luxurious gold-infused facial therapy", image: "https://pplx-res.cloudinary.com/image/upload/v1753724498/pplx_project_search_images/614ef1bf4d8406c52851ca37d102427a3cc1901a.jpg" },
                    { name: "Diamond/Pearl Facial", price: 1200, description: "Premium diamond and pearl facial", image: "https://pplx-res.cloudinary.com/image/upload/v1753724498/pplx_project_search_images/614ef1bf4d8406c52851ca37d102427a3cc1901a.jpg" },
                    { name: "O3 D-Tan Facial", price: 1300, description: "Professional de-tan treatment", image: "https://pplx-res.cloudinary.com/image/upload/v1753724498/pplx_project_search_images/614ef1bf4d8406c52851ca37d102427a3cc1901a.jpg" },
                    { name: "Korean Facial", price: 1500, description: "Korean-style multi-step facial treatment", image: "https://pplx-res.cloudinary.com/image/upload/v1753724498/pplx_project_search_images/614ef1bf4d8406c52851ca37d102427a3cc1901a.jpg" },
                    { name: "O3 Bridal Facial", price: 1500, description: "Special bridal preparation facial", image: "https://pplx-res.cloudinary.com/image/upload/v1753724498/pplx_project_search_images/614ef1bf4d8406c52851ca37d102427a3cc1901a.jpg" }
                ]
            },
            {
                name: "Waxing",
                image: "https://pplx-res.cloudinary.com/image/upload/v1751608010/pplx_project_search_images/b4a0a281ae1e6dcac45147063982c5bc966c7fbd.jpg",
                sub: [
                    { name: "Full Arms (Normal)", price: 300, description: "Complete arm waxing service", image: "https://pplx-res.cloudinary.com/image/upload/v1751608010/pplx_project_search_images/b4a0a281ae1e6dcac45147063982c5bc966c7fbd.jpg" },
                    { name: "Full Arms (Rica)", price: 500, description: "Premium Rica wax for arms", image: "https://pplx-res.cloudinary.com/image/upload/v1751608010/pplx_project_search_images/b4a0a281ae1e6dcac45147063982c5bc966c7fbd.jpg" },
                    { name: "Full Legs (Normal)", price: 400, description: "Complete leg waxing service", image: "https://pplx-res.cloudinary.com/image/upload/v1751608010/pplx_project_search_images/b4a0a281ae1e6dcac45147063982c5bc966c7fbd.jpg" },
                    { name: "Full Legs (Rica)", price: 600, description: "Premium Rica wax for legs", image: "https://pplx-res.cloudinary.com/image/upload/v1751608010/pplx_project_search_images/b4a0a281ae1e6dcac45147063982c5bc966c7fbd.jpg" },
                    { name: "Underarms (Normal)", price: 100, description: "Underarm waxing service", image: "https://pplx-res.cloudinary.com/image/upload/v1751608010/pplx_project_search_images/b4a0a281ae1e6dcac45147063982c5bc966c7fbd.jpg" },
                    { name: "Underarms (Rica)", price: 200, description: "Premium Rica wax for underarms", image: "https://pplx-res.cloudinary.com/image/upload/v1751608010/pplx_project_search_images/b4a0a281ae1e6dcac45147063982c5bc966c7fbd.jpg" },
                    { name: "Face (Normal)", price: 200, description: "Facial waxing service", image: "https://pplx-res.cloudinary.com/image/upload/v1751608010/pplx_project_search_images/b4a0a281ae1e6dcac45147063982c5bc966c7fbd.jpg" },
                    { name: "Face (Rica)", price: 350, description: "Premium Rica wax for face", image: "https://pplx-res.cloudinary.com/image/upload/v1751608010/pplx_project_search_images/b4a0a281ae1e6dcac45147063982c5bc966c7fbd.jpg" },
                    { name: "Full Body (Normal)", price: 1300, description: "Complete body waxing service", image: "https://pplx-res.cloudinary.com/image/upload/v1751608010/pplx_project_search_images/b4a0a281ae1e6dcac45147063982c5bc966c7fbd.jpg" },
                    { name: "Full Body (Rica)", price: 2000, description: "Premium Rica full body wax", image: "https://pplx-res.cloudinary.com/image/upload/v1751608010/pplx_project_search_images/b4a0a281ae1e6dcac45147063982c5bc966c7fbd.jpg" }
                ]
            },
            {
                name: "Manicure & Pedicure",
                image: "https://pplx-res.cloudinary.com/image/upload/v1749408120/pplx_project_search_images/68f6a4dbccbe9145e934d4c118b91b40780decb6.jpg",
                sub: [
                    { name: "Manicure (Basic)", price: 400, description: "Complete basic manicure service", image: "https://pplx-res.cloudinary.com/image/upload/v1749408120/pplx_project_search_images/68f6a4dbccbe9145e934d4c118b91b40780decb6.jpg" },
                    { name: "Manicure (Advanced)", price: 700, description: "Premium advanced manicure treatment", image: "https://pplx-res.cloudinary.com/image/upload/v1749408120/pplx_project_search_images/68f6a4dbccbe9145e934d4c118b91b40780decb6.jpg" },
                    { name: "Pedicure (Basic)", price: 500, description: "Complete basic pedicure service", image: "https://pplx-res.cloudinary.com/image/upload/v1749408120/pplx_project_search_images/68f6a4dbccbe9145e934d4c118b91b40780decb6.jpg" },
                    { name: "Pedicure (Advanced)", price: 800, description: "Premium advanced pedicure treatment", image: "https://pplx-res.cloudinary.com/image/upload/v1749408120/pplx_project_search_images/68f6a4dbccbe9145e934d4c118b91b40780decb6.jpg" },
                    { name: "Nail Polish Application", price: 100, description: "Professional nail polish application", image: "https://pplx-res.cloudinary.com/image/upload/v1749408120/pplx_project_search_images/68f6a4dbccbe9145e934d4c118b91b40780decb6.jpg" },
                    { name: "Gel Nail Polish application", price: 300, description: "Long-lasting gel nail polish", image: "https://pplx-res.cloudinary.com/image/upload/v1749408120/pplx_project_search_images/68f6a4dbccbe9145e934d4c118b91b40780decb6.jpg" }
                ]
            },
            {
                name: "Makeup",
                image: "https://pplx-res.cloudinary.com/image/upload/v1753608300/pplx_project_search_images/644ec3faf67728cd9a46813f2b88c6f5abca5f7d.jpg",
                sub: [
                    { name: "Party Makeup", price: 1500, description: "Glamorous party makeup look", image: "https://pplx-res.cloudinary.com/image/upload/v1753608300/pplx_project_search_images/644ec3faf67728cd9a46831f2b88c6f5abca5f7d.jpg" },
                    { name: "Party Makeup (Kids)", price: 500, description: "Fun and safe makeup for kids", image: "https://pplx-res.cloudinary.com/image/upload/v1753608300/pplx_project_search_images/644ec3faf67728cd9a46831f2b88c6f5abca5f7d.jpg" },
                    { name: "HD Bridal Makeup (Basic Products)", price: 5000, description: "Beautiful bridal makeup with basic products", image: "https://pplx-res.cloudinary.com/image/upload/v1753608300/pplx_project_search_images/644ec3faf67728cd9a46831f2b88c6f5abca5f7d.jpg" },
                    { name: "HD Bridal Makeup (High-end Products)", price: 10000, description: "Luxury bridal makeup with premium products", image: "https://pplx-res.cloudinary.com/image/upload/v1753608300/pplx_project_search_images/644ec3faf67728cd9a46831f2b88c6f5abca5f7d.jpg" },
                    { name: "Saree Draping", price: 300, description: "Professional saree draping service", image: "https://pplx-res.cloudinary.com/image/upload/v1753608300/pplx_project_search_images/644ec3faf67728cd9a46831f2b88c6f5abca5f7d.jpg" },
                    { name: "Hair Styling", price: 500, description: "Professional hair styling service", image: "https://pplx-res.cloudinary.com/image/upload/v1753608300/pplx_project_search_images/644ec3faf67728cd9a46831f2b88c6f5abca5f7d.jpg" }
                ]
            }
        ]
    },
    beauticians: {
        team: [
            { name: "Riya Sharma", role: "Senior Stylist", photo: "https://pplx-res.cloudinary.com/image/upload/v1753620744/pplx_project_search_images/b4948669a138f8e43c6e50fd06ac016f8f52526a.jpg", bio: "12+ years of experience in creative cuts and modern styling techniques." },
            { name: "Ayesha Khan", role: "Color Expert", photo: "https://pplx-res.cloudinary.com/image/upload/v1753724498/pplx_project_search_images/614ef1bf4d8406c52851ca37d102427a3cc1901a.jpg", bio: "Balayage and vivid color specialist with international training." },
            { name: "Priya Gupta", role: "Facial Specialist", photo: "https://pplx-res.cloudinary.com/image/upload/v1753724498/pplx_project_search_images/d7c72362678ffbe3df73520f599674506af35d7e.jpg", bio: "Expert in skincare treatments and luxury facial therapies." },
            { name: "Meera Singh", role: "Bridal Expert", photo: "https://pplx-res.cloudinary.com/image/upload/v1753608300/pplx_project_search_images/644ec3faf67728cd9a46831f2b88c6f5abca5f7d.jpg", bio: "Specializes in bridal makeup and traditional styling." }
        ]
    },
    testimonials: {
        reviews: [
            { name: "Neha Verma", stars: 5, photo: "https://pplx-res.cloudinary.com/image/upload/v1753620744/pplx_project_search_images/b4948669a138f8e43c6e50fd06ac016f8f52526a.jpg", message: "Absolutely loved my makeover experience! The staff is incredibly professional and the ambiance is so relaxing. Highly recommend!" },
            { name: "Priya Singh", stars: 4, photo: "https://pplx-res.cloudinary.com/image/upload/v1753724498/pplx_project_search_images/614ef1bf4d8406c52851ca37d102427a3cc1901a.jpg", message: "Great quality products and excellent service. The facial treatment left my skin glowing for weeks!" },
            { name: "Kavya Patel", stars: 5, photo: "https://pplx-res.cloudinary.com/image/upload/v1753724498/pplx_project_search_images/d7c72362678ffbe3df73520f599674506af35d7e.jpg", message: "The best salon in Delhi! Beautiful interiors, skilled staff, and amazing results every time." },
            { name: "Simran Kaur", stars: 5, photo: "https://pplx-res.cloudinary.com/image/upload/v1753608300/pplx_project_search_images/644ec3faf67728cd9a46831f2b88c6f5abca5f7d.jpg", message: "Perfect bridal makeup service! They made my special day even more beautiful. Thank you team Lavish!" }
        ]
    },
    brands: {
        brands: [
            { name: "L'Oréal Professionnel", logo: "https://pplx-res.cloudinary.com/image/upload/v1749995781/pplx_project_search_images/fdaabcb14f81a0454dda6caf096df2a6a83676c2.jpg" },
            { name: "Wella", logo: "https://pplx-res.cloudinary.com/image/upload/v1748689467/pplx_project_search_images/833b146d4667d34615c345cc58cb19b203f021e8.jpg" },
            { name: "O3+", logo: "https://pplx-res.cloudinary.com/image/upload/v1753724498/pplx_project_search_images/614ef1bf4d8406c52851ca37d102427a3cc1901a.jpg" },
            { name: "Matrix", logo: "https://pplx-res.cloudinary.com/image/upload/v1753724498/pplx_project_search_images/b488e465e52d6af99f62a369ad211fe1b36d5746.jpg" },
            { name: "Schwarzkopf", logo: "https://pplx-res.cloudinary.com/image/upload/v1751608010/pplx_project_search_images/b4a0a281ae1e6dcac45147063982c5bc966c7fbd.jpg" },
            { name: "Kerastase", logo: "https://pplx-res.cloudinary.com/image/upload/v1749408120/pplx_project_search_images/68f6a4dbccbe9145e934d4c118b91b40780decb6.jpg" }
        ]
    }
};

// Gallery images (simulating dynamic loading)
const galleryImages = [
    "https://pplx-res.cloudinary.com/image/upload/v1751608010/pplx_project_search_images/b4a0a281ae1e6dcac45147063982c5bc966c7fbd.jpg",
    "https://pplx-res.cloudinary.com/image/upload/v1749408120/pplx_project_search_images/68f6a4dbccbe9145e934d4c118b91b40780decb6.jpg",
    "https://pplx-res.cloudinary.com/image/upload/v1753608300/pplx_project_search_images/644ec3faf67728cd9a46831f2b88c6f5abca5f7d.jpg",
    "https://pplx-res.cloudinary.com/image/upload/v1753620744/pplx_project_search_images/b4948669a138f8e43c6e50fd06ac016f8f52526a.jpg",
    "https://pplx-res.cloudinary.com/image/upload/v1753724498/pplx_project_search_images/d7c72362678ffbe3df73520f599674506af35d7e.jpg",
    "https://pplx-res.cloudinary.com/image/upload/v1753724498/pplx_project_search_images/614ef1bf4d8406c52851ca37d102427a3cc1901a.jpg",
    "https://pplx-res.cloudinary.com/image/upload/v1748689467/pplx_project_search_images/833b146d4667d34615c345cc58cb19b203f021e8.jpg",
    "https://pplx-res.cloudinary.com/image/upload/v1753724498/pplx_project_search_images/b488e465e52d6af99f62a369ad211fe1b36d5746.jpg"
];

// Utility function to simulate loading YAML data
async function loadYAML(dataKey) {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 300));
    return sampleData[dataKey];
}

// Initialize the application
document.addEventListener('DOMContentLoaded', async function() {
    // Hide welcome overlay after animation
    setTimeout(() => {
        const overlay = document.getElementById('welcome-overlay');
        if (overlay) {
            overlay.style.display = 'none';
        }
    }, 2500);

    // Load all data
    try {
        console.log('Loading application data...');
        
        appData.general = await loadYAML('general');
        appData.services = await loadYAML('services');
        appData.beauticians = await loadYAML('beauticians');
        appData.testimonials = await loadYAML('testimonials');
        appData.brands = await loadYAML('brands');

        console.log('Data loaded successfully:', appData);

        // Render all sections
        renderGeneral();
        renderServices();
        renderGallery();
        renderTestimonials();
        renderTeam();
        renderBrands();
        initBooking();

        // Initialize AOS animations
        if (typeof AOS !== 'undefined') {
            AOS.init({
                once: true,
                duration: 600,
                easing: 'ease-in-out',
                offset: 100
            });
        }

    } catch (error) {
        console.error('Error loading data:', error);
        showError('Failed to load application data');
    }

    // Initialize navigation
    initNavigation();
    
    // Set minimum date for booking to today
    const today = new Date().toISOString().split('T')[0];
    const bookingDate = document.getElementById('booking-date');
    if (bookingDate) {
        bookingDate.min = today;
    }
});

// Navigation functionality
function initNavigation() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Mobile menu toggle
    hamburger?.addEventListener('click', () => {
        navMenu?.classList.toggle('active');
    });

    // Close mobile menu when clicking on links
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu?.classList.remove('active');
        });
    });

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70; // Account for fixed nav
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add scroll effect to navbar
    window.addEventListener('scroll', () => {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 100) {
            navbar?.classList.add('scrolled');
        } else {
            navbar?.classList.remove('scrolled');
        }
    });
}

// Render general information
function renderGeneral() {
    console.log('Rendering general information...');
    
    const contactContainer = document.getElementById('contact-container');
    const contactLoading = document.getElementById('contact-loading');
    
    if (contactContainer && contactLoading && appData.general) {
        contactContainer.innerHTML = `
            <div class="contact-info" data-aos="fade-up">
                <h3>Visit Our Salon</h3>
                <div class="contact-item">
                    <span class="contact-icon">📍</span>
                    <span class="contact-text">${appData.general.address}</span>
                </div>
                <div class="contact-item">
                    <span class="contact-icon">📞</span>
                    <span class="contact-text">+${appData.general.phone}</span>
                </div>
                <div class="contact-item">
                    <span class="contact-icon">✉️</span>
                    <span class="contact-text">${appData.general.email}</span>
                </div>
                <div class="social-links">
                    <a href="https://instagram.com/${appData.general.instagram}" target="_blank">Instagram</a>
                    <a href="https://facebook.com/${appData.general.facebook}" target="_blank">Facebook</a>
                    <a href="https://wa.me/${appData.general.phone}" target="_blank">WhatsApp</a>
                </div>
            </div>
            <div class="contact-info" data-aos="fade-up" data-aos-delay="200">
                <h3>Business Hours</h3>
                <div class="contact-item">
                    <span class="contact-text">Monday - Saturday: 9:00 AM - 8:00 PM</span>
                </div>
                <div class="contact-item">
                    <span class="contact-text">Sunday: 10:00 AM - 6:00 PM</span>
                </div>
                <div class="contact-item">
                    <span class="contact-text">Walk-ins welcome, appointments preferred</span>
                </div>
            </div>
        `;
        
        contactLoading.style.display = 'none';
        contactContainer.style.display = 'grid';
        console.log('General information rendered successfully');
    }
}

// Render services section
function renderServices() {
    console.log('Rendering services...');
    
    const servicesContainer = document.getElementById('services-container');
    const servicesLoading = document.getElementById('services-loading');
    
    if (servicesContainer && servicesLoading && appData.services?.categories) {
        const servicesHTML = appData.services.categories.map((category, index) => `
            <div class="service-category" data-aos="fade-up" data-aos-delay="${index * 100}">
                <img src="${category.image}" alt="${category.name}" class="service-category-image" loading="lazy">
                <div class="service-category-content">
                    <h3 class="service-category-title">${category.name}</h3>
                    <div class="service-subcategories" id="subcategories-${index}">
                        ${category.sub.map(subService => `
                            <div class="service-item">
                                <div class="service-item-info">
                                    <h4>${subService.name}</h4>
                                    <p>${subService.description}</p>
                                </div>
                                <div style="display: flex; align-items: center; gap: 16px;">
                                    <span class="service-price">₹${subService.price}</span>
                                    <button class="service-book-btn" onclick="addToBooking('${category.name}', '${subService.name}', ${subService.price})">
                                        Book
                                    </button>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `).join('');
        
        servicesContainer.innerHTML = servicesHTML;
        
        // Add click handlers for category expansion
        appData.services.categories.forEach((category, index) => {
            const categoryElement = servicesContainer.children[index];
            const subcategoriesElement = document.getElementById(`subcategories-${index}`);
            
            if (categoryElement && subcategoriesElement) {
                categoryElement.addEventListener('click', (e) => {
                    // Don't toggle if clicking on book button
                    if (e.target.classList.contains('service-book-btn')) return;
                    
                    subcategoriesElement.classList.toggle('expanded');
                });
            }
        });
        
        servicesLoading.style.display = 'none';
        servicesContainer.style.display = 'grid';
        console.log('Services rendered successfully');
    }
}

// Render gallery section
function renderGallery() {
    console.log('Rendering gallery...');
    
    const galleryContainer = document.getElementById('gallery-container');
    const galleryLoading = document.getElementById('gallery-loading');
    
    if (galleryContainer && galleryLoading && galleryImages.length > 0) {
        const galleryHTML = galleryImages.map((image, index) => `
            <div class="gallery-item" data-aos="fade-up" data-aos-delay="${index * 50}">
                <img src="${image}" alt="Salon Gallery Image ${index + 1}" loading="lazy">
            </div>
        `).join('');
        
        galleryContainer.innerHTML = galleryHTML;
        
        // Initialize lightGallery if available
        if (typeof lightGallery !== 'undefined') {
            lightGallery(galleryContainer, {
                selector: '.gallery-item',
                plugins: [],
                speed: 500,
                download: false
            });
        }
        
        galleryLoading.style.display = 'none';
        galleryContainer.style.display = 'grid';
        console.log('Gallery rendered successfully with', galleryImages.length, 'images');
    } else {
        console.error('Gallery rendering failed - missing elements or images');
    }
}

// Render testimonials section
function renderTestimonials() {
    console.log('Rendering testimonials...');
    
    const testimonialsContainer = document.getElementById('testimonials-container');
    const testimonialsLoading = document.getElementById('testimonials-loading');
    
    if (testimonialsContainer && testimonialsLoading && appData.testimonials?.reviews) {
        const testimonialsHTML = appData.testimonials.reviews.map((review, index) => `
            <div class="testimonial-card" data-aos="fade-up" data-aos-delay="${index * 100}">
                <img src="${review.photo}" alt="${review.name}" class="testimonial-photo" loading="lazy">
                <div class="testimonial-stars">
                    ${'★'.repeat(review.stars)}${'☆'.repeat(5 - review.stars)}
                </div>
                <p class="testimonial-message">"${review.message}"</p>
                <h4 class="testimonial-name">- ${review.name}</h4>
            </div>
        `).join('');
        
        testimonialsContainer.innerHTML = testimonialsHTML;
        
        testimonialsLoading.style.display = 'none';
        testimonialsContainer.style.display = 'grid';
        console.log('Testimonials rendered successfully');
    }
}

// Render team section
function renderTeam() {
    console.log('Rendering team...');
    
    const teamContainer = document.getElementById('team-container');
    const teamLoading = document.getElementById('team-loading');
    
    if (teamContainer && teamLoading && appData.beauticians?.team) {
        const teamHTML = appData.beauticians.team.map((member, index) => `
            <div class="team-member" data-aos="fade-up" data-aos-delay="${index * 100}">
                <img src="${member.photo}" alt="${member.name}" class="team-photo" loading="lazy">
                <div class="team-info">
                    <h3 class="team-name">${member.name}</h3>
                    <p class="team-role">${member.role}</p>
                    <p class="team-bio">${member.bio}</p>
                </div>
            </div>
        `).join('');
        
        teamContainer.innerHTML = teamHTML;
        
        teamLoading.style.display = 'none';
        teamContainer.style.display = 'grid';
        console.log('Team rendered successfully with', appData.beauticians.team.length, 'members');
    } else {
        console.error('Team rendering failed - missing elements or data');
    }
}

// Render brand partners section
function renderBrands() {
    console.log('Rendering brands...');
    
    const partnersContainer = document.getElementById('partners-container');
    const partnersLoading = document.getElementById('partners-loading');
    
    if (partnersContainer && partnersLoading && appData.brands?.brands) {
        const partnersHTML = appData.brands.brands.map((brand, index) => `
            <div class="partner-logo" data-aos="fade-up" data-aos-delay="${index * 50}">
                <img src="${brand.logo}" alt="${brand.name}" loading="lazy">
            </div>
        `).join('');
        
        partnersContainer.innerHTML = partnersHTML;
        
        partnersLoading.style.display = 'none';
        partnersContainer.style.display = 'grid';
        console.log('Brands rendered successfully with', appData.brands.brands.length, 'partners');
    } else {
        console.error('Brands rendering failed - missing elements or data');
    }
}

// Initialize booking functionality
function initBooking() {
    console.log('Initializing booking...');
    
    const categorySelect = document.getElementById('booking-category');
    
    if (categorySelect && appData.services?.categories) {
        // Clear existing options first
        categorySelect.innerHTML = '<option value="">Choose category</option>';
        
        // Populate category dropdown
        appData.services.categories.forEach(category => {
            const option = document.createElement('option');
            option.value = category.name;
            option.textContent = category.name;
            categorySelect.appendChild(option);
        });
    }
    
    // Handle form submission
    const bookingForm = document.getElementById('booking-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', handleBookingSubmit);
    }
    
    console.log('Booking initialized successfully');
}

// Handle booking form submission
function handleBookingSubmit(e) {
    e.preventDefault();
    
    const date = document.getElementById('booking-date').value;
    const time = document.getElementById('booking-time').value;
    const name = document.getElementById('booking-name').value;
    
    // Get selected services
    const selectedServices = [];
    const checkboxes = document.querySelectorAll('input[name="services"]:checked');
    checkboxes.forEach(checkbox => {
        selectedServices.push({
            name: checkbox.value,
            price: parseInt(checkbox.dataset.price)
        });
    });
    
    if (selectedServices.length === 0) {
        alert('Please select at least one service.');
        return;
    }
    
    // Calculate total
    const total = selectedServices.reduce((sum, service) => sum + service.price, 0);
    
    // Construct WhatsApp message
    const servicesList = selectedServices.map(service => 
        `• ${service.name} - ₹${service.price}`
    ).join('\n');
    
    const message = `Hello! I would like to book an appointment at Lavish Beauty Salon.

Name: ${name}
Date: ${date}
Time: ${time}

Services:
${servicesList}

Total: ₹${total}

Please confirm my appointment. Thank you!`;
    
    // Open WhatsApp
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${appData.general.phone}?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
    
    // Close modal and reset form
    closeBookingModal();
    e.target.reset();
    appData.selectedServices = [];
}

// Update sub-services based on selected category
function updateSubServices() {
    const categorySelect = document.getElementById('booking-category');
    const subServicesContainer = document.getElementById('sub-services-container');
    
    const selectedCategory = categorySelect.value;
    
    if (!selectedCategory) {
        subServicesContainer.innerHTML = '<p class="text-muted">Please select a category first</p>';
        return;
    }
    
    const category = appData.services.categories.find(cat => cat.name === selectedCategory);
    
    if (category) {
        const subServicesHTML = category.sub.map(service => `
            <div class="sub-service-item">
                <input type="checkbox" 
                       name="services" 
                       value="${service.name}" 
                       data-price="${service.price}" 
                       id="service-${service.name.replace(/\s+/g, '-').toLowerCase()}">
                <label for="service-${service.name.replace(/\s+/g, '-').toLowerCase()}" class="sub-service-name">
                    ${service.name}
                </label>
                <span class="sub-service-price">₹${service.price}</span>
            </div>
        `).join('');
        
        subServicesContainer.innerHTML = subServicesHTML;
    }
}

// Add service to booking (called from service cards)
function addToBooking(categoryName, serviceName, price) {
    // Open booking modal
    openBookingModal();
    
    // Set the category
    const categorySelect = document.getElementById('booking-category');
    categorySelect.value = categoryName;
    
    // Update sub-services
    updateSubServices();
    
    // Pre-select the service
    setTimeout(() => {
        const serviceCheckbox = document.querySelector(`input[value="${serviceName}"]`);
        if (serviceCheckbox) {
            serviceCheckbox.checked = true;
        }
    }, 100);
}

// Modal functions
function openBookingModal() {
    const modal = document.getElementById('booking-modal');
    if (modal) {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }
}

function closeBookingModal() {
    const modal = document.getElementById('booking-modal');
    if (modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }
}

// Close modal when clicking outside
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-overlay')) {
        closeBookingModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeBookingModal();
    }
});

// Smooth scroll for all anchor links
document.addEventListener('click', (e) => {
    if (e.target.tagName === 'A' && e.target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const offsetTop = targetElement.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    }
});

// Add loading states and error handling
function showError(message) {
    console.error('Application Error:', message);
    // You could show a user-friendly error message here
}

// Lazy loading for images
function initLazyLoading() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
}

// Initialize lazy loading when content is loaded
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(initLazyLoading, 1000);
});

// Performance optimization: Throttle scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Apply throttling to scroll events
window.addEventListener('scroll', throttle(() => {
    // Handle scroll events here if needed
}, 100));