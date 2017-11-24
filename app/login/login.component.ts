import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { EventData } from "data/observable";
import { Page } from "ui/page";
import { TextField } from "ui/text-field";



/* ***********************************************************
* Before you can navigate to this page from your app, you need to reference this page's module in the
* global app router module. Add the following object to the global array of routes:
* { path: "login", loadChildren: "./login/login.module#LoginModule" }
* Note that this simply points the path to the page module file. If you move the page, you need to update the route too.
*************************************************************/



@Component({
    selector: "Login",
    moduleId: module.id,
    templateUrl: "./login.component.html"
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    email: string;
    password: string;

    constructor(private _fb: FormBuilder
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

        /* ***********************************************************
        * Call your custom sign in logic using the email and password data.
        *************************************************************/
    }

    onForgotPasswordTap(): void {
        /* ***********************************************************
        * Call your Forgot Password logic here.
        *************************************************************/
    }
}
