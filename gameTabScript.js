"use strict"
//Declare-Variables-------
window.onload = () => {//Only when webpage loads
  const topright = document.getElementById('featuresButton');
  const topleft = document.getElementById('homeButton');
  const canvas = document.querySelector('canvas');
  const c = canvas.getContext('2d');//canvas context
  const bgImage = new Image();
  bgImage.src = './Game Assets/Exported Images/bgImage.png';
  const fgImage = new Image();
  fgImage.src = './Game Assets/Exported Images/fgImage.png';
  const playerImage = new Image();
  playerImage.src = './Game Assets/Exported Images/Character Sprites/playerDown.png';
  const playerUp = new Image();
  playerUp.src = './Game Assets/Exported Images/Character Sprites/playerUp.png';
  const playerLeft = new Image();
  playerLeft.src = './Game Assets/Exported Images/Character Sprites/playerLeft.png';
  const playerRight = new Image();
  playerRight.src = './Game Assets/Exported Images/Character Sprites/playerRight.png';
  //Redirects---------------
  topright.addEventListener("click", e => {
    window.location.href = "/gameTab.html";
  });
  topleft.addEventListener("click", e => {
    window.location.href = "/index.html";
  });
  //Game-Functions---------
  canvas.width = 1024;
  canvas.height = 576;
  
  const collisionsMap = []
  for (let i=0; i<collisions.length;i+=70){
    collisionsMap.push(collisions.slice(i,i+70));
  }
  class Boundary{
    static width = 96
    static height = 96
    constructor({position}){
      this.position = position;
      this.width = 96;
      this.height = 96//800% * 12px;
    }
    draw(){
      c.fillStyle = 'rgba(255,0,0,0.0)'
      c.fillRect(this.position.x,this.position.y,this.width,this.height)
    }
  }
  const boundaries = [];//All collisions stored here
  const offset ={
    x: -4002,
    y: -2730
  }
  collisionsMap.forEach((row,i) => {
    row.forEach((Item,j) => {
      if(Item === 1025){
        boundaries.push(new Boundary({position:{x:j*Boundary.width + offset.x,y:i*Boundary.height+offset.y}}))
      }
    })
  })
  

  class Sprite{
    constructor({position,image,frames = {max : 1},sprites}){
      this.position = position;
      this.image = image;
      this.frames = {...frames,val: 0,elapsed:0};
      this.image.onload = () => {
        this.width = this.image.width/this.frames.max;
        this.height = this.image.height;
      }
      this.moving = false
      this.sprites = sprites
    }
    draw(){
      c.drawImage(
        this.image,
        this.frames.val * this.width,//crop from X
        0,//crom from Y
        this.image.width/this.frames.max,//crop width
        this.image.height,//crop height
        this.position.x,//positioning of image X
        this.position.y,//positioning of image Y
        this.image.width/this.frames.max,//rendered width
        this.image.height//rendered height
        );
        if (this.moving){
          if(this.frames.max>1){
            this.frames.elapsed++
          }
          if(this.frames.elapsed % 10 == 0){
            if(this.frames.val < this.frames.max - 1){this.frames.val++}
            else{this.frames.val = 0};
            // console.log(this.frames.elapsed);
          }
       }
       
    }
  }

  const player = new Sprite({
    position: {
      x : canvas.width/2 - 192/4/2,//positioning of image X
      y: canvas.height/2 - 68/2//positioning of image Y
    },
    image: playerImage,
    frames:{
      max : 4
    },
    sprites: {
      up: playerUp,
      down: playerImage,
      left: playerLeft,
      right: playerRight
    }
  });

  const background = new Sprite({
    position:{x:offset.x,y:offset.y},
    image: bgImage
  });

  const foreground = new Sprite({
    position:{x:offset.x,y:offset.y},
    image: fgImage
  });

  const keys ={
    up: {
      pressed: false
    },
    down: {
      pressed: false
    },
    left: {
      pressed: false
    },
    right: {
      pressed: false
    }
  }

  function rectangularCollision({rectangle1,rectangle2}){
    return (
    rectangle1.position.x + rectangle1.width >= rectangle2.position.x && 
    rectangle1.position.x <= rectangle2.position.x + rectangle2.width &&
    rectangle1.position.y + rectangle1.height >= rectangle2.position.y &&
    rectangle1.position.y <= rectangle2.position.y + rectangle2.height
    )
  }

  const movables = [...boundaries,background,foreground];
  function animate(){
    window.requestAnimationFrame(animate);
      background.draw();
      boundaries.forEach(Boundary => {
        Boundary.draw();
        if (rectangularCollision({rectangle1 : player,rectangle2 : Boundary})){
          console.log("Collide");
        }
      });
      player.draw();
      foreground.draw();
      let velocity = 3;
      let movingy = true;
      let movingx = true;
      player.moving = false;
        if(keys.up.pressed){
          player.moving = true
          player.image = player.sprites.up
          for (let i=0; i < boundaries.length;i++){
            const Boundary = boundaries[i]
            if(rectangularCollision({
                rectangle1 : player,
                rectangle2: {...Boundary,
                  position: {
                    x: Boundary.position.x,
                    y: Boundary.position.y + 3
                    }
                  }
            })){
              movingy = false;
              //break;
            }
          }
          if(movingy){
          movables.forEach((moveItem) => {
              moveItem.position.y += velocity;
          })
          }
        }
        if(keys.down.pressed){
          player.moving = true
          player.image = player.sprites.down
          for (let i=0; i < boundaries.length;i++){
            const Boundary = boundaries[i]
            if(rectangularCollision({
                rectangle1 : player,
                rectangle2: {...Boundary,
                  position: {
                    x: Boundary.position.x,
                    y: Boundary.position.y - 3
                    }
                  }
            })){
              movingy = false;
              //break;
            }
          }
          if(movingy){
          movables.forEach((moveItem) => {
            moveItem.position.y -= velocity;
            })
          }
        }
        if(keys.right.pressed){
          player.moving = true
          player.image = player.sprites.right
          for (let i=0; i < boundaries.length;i++){
            const Boundary = boundaries[i]
            if(rectangularCollision({
                rectangle1 : player,
                rectangle2: {...Boundary,
                  position: {
                    x: Boundary.position.x - 3,
                    y: Boundary.position.y
                    }
                  }
            })){
              movingx = false;
              //break;
            }
          }
          if(movingx){
          movables.forEach((moveItem) => {
            moveItem.position.x -= velocity;
            })
          }
        }
        if(keys.left.pressed){
          player.moving = true
          player.image = player.sprites.left
          for (let i=0; i < boundaries.length;i++){
            const Boundary = boundaries[i]
            if(rectangularCollision({
                rectangle1 : player,
                rectangle2: {...Boundary,
                  position: {
                    x: Boundary.position.x + 3,
                    y: Boundary.position.y
                    }
                  }
            })){
              movingx = false;
              //break;
            }
          }
          if(movingx){
          movables.forEach((moveItem) => {
            moveItem.position.x += velocity;
            })
          }
        }
  }
  animate();

  window.addEventListener('keydown',(e) => {
    switch (e.key){
      case 'w':
      case 'ArrowUp':
        keys.up.pressed = true
        break;

      case 's':
      case 'ArrowDown':
        keys.down.pressed = true
        break;

      case 'd':
      case 'ArrowRight':
        keys.right.pressed = true
        break;

      case 'a':
      case 'ArrowLeft':
        keys.left.pressed = true
        break;
    }
  });
  window.addEventListener('keyup',(e) => {
    switch (e.key){
      case 'w':
      case 'ArrowUp':
        keys.up.pressed = false
        break;

      case 's':
      case 'ArrowDown':
        keys.down.pressed = false
        break;

      case 'd':
      case 'ArrowRight':
        keys.right.pressed = false
        break;

      case 'a':
      case 'ArrowLeft':
        keys.left.pressed = false
        break;
    }
  });
  //-----------------------
};//On Load End
