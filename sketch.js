var bg, backimg
var spacecraft1, spacecraft1img
var spacecraft2, spacecraft2img 
var bullet, bulletImg
var bulletGroup
var gameState = 1 
var score = 0 
var groundinv


function preload(){
  backimg = loadImage('assets/space background.png')
  spacecraft1img = loadImage('assets/spacecraft_image_1.png')
  spacecraft2img = loadImage('assets/opposing_spacecraft_image.png')
  bulletImg = loadImage('assets/bullet_img.png')
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  bg = createSprite(0,150)
  bg.addImage(backimg)
  bg.scale = 3
  
  spacecraft1 = createSprite(width/2,height-100)
  spacecraft1.addImage(spacecraft1img)
  spacecraft1.scale = 0.4

  spacecraft2 = createSprite(width/2,100)
  spacecraft2.addImage(spacecraft2img)
  spacecraft2.scale = 0.4
  spacecraft2.rotation = 180

  bulletGroup = new Group()

  groundinv = createSprite(0, height, width * 2, 20)


}

function draw() {
  background(255,255,255);  
  if (gameState == 1){
    bg.velocityY = 3
    console.log(bg.y)
    if (bg.y > 800){
      bg.y=0
    }
    if (keyDown(RIGHT_ARROW)){
      spacecraft1.x += 7
    }
    if (keyDown(LEFT_ARROW)){
      spacecraft1.x -= 7
    }
    if (keyDown(DOWN_ARROW)){
      spacecraft1.y += 7
    }
    if (keyDown(UP_ARROW)){
      spacecraft1.y -= 7
    }
    oposite()
     bulletGroup.collide(groundinv, blabla)
      
    
    if (spacecraft1.isTouching(bulletGroup)){
      gameState = 2
    }
  }
  drawSprites();
  if (gameState == 2) {
    bg.velocityY = 0
    bulletGroup.destroyEach()
    spacecraft2.velocityX = 0
    text('Game Over', width/2, height/2)
  }

  textSize(25)
  text('Score:'+score, 10, 50)
  
}

function oposite(){
  if(frameCount%30==0){
    var r = (random(-7,7))
    spacecraft2.velocityX=r 
  if(frameCount%10==0){
    bullet = createSprite(spacecraft2.x, spacecraft2.y)

    bullet.addImage(bulletImg)
    bullet.scale = 0.05
    bullet.velocityY = 7
    
    bulletGroup.add(bullet)
  }
    
  }
}

function blabla(bullet){
  score += 1 
  bullet.destroy()

}


