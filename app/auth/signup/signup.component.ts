import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
    selector: "Signup",
    moduleId: module.id,
    templateUrl: "./signup.component.html"
})
export class SignupComponent implements OnInit {

    signupForm: FormGroup;

    constructor(private _fb: FormBuilder) {
        this.signupForm = this._fb.group({
            name: ["", Validators.required],
            email: ["", Validators.required],
            password: ["", Validators.required],
            confPassword: ["", Validators.required]
        });
    }

    ngOnInit(): void {
        /* ***********************************************************
        * Use the "ngOnInit" handler to initialize data for this component.
        *************************************************************/
    }

    onSignupWithSocialProviderButtonTap(): void {
        /* ***********************************************************
        * For sign up with social provider you can add your custom logic or
        * use NativeScript plugin for sign up with Facebook
        * http://market.nativescript.org/plugins/nativescript-facebook
        *************************************************************/
    }

    onSignupButtonTap(): void {
        console.dir(this.signupForm.value);
    }
}
