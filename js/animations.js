gsap.registerPlugin(ScrollTrigger);

const tlLoader = gsap.timeline()

tlLoader
.set('.loader__item',{ yPercent: -100 })
.to('.loader__item',{yPercent: 100, duration: 4, stagger: 0.25})
.set('.loader__title',{ scale: 1 })
.to('.loader__title',{scale: 1.5, duration: 2, stagger: 0.25})
.set('.loader', {yPercent: -100},
'-=1')
.to('.loader__item',{ yPercent: -100, duration: 2.5 },
'-=1')


const desktopMedia = window.matchMedia('(min-width: 992px)')

if(desktopMedia.matches){
    gsap.to('.section__hero', {
        scrollTrigger: {
            triger: '.section__hero',
            start: 'top top',
            scrub: true
        },
        css: {
            backgroundColor: '#fff'
        },
    })
    gsap.to('.title__row-1', {
        scrollTrigger: {
            triger: '.section__hero',
            start: '-100 0',
            scrub: true
        },
        yPercent: -400
    })
    gsap.to('.title__row-2', {
        scrollTrigger: {
            triger: '.section__hero',
            start: '-100 0',
            scrub: true
        },
        yPercent: -600
    })
    gsap.to('.hero__svg', {
        scrollTrigger: {
            triger: '.section__hero',
            start: '-50 0',
            scrub: true
        },
        yPercent: 100,
        scale: 0.1
    })
    gsap.to('.hero__image', {
        scrollTrigger: {
            triger: '.section__hero',
            start: '-50 0',
            scrub: true
        },
        yPercent: -100,
        scale: 2.0
    })
    gsap.from('.products__img img', 1, {
        scrollTrigger: {
            trigger: '.section__materials',
            start: 'top center'
        },
        xPercent: -100,
        opacity: 0,
        stagger: 0.3
    })
    gsap.from('.products__info', 1, {
        scrollTrigger: {
            trigger: '.section__materials',
            start: 'top center'
        },
        yPercent: -100,
        opacity: 0,
        stagger: 0.3
    })
    gsap.from('.materials__title', 1, {
        scrollTrigger: {
            trigger: '.section__materials',
            start: 'top center'
        },
        yPercent: 100,
        opacity: 0
    })
    gsap.from('.materials__text', 1, {
        scrollTrigger: {
            trigger: '.section__materials',
            start: 'top center'
        },
        yPercent: 100,
        opacity: 0
    })
    gsap.from('.materials__btn', 1, {
        scrollTrigger: {
            trigger: '.section__materials',
            start: 'top center'
        },
        yPercent: 100,
        opacity: 0
    })

}

const choose = gsap.timeline()

choose.from('.section__choose', {
    scrollTrigger: {
        trigger: '.section__choose',
        start: '0 0',
        scrub: true,
        pin: true
    }
})
.from('.choose__title', 1.5, {
    scrollTrigger: {
        trigger: '.section__choose',
        start: '-150 top',
        scrub: true
        
    },
    yPercent: 200
    
})
.from('.choose__text', 1.5, {
    scrollTrigger: {
        trigger: '.section__choose',
        start: '-350 top',
        scrub: true
    },
    yPercent: 200,
    opacity: 0
})
.from('.why__svg', 1.5, {
    scrollTrigger: {
        trigger: '.section__choose',
        start: 'top top',
        scrub: true
    },
    scale: 0
})
.from('.why__image', 1.5, {
    scrollTrigger: {
        trigger: '.section__choose',
        start: '0 0',
        scrub: true
    },
    css: {
        width: '0',
        height: '100%'
    }
})
.from('.why__item', 1.5, {
    scrollTrigger: {
        trigger: '.section__choose',
        start: '-200 0',
        scrub: true
    },
    opacity: 0,
    yPercent: 50,
    stagger: 0.5
})

const elem = document.querySelector('.help__text');

document.addEventListener('scroll', onScroll);

function onScroll() {
  const posTop = elem.getBoundingClientRect().top;
  if(posTop + elem.clientHeight <= window.innerHeight && posTop >= 0) {
    elem.classList.add('visible');
    document.removeEventListener('scroll', onScroll);
    const text = document.querySelector('.help__text');

const splitText = (el) => {
	el.innerHTML = el.textContent.replace(/(\S*)/g, m => {
  return `<div class="word">` +
			m.replace(/(-|#|@)?\S(-|#|@)?/g, "<div class='letter'>$&</div>") +
			`</div>`;
	});
	return el;
};

const split = splitText(text);

function random(min, max){
  return (Math.random() * (max - min)) + min;
}

Array.from(split.querySelectorAll('.letter')).forEach((el, idx) => {
	TweenMax.from(el, 2.5, {
		opacity: 0,
		scale: .1,
		x: random(-500, 500),
		y: random(-500, 500),
		z: random(-500, 500),
		delay: idx * 0.02,
		repeat: 0,
	})
});
  }
}