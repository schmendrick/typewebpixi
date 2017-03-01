import {ExampleModule} from "./ExampleClass";
import {InputModule} from "./InputModule";
import {} from "pixi.js";


let stage : PIXI.Container = new PIXI.Container();
let renderer : PIXI.SystemRenderer = PIXI.autoDetectRenderer(256, 256);
document.body.appendChild(renderer.view);

PIXI.loader
.add("../assets/bunny.png")
.load(setup);

let bunny : PIXI.Sprite;
function setup() {

    bunny = new PIXI.Sprite(PIXI.loader.resources["../assets/bunny.png"].texture);

    bunny.x = -12;
    bunny.y = 96;

    stage.addChild(bunny);

    gameLoop();
}


var left: InputModule.Keyboard = new InputModule.Keyboard(37);
var right: InputModule.Keyboard = new InputModule.Keyboard(39);
var xOperator: number = 1;

left.press = function () : void {
  xOperator = -1;
};

right.press = function () : void {
    xOperator = 1;
}

function gameLoop() {
    requestAnimationFrame(gameLoop);

    const limit : number = 20;

    if (right.isDown || left.isDown) {
        if (renderer.backgroundColor == 0x010101)
            renderer.backgroundColor = 0xAA0000;
        else {
            if (right.isDown)
                renderer.backgroundColor = renderer.backgroundColor+1;
            else
                renderer.backgroundColor = renderer.backgroundColor-1;
        }

    }
    else
        renderer.backgroundColor = 0x010101;

    bunny.x += 1 * xOperator;
    if (bunny.x > renderer.width + limit)
        bunny.x = -limit;

    if (bunny.x < -limit)
        bunny.x = renderer.width + limit;

    renderer.render(stage);
}

let example = new ExampleModule.ExampleClass();



