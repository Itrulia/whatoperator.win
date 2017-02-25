import "./polyfills";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {enableProdMode} from "@angular/core";
import {environment} from "./environments/environment";
import {WhatOperatorModule} from "./whatoperator.module";

if (environment.production) {
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(WhatOperatorModule);

if("serviceWorker" in navigator) {
    (navigator as any).serviceWorker.register("/dist/scripts/sw/service-worker.js");
}