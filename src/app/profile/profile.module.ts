import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ProfileComponent } from "./profile.component";
import { profileRoutes } from "./profile.routes";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(profileRoutes)
    ],
    declarations: [
        ProfileComponent
    ],
    providers: [

    ]
})
export class ProfileModule{

}