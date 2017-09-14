import { Children } from "kjsx";
export declare class Table implements JSX.ElementClass {
    props: {
        format?: ("sm" | "bordered" | "hover" | "inverse" | "striped")[];
    };
    children: Children;
    render(): HTMLElement;
}
