import { Children, React } from "kjsx";

export function Container(props: { }, children: Children) {
    return <div class="container">{ children }</div>;
}
