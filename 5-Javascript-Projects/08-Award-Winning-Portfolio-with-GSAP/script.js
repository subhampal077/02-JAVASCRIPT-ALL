const miniCircle = document.querySelector("#mini-circle");

// smooth scrolling from locomotive
const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

function circleMouseFollower(xscale, yscale) {
  window.addEventListener("mousemove", (e) => {
    // console.log(e);
    miniCircle.style.transform = `translate(${e.clientX - 6}px, ${
      e.clientY - 6
    }px) scale(${xscale}, ${yscale})`;
    miniCircle.style.opacity = "1";
  });

  // Mouse leave to hide the circle
  document.addEventListener("mouseleave", () => {
    miniCircle.style.opacity = "0";
  });

  // Mouse enter to show the circle again
  document.addEventListener("mouseenter", () => {
    miniCircle.style.opacity = "1";
  });
}

circleMouseFollower();

function firstPageAnimation() {
  const tl = gsap.timeline();
  tl.from("#nav", {
    y: 10,
    opacity: 0,
    duration: 1.3,
    ease: Expo.easeInOut,
  })
    .to(".bounding-h1", {
      y: 0,
      opacity: 1,
      duration: 1.5,
      ease: Expo.easeInOut,
      delay: -1.5,
      stagger: 0.2,
    })

    .to(".bounding-h5", {
      y: 0,
      opacity: 1,
      duration: 1.5,
      ease: Expo.easeInOut,
      delay: -1.5,
      stagger: 0.2,
    })
    .from("#hero-footer", {
      y: -10,
      opacity: 0,
      duration: 1.5,
      ease: Expo.easeInOut,
      delay: -1.3,
    });
}

firstPageAnimation();

let timeoutId;

function changeCircleRadious() {
  let xprev = 0;
  let yprev = 0;

  window.addEventListener("mousemove", (e) => {
    clearTimeout(timeoutId);
    let xdiff = e.clientX - xprev;
    let ydiff = e.clientY - yprev;

    xprev = e.clientX;
    yprev = e.clientY;

    // usig gsap clamp
    xscale = gsap.utils.clamp(0.7, 1.3, xdiff);
    yscale = gsap.utils.clamp(0.7, 1.3, ydiff);

    circleMouseFollower(xscale, yscale);

    timeoutId = setTimeout(() => {
      miniCircle.style.transform = `translate(${e.clientX - 6}px, ${
        e.clientY - 6
      }px) scale(1,1)`;
    }, 100);
  });
}

changeCircleRadious();

const projects = document.querySelectorAll(".project");

projects.forEach((project) => {
  let prevRotate = 0;

  function projectWaveView(e) {
    // to measure top difference
    let cursorTop = e.clientY;
    let projectDivTop = project.getBoundingClientRect().top;
    let topDiff = cursorTop - projectDivTop;

    // to measure horizontal diff for wavw view
    let rotateDiff = e.clientX - prevRotate;
    prevRotate = e.clientX;

    let maxMinRotate = gsap.utils.clamp(-20, 20, rotateDiff);

    gsap.to(project.querySelector("img"), {
      opacity: 1,
      ease: Power3,
      top: topDiff,
      left: e.clientX,
      rotate: maxMinRotate,
      duration: 0.5,
    });
  }

  project.addEventListener("mousemove", (e) => {
    projectWaveView(e);
  });

  project.addEventListener("mouseenter", (e) => {
    projectWaveView(e);
  });

  project.addEventListener("mouseleave", (e) => {
    gsap.to(project.querySelector("img"), {
      opacity: 0,
    });
  });
});

const clock = document.querySelector(".clock");

function getTime() {
  const time = new Date();
  let hours = time.getHours();
  let minutes = time.getMinutes().toString().padStart(2, "0");
  let amPm = hours <= 12 ? "AM" : "PM";

  hours = hours % 12;

  clock.textContent = `${hours}:${minutes} ${amPm} IST`;
}

getTime();

setInterval(() => {
  getTime();
}, 60000);
