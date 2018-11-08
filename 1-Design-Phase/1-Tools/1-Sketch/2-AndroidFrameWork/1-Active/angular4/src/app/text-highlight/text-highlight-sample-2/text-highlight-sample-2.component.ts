import { Component, ViewChildren } from "@angular/core";
import { IgxTextHighlightDirective } from "igniteui-angular";

@Component({
    selector: "text-highlight-2",
    styleUrls: ["./text-highlight-sample-2.component.scss"],
    templateUrl: "./text-highlight-sample-2.component.html"
})
export class TextHighlightSample2Component {
    // tslint:disable max-line-length
    public firstParagraph = `
    Use the search box to search for a certain string in this text. All the results will be highlighted in yellow, while the first occurrence of the string will be in orange. You can use the button in the searchbox to specify if the search will be case sensitive. You can move the orange highlight by either pressing the buttons on the searchbox or by using the Enter or the arrow keys on your keyboard.
`;

    public secondParagraph = `
    On top of the functionality from the previous sample, this sample demonstrates how to implement the text highlight directive
    with several different containers. In this case, we have two paragraphs, each containing some text. You can see that
    they share the same active (orange) highlight and the returned match count includes both containers. The find method in this
    sample can be reused regardless of the number of containers you have in your application.
    `;
    // tslint:enable max-line-length

    @ViewChildren(IgxTextHighlightDirective)
    public highlights;

    public searchText: string = "";
    public matchCount: number = 0;
    public caseSensitive: boolean = false;
    public index: number = 0;

    public searchKeyDown(ev) {
        if (this.searchText) {
            if (ev.key === "Enter" || ev.key === "ArrowDown" || ev.key === "ArrowRight") {
                ev.preventDefault();
                this.findNext();
            } else if (ev.key === "ArrowUp" || ev.key === "ArrowLeft") {
                ev.preventDefault();
                this.findPrev();
            }
        }
    }

    public onTextboxChange() {
        this.index = 0;
        this.find(0);
    }

    public updateSearch() {
        this.caseSensitive = !this.caseSensitive;
        this.find(0);
    }

    public clearSearch() {
        this.searchText = "";
        this.find(0);
    }

    public get canMoveHighlight() {
        return this.matchCount > 1;
    }

    private findNext() {
        this.find(1);
    }

    private findPrev() {
        this.find(-1);
    }

    private find(increment: number) {
        if (this.searchText) {
            let count = 0;
            const matchesArray = [];

            this.highlights.forEach((h) => {
                count += h.highlight(this.searchText, this.caseSensitive);
                matchesArray.push(count);
            });

            this.matchCount = count;

            this.index += increment;
            this.index = this.index < 0 ? this.matchCount - 1 : this.index;
            this.index = this.index > this.matchCount - 1 ? 0 : this.index;

            if (this.matchCount) {
                let row;

                for (let i = 0; i < matchesArray.length; i++) {
                    if (this.index < matchesArray[i]) {
                        row = i;
                        break;
                    }
                }

                const actualIndex = row === 0 ? this.index : this.index - matchesArray[row - 1];

                IgxTextHighlightDirective.setActiveHighlight("group1", {
                    columnIndex: 0,
                    index: actualIndex,
                    page: 0,
                    rowIndex: row
                });
            }
        } else {
            this.highlights.forEach((h) => {
                h.clearHighlight();
            });
            this.matchCount = 0;
        }
    }
}
