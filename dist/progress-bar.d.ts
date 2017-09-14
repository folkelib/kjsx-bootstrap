/// <reference types="knockout" />
import { Children } from "kjsx";
export declare class ProgressBar implements JSX.ElementClass {
    props: {
        progress: KnockoutObservable<number>;
        min?: KnockoutObservable<number>;
        max?: KnockoutObservable<number>;
    };
    children: Children;
    render(): HTMLElement;
}
