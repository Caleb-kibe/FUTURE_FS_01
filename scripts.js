// Mobile Drawer Logic
const menuBtn = document.getElementById('mobile-menu-btn');
const closeBtn = document.getElementById('close-drawer');
const drawer = document.getElementById('mobile-drawer');
const overlay = document.getElementById('drawer-overlay');

function toggleDrawer(open) {
    if (open) {
        drawer.classList.remove('translate-x-full');
        drawer.classList.add('translate-x-0');
        drawer.classList.remove('pointer-events-none');
    } else {
        drawer.classList.add('translate-x-full');
        drawer.classList.remove('translate-x-0');
        drawer.classList.add('pointer-events-none');
    }
}

menuBtn.addEventListener('click', () => toggleDrawer(true));
closeBtn.addEventListener('click', () => toggleDrawer(false));
overlay.addEventListener('click', () => toggleDrawer(false));

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        toggleDrawer(false);
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        const target = document.querySelector(targetId);
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Header Scroll Effect & Reveal Animation Trigger
const header = document.getElementById('main-header');
const reveals = document.querySelectorAll('.reveal');

const handleScroll = () => {
    // Header styling
    if (window.scrollY > 20) {
        header.classList.add('bg-background/80', 'backdrop-blur-md', 'border-border-subtle', 'shadow-sm', 'py-1');
        header.classList.remove('bg-background/0', 'backdrop-blur-none', 'border-transparent');
    } else {
        header.classList.remove('bg-background/80', 'backdrop-blur-md', 'border-border-subtle', 'shadow-sm', 'py-1');
        header.classList.add('bg-background/0', 'backdrop-blur-none', 'border-transparent');
    }

    // Entrance animations
    reveals.forEach(el => {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (rect.top <= windowHeight * 0.85) {
            el.classList.add('active');
        }
    });
};

window.addEventListener('scroll', handleScroll);
// Initial check
handleScroll();