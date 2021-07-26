import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AuthService } from "./auth.service";
import { LoginComponent } from "./login.component";
import { ProfileComponent } from "./profile.component";
import { profileRoutes } from "./profile.routes";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(profileRoutes)
    ],
    declarations: [
        ProfileComponent,
        LoginComponent
    ],
    providers: [
    ]
})
export class ProfileModule{

}