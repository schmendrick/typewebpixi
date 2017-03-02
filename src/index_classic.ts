import {} from "pixi.js";
import {ExampleClass} from "./ExampleClass";
import * as Input from "./Input";


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

let example = new ExampleClass();
console.log(example.echo("esfe"));
var left: Input.Keyboard = new Input.Keyboard(37);
var right: Input.Keyboard = new Input.Keyboard(39);
var xOperator: number = 1;

left.press = function () : void {
  xOperator = -1;
};

right.press = function () : void {
    xOperator = 1;
}

function gameLoop() {


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

    requestAnimationFrame(gameLoop);

    renderer.render(stage);
}





