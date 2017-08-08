import { Component } from "@angular/core";

@Component({
    selector: 'admin',
    templateUrl: './admin.component.html',
    styles: [`
        md-sidenav {
            width: 200px;
        }
        md-sidenav-container {
            width: 100%;
            height: 100%;
        }

        .md-sidenav-content {
            height: 100%;
            width: 100%;
        }
    `]
})
export class AdminComponent {

    configItems: Array<ConfigItem>;

    constructor() {
        this.configItems = new Array();
        var hcpcs = new ConfigItem('HCPCS', 'HCPCS List', 1);
        this.configItems.push(hcpcs);
        var HeardOfUs = new ConfigItem('HeardOfUs', 'Heard Of Us List', 2);
        this.configItems.push(HeardOfUs);
        var PatientAilment = new ConfigItem('PatientAilment', 'Patient Ailment List', 3);
        this.configItems.push(PatientAilment);
        var ReferralGroups = new ConfigItem('ReferralGroups', 'Referral Groups', 4);
        this.configItems.push(ReferralGroups);
        var DiagnosisFlags = new ConfigItem('DiagnosisFlags', 'Diagnosis Flags', 5);
        this.configItems.push(DiagnosisFlags);
        var CCTypes = new ConfigItem('CCTypes', 'Payment Card Types', 6);
        this.configItems.push(CCTypes);
        var PaymentStatuses = new ConfigItem('PaymentStatuses', 'Payment Statuses', 7);
        this.configItems.push(PaymentStatuses);
        var MammoBirads = new ConfigItem('MammoBirads', 'Mammo Birads Codes', 8);
        this.configItems.push(MammoBirads);
        var MammoBreastDensity = new ConfigItem('MammoBreastDensity', 'Mammo Breast Density List', 9);
        this.configItems.push(MammoBreastDensity);
        var MammoLaterality = new ConfigItem('MammoLaterality', 'Mammo Laterality List', 10);
        this.configItems.push(MammoLaterality);
        var MammoNodalStatus = new ConfigItem('MammoNodalStatus', 'Mammo Nodal Statuses List', 11);
        this.configItems.push(MammoNodalStatus);
        var MammoTumorSize = new ConfigItem('MammoTumorSize', 'Mammo Tumor Size List', 12);
        this.configItems.push(MammoTumorSize);
        var MammoBiopsyType = new ConfigItem('MammoBiopsyType', 'Mammo Biopsy Type List', 13);
        this.configItems.push(MammoBiopsyType);
    }

}

class ConfigItem {

    constructor(public code: string, public name: string, public order: number) {

    }
}