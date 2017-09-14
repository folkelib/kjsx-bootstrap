import { Children, React } from "kjsx";

export class ButtonGroup implements JSX.ElementClass {
    public props: { };
    public children: Children;

    public render(){
        return <div class="btn-group" role="toolbar">{ this.children }</div>;
    }
}
