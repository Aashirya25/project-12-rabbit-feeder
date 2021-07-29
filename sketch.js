
 var garden,rabbit,apple,leaf,leaf2
 var gardenimg,rabbitimg,appleimg,leafimg,leaf2img
 var score = 0

  function preload()
  {
  gardenimg = loadImage("garden.png")
  rabbitimg = loadImage("rabbit.png")
  appleimg = loadImage("apple.png")
  leafimg = loadImage("leaf.png")
  leaf2img = loadImage("orangeLeaf.png")
  }

  function setup()
  {
  createCanvas (400,400)
  //moving background
  garden = createSprite(200,200)
  garden.addImage(gardenimg)

  //create rabbit
  rabbit = createSprite(180,340,20,20)
  rabbit.scale = 0.09
  rabbit.addImage(rabbitimg)

  //create falling apple
  apple = createSprite(random(50,350),40,10,10)
  apple.addImage(appleimg);
  apple.scale = 0.08
  apple.velocityY = 3
  apple.lifetime = 150
  apple.depth=rabbit.depth
  rabbit.depth=rabbit.depth+1

  //create falling leaf
  leaf = createSprite(random(50,350),40,10,10)
  leaf.addImage(leafimg);
  leaf.scale = 0.08
  leaf.velocityY = 3
  leaf.lifetime = 150
  leaf.depth=rabbit.depth
  rabbit.depth=rabbit.depth+1

  //create fallingg orange leaf
  leaf2 = createSprite(random(50,350),40,10,10)
  leaf2.addImage(leaf2img);
  leaf2.scale = 0.08
  leaf2.velocityY = 3
  leaf2.lifetime = 150
  leaf2.depth=rabbit.depth
  rabbit.depth=rabbit.depth+1
  }


  function draw()
  {
  background(0)
  //rabbit moving with the mouse
  rabbit.x = mouseX
   //colide rabbit with edges
  edges = createEdgeSprites();
  rabbit.collide(edges)

    //score system
    if (rabbit.isTouching(apple)){
      score = score+2
      apple.remove();
    }
    else if  (rabbit.isTouching(leaf))
    {
      score = score -1
      leaf.remove();
    }
    if (rabbit.isTouching(leaf2))
    {
      leaf2.remove()
      score = score-1
    }
  drawSprites();

  if (score===10)
  {
    apple.remove()
    leaf.remove()
    leaf2.remove()
    apple.velovityY=0
    leaf.velocityY=0
    leaf2.velocitY=0
    text("YOU WON!",200,100)
  }
  textSize (20);
  text("Score: "+score,80,100);
  text("Feed the rabbit apples and",70,120)
  text("avoid the leaves",70,140)

  //make sprites spawn randomly
  var sprite = Math.round(random(1,3));
  if (frameCount % 50 == 0)
  {
   if (sprite == 1)
  {
    createApples();
  }
   else if (sprite == 2)
  {
    createLeaves();
  }
   else
  {
     createOrangeLeaves();
  }
  }
}

  function createApples()
  {
  apple = createSprite(random(50,350),40,10,10)
  apple.addImage(appleimg);
  apple.scale = 0.08
  apple.velocityY = 3
  apple.lifetime = 150
  apple.depth=rabbit.depth
  rabbit.depth=rabbit.depth+1
  }

  function createLeaves()
  {
  leaf = createSprite(random(50,350),40,10,10)
  leaf.addImage(leafimg);
  leaf.scale = 0.08
  leaf.velocityY = 3
  leaf.lifetime = 150
  leaf.depth=rabbit.depth
  rabbit.depth=rabbit.depth+1
  }

  function createOrangeLeaves()
  {
  leaf2 = createSprite(random(50,350),40,10,10)
  leaf2.addImage(leaf2img);
  leaf2.scale = 0.08
  leaf2.velocityY = 3
  leaf2.lifetime = 150
  leaf2.depth=rabbit.depth
  rabbit.depth=rabbit.depth+1
  }
  