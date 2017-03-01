///<reference path="GameObject.ts"/>

namespace GameModule {

    export class RabbitRenderable implements GameModule.Renderable {

        gameObject: GameModule.Rabbit;

        private sprite : PIXI.Sprite;

        constructor(sprite : PIXI.Sprite) {
            this.sprite = sprite;
        }


        render(): void {
            this.sprite.x = this.gameObject.x;
        }

    }
}
