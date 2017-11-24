import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { ReactiveFormsModule } from "@angular/forms";
import { NativeScriptFormsModule } from "nativescript-angular";
import { LoginRoutingModule } from "./login-routing.module";
import { LoginComponent } from "./login.component";

@NgModule({
    imports: [
        NativeScriptModule,
        LoginRoutingModule,
        NativeScriptFormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        LoginComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class LoginModule { }
