import { NgModule } from "@angular/core";
import {
    MdSidenavModule,
    MdListModule,
    MdTableModule,
    MdDialogModule
} from "@angular/material";

@NgModule({
    imports: [
        MdSidenavModule,
        MdListModule,
        MdTableModule,
        MdDialogModule
    ],
    exports: [
        MdSidenavModule,
        MdListModule,
        MdTableModule,
        MdDialogModule
    ]
})
export class MaterialComponentModule {
    
}