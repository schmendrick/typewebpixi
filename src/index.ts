import {ExampleModule} from "./ExampleClass";
import {HtmlCreatorModule} from "./HtmlCreator";
import {} from "pixi.js";



var renderer = PIXI.autoDetectRenderer(256, 256);

document.body.appendChild(renderer.view);

var stage = new PIXI.Container();

renderer.render(stage);



let example = new ExampleModule.ExampleClass();


console.log("LET US ECHO SOMETHING==> " + example.echo("foo"));
console.log("this is hot transpile... or is it?" );
console.log("oh yes!");
console.log("just seems to sometimes not work?");



//let canvas : HTMLCanvasElement = htmlCreator.createCanvas();



//document.body.appendChild(canvas);
