import { NgModule } from "@angular/core";
import {
    MdSidenavModule,
    MdListModule,
    MdTableModule,
    MdDialogModule,
    MdInputModule
} from "@angular/material";

@NgModule({
    imports: [
        MdSidenavModule,
        MdListModule,
        MdTableModule,
        MdDialogModule,
        MdInputModule
    ],
    exports: [
        MdSidenavModule,
        MdListModule,
        MdTableModule,
        MdDialogModule,
        MdInputModule
    ]
})
export class MaterialComponentModule {
    
}