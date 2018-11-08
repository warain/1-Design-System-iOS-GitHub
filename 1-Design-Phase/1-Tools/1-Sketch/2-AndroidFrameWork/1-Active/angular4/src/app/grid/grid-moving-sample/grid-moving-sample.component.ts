import { AfterViewInit, Component, TemplateRef, ViewChild, ViewEncapsulation } from "@angular/core";
import { IgxColumnComponent, IgxGridComponent } from "igniteui-angular";
import { DATA } from "../grid-sample-selection/financialData";

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: "app-grid-moving-sample",
    styleUrls: ["./grid-moving-sample.component.scss"],
    templateUrl: "./grid-moving-sample.component.html"
})

export class GridMovingSampleComponent implements AfterViewInit {
    public data: any[];
    @ViewChild("dataGrid") public grid: IgxGridComponent;
    @ViewChild("pinTemplate", { read: TemplateRef })
    private pinTemplate: TemplateRef<any>;

    constructor() {
        this.data = DATA;
    }

    public ngAfterViewInit(): void {
        if (this.grid.columns.length > 0) {
            this.grid.columns.forEach((column: IgxColumnComponent) => {
                column.headerTemplate = this.pinTemplate;
            });
        }
    }

    public formatNumber(value: number) {
        return value.toFixed(2);
    }

    public formatCurrency(value: number) {
        return "$" + value.toFixed(2);
    }

    public toggleColumnPinning(column: IgxColumnComponent) {
        column.pinned ? column.unpin() : column.pin();
    }
}
