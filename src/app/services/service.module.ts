import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";

import { AdminService } from "./admin.service";

@NgModule({
    declarations: [],
    providers: [AdminService],
    imports: [HttpModule],
    exports: []
})
export class ServiceModule {

}