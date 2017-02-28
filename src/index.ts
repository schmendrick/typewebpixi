import {ExampleModule} from "./ExampleClass";
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

}


function gameLoop() {
    requestAnimationFrame(gameLoop);

    bunny.x += 1;
    if (bunny.x > renderer.width)
        bunny.x = -12;

    renderer.render(stage);
}

let example = new ExampleModule.ExampleClass();
gameLoop();


