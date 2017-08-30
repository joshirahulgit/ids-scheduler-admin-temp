import { NgModule } from "@angular/core";
import { MaterialComponentModule } from "../material-component.module";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

// import { adminRoutes } from "./admin.routing";
import { AdminComponent } from "./admin.component";
import { DashboardComponent } from "./admin-dashboard.component";

import { AccountSettingsComponent } from "./account-settings/account-settings.component";
import { AppointmentStatusesComponent } from "./appointment-statuses/appointment-statuses.component";
import { GeneralComponent } from "./general/general.component";
import { ModalitiesComponent } from "./modalities/modalities.component";
import { ProviderRoleComponent } from "./provider-role/provider-role.component";
import { ProvidersComponent } from "./providers/providers.component";
import { EnumValueConfigComponent } from "./enum-value-config/enum-value-config.component";
import { EnumValueConfigAddComponent } from "./enum-value-config/enum-value-config-add.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { CommonComponentModule } from "app/common-components/common-componets.module";
import { TechCompleteSuggestionComponent } from "./tech-complete-suggestion/tech-complete-suggestion.component";
import { VolumeUnitComponent } from "./volume-unit/volume-unit.component";
import { AuthGuard } from "app/auth-guard.service";
import { CommentTypeComponent } from "./comment-type/comment-type.component";
import { Hex2RgbaPipe } from "app/pipes/hex2rgba.pipe";

const AdminRoutes = RouterModule.forChild([
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
                    { path: 'enum-value/:group', component: EnumValueConfigComponent },
                    { path: 'tech-complete-suggestion', component: TechCompleteSuggestionComponent },
                    { path: 'volume-unit', component: VolumeUnitComponent },
                    { path: 'comment-type', component: CommentTypeComponent },
                ],
            }
        ],
        canActivate: [AuthGuard]
    }
]);


@NgModule({
    declarations: [
        Hex2RgbaPipe,
        AdminComponent,
        DashboardComponent,
        AccountSettingsComponent,
        AppointmentStatusesComponent,
        GeneralComponent,
        ModalitiesComponent,
        ProviderRoleComponent,
        ProvidersComponent,
        EnumValueConfigComponent,
        EnumValueConfigAddComponent,
        TechCompleteSuggestionComponent,
        VolumeUnitComponent,
        CommentTypeComponent
    ],
    imports: [
        CommonModule,
        MaterialComponentModule,
        // FormsModule,
        ReactiveFormsModule,
        AdminRoutes,
        CommonComponentModule,
    ],
    exports: [
        RouterModule
    ],
    bootstrap: [
        EnumValueConfigAddComponent
    ]
})
export class AdminModule {

}