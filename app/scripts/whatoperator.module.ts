import {NgModule} from "@angular/core";
import {WhatOperatorComponent} from "./whatoperator.component";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {AttackerComponent} from "./pages/attacker.component";
import {DefenderComponent} from "./pages/defender.component";
import {IndexComponent} from "./pages/index.component";
import {CommonModule} from "@angular/common";

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot([
            {path: "", component: IndexComponent},
            {path: "solo/defender", component: DefenderComponent},
            {path: "solo/attacker", component: AttackerComponent},
            // 404 Page
            {path: "**", redirectTo: ""}
        ]),
        CommonModule
    ],
    declarations: [
        WhatOperatorComponent,
        IndexComponent,
        DefenderComponent,
        AttackerComponent
    ],
    exports: [
        WhatOperatorComponent
    ],
    bootstrap: [WhatOperatorComponent],
    providers: [],
})
export class WhatOperatorModule {
}

