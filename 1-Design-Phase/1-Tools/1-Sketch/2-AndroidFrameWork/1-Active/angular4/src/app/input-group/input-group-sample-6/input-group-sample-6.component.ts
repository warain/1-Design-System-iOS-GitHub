import { Component, ViewChild } from "@angular/core";
import { IgxComboComponent } from "igniteui-angular"; //// CHECK THIS REF!!!! BEFORE COMMIT

@Component({
    selector: "app-input-group-sample-6",
    styleUrls: ["./input-group-sample-6.component.scss"],
    templateUrl: "./input-group-sample-6.component.html"
})
export class InputGroupSample6Component {
    public user = {
        dateTime: new Date(),
        email: undefined,
        fullName: undefined,
        genres: undefined,
        phone: undefined
    };

    public genres = ["Action", "Adventure", "Comedy", "Crime",
        "Drama", "Historical", "Horror", "Mistery",
        "Musical", "Romance", "Sci-Fi", "Thriller", "Western"];

    @ViewChild("combo1", { read: IgxComboComponent })
    private combo1: IgxComboComponent;

    public onDateSelection(value) {
        this.user.dateTime.setDate((value as Date).getDate());
    }

    public onTimeSelection(event) {
        this.user.dateTime.setTime((event.newValue as Date).getTime());
    }
}
