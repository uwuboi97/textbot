fontsize = 10;
let corpus;


function preload() {
  font = loadFont("assets/type.ttf");

  corpus = loadStrings("assets/combined.txt");
 
}

function setup() {
  textWrap(WORD);
  createCanvas(windowWidth, 2000);
  textFont(font);
  textSize(12);
  
  noLoop();
}

function draw() {
 
  textWrap(WORD);
  noStroke();
  rectMode(CENTER);
  fill(0);
  rect(width/2,height/2,width, height);
  textAlign(LEFT);
  rectMode(CORNERS);
  fill(0);
  let n=100;
  for(let i = 0;i<n;i++){
    let y =map(i, 0, n-1, width*0.05, height*5);
    console.log(print=y);

    let x = 10;
    
     drawWords(x,y,width-10);
  }
 


 
}

function filterString(line) {
  let filteredLine = line.replaceAll("\t", " ");
  return filteredLine;
}

function drawWords(x, y) {
  // First we generate a random variable to pick a string from the corpus
  let ind = floor(random(corpus.length));
  // console.log('corpus', corpus[ind])

  //Clean up the area we're selecting to make sure any double spacing or things like that don't prevent us from getting words
  let filteredCorpus = filterString(corpus[ind]);
  // make sure that hasn't left us with a blank corpus! that's no fun
  if (!filteredCorpus.length) {
    let inc = 1;
    while (!filteredCorpus.length) {
      filteredCorpus = filterString(corpus[ind + inc]);
      inc++;
    }
  }

  // Then we generate a random variable from the length of that string to pick a random word
  let word = floor(random(filteredCorpus.length));

  fill(255);
  // The text() function needs three parameters:
  // the text to draw, the horizontal position,
  // and the vertical position
  //filteredCorpus = (filteredCorpus+"").replace(","," ");

  // We take a line from the corpus, split it into an array, then take a random word from it.

  text(filteredCorpus, x, y, width-10);
  //windowWidth);
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    redraw();
    }
  
}