///<reference path="GameObject.ts"/>
/// <reference path="Input.ts" />
/// <reference path="Rabbit.ts" />
/// <reference path="RabbitRenderable.ts" />




import {} from "pixi.js";
import RabbitRenderable = GameModule.RabbitRenderable;
import GameObject = GameModule.GameObject;
import Rabbit = GameModule.Rabbit;
import {ExampleModule} from "./ExampleClass";

let stage : PIXI.Container = new PIXI.Container();
let renderer : PIXI.SystemRenderer = PIXI.autoDetectRenderer(256, 256);
document.body.appendChild(renderer.view);

PIXI.loader
    .add("../assets/bunny.png")
    .load(setup);

let bunny : PIXI.Sprite;
let gameObjects : GameObject[] = [];

let foo : Input.Keyboard;

var left: Input.Keyboard = new Input.Keyboard(37);
var right: Input.Keyboard = new Input.Keyboard(39);





function setup() {

    bunny = new PIXI.Sprite(PIXI.loader.resources["../assets/bunny.png"].texture);
    bunny.x = -12;
    bunny.y = 96;
    stage.addChild(bunny);
    let rabbitRenderable : RabbitRenderable = new GameModule.RabbitRenderable(bunny);
    let rabbit : Rabbit = new Rabbit(rabbitRenderable, left, right, renderer.width, 20);

    gameObjects.push(rabbit);

    gameLoop();
}


function gameLoop() {
    requestAnimationFrame(gameLoop);

    for (var i = 0; i < gameObjects.length; i++) {
        gameObjects[i].update();
    }
    renderer.render(stage);
}

let example = new ExampleModule.ExampleClass();



