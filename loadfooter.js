document.addEventListener('DOMContentLoaded', function() {
    const footerPlaceholder = document.getElementById('footer-placeholder');

    if (footerPlaceholder) {
        fetch('footer.html') // ⭐ Adjust path if footer.html is not in the root directory
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.text();
            })
            .then(html => {
                footerPlaceholder.innerHTML = html;
            })
            .catch(error => {
                console.error('Error loading footer:', error);
                // Optional: You can add a fallback message here
                // footerPlaceholder.innerHTML = '<p>Error loading footer content.</p>';
            });
    }
});