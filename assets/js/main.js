
function toggleMode(){
  const html = document.documentElement
  // pegar a tag img
  const img = document.querySelector("#profile img")
  /*
if (html.classList.contains('light')) {
  html.classList.remove('light')
} else {
  html.classList.add('light')
}
*/
  html.classList.toggle("light")
  // substituir a img
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute('src', '../assets/images/avatar-light.png')
    img.setAttribute('alt', 'sem foto cara')
  } else {
    // se tiver sem light mode, manter a imagem normal
     img.setAttribute("src", "../assets/images/avatar.png")
  }
}