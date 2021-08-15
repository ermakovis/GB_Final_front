
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { UserDtoModel } from "src/app/models/userDto.model";
import { NotificationService } from "src/app/notifications/notification.service";
import { AuthService } from "src/app/services/auth.service";

@Component({
    templateUrl: './login.component.html',
    styles: [`
        em { float: right; color: #E05C65; padding-left: 10px}
    `]
})
export class LoginComponent implements OnInit {
    private user ?: UserDtoModel
    userName ?: string;
    password ?: string;
    mouseOverLogin : boolean = false;

    constructor(private authService : AuthService,
        private router : Router,
        private notificationService: NotificationService) {}

    ngOnInit() {
        this.authService.user.subscribe(user => this.user = user)
    }

    login(formValues : any) {
        this.authService.login(formValues.userName, formValues.password).subscribe(
            user => this.user = user,
            err => console.error(err)
        )
        this.router.navigate(['store'])
    }
    
    cancel() {
        this.router.navigate(['store'])
    }
}