import { Component } from "@angular/core";
import { AuthService } from "../profile/auth.service";

@Component({
    selector: "header-panel",
    templateUrl: "./header-panel.component.html",
    styles: [`
        .btn { padding: 0.1rem 0.6rem; }
    `]
})
export class HeaderPanelComponent{
    authService : AuthService;

    constructor(authService: AuthService) {
        this.authService = authService;
    }

}