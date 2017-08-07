import { Routes } from "@angular/router";
// import { AdminStartComponent } from "./admin-start.component";
import { DashboardComponent } from "./admin-dashboard.component";
import { AdminComponent } from "./admin.component";
// import { Page1 } from "./page1";
// import { Page2 } from "./page2";
import { AccountSettingsComponent } from "./account-settings/account-settings.component";
import { AppointmentStatusesComponent } from "./appointment-statuses/appointment-statuses.component";
import { GeneralComponent } from "./general/general.component";
import { ModalitiesComponent } from "./modalities/modalities.component";
import { ProviderRoleComponent } from "./provider-role/provider-role.component";
import { ProvidersComponent } from "./providers/providers.component";
import { EnumValueConfigComponent } from "./enum-value-config/enum-value-config.component";

export const adminRoutes: Routes = [
    {
        path: 'admin',
        component: AdminComponent,
        children: [
            {
                path: '',
                children: [
                    { path: 'account-settings', component: AccountSettingsComponent },
                    { path: 'appointment-statuses', component: AppointmentStatusesComponent },
                    { path: 'general', component: GeneralComponent },
                    { path: 'modalities', component: ModalitiesComponent },
                    { path: 'provider-role', component: ProviderRoleComponent },
                    { path: 'providers', component: ProvidersComponent },
                    { path: 'enum-value/:group', component: EnumValueConfigComponent }
                ],
            }
        ]
    }
];