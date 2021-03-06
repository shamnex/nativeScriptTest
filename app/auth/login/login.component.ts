import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { RouterExtensions } from "nativescript-angular/router/router-extensions";
import { Observable } from "rxjs";
import { Page } from "ui/page";
import { TextField } from "ui/text-field";

import { BiometricIDAvailableResult, FingerprintAuth } from "nativescript-fingerprint-auth";


@Component({
    selector: "Login",
    moduleId: module.id,
    templateUrl: "./login.component.html"
})
export class LoginComponent implements OnInit {
    private loginForm: FormGroup;
    private user: string;
    private password: string = "user";
    private fingerprintAuth: FingerprintAuth;
    constructor(private _fb: FormBuilder,
                private routerEx: RouterExtensions
    ) {
        /* ***********************************************************
        * Use the constructor to inject app services that you need in this component.
        *************************************************************/
        this.loginForm = this._fb.group({
            user: ["", Validators.required],
            password: ["", Validators.required]
        });

        this.fingerprintAuth = new FingerprintAuth();

    }

    ngOnInit(): void {
        //
    }

    onPasswordFocus() {
        const promise = this.fingerprintAuth.available();
        Observable.fromPromise(promise)
            .switchMap((result: BiometricIDAvailableResult) => Observable.of(result))
            .subscribe((x) => {
                if (x.any) {
                    return x.touch ?
                     this.useBiometicLogin("touch") :
                     this.useBiometicLogin("face");
                }
            });
    }

    useBiometicLogin(biometric: string) {
        Observable.fromPromise(this.fingerprintAuth.
            verifyFingerprintWithCustomFallback({  message: `Log In With ${biometric} ID` }))
            .subscribe(
            () => {
                this.gotoHome();
            },
            () => {
                this.routerEx.back();
            });
    }

    gotoHome() {
        this.routerEx.navigate(["home"], {
            transition: {
                name: "slide",
                duration: 500,
                curve: "ease"
            }
        });
    }

    onSigninButtonTap(): void {
        console.dir(this.loginForm.value);
        const username = this.loginForm.value.name;
        const password = this.loginForm.value.password;

        if (username === this.user && password === this.password) {
            this.gotoHome();
        } else {
            alert("Username Or Password Is Incorrect");
        }
    }

}
