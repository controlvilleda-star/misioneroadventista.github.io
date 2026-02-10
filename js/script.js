document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Close mobile menu if open
                document.querySelector('.nav-links').classList.remove('active');
                
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // Offset for sticky header
                    behavior: 'smooth'
                });
            }
        });
    });

    // 2. Mobile Menu Toggle
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if(menuBtn) {
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuBtn.setAttribute('aria-expanded', navLinks.classList.contains('active'));
        });
    }

    // 3. Tab Logic for Predicaciones
    window.openTab = function(evt, tabName) {
        // Hide all tab content
        const tabContents = document.getElementsByClassName("tab-content");
        for (let i = 0; i < tabContents.length; i++) {
            tabContents[i].style.display = "none";
            tabContents[i].classList.remove("active-content");
        }

        // Remove active class from buttons
        const tabBtns = document.getElementsByClassName("tab-btn");
        for (let i = 0; i < tabBtns.length; i++) {
            tabBtns[i].className = tabBtns[i].className.replace(" active", "");
        }

        // Show current tab and add active class
        document.getElementById(tabName).style.display = "block";
        document.getElementById(tabName).classList.add("active-content");
        evt.currentTarget.className += " active";
    };

    // Initialize first tab
    document.getElementById("latino").style.display = "block";

    // 4. Scroll Reveal Animation (Zara-style)
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.section').forEach(section => {
        section.classList.add('hidden-section');
        observer.observe(section);
    });
});
