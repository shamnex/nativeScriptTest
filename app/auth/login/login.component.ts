import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { EventData } from "data/observable";
import { RouterExtensions } from "nativescript-angular/router/router-extensions";
import { Page } from "ui/page";
import { TextField } from "ui/text-field";

@Component({
    selector: "Login",
    moduleId: module.id,
    templateUrl: "./login.component.html"
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    email: string;
    password: string;

    constructor(private _fb: FormBuilder,
                private routerEx: RouterExtensions
    ) {
        /* ***********************************************************
        * Use the constructor to inject app services that you need in this component.
        *************************************************************/
        this.loginForm = this._fb.group({
            email: ["", Validators.required],
            password: ["", Validators.required]
          });
    }

    ngOnInit(): void {
        /* ***********************************************************
        * Use the "ngOnInit" handler to initialize data for this component.
        *************************************************************/
    }
    onLoginWithSocialProviderButtonTap(): void {
        /* ***********************************************************
        * For log in with social provider you can add your custom logic or
        * use NativeScript plugin for log in with Facebook
        * http://market.nativescript.org/plugins/nativescript-facebook
        *************************************************************/
    }

    onSigninButtonTap(): void {
         console.dir(this.loginForm.value);
         this.routerEx.navigate(["home"], {  
             transition: {
            name: "slide",
            duration: 500,
            curve: "ease"
        }});

    }

}
