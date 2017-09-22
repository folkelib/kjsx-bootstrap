import * as ko from "knockout";
import { Children, React } from "kjsx";

export function ProgressBar(props: { progress: KnockoutObservable<number>, min?: KnockoutObservable<number>, max?: KnockoutObservable<number> }, children: Children) {
    const progressPercent = ko.pureComputed(() => {
        const progress = props.progress() * 100;
        const max = props.max !== undefined ? props.max() : 100;
        const min = props.min !== undefined ? props.min() : 0;
        return (progress / (max - min)) + "%";
    });
    return <div class="progress">
        <div class="progress-bar" role="progressbar" aria-valuenow={props.progress} aria-valuemin={props.min} aria-valuemax={props.max} style={{ width: progressPercent }} >{children}</div>
    </div>;
}
