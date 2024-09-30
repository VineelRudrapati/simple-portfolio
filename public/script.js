        // JavaScript for smooth scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
        document.addEventListener("DOMContentLoaded", function() {
            // Hamburger menu toggle
            const hamburger = document.querySelector('.hamburger');
            const nav = document.querySelector('nav');
        
            hamburger.addEventListener('click', () => {
                nav.classList.toggle('active');
                
            });
        
            // Close menu when a link is clicked
            document.querySelectorAll('nav a').forEach(link => {
                link.addEventListener('click', () => {
                    nav.classList.remove('active');
                    hamburger.style.display = 'block'; 
                });
            });
            window.addEventListener('click', (event) => {
                if (!hamburger.contains(event.target) && !nav.contains(event.target)) {
                    nav.classList.remove('active');
                }
            });
        });

        