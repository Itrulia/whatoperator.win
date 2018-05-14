import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {RouterModule} from "@angular/router";
import {IndexComponent} from "./pages/index.component";
import {DefenderComponent} from "./pages/defender.component";
import {AttackerComponent} from "./pages/attacker.component";
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
    AppComponent,
    IndexComponent,
    DefenderComponent,
    AttackerComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
