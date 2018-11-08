import { Component, ViewChild } from "@angular/core";
import { IgxGridComponent } from "igniteui-angular";
import { data } from "./data";

@Component({
    selector: "multi-column-headers",
    styleUrls: [ "multi-column-headers.scss" ],
    templateUrl: "multi-column-headers.html"
})
export class GridMultiColumnHeadersComponent {

    @ViewChild(IgxGridComponent, { read: IgxGridComponent })
    public grid: IgxGridComponent;
    public data = data;

    public pinGroup() {
        const firstColumnGroup = this.grid.columnList.filter((c) => c.header === "General Information")[0];
        firstColumnGroup.pinned = !firstColumnGroup.pinned;
    }

    public hideGroup() {
        const firstColumnGroup = this.grid.columnList.filter((c) => c.header === "General Information")[0];
        firstColumnGroup.hidden = !firstColumnGroup.hidden;
    }
}
