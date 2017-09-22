import { Children, React } from "kjsx";

export function Card(props: { }, children: Children) {
    return <div class="card">{ children }</div>;
}

export function CardHeader(props: { }, children: Children) {
    return <div class="card-header">{ children }</div>;
}

export function CardBody(props: { }, children: Children) {
    return <div class="card-body">{ children }</div>;
}
