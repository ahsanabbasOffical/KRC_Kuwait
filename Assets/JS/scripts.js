// Simple Form submission handler alert
document.getElementById('quoteForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you! Your quote request has been submitted successfully.');
    this.reset();
});