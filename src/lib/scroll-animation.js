import gsap from 'gsap';

export const scrollAnimation = (position, target, isMobile, onUpdate) => {
    const tl = gsap.timeline();

    tl.to(position, {
        x: !isMobile ? -9.68 : -7.0,
        y: !isMobile ? 7.66 : -12.2,
        z: !isMobile ? -7.98: -6.0,
        scrollTrigger: {
            trigger: '.add-section',
            start: "top bottom",
            end: "top top",
            scrub: 4,
            immediateRender: false
        },
        onUpdate
    })
    .to(target, {
        x: !isMobile ? 2 : 0.7,
        y: !isMobile ? -1 : 1.9,
        z: !isMobile ? -.5 : 0.7,
        scrollTrigger: {
            trigger: '.add-section',
            start: "top bottom",
            end: "top top",
            scrub: 4,
            immediateRender: false
        },
    })
    .to('.home-section', {
        opacity: 0,
        scrollTrigger: {
            trigger: '.add-section',
            start: "top bottom",
            end: "top top",
            scrub: 4,
            immediateRender: false
        },
    })
    .to('.add-section-content', {
        opacity: 1,
        scrollTrigger: {
            trigger: '.add-section',
            start: "top bottom",
            end: "top top",
            scrub: 4,
            immediateRender: false
        },
    })
    .to(position, {
        x: !isMobile ? 0.12 : 9.36,
        y: !isMobile ? 9.39 : 10.95,
        z: !isMobile ? -21.28 : 0.09,
        scrollTrigger: {
            trigger: '.cars-section',
            start: "top bottom",
            end: "top top",
            scrub: 4,
            immediateRender: false
        },
        onUpdate
    })
    .to(target, {
        x: !isMobile ? 11.8 : -1.62,
        y: !isMobile ? 0.74 : 0.62,
        z: !isMobile ? -13.80 : -0.06,
        scrollTrigger: {
            trigger: '.cars-section',
            start: "top bottom",
            end: "top top",
            scrub: 4,
            immediateRender: false
        },
    })
    .to('.cars-section', {
        opacity: 1,
        scrollTrigger: {
            trigger: '.cars-section',
            start: "top bottom",
            end: "top top",
            scrub: 4,
            immediateRender: false
        },
    })
    .to(position, {
        x: !isMobile ? -5.66 : -7.0,
        y: !isMobile ? 2.68 : -12.2,
        z: !isMobile ? 3.59: -6.0,
        scrollTrigger: {
            trigger: '.display-section',
            start: "top bottom",
            end: "top top",
            scrub: 4,
            immediateRender: false
        },
        onUpdate
    })
    .to(target, {
        x: !isMobile ? 0 : -1.62,
        y: !isMobile ? 0 : 0.62,
        z: !isMobile ? 0 : -0.06,
        scrollTrigger: {
            trigger: '.display-section',
            start: "top bottom",
            end: "top top",
            scrub: 4,
            immediateRender: false
        },
    })
    .to('.display-section', {
        opacity: 1,
        scrollTrigger: {
            trigger: '.display-section',
            start: "top bottom",
            end: "top top",
            scrub: 4,
            immediateRender: false
        },
    })
    
}