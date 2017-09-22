import { Children, React } from "kjsx";

export function Table(props: { format?: ("sm" | "bordered" | "hover" | "inverse" | "striped")[] }, children: Children) {
    let classes = "table";
    if (props.format) {
        for (const format of props.format) {
            classes += " table-" + format;
        }
    }
    return <table class={classes}>{ children }</table>;
}
