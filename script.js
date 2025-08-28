// js/script.js - Updated to include a header-content-wrapper div

document.addEventListener('DOMContentLoaded', () => {
    const mainHeader = document.querySelector('.main-header');
    const currentPage = window.location.pathname.split('/').pop();
	
    let headerText = '';

    // Determine header text based on the current page
    switch (currentPage) {
        case 'home.html':
            headerText = 'Amaze by Urban Tree Apartment Owners Association';
            break;
        case 'managing-committee.html':
            headerText = 'Amaze - Managing Committee';
            break;
        case 'amenities.html':
            headerText = 'Amenities at Amaze';
            break;
        case 'bylaw.html':
            headerText = 'Bylaws & Regulations of Amaze';
            break;
        case 'sop.html':
            headerText = 'Standard Operating Procedures of Amaze';
            break;
        case 'forms.html':
            headerText = 'Downloadable Forms';
            break;
        case 'gallery.html':
            headerText = 'Amaze - Community Photo Gallery';
            break;
        case 'whats-news.html':
            headerText = "What's New at Amaze";
            break;
        case 'contacts.html':
            headerText = 'Important Contacts';
            break;
        default:
            headerText = 'Amaze by Urban Tree Apartment Owners Association';
            break;
    }

    // ⭐ NEW: Wrap the logo and h1 in a div with class 'header-content-wrapper'
    mainHeader.innerHTML = `
        <div class="header-content-wrapper">
            <img src="images/Logo3.png" alt="AUTAOA Logo" class="header-logo">
            <h1>${headerText}</h1>
        </div>
    `;
	
	
  



    // Highlight active navigation link (keep this part as is)
    const navLinks = document.querySelectorAll('.main-nav ul li a');
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPage || (linkHref === 'index.html' && currentPage === '')) {
            link.classList.add('active');
        }
    });

});
