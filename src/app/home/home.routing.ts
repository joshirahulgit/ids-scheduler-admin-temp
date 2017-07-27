import { RouterModule } from "@angular/router";

import { HomeComponent } from "./home.component";

export const HomeRouting = RouterModule.forRoot([
    { path: "", component: HomeComponent }
]);