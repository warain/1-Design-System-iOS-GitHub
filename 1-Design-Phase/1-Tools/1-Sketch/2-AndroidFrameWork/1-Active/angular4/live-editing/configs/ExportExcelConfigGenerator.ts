/* tslint:disable:object-literal-sort-keys */
import { IgxExcelExporterService, IgxGridModule, IgxDropDownModule, IgxDropDownComponent, IgxButtonModule } from "igniteui-angular";
import {
    ExcelExportSample1Component
} from "../../src/app/export-excel/excel-export-sample-1/excel-export-sample-1.component";
import { ExcelExportComponent } from "../../src/app/export-excel/excel-export.component";
import { GridPasteSampleComponent } from "../../src/app/grid/grid-paste/grid-paste-sample.component";
import { PasteHandler } from "../../src/app/grid/grid-paste/paste-handler.directive";
import { AppModuleConfig } from "./core/AppModuleConfig";
import { Config } from "./core/Config";
import { IConfigGenerator } from "./core/IConfigGenerator";

export class ExportExcelConfigGenerator implements IConfigGenerator {
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            component: ExcelExportComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxExcelExporterService, ExcelExportComponent],
                ngDeclarations: [ExcelExportComponent],
                ngImports: [],
                ngProviders: [IgxExcelExporterService]
            })
        }));

        configs.push(new Config({
            component: ExcelExportSample1Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxGridModule, IgxExcelExporterService, ExcelExportSample1Component],
                ngDeclarations: [ExcelExportSample1Component],
                ngImports: [IgxGridModule],
                ngProviders: [IgxExcelExporterService]
            }),
            shortenComponentPathBy: "/export-excel/"
        }));

        configs.push(new Config({
            component: GridPasteSampleComponent,
            additionalFiles: ["/src/app/grid/grid-paste/data.ts", "/src/app/grid/grid-paste/paste-handler.directive.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxGridModule, IgxExcelExporterService, GridPasteSampleComponent, IgxDropDownComponent, IgxDropDownModule, IgxButtonModule, PasteHandler],
                ngDeclarations: [GridPasteSampleComponent, PasteHandler],
                ngImports: [IgxGridModule, IgxDropDownModule, IgxButtonModule],
                ngProviders: [IgxExcelExporterService]
            }),
            shortenComponentPathBy: "/grid-paste/"
        }));

        return configs;
    }
}
