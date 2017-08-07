import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { adminRoutes } from "./admin.routing";
import { AdminComponent } from "./admin.component";
import { DashboardComponent } from "./admin-dashboard.component";

import { AccountSettingsComponent } from "./account-settings/account-settings.component";
import { AppointmentStatusesComponent } from "./appointment-statuses/appointment-statuses.component";
import { GeneralComponent } from "./general/general.component";
import { ModalitiesComponent } from "./modalities/modalities.component";
import { ProviderRoleComponent } from "./provider-role/provider-role.component";
import { ProvidersComponent } from "./providers/providers.component";
import { EnumValueConfigComponent } from "./enum-value-config/enum-value-config.component";


@NgModule({
    declarations: [
        AdminComponent,
        DashboardComponent,
        AccountSettingsComponent,
        AppointmentStatusesComponent,
        GeneralComponent,
        ModalitiesComponent,
        ProviderRoleComponent,
        ProvidersComponent,
        EnumValueConfigComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(adminRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AdminModule {

}