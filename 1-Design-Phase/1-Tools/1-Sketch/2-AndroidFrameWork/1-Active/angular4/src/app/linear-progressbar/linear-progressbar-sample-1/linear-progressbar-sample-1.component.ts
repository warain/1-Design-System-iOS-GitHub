import { Component, QueryList, ViewChildren, ViewEncapsulation } from "@angular/core";
import { IgxCircularProgressBarComponent, IgxLinearProgressBarComponent } from "igniteui-angular";

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: "app-linear-progressbar-sample-1",
  styleUrls: ["./linear-progressbar-sample-1.component.scss"],
  templateUrl: "./linear-progressbar-sample-1.component.html"
})
export class LinearProgressbarSample1Component {
  public disable = false;
  public interval: any;

  @ViewChildren(IgxLinearProgressBarComponent, { read: IgxLinearProgressBarComponent })
  public linearBars: QueryList<IgxLinearProgressBarComponent>;

  constructor() { }

  public changeIcon() {
    return this.interval ? "pause" : "play_arrow";
}

  public updateValue() {
      this.disable = true;
      this.linearBars.map((bar) => bar.value += this.randomIntFromInterval(1, 3));
      const shouldStop = this.linearBars.toArray().every((bar) => bar.value >= bar.max);
      if (shouldStop) {
        this.disable = false;
        this.interval = clearInterval(this.interval);
      }
  }
  public reset() {
    this.linearBars.toArray().forEach((bar) => bar.value = 0);
  }

  public tick() {
      if (this.interval) {
          this.interval = clearInterval(this.interval);
          this.disable = false;
          return;
      }
      this.interval = setInterval(this.updateValue.bind(this), 60);
  }

  private randomIntFromInterval(min: number, max: number) {
      return Math.floor(Math.random() * (max - min + 1) + min);
  }

}
