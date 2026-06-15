async function buscarfilme() {
  let filme = document.getElementById('filme').value
 let dados = await fetch(`https://www.omdbapi.com/?t=${filme}&apikey=ca1b2e03`)
 let response= await dados.json()
 console.log(response)
 colocarnohtml(response)


}
function colocarnohtml(params) {
document.getElementById('titulo').innerHTML=params.Title
document.getElementById('imagem').src=params.Poster
document.getElementById('Plot').innerHTML=params.Plot
    
}




