import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-pie-chart-explosion",
  styleUrls: ["./pie-chart-explosion.component.scss"],
  templateUrl: "./pie-chart-explosion.component.html"
})
export class PieChartExplosionComponent {

    public data: any;

    constructor() {
        this.data = [
            { Label: "Administration", Value: 2 },
            { Label: "Sales", Value: 8 },
            { Label: "IT", Value: 3 },
            { Label: "Marketing", Value: 8 },
            { Label: "Development", Value: 4 },
            { Label: "Customer Support", Value: 6 }
        ];
      }

    public pieSliceClickEvent(e: any): void {
        e.args.isExploded = !e.args.isExploded;
    }
}
