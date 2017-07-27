import { NgModule } from "@angular/core";


import { FooterComponent } from "./footer.component";
import { CommonModule } from "@angular/common";
import { CommandService } from "./footer.service";

@NgModule({
    imports: [CommonModule],
    exports: [FooterComponent],
    declarations: [FooterComponent],
    providers: [CommandService]
})
export class FooterModule {

}