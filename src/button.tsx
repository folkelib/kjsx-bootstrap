import { Children, React } from "kjsx";

export class Button implements JSX.ElementClass {
    public props: { click?: () => void, color?: "default" | "primary" | "success" | "info" | "warning" | "danger" | "link" };
    public children: Children;

    public render(){
        return <button type="button" class={"btn btn-" + (this.props.color || "default") } click={this.props.click}>{ this.children }</button>;
    }
}
