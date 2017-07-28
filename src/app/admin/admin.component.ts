import { Component } from "@angular/core";

@Component({
    selector:'admin',
    template:`
    <h2>Admin Dashboard</h2>
    <button class="btn btn-primary" routerLink="./page1">
        Go to page 1
    </button>
    <button class="btn btn-primary" routerLink="./page2">
        Go to page 2
    </button>
    <router-outlet></router-outlet>    
    `
})
export class AdminComponent{

}