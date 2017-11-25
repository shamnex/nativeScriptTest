import { Component, OnInit } from "@angular/core";

@Component({
    selector: "auth-component",
    template: `<router-outlet></router-outlet>`
})

export class AuthComponent implements OnInit {
    constructor() {
        //
    }
    ngOnInit(): void {
        throw new Error("Method not implemented.");
    }
}
