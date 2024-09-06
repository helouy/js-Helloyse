function setup() {
    createCanvas(800, 600);
  }
  inicializaCores();
  
  function draw() {
    background("gray");
    fill("black");
    textSize(64);
    textAlign(CENTER, CENTER)
    
    let maximo = width;
    let minimo = 0;
    let palavra = "Calopsita, Calopsitar, Calopsitado";
    let quantidade = map(mouseX, 0, width, 1, palavra.length);
    let parcial = palavra.substring(0,quantidade);
    text(parcial,250,250);
    
  //  if(mouseX < 50){
  //    let palavra = "C";
  //    text(palavra, 200, 200);
  //  } else {
  //    let palavra = "Caminhante";
  //    text(palavra, 200, 200);
  //  }
  }
  
  inicializaCores();
  