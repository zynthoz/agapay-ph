// Initialize Lenis for smooth scrolling
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// Integrate Lenis with GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Hero Animations
const heroTl = gsap.timeline();

heroTl.fromTo(".split-text", 
    { y: 50, opacity: 0 }, 
    { y: 0, opacity: 1, duration: 1.2, ease: "power4.out", stagger: 0.1 }
)
.fromTo(".fade-up", 
    { y: 30, opacity: 0 }, 
    { y: 0, opacity: 1, duration: 1, ease: "power3.out", stagger: 0.15 }, 
    "-=0.8"
);

// Parallax background on Hero
gsap.to(".hero-bg", {
    yPercent: 30,
    ease: "none",
    scrollTrigger: {
        trigger: ".hero-section",
        start: "top top",
        end: "bottom top",
        scrub: true
    } 
});

// gsap.fromTo(".characteristics-item", 
// );

const contempCards = gsap.utils.toArray('.contemp-card');
contempCards.forEach(card => {
    // Parallax image effect inside cards
    const img = card.querySelector('.contemp-img');
    if (img) {
        gsap.to(img, {
            yPercent: 20,
            ease: "none",
            scrollTrigger: {
                trigger: card,
                start: "top bottom",
                end: "bottom top",
                scrub: true
            }
        });
    }

    gsap.fromTo(card,
        { y: 60, opacity: 0, scale: 0.98 },
        {
            y: 0, opacity: 1, scale: 1,
            duration: 1.2, 
            ease: "power3.out",
            scrollTrigger: {
                trigger: card,
                start: "top 75%",
            }
        }
    );
});



// Interdependence Panel Parallax
gsap.to(".interdependence-bg", {
    yPercent: 20,
    ease: "none",
    scrollTrigger: {
        trigger: "#interdependence",
        start: "top bottom",
        end: "bottom top",
        scrub: true
    }
});

// Interdependence Text Animation
const interTl = gsap.timeline({
    scrollTrigger: {
        trigger: "#interdependence",
        start: "top center",
    }
});
interTl.fromTo(".split-text-panel", 
    { y: 50, opacity: 0 }, 
    { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
)
.fromTo(".fade-up-panel", 
    { y: 30, opacity: 0 }, 
    { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", stagger: 0.2 }, 
    "-=0.6"
);

// Causes and Effects Scroll Reveal
gsap.fromTo("#causes-box", 
    { y: 50, opacity: 0 },
    {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".causes-side",
            start: "top 80%",
        }
    }
);

gsap.fromTo("#effects-box", 
    { y: 50, opacity: 0 },
    {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".effects-side",
            start: "top 80%",
        }
    }
);

// Accordion (Ways Forward)
const accordionItems = document.querySelectorAll('.accordion-item');
accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-header');
    
    header.addEventListener('click', () => {
        // Toggle current item
        const isActive = item.classList.contains('active');
        
        // Close all
        accordionItems.forEach(i => {
            i.classList.remove('active');
            // reset max height for animation
            const content = i.querySelector('.accordion-content');
            if (content) content.style.maxHeight = null;
        });

        if (!isActive) {
            item.classList.add('active');
            const content = item.querySelector('.accordion-content');
            if (content) {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        }
    });

    // Initialize the active one based on HTML markup
    if(item.classList.contains('active')) {
        const content = item.querySelector('.accordion-content');
        if (content) {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    }
});

// Number Counters for Stats Section
const counters = document.querySelectorAll('.count-up');
counters.forEach(counter => {
    const target = parseFloat(counter.getAttribute('data-target'));
    const decimals = parseInt(counter.getAttribute('data-decimals')) || 0;
    
    // Use an object to hold the value to animate
    let animObject = { val: 0 };
    
    gsap.to(animObject, {
        val: target,
        duration: 2.5,
        ease: "power2.out",
        scrollTrigger: {
            trigger: counter,
            start: "top 85%",
        },
        onUpdate: function() {
            counter.innerText = animObject.val.toFixed(decimals);
        }
    });
});

// Smooth scroll to top
const scrollToTopBtns = document.querySelectorAll('.back-to-top, .logo');

scrollToTopBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        lenis.scrollTo(0, { 
            duration: 1.5,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
        });
    });
});

// Supporting Evidence (Actor Cards) Reveal
const actorCards = gsap.utils.toArray('.actor-card');
actorCards.forEach((card, i) => {
    gsap.fromTo(card,
        { y: 50, opacity: 0 },
        {
            y: 0, opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: card,
                start: "top 85%",
            }
        }
    );
});

// Accordion Reveal
const accordionReveal = gsap.utils.toArray('.accordion-item');
gsap.fromTo(accordionReveal,
    { y: 30, opacity: 0 },
    {
        y: 0, opacity: 1, stagger: 0.1, duration: 1, ease: "power3.out",
        scrollTrigger: {
            trigger: ".ways-forward-section",
            start: "top 75%"
        }
    }
);
