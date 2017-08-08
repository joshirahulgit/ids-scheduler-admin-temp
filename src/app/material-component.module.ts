import { NgModule } from "@angular/core";
import {
    MdSidenavModule,
    MdListModule,
    MdTableModule
} from "@angular/material";

@NgModule({
    imports: [
        MdSidenavModule,
        MdListModule,
        MdTableModule
    ],
    exports: [
        MdSidenavModule,
        MdListModule,
        MdTableModule
    ]
})
export class MaterialComponentModule {
    
}