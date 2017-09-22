import { Children, React } from "kjsx";

export function ButtonGroup(props: {}, children: Children){
    return <div class="btn-group" role="toolbar">{ children }</div>;
}
