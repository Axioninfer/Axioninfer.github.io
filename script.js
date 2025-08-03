// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Get all navigation links
    const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Newsletter form submission
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = this.querySelector('.email-input');
            const email = emailInput.value.trim();
            
            if (email && isValidEmail(email)) {
                // Here you would typically send the email to your backend
                alert('Thank you for subscribing! We\'ll keep you updated on our progress.');
                emailInput.value = '';
            } else {
                alert('Please enter a valid email address.');
            }
        });
    }
    
    // Hero buttons functionality
    const heroButtons = document.querySelectorAll('.hero-buttons .btn');
    heroButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            if (this.textContent === 'Get Started') {
                // Scroll to coming soon section
                document.querySelector('#coming-soon').scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            } else if (this.textContent === 'Learn More') {
                // Scroll to about section
                document.querySelector('#about').scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add scroll effect to navbar
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });
    
    // Add animation on scroll for cards
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe cards for animation
    const cards = document.querySelectorAll('.about-card, .team-member');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});

// Helper function to validate email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Add mobile menu toggle (if you want to add mobile menu later)
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('show');
}

// Team member data
const teamData = {
    rayen: {
        name: "Rayen Dhahri",
        role: "Position Title",
        image: "team_pics/rayen.jpeg",
        bio: "Detailed description of Rayen's role, expertise, background, and achievements. This is where you can add the full biography with all relevant information about their experience and contributions to the team."
    },
    hoang: {
        name: "Hoang Le Doang",
        role: "Position Title",
        image: "team_pics/hoang.jpeg",
        bio: "Detailed description of Hoang's role, expertise, background, and achievements. This is where you can add the full biography with all relevant information about their experience and contributions to the team."
    },
    yawri: {
        name: "Yawri Carr",
        role: "Technology, Law & Business Strategist",
        image: "team_pics/yawri.jpeg",
        bio: "Yawri brings a truly <strong>interdisciplinary perspective</strong>, combining deep expertise in <em>technology, law and business</em>. She's worked hands-on in the software industry, applying <strong>generative AI and natural language processing</strong>, and has guided organisations on technology law, policy, trustworthy systems and <em>AI ethics</em>. Equally passionate about management and strategy, she has served as a <strong>Digital Youth Envoy</strong> for international bodies, shaping global conversations on tech and society. Yawri holds an <em>M.Sc. in Technology & Society from TU Munich</em> and an <em>MBA in Artificial Intelligence from the University of São Paulo</em>."
    },
    member4: {
        name: "Team Member 4",
        role: "Position Title",
        image: "team_pics/member4.jpeg",
        bio: "Detailed description of Team Member 4's role, expertise, background, and achievements. This is where you can add the full biography with all relevant information about their experience and contributions to the team."
    }
};

// Modal functionality
function openModal(memberId) {
    const modal = document.getElementById('teamModal');
    const member = teamData[memberId];
    
    if (member) {
        document.getElementById('modalName').textContent = member.name;
        document.getElementById('modalRole').textContent = member.role;
        document.getElementById('modalBio').innerHTML = member.bio;
        
        const modalImage = document.getElementById('modalImage');
        modalImage.src = member.image;
        modalImage.alt = member.name;
        
        // Handle image error (fallback to placeholder)
        modalImage.onerror = function() {
            this.style.display = 'none';
        };
        
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
}

function closeModal() {
    const modal = document.getElementById('teamModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore scrolling
}

// Add modal event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Existing code...
    const existingCode = document.querySelector('.nav-menu');
    
    // Modal close functionality
    const modal = document.getElementById('teamModal');
    const closeBtn = document.querySelector('.close');
    
    closeBtn.onclick = closeModal;
    
    // Close modal when clicking outside
    window.onclick = function(event) {
        if (event.target === modal) {
            closeModal();
        }
    };
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });
});
