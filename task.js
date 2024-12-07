const img = document.getElementById("img");
const click = document.getElementById("clicker__counter");
img.onclick = () => {
  if (img.width === 200) {
    img.width += 10;
    img.height += 10;
  } else {
    img.width -= 10;
    img.height -= 10;
  }
  click.textContent = Number(click.textContent) + 1;
};
