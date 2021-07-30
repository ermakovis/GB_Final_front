
import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { NotificationService } from "src/app/notifications/notification.service";
import { AuthService } from "src/app/services/auth.service";

@Component({
    templateUrl: './login.component.html',
    styles: [`
        em { float: right; color: #E05C65; padding-left: 10px}
    `]
})
export class LoginComponent{
    userName ?: string;
    password ?: string;
    mouseOverLogin : boolean = false;

    constructor(private authService : AuthService,
        private router : Router,
        private notificationService: NotificationService) {}

    login(formValues : any) {
        this.authService.login(formValues.userName, formValues.password).subscribe(
            data => {
                this.notificationService.showSuccess("Logon!")
            },
            err => {
                this.notificationService.showFailure("Failure!")
            }

        )
        this.router.navigate(['store'])
    }
    
    cancel() {
        this.router.navigate(['store'])
    }
}