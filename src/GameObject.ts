namespace GameModule {

    export interface GameObject {
        update(): void;
    }

    export interface Renderable {

        gameObject : GameObject;

        render() : void;
    }
}

