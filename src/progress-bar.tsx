import * as ko from "knockout";
import { Children, React } from "kjsx";

export class ProgressBar implements JSX.ElementClass {
    public props: { progress: KnockoutObservable<number>, min?: KnockoutObservable<number>, max?: KnockoutObservable<number> };
    public children: Children;

    public render(){
        const progressPercent = ko.pureComputed(() => {
            const progress = this.props.progress() * 100;
            const max = this.props.max !== undefined ? this.props.max() : 100;
            const min = this.props.min !== undefined ? this.props.min() : 0;
            return (progress / (max - min)) + "%";
        });
        return <div class="progress">
            <div class="progress-bar" role="progressbar" aria-valuenow={this.props.progress} aria-valuemin={this.props.min} aria-valuemax={this.props.max} style={{ width: progressPercent }} >{this.children}</div>
        </div>;

    }
}
