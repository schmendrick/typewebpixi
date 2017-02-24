import {ExampleModule} from "./ExampleClass";
import {HtmlCreatorModule} from "./HtmlCreator";

let example = new ExampleModule.ExampleClass();
let htmlCreator = new HtmlCreatorModule.HtmlCreator();


console.log("LET US ECHO SOMETHING: " + example.echo("foo"));


let canvas = htmlCreator.createCanvas();
document.body.appendChild(canvas);


console.log("document: " + document);