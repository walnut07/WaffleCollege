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
