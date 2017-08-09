import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ActionBarComponent } from "app/common-components/action-bar/action-bar.component";

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        ActionBarComponent
    ],
    declarations: [
        ActionBarComponent
    ],
    providers: [],
    bootstrap: []
})
export class CommonComponentModule {

}