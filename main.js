// Toggle navigation on hamburger click
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

// Smooth scrolling for internal links
const links = document.querySelectorAll('a[href^="#"]');
links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const target = document.querySelector(targetId);
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Contact form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Validation (can add more specific checks as needed)
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (name && email) {
        alert(`Thank you, ${name}! Your message has been sent.`);
        this.reset();
    } else {
        alert('Please fill in all fields.');
    }
});

const testimonials = document.querySelectorAll('.testimonial');
let currentTestimonial = 0;

function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
        testimonial.classList.toggle('active', i === index);
    });
}

document.querySelector('.next').addEventListener('click', () => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
});

document.querySelector('.prev').addEventListener('click', () => {
    currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentTestimonial);
});

const sections = document.querySelectorAll('section');

function checkVisibility() {
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible');
        }
    });
}

window.addEventListener('scroll', checkVisibility);
window.addEventListener('load', checkVisibility);

// Handle the newsletter signup form
document.getElementById('newsletter-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent page refresh

    const email = this.querySelector('input').value;

    if (email) {
        alert(`Thank you for subscribing, ${email}! You will receive updates shortly.`);
        this.reset(); // Clear the form
    }
});

// Handle the review submission
document.getElementById('review-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent page refresh

    const name = document.getElementById('reviewer-name').value;
    const reviewText = document.getElementById('review-text').value;

    if (name && reviewText) {
        const reviewContainer = document.createElement('div');
        reviewContainer.classList.add('review-item');
        reviewContainer.innerHTML = `<strong>${name}</strong><p>${reviewText}</p>`;
        document.getElementById('reviews-container').appendChild(reviewContainer);

        this.reset(); // Clear the form
    } else {
        alert('Please fill in all fields.');
    }
});
