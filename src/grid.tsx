import { Children, React } from "kjsx";

export class Container implements JSX.ElementClass {
    public props: { };
    public children: Children;

    public render(){
        return <div class="container">{ this.children }</div>;
    }
}
