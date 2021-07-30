import { Component } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";

@Component({
    selector: "header-panel",
    templateUrl: "./header-panel.component.html",
    styleUrls: ["./header-panel.component.css"]
})
export class HeaderPanelComponent{
    authService : AuthService;

    constructor(authService: AuthService) {
        this.authService = authService;
    }

}