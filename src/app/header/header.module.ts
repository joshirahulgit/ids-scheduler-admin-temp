import { NgModule } from "@angular/core";

//User defined imports
import { HeaderComponent } from "./header.component";

@NgModule({
    declarations:[HeaderComponent],
    exports:[HeaderComponent]
})
export class HeaderModule{

}