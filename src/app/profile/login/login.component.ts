
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { UserModel } from "src/app/models/user.model";
import { NotificationService } from "src/app/notifications/notification.service";
import { AuthService } from "src/app/services/auth.service";

@Component({
    templateUrl: './login.component.html',
    styles: [`
        em { float: right; color: #E05C65; padding-left: 10px}
    `]
})
export class LoginComponent implements OnInit {
    private user !: UserModel
    userName ?: string;
    password ?: string;
    mouseOverLogin : boolean = false;

    constructor(private authService : AuthService,
        private router : Router,
        private notificationService: NotificationService) {}

    ngOnInit() {
        this.authService.getSubject().subscribe(user => {
            this.user = user
            if (user.id !== -1) this.notificationService.showSuccess("login successfull")   
        })
    }

    login(formValues : any) {
        this.authService.login(formValues.userName, formValues.password)
        this.router.navigate(['store'])
    }
    
    cancel() {
        this.router.navigate(['store'])
    }
}