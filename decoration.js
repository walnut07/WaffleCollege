const styleSheetList = document.styleSheets;
const styleSheet = styleSheetList[0];

// Intro h1 fades in when loaded
const introH1 = document.getElementsByClassName("intro-h1")[0];
const fadeInIntroH1 = () => {
  introH1.style.transform = "translateX(0px)"
}
window.addEventListener("load", () => { setTimeout(fadeInIntroH1, 600) });

// Intro p apears when loaded
const introP = document.getElementsByClassName("intro-p")[0];
const fadeInIntroP = () => {
  introP.style.opacity = "1";
}
window.addEventListener("load", () => { setTimeout(fadeInIntroP, 2000) });

// Change its background color when my picture is hovered.
const introPicture = document.getElementsByClassName("intro-picture")[0];
const getRandomColor = () => {
  const colors = ["white", "purple", "blue", "pink", "black"];
  return colors[Math.floor(Math.random() * colors.length)];
}
const changeMyPicBackground = () => {
  let randomColor = getRandomColor();
  introPicture.style.filter = `drop-shadow(15px 15px var(--${randomColor})`
}
const restoreOriginalMyPicBackground = () => {
  introPicture.style.filter = "drop-shadow(15px 15px var(--yellow))"
}
introPicture.addEventListener("mouseover", changeMyPicBackground);
introPicture.addEventListener("mouseleave", restoreOriginalMyPicBackground);


// The guitar pic fades in on scroll
const guitarPic = document.getElementsByClassName("guitar-pic")[0];
const fadeInGuitarPic = () => {
  const guitarPicTop = guitarPic.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;
  if (windowHeight > (guitarPicTop + 100)) {
    guitarPic.classList.add("guitar-fadein-after");
  } else {
    guitarPic.classList.remove("guitar-fadein-after");
  }
};
window.addEventListener("scroll", fadeInGuitarPic);

// A module that fades in and out a target elem.
const fadeInAndOut = (target, position) => {
  // `target`: elem that you want to apply an effect to.
  // `position`: in which position `target` is in: left, right, or center.

  const windowHeight = window.innerHeight;
  const targetHeight = target.getBoundingClientRect().top;
  if (position == "left") {
    if (windowHeight > (targetHeight + 200)) {
      // intentionally do not add classList here because `target` has nested p tags.
      target.style.opacity = "1";
      target.style.transform = "translate(0)";
    } else {
      target.style.transform = "translateX(-400px)";
      target.style.transition = "opacity 1s, transform 1s";
    }
  } else if (position == "right") {
    if (windowHeight > (targetHeight + 200)) {
      target.style.opacity = "1";
      target.style.transform = "translate(0)";
    } else {
      target.style.transform = "translateX(400px)";
      target.style.transition = "opacity 1s, transform 1s";
    }
  } else {
    if (windowHeight > (targetHeight + 200)) {
      target.style.opacity = "1";
    } else {
      target.style.opacity = "0";
    }
  }
}

// The left text in college part fades in on scroll
const leftText = document.getElementsByClassName("college-text")[0];
const fadeInLeftText = () => {
  const leftTextTop = leftText.getBoundingClientRect().top;
  fadeInAndOut(leftText, "left");
}
window.addEventListener("scroll", fadeInLeftText);


// The right text in college part fades in on scroll
const fadeInRightText = () => {
  const rightText= document.getElementById("text-right");
  fadeInAndOut(rightText, "right");
  
}
window.addEventListener("scroll", fadeInRightText);

// The year-off h2 fades in on scroll
const yearOffH2 = document.getElementsByClassName("year-off-h2")[0];
const fadeInYearOffH2 = () => {
  fadeInAndOut(yearOffH2, "center");
}
window.addEventListener("scroll", fadeInYearOffH2);