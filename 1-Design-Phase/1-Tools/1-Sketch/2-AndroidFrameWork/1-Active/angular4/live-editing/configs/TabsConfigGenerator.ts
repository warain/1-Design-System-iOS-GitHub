/* tslint:disable:object-literal-sort-keys */
import {
    IgxAvatarModule, IgxButtonModule, IgxCardModule, IgxIconModule,
    IgxNavbarModule, IgxRippleModule, IgxTabsModule
} from "igniteui-angular";

import { TabsSample1Component } from "../../src/app/tabs/tabs-sample-1/tabs-sample-1.component";
import { TabsSample2Component } from "../../src/app/tabs/tabs-sample-2/tabs-sample-2.component";
import { TabsSample3Component } from "../../src/app/tabs/tabs-sample-3/tabs-sample-3.component";
import { AppRouting1Module } from "../../src/app/tabs/tabs-sample-4/app.routing.module";
import { TabsSample4Component } from "../../src/app/tabs/tabs-sample-4/components/tabs-sample-4.component";
import { TabsSample4Module } from "../../src/app/tabs/tabs-sample-4/tabs-sample-4.module";
import { TabsRouting1Module } from "../../src/app/tabs/tabs-sample-4/tabs.routing1.module";
import { AppRouting2Module } from "../../src/app/tabs/tabs-sample-5/app.routing.module";
import { TabsSample5Component } from "../../src/app/tabs/tabs-sample-5/components/tabs-sample-5.component";

import { TabsSample5Module } from "../../src/app/tabs/tabs-sample-5/tabs-sample-5.module";
import { TabsRouting2Module } from "../../src/app/tabs/tabs-sample-5/tabs.routing2.module";
import { AppModuleConfig } from "./core/AppModuleConfig";
import { Config } from "./core/Config";
import { IConfigGenerator } from "./core/IConfigGenerator";

export class TabsConfigGenerator implements IConfigGenerator {
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            component: TabsSample1Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxTabsModule, TabsSample1Component],
                ngDeclarations: [TabsSample1Component],
                ngImports: [IgxTabsModule]
            }),
            shortenComponentPathBy: "/tabs/"
        }));

        configs.push(new Config({
            component: TabsSample2Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxTabsModule, IgxNavbarModule, IgxIconModule, TabsSample2Component],
                ngDeclarations: [TabsSample2Component],
                ngImports: [IgxTabsModule, IgxNavbarModule, IgxIconModule]
            }),
            shortenComponentPathBy: "/tabs/"
        }));

        configs.push(new Config({
            component: TabsSample3Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxTabsModule, IgxCardModule, IgxAvatarModule,
                    IgxButtonModule, IgxRippleModule, TabsSample3Component],
                ngDeclarations: [TabsSample3Component],
                ngImports: [IgxTabsModule, IgxCardModule, IgxAvatarModule, IgxButtonModule, IgxRippleModule]
            }),
            shortenComponentPathBy: "/tabs/"
        }));

        configs.push(new Config({
            component: TabsSample4Component,
            additionalFiles: [
                "/src/app/tabs/tabs-sample-4/app.routing.module.ts",
                "/src/app/tabs/tabs-sample-4/tabs.routing1.module.ts",
                "/src/app/tabs/tabs-sample-4/tabs-sample-4.module.ts",
                "/src/app/tabs/views/views.module.ts",
                "/src/app/tabs/views/view1/view1.component.html",
                "/src/app/tabs/views/view1/view1.component.ts",
                "/src/app/tabs/views/view2/view2.component.html",
                "/src/app/tabs/views/view2/view2.component.ts",
                "/src/app/tabs/views/view3/view3.component.html",
                "/src/app/tabs/views/view3/view3.component.ts"
            ],
            appModuleConfig: new AppModuleConfig({
                imports: [
                    IgxTabsModule, TabsSample4Component, AppRouting1Module, TabsRouting1Module, TabsSample4Module
                ],
                ngDeclarations: [TabsSample4Component],
                ngImports: [IgxTabsModule, AppRouting1Module, TabsRouting1Module, TabsSample4Module]
            }),
            shortenComponentPathBy: "/tabs/"
        }));

        configs.push(new Config({
            component: TabsSample5Component,
            additionalFiles: [
                "/src/app/tabs/tabs-sample-5/app.routing.module.ts",
                "/src/app/tabs/tabs-sample-5/tabs.routing2.module.ts",
                "/src/app/tabs/tabs-sample-5/tabs-sample-5.module.ts",
                "/src/app/tabs/views/views.module.ts",
                "/src/app/tabs/views/view1/view1.component.html",
                "/src/app/tabs/views/view1/view1.component.ts",
                "/src/app/tabs/views/view2/view2.component.html",
                "/src/app/tabs/views/view2/view2.component.ts",
                "/src/app/tabs/views/view3/view3.component.html",
                "/src/app/tabs/views/view3/view3.component.ts"
            ],
            appModuleConfig: new AppModuleConfig({
                imports: [
                    IgxTabsModule, TabsSample5Component, AppRouting2Module, TabsRouting2Module, TabsSample5Module
                ],
                ngDeclarations: [TabsSample5Component],
                ngImports: [IgxTabsModule, AppRouting2Module, TabsRouting2Module, TabsSample5Module]
            }),
            shortenComponentPathBy: "/tabs/"
        }));

        return configs;
    }
}
