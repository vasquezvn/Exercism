

function Size(width = 80, height = 60) {
    this.width = width;
    this.height = height;
}

Size.prototype.resize = function(newWidth, newHeight) {
    this.width = newWidth;
    this.height = newHeight;
}



function Position(x = 0, y = 0) {
    this.x = x;
    this.y = y;
}

Position.prototype.move = function(newX, newY) {
    this.x = newX;
    this.y = newY;
}


class ProgramWindow {
    constructor() {
        this.screenSize = new Size(800, 600);
        this.size = new Size();
        this.position = new Position();
    }

    resize(newSize) {
        // const maxWidth = this.screenSize.width - this.position.x
        // const maxHeight = this.screenSize.height - this.position.y

        // const newWidth = Math.max(1, Math.min(newSize.width, maxWidth))
        // const newHeight = Math.max(1, Math.min(newSize.height, maxHeight))

        // this.size.resize(newWidth, newHeight)

        if (newSize.width < 1) {
            newSize.width = 1;
        }
        if (newSize.height < 1) {
            newSize.height = 1;
        }
        if ((this.position.x + newSize.width) > this.screenSize.width) {
            let exceedX = (this.position.x + newSize.width) - this.screenSize.width;
            newSize.width -= exceedX;
        }
        if ((this.position.y + newSize.height) > this.screenSize.height) {
            let exceedY = (this.position.y + newSize.height) - this.screenSize.height;
            newSize.height -= exceedY;
        }

        this.size.width = newSize.width;
        this.size.height = newSize.height;

    }

    move(newPosition) {
        // const maxX = this.screenSize.width - this.size.width;
        // const maxY = this.screenSize.height - this.size.height;
        
        // const newX = Math.max(0, Math.min(newPosition.x, maxX))
        // const newY = Math.max(0, Math.min(newPosition.y, maxY))
        // this.position.move(newX, newY);

        if (newPosition.x < 0) {
            newPosition.x = 0;
        }
        if (newPosition.y < 0) {
            newPosition.y = 0;
        }
        if ((this.size.width + newPosition.x) > this.screenSize.width) {
            let exceedX = (this.size.width + newPosition.x) - this.screenSize.width;
            newPosition.x -= exceedX;
        }
        if ((this.size.height + newPosition.y) > this.screenSize.height) {
            let exceedY = (this.size.height + newPosition.y) - this.screenSize.height;
            newPosition.y -= exceedY;
        }

        this.position.x = newPosition.x;
        this.position.y = newPosition.y;

    }
}


function changeWindow(objProgramWindow) {
    // Move to the top-left corner first so it can always resize
    // programWindow.move(new Position())
    // Now resize, then reposition
    // programWindow.resize(new Size(400, 300))
    // programWindow.move(new Position(100, 150))
    // return programWindow
    
    objProgramWindow.size.width = 400;
    objProgramWindow.size.height = 300;

    objProgramWindow.position.x = 100;
    objProgramWindow.position.y = 150;

    return objProgramWindow;
}

// TEST CHANGEWINDOW
// const programWindow = new ProgramWindow();
// changeWindow(programWindow);

// console.log(programWindow.size.width);
// console.log(programWindow.size.height);

// console.log(programWindow.position.x);
// console.log(programWindow.position.y);


// TEST MOVE
// const programWindow = new ProgramWindow();
// const newPosition = new Position(600, 200);
// programWindow.size.resize(250, 100);

// programWindow.move(newPosition);

// console.log(programWindow.position.x);
// console.log(programWindow.position.y);



// TEST RESIZE
// const programWindow = new ProgramWindow();
// const newSize = new Size(300, 400);
// programWindow.position.move(400, 300);

// programWindow.resize(newSize);

// console.log(programWindow.size.width);
// console.log(programWindow.size.height);



// TEST WINDOW CLASS
// const programWindow = new ProgramWindow();
// console.log(programWindow.screenSize.width);
// console.log(programWindow.size.height);


// TEST POSITION
// const point = new Position();
// console.log(point.x);
// console.log(point.y);

// point.move(100, 200);
// console.log(point.x);
// console.log(point.y);


// TEST SIZE
// const size = new Size(1080, 764);
// console.log(size.width);
// console.log(size.height);

// size.resize(1920, 1080);
// console.log(size.width);
// console.log(size.height);
