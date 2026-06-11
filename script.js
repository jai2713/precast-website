/* ============================================================
   SOUTHWEST PRECAST — ANIMATIONS & INTERACTIONS
   Uses GSAP + ScrollTrigger for all scroll-driven effects
   ============================================================ */

gsap.registerPlugin(ScrollTrigger);

// ─── PAGE LOAD ────────────────────────────────────────────────
window.addEventListener('load', () => {
    document.body.classList.add('loaded');

    // Hero entrance
    const heroTl = gsap.timeline({ delay: 0.1 });
    heroTl
        .from('.eyebrow', { y: 20, autoAlpha: 0, duration: 0.6, ease: 'power3.out' })
        .from('.hero-heading', { y: 40, autoAlpha: 0, duration: 0.8, ease: 'power3.out' }, '-=0.3')
        .from('.hero-sub', { y: 30, autoAlpha: 0, duration: 0.7, ease: 'power3.out' }, '-=0.4')
        .from('.hero-ctas .btn-primary, .hero-ctas .btn-ghost', {
            y: 20, autoAlpha: 0, duration: 0.5, stagger: 0.15, ease: 'power2.out'
        }, '-=0.3')
        .from('.hero-scroll-hint', { autoAlpha: 0, duration: 0.8 }, '-=0.2')
        .from('.hero-preview-strip', { x: 20, autoAlpha: 0, duration: 0.6 }, '-=0.5');
});

// ─── NAVBAR SCROLL STATE ──────────────────────────────────────
const navbar = document.getElementById('navbar');
ScrollTrigger.create({
    trigger: 'body',
    start: 'top top-=60',
    onEnter: () => navbar.classList.add('scrolled'),
    onLeaveBack: () => navbar.classList.remove('scrolled')
});

// ─── HAMBURGER ────────────────────────────────────────────────
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navMenu.classList.toggle('open');
});
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        navMenu.classList.remove('open');
    });
});

// ─── HERO PREVIEW STRIP — CYCLE ──────────────────────────────
const previewItems = document.querySelectorAll('.preview-item');
let current = 0;
function cyclePreview() {
    previewItems[current].classList.remove('active');
    current = (current + 1) % previewItems.length;
    previewItems[current].classList.add('active');
}
setInterval(cyclePreview, 2400);

// ─── STATS — COUNT UP ─────────────────────────────────────────
ScrollTrigger.create({
    trigger: '#statsBar',
    start: 'top 80%',
    once: true,
    onEnter: () => {
        document.querySelectorAll('.count').forEach(el => {
            const target = parseInt(el.getAttribute('data-target'));
            if (target === 0) { el.textContent = '0'; return; }
            gsap.fromTo(el, { textContent: 0 }, {
                textContent: target,
                duration: 1.8,
                ease: 'power2.out',
                snap: { textContent: 1 },
                onUpdate: function() {
                    el.textContent = Math.round(this.targets()[0].textContent);
                }
            });
        });
        gsap.from('#statsBar .stat-item', {
            y: 24, autoAlpha: 0, duration: 0.6,
            stagger: 0.12, ease: 'power2.out'
        });
    }
});

// ─── PROBLEM CARDS ────────────────────────────────────────────
ScrollTrigger.batch('.problem-card', {
    start: 'top 85%',
    once: true,
    onEnter: batch => {
        gsap.to(batch, {
            y: 0, autoAlpha: 1,
            duration: 0.7, stagger: 0.15, ease: 'power3.out'
        });
    }
});

// ─── SERVICES — SLIDE IN FROM ALTERNATING SIDES ───────────────
document.querySelectorAll('.svc-row').forEach(row => {
    const dir = row.getAttribute('data-dir'); // 'left' or 'right'
    const img = row.querySelector('.svc-img');
    const body = row.querySelector('.svc-body');

    // Set initial hidden state
    gsap.set(img, { x: dir === 'left' ? -100 : 100, autoAlpha: 0 });
    gsap.set(body, { x: dir === 'left' ? 80 : -80, autoAlpha: 0 });

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: row,
            start: 'top 75%',
            once: true
        }
    });

    tl.to(img, { x: 0, autoAlpha: 1, duration: 0.9, ease: 'power3.out' })
      .to(body, { x: 0, autoAlpha: 1, duration: 0.8, ease: 'power3.out' }, '-=0.5');

    // Stagger the list items
    tl.from(row.querySelectorAll('.svc-list li'), {
        x: 20, autoAlpha: 0, duration: 0.4,
        stagger: 0.08, ease: 'power2.out'
    }, '-=0.3');

    // Animate the button
    tl.from(row.querySelector('.btn-outline'), {
        y: 12, autoAlpha: 0, duration: 0.4, ease: 'power2.out'
    }, '-=0.1');
});

// ─── PROCESS STEPS ────────────────────────────────────────────
ScrollTrigger.batch('.process-step', {
    start: 'top 85%',
    once: true,
    onEnter: batch => {
        gsap.to(batch, {
            y: 0, autoAlpha: 1,
            duration: 0.7, stagger: 0.2, ease: 'power3.out'
        });
    }
});
gsap.from('.process-arrow', {
    scaleX: 0, transformOrigin: 'left center',
    duration: 0.6, stagger: 0.2, ease: 'power2.out',
    scrollTrigger: { trigger: '.process-steps', start: 'top 80%', once: true }
});

// ─── GALLERY FADE-SCALE IN ────────────────────────────────────
ScrollTrigger.batch('.g-item', {
    start: 'top 90%',
    once: true,
    onEnter: batch => {
        gsap.to(batch, {
            autoAlpha: 1, scale: 1,
            duration: 0.6, stagger: 0.08, ease: 'power2.out'
        });
    }
});

// ─── ABOUT IMAGE SLIDE IN ─────────────────────────────────────
gsap.to('.about-img', {
    x: 0, autoAlpha: 1,
    duration: 1, ease: 'power3.out',
    scrollTrigger: { trigger: '.about-section', start: 'top 70%', once: true }
});
gsap.from('.about-text .eyebrow, .about-text h2, .about-text p, .credentials', {
    y: 24, autoAlpha: 0,
    duration: 0.6, stagger: 0.12, ease: 'power2.out',
    scrollTrigger: { trigger: '.about-section', start: 'top 70%', once: true }
});

// ─── CONTACT FADE IN ──────────────────────────────────────────
gsap.from('.contact-left > *', {
    y: 24, autoAlpha: 0,
    duration: 0.6, stagger: 0.1, ease: 'power2.out',
    scrollTrigger: { trigger: '.contact-section', start: 'top 75%', once: true }
});
gsap.from('.contact-form', {
    y: 40, autoAlpha: 0,
    duration: 0.8, ease: 'power3.out',
    scrollTrigger: { trigger: '.contact-section', start: 'top 75%', once: true }
});

// ─── SECTION HEADERS FADE UP ─────────────────────────────────
gsap.utils.toArray('.services-header, .gallery-section .section-wrap, .process-section .section-wrap').forEach(el => {
    gsap.from(el.children, {
        y: 30, autoAlpha: 0,
        duration: 0.7, stagger: 0.1, ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 80%', once: true }
    });
});

// ─── SMOOTH ANCHOR SCROLLING ─────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
            e.preventDefault();
            const offset = navbar.offsetHeight + 16;
            const top = target.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    });
});

// ─── CONTACT FORM ─────────────────────────────────────────────
const form = document.getElementById('contactForm');
if (form) {
    form.addEventListener('submit', e => {
        e.preventDefault();
        const btn = document.getElementById('submitBtn');
        btn.textContent = 'Sending...';
        btn.disabled = true;

        // Simulate / open mailto
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const company = form.company.value;
        const service = form.service.value;
        const message = form.message.value;

        const mailto = `mailto:info@southwestprecast.com.au?subject=New Inquiry — ${encodeURIComponent(service)} — ${encodeURIComponent(name)}&body=${encodeURIComponent(
            `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nCompany: ${company}\nService: ${service}\n\nProject Brief:\n${message}`
        )}`;

        setTimeout(() => {
            // Show success toast
            const toast = document.createElement('div');
            toast.innerHTML = `
                <div style="
                    position:fixed; bottom:32px; right:32px; z-index:9999;
                    background:#111; border:1px solid #E87C2A;
                    color:#fff; padding:18px 28px; border-radius:10px;
                    box-shadow:0 20px 60px rgba(0,0,0,.5);
                    font-family:Inter,sans-serif; font-size:.875rem;
                    display:flex; align-items:center; gap:12px;
                ">
                    <span style="color:#E87C2A; font-size:1.1rem;">✓</span>
                    <span>Thanks! We'll be in touch within 24 hours.</span>
                </div>`;
            document.body.appendChild(toast);
            gsap.from(toast.firstElementChild, { y: 20, autoAlpha: 0, duration: .4, ease: 'power2.out' });
            form.reset();
            btn.textContent = 'Send Project Brief';
            btn.disabled = false;
            setTimeout(() => {
                gsap.to(toast.firstElementChild, {
                    y: 20, autoAlpha: 0, duration: .4, ease: 'power2.in',
                    onComplete: () => toast.remove()
                });
            }, 5000);

            window.location.href = mailto;
        }, 600);
    });
}

console.log('Southwest Precast — Loaded');
