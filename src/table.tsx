import { Children, React } from "kjsx";

export class Table implements JSX.ElementClass {
    public props: { format?: ("sm" | "bordered" | "hover" | "inverse" | "striped")[] };
    public children: Children;

    public render() {
        let classes = "table";
        if (this.props.format) {
            for (const format of this.props.format) {
                classes += " table-" + format;
            }
        }
        return <table class={classes}>{ this.children }</table>;
    }
}
