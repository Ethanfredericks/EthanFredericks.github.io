$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    // toggleGrid();

    

    // TODO 2 - Create Platforms

      createPlatform(200,650,50,50,"white");
      createPlatform(500,550,50,50,"white")
      createPlatform(350,600,50,50,"white") 
      createPlatform (600,450,50,50,"white")
     createPlatform(750,450,500,50,"white")
     createPlatform(900,350,50,50,"white")
     createPlatform(1010,300,50,50,"white")
     createPlatform(1150,250,100,50,"white")
     createPlatform(750,500,50,300,"white") //left wall
     createPlatform(1200,300,50,150,"white")
    // TODO 3 - Create Collectables
      
     createCollectable("Bag", 800, 410);
    createCollectable("coin",810,700)
    createCollectable("Checkpoint",1180,210)

    
    // TODO 4 - Create Cannons
      createCannon("bottom",250,1500)
      createCannon("bottom",400,1500)
      createCannon("top",370,1500)
      createCannon("bottom",520,1500)
      createCannon("top",520,1500)
      createCannon("top",640,1500)
      createCannon("bottom",930,600)
      createCannon("bottom",1050,600)
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
