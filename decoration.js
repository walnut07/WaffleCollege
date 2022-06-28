const styleSheetList = document.styleSheets;
const styleSheet = styleSheetList[0];

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


// The high school pic fades in on scroll
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

// The left text in college part fades in on scroll

