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

    /* ---- Cursor Glow ---- */
    function initCursorGlow() {
        var glow = document.getElementById('cursorGlow');
        if (!glow || window.matchMedia('(max-width: 768px)').matches) return;
        var mx = 0, my = 0, cx = 0, cy = 0;
        document.addEventListener('mousemove', function(e) {
            mx = e.clientX;
            my = e.clientY;
            glow.classList.add('active');
        });
        document.addEventListener('mouseleave', function() {
            glow.classList.remove('active');
        });
        function animate() {
            cx += (mx - cx) * 0.08;
            cy += (my - cy) * 0.08;
            glow.style.left = cx + 'px';
            glow.style.top = cy + 'px';
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

    /* ---- Skills Category Filter ---- */
    function initSkillsFilter() {
        var links = document.querySelectorAll('.skill-cat-link');
        var panels = document.querySelectorAll('.skills-scroll');
        if (!links.length || !panels.length) return;
        links.forEach(function(link) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                var cat = this.getAttribute('data-cat');
                links.forEach(function(l) { l.classList.remove('active'); });
                this.classList.add('active');
                panels.forEach(function(p) {
                    p.classList.remove('active');
                    if (p.getAttribute('data-skill-cat') === cat) {
                        p.classList.add('active');
                    }
                });
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

    /* ---- Init All ---- */
    function init() {
        initPageLoader();
        initScrollProgress();
        initCursorGlow();
        initScrollReveal();
        initTyping();
        initActiveNav();
        initHamburger();
        initMagnetic();
        initRipple();
        initParallax();
        initSmoothScroll();
        initSkillsFilter();
        initNavbarScroll();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
