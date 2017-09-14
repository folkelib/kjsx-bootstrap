import { Children } from "kjsx";
export declare class Button implements JSX.ElementClass {
    props: {
        click?: () => void;
        color?: "default" | "primary" | "success" | "info" | "warning" | "danger" | "link";
    };
    children: Children;
    render(): HTMLElement;
}
