export module HtmlCreatorModule
{
    export class HtmlCreator {
        constructor() {

        }

        createCanvas() {
            var canvas = document.createElement('canvas');
            canvas.id     = "CursorLayer";
            canvas.width  = 1280;
            canvas.height = 768;
            canvas.style.position = "absolute";
            canvas.style.border   = "1px solid";
            return canvas;
        }
    }
}
