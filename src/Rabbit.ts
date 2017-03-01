///<reference path="GameObject.ts"/>
///<reference path="Input.ts"/>

namespace GameModule {

    export class Rabbit implements GameObject {

        public x : number;
        public y : number;
        protected renderable : RabbitRenderable;
        private xOperator : number;
        private maxX : number;
        private left : Input.Keyboard;
        private right : Input.Keyboard;
        private limit : number;

        constructor(renderable : RabbitRenderable, left : Input.Keyboard, right : Input.Keyboard, maxX : number, limit : number) {
            this.renderable = renderable;
            this.maxX = maxX;
            this.limit = limit;
            this.left = left;
            this.right = right;
            renderable.gameObject = this;
            this.xOperator = 1;
        }

        update(): void {

            if (this.left.isDown)
                this.xOperator = -1;
            if (this.right.isDown)
                this.xOperator = 1;

            this.x += this.xOperator;

            if (this.x > this.maxX + this.limit)
                this.x = -this.limit;

            if (this.x < -this.limit)
                this.x = this.maxX + this.limit;

            this.renderable.render();
        }
    }
}