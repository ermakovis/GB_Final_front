import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    template: `
        <h1> New iten </h1>
        <hr>
        <div class='col-md-6'>
            <h3> There will be item creation </h3>
            <button type="button" class="btn btn-default"
                (click)="handleCreateClick()"
            >
                Cancel
            </button>
        </div>
    `
})
export class AdminPanelComponent{
    constructor(private router: Router) {} 

    handleCreateClick() {
        this.router.navigate(['/store']);
    }
}