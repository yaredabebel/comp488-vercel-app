document.addEventListener('DOMContentLoaded', function() {
    // Get references to the button and hidden content
    const toggleButton = document.getElementById('toggleButton');
    const hiddenContent = document.getElementById('hiddenContent');
    
    let isContentVisible = false;
    
    toggleButton.addEventListener('click', function() {
        if (isContentVisible) {
            // Hide the content
            hiddenContent.classList.remove('show');
            toggleButton.textContent = 'Click Me!';
            toggleButton.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
            isContentVisible = false;
        } else {
            // Show the content
            hiddenContent.classList.add('show');
            toggleButton.textContent = 'Hide Content';
            toggleButton.style.background = 'linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)';
            isContentVisible = true;
        }
    });
    
    // Add a subtle animation when the page loads
    const sections = document.querySelectorAll('.content-section');
    sections.forEach((section, index) => {
        setTimeout(() => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(20px)';
            section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            
            // Trigger animation
            setTimeout(() => {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }, 100);
        }, index * 200);
    });
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    console.log('Website loaded successfully! JavaScript is working.');
    console.log('Interactive features initialized.');
});