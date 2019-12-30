let currentPos = { x: 100, y: 100 };

function Rover(keyInput, currentPos) {
  this.keyInput = keyInput;
  this.currentPos = currentPos;
}

function UserInterfaceManagr() {
        this.rover = null;
    }
    
UserInterfaceManagr.prototype.setUpUserActions = function () { 
    document.addEventListener("keydown", e => {
        if (e.key === '1') {

            
        
        } else if (e.key === '2')
        {
            
            }
        
    
    }
        
    Rover.prototype.movement = function(keyInput, currentPos) {
  switch (keyInput) {
    case "ArrowUp":
      console.log(currentPos.x, currentPos.y);
      currentPos.y += 1;
      break;
    case "ArrowDown":
      console.log(currentPos.x, currentPos.y);
      currentPos.y -= 1;
      break;
    case "ArrowLeft":
      console.log(currentPos.x, currentPos.y);
      currentPos.x -= 1;
      break;
    case "ArrowRight":
      currentPos.x += 1;
      console.log(currentPos.x, currentPos.y);
      break;
    case "Enter":
      console.log(currentPos);
      break;
    default:
      break;
  }
};

// Rover.prototype.upAndRight = function(val) {
//   return ++val;
// };
// Rover.prototype.downAndLeft = function(val) {
//   return --val;
// };
// document.addEventListener("keydown", e => {
//   rover.movement(e.key, currentPos);
// });

// const rover = new Rover();

// let currentPos = { x: 100, y: 100 };

// function Rover(keyInput, currentPos) {
//   this.keyInput = keyInput;
//   this.currentPos = currentPos;
// }



// Rover.prototype.movement = function(keyInput, currentPos) {
//   switch (keyInput) {
//     case "ArrowUp":
//       console.log(this);
//       this.up;
//       break;
//     case "ArrowDown":
//       this.down;
//       break;
//     case "ArrowLeft":
//       this.left;
//       break;
//     case "ArrowRight":
//       this.right;
//       break;
//     case "Enter":
//       console.log(currentPos);
//       break;
//     default:
//       break;
//   }

//   Rover.prototype.up = function() {
//     console.log(currentPos.x, currentPos.y);
//     return ++currentPos.y;
//   };
//   Rover.prototype.down = function() {
//     console.log(currentPos.x, currentPos.y);
//     return ++currentPos.y;
//   };
//   Rover.prototype.right = function() {
//     console.log(currentPos.x, currentPos.y);
//     return ++currentPos.x;
//   };
//   Rover.prototype.left = function() {
//     console.log(currentPos.x, currentPos.y);
//     return --currentPos.x;
//   };
// };

// document.addEventListener("keydown", e => {
//   rover.movement(e.key, currentPos);
// });

// const rover = new Rover();

function NormalRover(x, y) {
  this.x = x;
  this.y = y;
}
function StrangeRover(x, y) {
  this.x = x;
  this.y = y;
}
function UserInterfaceManagr() {
  this.rover = null;
}

UserInterfaceManagr.prototype.setUpUserActions = function() {
  document.addEventListener("keydown", e => {
    if (e.keyCode == 78) {
      console.log("now normal behavior");
      this.rover = new NormalRover(10, 10);
    } else if (e.keyCode == 83) {
      console.log("now strange behavior");
      this.rover = new StrangeRover(10, 10);
    } else {
      this.rover.move(e.keyCode);
    }
  });
};
NormalRover.prototype.move = function(keyCode) {
  if (keyCode == 37) {
    //move LEft
    this.x--;
    console.log(this.x, this.y);
  } else if (keyCode == 39) {
    //move Right
    this.x++;
    console.log(this.x, this.y);
  } else if (keyCode == 38) {
    //move Up
    this.y--;
    console.log(this.x, this.y);
  } else if (keyCode == 40) {
    //move Down
    this.y++;
    console.log(this.x, this.y);
  } else return;
};

StrangeRover.prototype.move = function(keyCode) {
  if (keyCode == 37) {
    //move LEft
    this.x++;
    console.log(this.x, this.y);
  } else if (keyCode == 39) {
    //move Right
    this.x--;
    console.log(this.x, this.y);
  } else if (keyCode == 38) {
    //move Up
    this.y++;
    console.log(this.x, this.y);
  } else if (keyCode == 40) {
    //move Down
    this.y--;
    console.log(this.x, this.y);
  } else return;
};
new UserInterfaceManagr().setUpUserActions();
