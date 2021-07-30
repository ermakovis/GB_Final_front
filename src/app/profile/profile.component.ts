import { Component, OnInit } from "@angular/core"
import { FormControl, FormGroup, Validators } from "@angular/forms"
import { Router } from "@angular/router"
import { AuthService } from "src/app/services/auth.service";

@Component({
    templateUrl: './profile.component.html',
    styles: [`
        em {float:right; color:#E05C65; padding-left: 10px}
        .error input {background-color:#E4C4C5;}
        .error ::-webkit-input-placeholder {color:#999;}
        .error ::-moz-placeholder {color:#999;}
        .error :-moz-placeholder {color:#999;}
        .error :ms-input-placeholder {color:#999;}
    `]
})
export class ProfileComponent implements OnInit{
    profileForm!: FormGroup
    private firstNameForm!: FormControl
    private lastNameForm!: FormControl

    constructor(private authService: AuthService,
        private router: Router) {}

    ngOnInit() {
        // this.firstNameForm = new FormControl(
        //     this.authService.currentUser?.firstName, Validators.required
        // )
        // this.lastNameForm = new FormControl(
        //     this.authService.currentUser?.lastName, Validators.required
        // )
        // this.profileForm = new FormGroup ({
        //     firstName: this.firstNameForm,
        //     lastName: this.lastNameForm
        // })
    }

    validateFirstName() : boolean {
        return this.firstNameForm.valid || this.firstNameForm.untouched
    }

    validateLastName() : boolean {
        return this.lastNameForm.valid || this.firstNameForm.untouched
    }

    validateAll() : boolean {
        return this.validateFirstName() && this.validateLastName()
    }

    saveProfile(formValues: any) {
        // if (!this.profileForm.valid) return

        // this.authService.updateCurrentUser(
        //     formValues.firstName, formValues.lastName
        // )
        this.router.navigate(['store'])
    }

    cancel() {
        this.router.navigate(['store'])
    }
}