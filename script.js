// Function to toggle between pages
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        if (page.id === pageId) {
            page.classList.remove('hidden');
        } else {
            page.classList.add('hidden');
        }
    });
}

// Event listeners for navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        showPage(this.getAttribute('href').substring(1));
    });
});

// Form validation
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let message = document.getElementById('message').value.trim();

    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields.');
        return;
    }

    // Additional validation logic can be added here

    // Form submission logic (dummy for demonstration)
    alert('Form submitted successfully!');
    document.getElementById('contact-form').reset();
});
