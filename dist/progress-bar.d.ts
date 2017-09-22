/// <reference types="knockout" />
import { Children } from "kjsx";
export declare function ProgressBar(props: {
    progress: KnockoutObservable<number>;
    min?: KnockoutObservable<number>;
    max?: KnockoutObservable<number>;
}, children: Children): HTMLElement;
