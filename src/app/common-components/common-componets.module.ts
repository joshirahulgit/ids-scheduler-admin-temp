import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ActionBarComponent } from "app/common-components/action-bar/action-bar.component";
import { SwitchComponent } from "app/common-components/switch/switch.component";

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        ActionBarComponent,
        SwitchComponent
    ],
    declarations: [
        ActionBarComponent,
        SwitchComponent
    ],
    providers: [],
    bootstrap: []
})
export class CommonComponentModule {

}