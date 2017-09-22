import { Children, React } from "kjsx";

export function Button(props: { click?: () => void, color?: "default" | "primary" | "success" | "info" | "warning" | "danger" | "link" }, children: Children) {
    return <button type="button" class={"btn btn-" + (props.color || "default") } click={props.click}>{ children }</button>;
}
