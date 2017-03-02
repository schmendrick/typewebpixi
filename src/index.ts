///<reference path="GameObject.ts"/>
/// <reference path="Input.ts" />
/// <reference path="RabbitRenderable.ts" />

import {} from "pixi.js";       //example for using a pre-installed(=non-npm installed library using "globalDevDependencies" defined in typings.json)

import GameObject = GameModule.GameObject;      //example of usage of a namespace
import {ExampleClass} from "./ExampleClass";
import * as Input from "./Input";       //example for a star import
import {Rabbit} from "./Rabbit";        //example importing a single class from a file
import {RabbitRenderable} from "./RabbitRenderable";
let gsap = require("gsap");     //example for importing&using a plain javascript library

let stage : PIXI.Container = new PIXI.Container();  //example using a type from "globalDevDependencies"
let renderer : PIXI.SystemRenderer = PIXI.autoDetectRenderer(256, 256);
document.body.appendChild(renderer.view);


PIXI.loader
    .add("../assets/bunny.png")
    .load(setup);

let bunny : PIXI.Sprite;
let tweenBunny : PIXI.Sprite;
let gameObjects : GameObject[] = [];

var left: Input.Keyboard = new Input.Keyboard(37);
var right: Input.Keyboard = new Input.Keyboard(39);


function setup() {

    bunny = new PIXI.Sprite(PIXI.loader.resources["../assets/bunny.png"].texture);
    bunny.x = -12;
    bunny.y = 96;
    tweenBunny = new PIXI.Sprite(PIXI.loader.resources["../assets/bunny.png"].texture);
    tweenBunny.x = 20;
    tweenBunny.y = 40;
    stage.addChild(bunny);
    stage.addChild(tweenBunny);

    gsap.TweenLite.to(tweenBunny, 3, {x:96, onUpdate:onEnd});

    let rabbitRenderable : RabbitRenderable = new RabbitRenderable(bunny);
    let rabbit : Rabbit = new Rabbit(rabbitRenderable, left, right, renderer.width, 20);

    gameObjects.push(rabbit);

    gameLoop();
}

function onEnd() {
    console.log("twine ended!");
}

function gameLoop() {
    requestAnimationFrame(gameLoop);

    for (var i = 0; i < gameObjects.length; i++) {
        gameObjects[i].update();
    }
    renderer.render(stage);
}

let example = new ExampleClass();




