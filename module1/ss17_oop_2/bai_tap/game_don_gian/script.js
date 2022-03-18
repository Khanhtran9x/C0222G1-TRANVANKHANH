
function Hero(image, top, left, size){
  this.image = image;
  this.top = top;
  this.left = left;
  this.size = size;

  this.getHeroElement = function(){
    return '<img width="'+ this.size + '"' +
      ' height="'+ (this.size + 150) + '"' +
      ' src="' + this.image +'"' +
      ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
  }

  this.moveRight = function(){
    this.left += 50;
    console.log('ok: ' + this.left);
  }
  this.moveLeft = function(){
    this.left -= 50;
    console.log('ok: ' + this.left);
  }
  this.moveDown = function(){
    this.top += 50;
    console.log('ok: ' + this.top);
  }
  this.moveUp = function(){
    this.top -= 50;
    console.log('ok: ' + this.top);
  }

}
let windowWid = window.innerWidth - 200;
let hero = new Hero('image/naruto.png', 20, 30, 200);
let hero2 = new Hero('image/sasuke.png', 20, windowWid, 200);

function start(){
  if(hero.left < window.innerWidth - hero.size && hero.top < window.innerHeight/2){
    hero.moveRight();
  } else if(hero.left >= window.innerWidth - hero.size && hero.top < window.innerHeight - hero.size){
    hero.moveDown();
  } else if(hero.left >= 0 && hero.top >= window.innerHeight - hero.size){
    hero.moveLeft();
  } else if(hero.left < window.innerWidth - hero.size && hero.top > hero.size){
    hero.moveUp();
  }
  if(hero2.left > 0){
    hero2.moveLeft();
  }
  document.getElementById('game').innerHTML = hero.getHeroElement() + hero2.getHeroElement();
  setTimeout(start, 500);
}

start();