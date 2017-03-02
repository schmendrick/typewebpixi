export class Keyboard {

    public keyCode: number;
    public isDown: boolean;
    public isUp: boolean;

    public press: () => void;
    public release: () => void;

    public constructor(keyCode: number) {
        this.keyCode = keyCode;
        this.isDown = false;
        this.isUp = true;

        window.addEventListener(
            "keydown", this.downHandler.bind(this), false
        );
        window.addEventListener(
            "keyup", this.upHandler.bind(this), false
        );
    }

    public downHandler(event: any): void {
        if (event.keyCode === this.keyCode) {
            if (this.isUp && this.press)
                this.press();
            this.isDown = true;
            this.isUp = false;
        }
        event.preventDefault();
    }

    public upHandler(event: any): void {
        if (event.keyCode === this.keyCode) {
            if (this.isDown && this.release)
                this.release();
            this.isDown = false;
            this.isUp = true;
        }
        event.preventDefault();
    };
}

