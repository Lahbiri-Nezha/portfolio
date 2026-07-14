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
        if (!circle) return;
        var mx = 0, my = 0, cx = 0, cy = 0;
        var isTouch = false;
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
        document.addEventListener('touchstart', function(e) {
            isTouch = true;
            if (e.touches.length) {
                mx = e.touches[0].clientX;
                my = e.touches[0].clientY;
            }
            circle.classList.add('visible');
        }, { passive: true });
        document.addEventListener('touchmove', function(e) {
            if (e.touches.length) {
                mx = e.touches[0].clientX;
                my = e.touches[0].clientY;
            }
        }, { passive: true });
        document.addEventListener('touchend', function() {
            circle.classList.remove('visible');
        }, { passive: true });
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

    /* ---- Project Modal ---- */
    function initProjectModal() {
        var modal = document.getElementById('projectModal');
        if (!modal) return;
        var lang = document.documentElement.getAttribute('data-lang') || 'en';
        var imgEl = document.getElementById('pmImg');
        var badgeEl = document.getElementById('pmBadge');
        var titleEl = document.getElementById('pmTitle');
        var detailEl = document.getElementById('pmDetail');
        var stackEl = document.getElementById('pmStack');
        var linksEl = document.getElementById('pmLinks');

        function getTranslation(key) {
            var currentLang = document.documentElement.getAttribute('data-lang') || 'en';
            if (window.translations && window.translations[currentLang] && window.translations[currentLang][key]) {
                return window.translations[currentLang][key];
            }
            return key;
        }

        document.querySelectorAll('.project-card').forEach(function(card) {
            card.addEventListener('click', function(e) {
                if (e.target.closest('.project-links a')) return;
                var titleKey = this.getAttribute('data-title-key') || '';
                var detailKey = this.getAttribute('data-detail-key') || '';
                var badgeKey = this.getAttribute('data-badge-key') || '';
                var img = this.getAttribute('data-img') || '';
                var stack = this.getAttribute('data-stack') || '';
                var github = this.getAttribute('data-github') || '';
                var demo = this.getAttribute('data-demo') || '';

                imgEl.src = img;
                imgEl.alt = getTranslation(titleKey);
                badgeEl.textContent = getTranslation(badgeKey);
                titleEl.textContent = getTranslation(titleKey);
                detailEl.textContent = getTranslation(detailKey);

                stackEl.innerHTML = '';
                stack.split(',').forEach(function(s) {
                    var span = document.createElement('span');
                    span.textContent = s.trim();
                    stackEl.appendChild(span);
                });

                linksEl.innerHTML = '';
                if (github) {
                    var ghLink = document.createElement('a');
                    ghLink.href = github;
                    ghLink.target = '_blank';
                    ghLink.className = 'pm-github';
                    ghLink.textContent = 'GitHub ↗';
                    linksEl.appendChild(ghLink);
                }
                if (demo && demo !== '#') {
                    var demoLink = document.createElement('a');
                    demoLink.href = demo;
                    demoLink.target = '_blank';
                    demoLink.className = 'pm-demo';
                    demoLink.textContent = 'Live Demo ↗';
                    linksEl.appendChild(demoLink);
                }

                modal.classList.add('open');
            });
        });
    }

    /* ---- Cert Modal ---- */
    function initCertModal() {
        var modal = document.getElementById('certModal');
        if (!modal) return;
        var imgEl = document.getElementById('cmImg');
        var nameEl = document.getElementById('cmName');
        var sourceEl = document.getElementById('cmSource');
        var descEl = document.getElementById('cmDesc');
        var verifyEl = document.getElementById('cmVerify');

        function getTranslation(key) {
            var currentLang = document.documentElement.getAttribute('data-lang') || 'en';
            if (window.translations && window.translations[currentLang] && window.translations[currentLang][key]) {
                return window.translations[currentLang][key];
            }
            return key;
        }

        document.querySelectorAll('.cert-item').forEach(function(item) {
            item.addEventListener('click', function() {
                var nameKey = this.getAttribute('data-name-key') || '';
                var source = this.getAttribute('data-source') || '';
                var year = this.getAttribute('data-year') || this.getAttribute('data-year-key') || '';
                var descKey = this.getAttribute('data-desc-key') || '';
                var img = this.getAttribute('data-img') || '';
                var url = this.getAttribute('data-url') || '#';

                if (year && year.indexOf('cert') === 0) {
                    year = getTranslation(year);
                }

                imgEl.src = img;
                imgEl.alt = getTranslation(nameKey);
                nameEl.textContent = getTranslation(nameKey);
                sourceEl.textContent = source + ' — ' + year;
                descEl.textContent = getTranslation(descKey);
                verifyEl.href = url;

                modal.classList.add('open');
            });
        });
    }

    /* ---- ESC Key Close ---- */
    function initEscapeClose() {
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' || e.keyCode === 27) {
                document.querySelectorAll('.exp-modal.open, .project-modal.open, .cert-modal.open, .cv-modal.open').forEach(function(modal) {
                    modal.classList.remove('open');
                });
            }
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
        initProjectModal();
        initCertModal();
        initEscapeClose();
        initNavbarScroll();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
