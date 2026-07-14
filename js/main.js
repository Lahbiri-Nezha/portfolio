/* ===========================
   MAIN — Animations & Interactions
   =========================== */
(function() {
    'use strict';

    /* ---- Page Loader ---- */
    function initPageLoader() {
        var loader = document.getElementById('pageLoader');
        if (!loader) return;
        setTimeout(function() {
            loader.classList.add('hidden');
        }, 800);
    }

    /* ---- Scroll Progress ---- */
    function initScrollProgress() {
        var bar = document.getElementById('scrollProgress');
        if (!bar) return;
        window.addEventListener('scroll', function() {
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            var docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            var progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
            bar.style.width = progress + '%';
        }, { passive: true });
    }

    /* ---- Custom Cursor Circle ---- */
    function initCursorCircle() {
        var circle = document.getElementById('cursorCircle');
        if (!circle || window.matchMedia('(max-width: 768px)').matches || window.matchMedia('(hover: none)').matches) return;
        var mx = 0, my = 0, cx = 0, cy = 0;
        var interactiveEls = 'a, button, .skill-pill, .project-card, .cert-item, .magnetic, .lang-btn, .nav-links a, .btn, .btn-resume, .hero-actions a, .timeline-entry';
        document.addEventListener('mousemove', function(e) {
            mx = e.clientX;
            my = e.clientY;
            circle.classList.add('visible');
        });
        document.addEventListener('mouseleave', function() {
            circle.classList.remove('visible');
        });
        document.addEventListener('mouseenter', function() {
            circle.classList.add('visible');
        });
        document.addEventListener('mouseover', function(e) {
            if (e.target.closest(interactiveEls)) {
                circle.classList.add('hovering');
            }
        });
        document.addEventListener('mouseout', function(e) {
            if (e.target.closest(interactiveEls)) {
                circle.classList.remove('hovering');
            }
        });
        document.addEventListener('mousedown', function() {
            circle.classList.add('clicking');
        });
        document.addEventListener('mouseup', function() {
            circle.classList.remove('clicking');
        });
        function animate() {
            cx += (mx - cx) * 0.15;
            cy += (my - cy) * 0.15;
            circle.style.left = cx + 'px';
            circle.style.top = cy + 'px';
            requestAnimationFrame(animate);
        }
        animate();
    }

    /* ---- Scroll Reveal ---- */
    function initScrollReveal() {
        var elements = document.querySelectorAll('[data-reveal]');
        if (!elements.length) return;
        if (!('IntersectionObserver' in window)) {
            elements.forEach(function(el) { el.classList.add('revealed'); });
            return;
        }
        var observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });
        elements.forEach(function(el) { observer.observe(el); });
    }

    /* ---- Typing Animation ---- */
    function initTyping() {
        var target = document.getElementById('typingText');
        if (!target) return;
        var words = [
            'AI experiences',
            'machine learning models',
            'smart IoT systems',
            'data-driven solutions',
            'full-stack applications'
        ];
        var wordIndex = 0, charIndex = 0, isDeleting = false, speed = 80;

        function type() {
            var currentWord = words[wordIndex];
            if (isDeleting) {
                target.textContent = currentWord.substring(0, charIndex - 1);
                charIndex--;
                speed = 40;
            } else {
                target.textContent = currentWord.substring(0, charIndex + 1);
                charIndex++;
                speed = 70;
            }
            if (!isDeleting && charIndex === currentWord.length) {
                speed = 2200;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                speed = 300;
            }
            setTimeout(type, speed);
        }
        type();
    }

    /* ---- Active Nav on Scroll ---- */
    function initActiveNav() {
        var sections = document.querySelectorAll('section[id]');
        var navLinks = document.querySelectorAll('.nav-links a');
        if (!sections.length || !navLinks.length) return;
        window.addEventListener('scroll', function() {
            var scrollY = window.pageYOffset + 200;
            sections.forEach(function(section) {
                var top = section.offsetTop;
                var height = section.offsetHeight;
                var id = section.getAttribute('id');
                if (scrollY >= top && scrollY < top + height) {
                    navLinks.forEach(function(link) {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === '#' + id) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        }, { passive: true });
    }

    /* ---- Mobile Hamburger ---- */
    function initHamburger() {
        var hamburger = document.getElementById('navHamburger');
        var navLinks = document.querySelector('.nav-links');
        if (!hamburger || !navLinks) return;
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('open');
            hamburger.classList.toggle('active');
        });
        navLinks.querySelectorAll('a').forEach(function(link) {
            link.addEventListener('click', function() {
                navLinks.classList.remove('open');
                hamburger.classList.remove('active');
            });
        });
    }

    /* ---- Magnetic Buttons ---- */
    function initMagnetic() {
        if (window.matchMedia('(max-width: 768px)').matches) return;
        document.querySelectorAll('.magnetic').forEach(function(el) {
            el.addEventListener('mousemove', function(e) {
                var rect = this.getBoundingClientRect();
                var x = e.clientX - rect.left - rect.width / 2;
                var y = e.clientY - rect.top - rect.height / 2;
                this.style.transform = 'translate(' + (x * 0.2) + 'px, ' + (y * 0.2) + 'px)';
            });
            el.addEventListener('mouseleave', function() {
                this.style.transform = 'translate(0, 0)';
            });
        });
    }

    /* ---- Button Ripple ---- */
    function initRipple() {
        document.querySelectorAll('.btn').forEach(function(btn) {
            btn.addEventListener('click', function(e) {
                var rect = this.getBoundingClientRect();
                var ripple = document.createElement('span');
                ripple.className = 'ripple';
                var size = Math.max(rect.width, rect.height);
                ripple.style.width = ripple.style.height = size + 'px';
                ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
                ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';
                this.appendChild(ripple);
                setTimeout(function() { ripple.remove(); }, 600);
            });
        });
    }

    /* ---- Parallax on Hero ---- */
    function initParallax() {
        if (window.matchMedia('(max-width: 768px)').matches) return;
        var heroVisual = document.querySelector('.hero-visual');
        if (!heroVisual) return;
        document.addEventListener('mousemove', function(e) {
            var x = (e.clientX / window.innerWidth - 0.5) * 8;
            var y = (e.clientY / window.innerHeight - 0.5) * 8;
            heroVisual.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
        });
    }

    /* ---- Smooth Scroll ---- */
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
            anchor.addEventListener('click', function(e) {
                var target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });
    }

    /* ---- Navbar Scroll ---- */
    function initNavbarScroll() {
        var navbar = document.querySelector('.nav-inner');
        if (!navbar) return;
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 60) {
                navbar.style.borderBottomColor = 'var(--color-border)';
                navbar.style.backdropFilter = 'blur(20px)';
                navbar.style.webkitBackdropFilter = 'blur(20px)';
            } else {
                navbar.style.borderBottomColor = 'transparent';
                navbar.style.backdropFilter = '';
                navbar.style.webkitBackdropFilter = '';
            }
        }, { passive: true });
    }

    /* ---- Timeline Modal ---- */
    function initTimelineModal() {
        var modal = document.getElementById('expModal');
        if (!modal) return;
        var dateEl = document.getElementById('expModalDate');
        var titleEl = document.getElementById('expModalTitle');
        var placeEl = document.getElementById('expModalPlace');
        var descEl = document.getElementById('expModalDesc');
        document.querySelectorAll('.timeline-entry').forEach(function(entry) {
            entry.addEventListener('click', function() {
                dateEl.textContent = this.getAttribute('data-date') || '';
                titleEl.textContent = this.getAttribute('data-title') || '';
                placeEl.textContent = this.getAttribute('data-place') || '';
                descEl.textContent = this.getAttribute('data-desc') || '';
                modal.classList.add('open');
            });
        });
    }

    /* ---- Init All ---- */
    function init() {
        initPageLoader();
        initScrollProgress();
        initCursorCircle();
        initScrollReveal();
        initTyping();
        initActiveNav();
        initHamburger();
        initMagnetic();
        initRipple();
        initParallax();
        initSmoothScroll();
        initTimelineModal();
        initNavbarScroll();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
