import { Children, React } from "kjsx";

export class Card implements JSX.ElementClass {
    public props: { };
    public children: Children;

    public render() {
        return <div class="card">{ this.children }</div>;
    }
}

export class CardHeader implements JSX.ElementClass {
    public props: { };
    public children: Children;

    public render() {
        return <div class="card-header">{ this.children }</div>;
    }
}

export class CardBody implements JSX.ElementClass {
    public props: { };
    public children: Children;

    public render() {
        return <div class="card-body">{ this.children }</div>;
    }
}
