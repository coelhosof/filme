let campoIdade;
let campoFantasia;
let campoAventura;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("5");
  campoFantasia = createCheckbox("Gosta de Comédia?");
  campoAventura = createCheckbox("Gosta de aventura?");
}

function draw() {
  background("pink");
  let idade = campoIdade.value();
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeAventura = campoAventura.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura);
  
fill(color(30, 0, 115));
  textAlign(CENTER, CENTER);
  textSize(30);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeComédia, gostaDeAventura) {
  if (idade >= 10) {
    if (idade >= 14) {
      return "O menino que descobriu o vento";
    } else {
      if (idade >= 14) {
        if(gostaDeComédia || gostaDeAventura) {
          return "Meu malvado favorito 4";          
        } else{
         return "Pequenos espiões";
        }
      } else {
        if (gostaDeComédia) {
          return "As aventuras de pi";
        } else {
          return "Depois da chuva";
        }
      }
    }
  } else {
    if (gostaDeComédia) {
      return "Vizinhos";
    } else {
      return "Meus 15 anos";
    }
  }
}
