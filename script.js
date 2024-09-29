// Smooth Scroll for Navigation Links
document.querySelectorAll('.left-nav a, .right-nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Subscribe form handling (just a placeholder)
document.getElementById('subscribe-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for subscribing!');
});
