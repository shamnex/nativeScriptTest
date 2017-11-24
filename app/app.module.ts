import { NgModule, NgModuleFactoryLoader, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NSModuleFactoryLoader } from "nativescript-angular/router";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { ReactiveFormsModule } from "@angular/forms";
import { NativeScriptFormsModule, registerElement } from "nativescript-angular";
registerElement("Gradient", () => require("nativescript-gradient").Gradient);


@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule
 
    ],
    declarations: [
        AppComponent
    ],
    providers: [
        { provide: NgModuleFactoryLoader, useClass: NSModuleFactoryLoader }
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
