///<reference path="Rabbit.ts"/>
///<reference path="GameObject.ts"/>

import {Rabbit} from "./Rabbit";

export class RabbitRenderable implements GameModule.Renderable {

        //gameObject: Rabbit;
        public gameObject: Rabbit;

        private sprite : PIXI.Sprite;

        constructor(sprite : PIXI.Sprite) {
            this.sprite = sprite;
        }


        render(): void {
            this.sprite.x = this.gameObject.x;
        }

    }

