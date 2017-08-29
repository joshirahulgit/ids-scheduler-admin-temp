import { UserRoleDto } from "app/dtos/UserRole.dto";

export class AccountDto implements IAccountDto {
    name?: string;
    id: number;
    mRNReadOnly: boolean;
    isMammographyActive: boolean;
    accountName?: string;
    state?: string;
    logoUrl?: string;
    address?: string;
    address2?: string;
    city?: string;
    zipCode?: string;
    phone?: string;
    text?: string;
    // workingDays?: DayOfWeek[];
    // startWorkingTime: DayTime = new DayTime();
    // finishWorkingTime: DayTime = new DayTime();
    hourDivisionSegment: number;
    // physicianTypes?: PhysicianTypeDto[];
    // defaultViewMode: ReservationViewMode;
    // scheduleMode: ScheduleMode;
    // techCompleteSuggestionList?: TechCompleteSuggestionListDto[];
    // appointmentStatuses?: AppointmentStatusDto[];
    // preCachedResourses?: AppointmentResourceDto[];
    // unlinkedResourses?: AppointmentResourceDto[];
    // commentTypes?: CommentTypeDto[];
    colorsConfiguration?: { [key: string] : string; };
    availablePayers?: { [key: string] : string; };
    // referralSpecialities?: PhysicianSpecialitiesDto;
    // volumeUnits?: VolumeUnitsDto;
    // visitCategories?: AccountEnumsDto;
    availableProviders?: { [key: string] : string; };
    availableInsRelationships?: { [key: string] : string; };
    availableLanguages?: { [key: string] : string; };
    printPatientDetailsPage?: string;
    printRoomSchedulePage?: string;
    printPrepNotePage?: string;
    printCommentsPage?: string;
    printPaymentPage?: string;
    printInvoicePage?: string;
    orderReportPage?: string;
    startWeekOn: number;
    numberOfVisibleHours: number;
    workTypes?: { [key: string] : { [key: string] : string; }; };
    accountProceduresAreAvailable: boolean;
    accountDiagnosesAreAvailable: boolean;
    // currentProfile?: UserProfileDto;
    // allProfiles?: UserProfileDto[];
    // orderCreationMode: OrderCreationMode;
    orderCreationTrigger?: number[];
    visitCreationTrigger?: number[];
    workTypeSourceTable?: string;
    workTypeSourceColumn?: string;
    // orderCreationParameters?: OrderCreationParameterDto[];
    hasAccessToScheduler: boolean;
    isCrmEnabled: boolean;
    isSchedulerAdmin: boolean;
    isWorkWithPatientVisitAllowed: boolean;
    isLocationFilterVis: boolean;
    isModalityFilterVis: boolean;
    isRoomFilterVis: boolean;
    isRoleFilterVis: boolean;
    isProviderFilterVis: boolean;
    isApptStatusFilterVis: boolean;
    isDaysFilterVis: boolean;
    isPhyGroupVis: boolean;
    isWtGroupVis: boolean;
    isPaymentsEnabled: boolean;
    isProcessPaymentsEnabled: boolean;
    // accountSettings?: AccountSettingCollectionDto;
    isReferralRequired?: boolean;
    viewPatientsInValidLocationsOnly?: boolean;
    isBillingNoteRequired: boolean;
    isCreateOrderRequired: boolean;
    isPendingEnabled: boolean;
    isVisitReasonRequired: boolean;
    preselectProcedureTypes: boolean;
    payerStates?: { [key: string] : string; };
    usaStates?: { [key: string] : string; };
    // generateIDconfigs?: AccountGenerateIDconfigDto[];
    // autorizationAlerts?: AuthorizationAlertDto[];
    patientCategoryRequired: boolean;
    isProcedureGlobalSearchEnabled: boolean;
    sendEmailFromAddress?: string;
    isDictator: boolean;
    isAdmin: boolean;
    // hCPCSCodes?: AccountEnumsDto;
    // enumsScheduledBy?: AccountEnumsDto;
    // enumsPatientAilment?: AccountEnumsDto;
    // enumsHeardOfUs?: AccountEnumsDto;
    // enumsMaritalStatus?: AccountEnumsDto;
    // enumContactRelation?: AccountEnumsDto;
    // enumFiltersConfiguration?: AccountEnumsDto;
    // enumContactType?: AccountEnumsDto;
    // guarantorRelationShip?: AccountEnumsDto;
    // enumPriority?: AccountEnumsDto;
    // enumPendingReason?: AccountEnumsDto;
    // enumEmploymentStatus?: AccountEnumsDto;
    // enumDiagnosisFlags?: AccountEnumsDto;
    // enumReferralGroups?: AccountEnumsDto;
    // enumPaymentStatuses?: AccountEnumsDto;
    // enumCreditCardTypes?: AccountEnumsDto;
    // enumReferralSpecialities?: AccountEnumsDto;
    // workingSchedule?: WorkingScheduleDto;
    // enumAuthorizationUserStatuses?: AccountEnumsDto;
    // enumMultipleIdentifierSource?: AccountEnumsDto;
    // enumPatientCommentTransferredTo?: AccountEnumsDto;
    isWarningMessagesEnabled: boolean;
    isCommentForBlockingRequired: boolean;
    isPatientDOBMandatory: boolean;
    // currentAcl?: AccessControlListDto;
    availableRoles?: UserRoleDto[];
    // availableAccessControlEntities?: AccessControlListDto;
    isScheduleAppointmentByEstimationSlots: boolean;
    isStateOfServiceEnabled: boolean;
    isProcedureRequired: boolean;
    // enumMammoLaterality?: AccountEnumsDto;
    // enumMammoMammogramType?: AccountEnumsDto;
    // enumMammoMammogramSubType?: AccountEnumsDto;
    // enumMammoNodalStatus?: AccountEnumsDto;
    // enumMammoTumorSize?: AccountEnumsDto;
    // enumMammoBiopsyType?: AccountEnumsDto;
    // enumMammoBirads?: AccountEnumsDto;
    // enumMammoBreastDensity?: AccountEnumsDto;
    // enumTestResultStatus?: AccountEnumsDto;
    // allGenders?: AccountEnumsDto;
    // allRaces?: RacesDto;
    // allEthnicity?: EthnicitiesDto;
    // allSmoking?: AccountEnumsDto;
    // allPatientStatuses?: AccountEnumsDto;
    // allSpecialNeeds?: AccountEnumsDto;
    // allRelationships?: AccountEnumsDto;
    // allEhrSystems?: AccountEnumsDto;
    // appointmentCheckListItems?: AppointmentCheckListItemDto[];
    // workingScheduleComplete?: WorkingScheduleDto;

    constructor(data?: IAccountDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.name = data["Name"];
            this.id = data["Id"];
            this.mRNReadOnly = data["MRNReadOnly"];
            this.isMammographyActive = data["IsMammographyActive"];
            this.accountName = data["AccountName"];
            this.state = data["State"];
            this.logoUrl = data["LogoUrl"];
            this.address = data["Address"];
            this.address2 = data["Address2"];
            this.city = data["City"];
            this.zipCode = data["ZipCode"];
            this.phone = data["Phone"];
            this.text = data["Text"];
            // if (data["WorkingDays"] && data["WorkingDays"].constructor === Array) {
            //     this.workingDays = [];
            //     for (let item of data["WorkingDays"])
            //         this.workingDays.push(item);
            // }
            // this.startWorkingTime = data["StartWorkingTime"] ? DayTime.fromJS(data["StartWorkingTime"]) : new DayTime();
            // this.finishWorkingTime = data["FinishWorkingTime"] ? DayTime.fromJS(data["FinishWorkingTime"]) : new DayTime();
            this.hourDivisionSegment = data["HourDivisionSegment"];
            // if (data["PhysicianTypes"] && data["PhysicianTypes"].constructor === Array) {
            //     this.physicianTypes = [];
            //     for (let item of data["PhysicianTypes"])
            //         this.physicianTypes.push(PhysicianTypeDto.fromJS(item));
            // }
            // this.defaultViewMode = data["DefaultViewMode"];
            // this.scheduleMode = data["ScheduleMode"];
            // if (data["TechCompleteSuggestionList"] && data["TechCompleteSuggestionList"].constructor === Array) {
            //     this.techCompleteSuggestionList = [];
            //     for (let item of data["TechCompleteSuggestionList"])
            //         this.techCompleteSuggestionList.push(TechCompleteSuggestionListDto.fromJS(item));
            // }
            // if (data["AppointmentStatuses"] && data["AppointmentStatuses"].constructor === Array) {
            //     this.appointmentStatuses = [];
            //     for (let item of data["AppointmentStatuses"])
            //         this.appointmentStatuses.push(AppointmentStatusDto.fromJS(item));
            // }
            // if (data["PreCachedResourses"] && data["PreCachedResourses"].constructor === Array) {
            //     this.preCachedResourses = [];
            //     for (let item of data["PreCachedResourses"])
            //         this.preCachedResourses.push(AppointmentResourceDto.fromJS(item));
            // }
            // if (data["UnlinkedResourses"] && data["UnlinkedResourses"].constructor === Array) {
            //     this.unlinkedResourses = [];
            //     for (let item of data["UnlinkedResourses"])
            //         this.unlinkedResourses.push(AppointmentResourceDto.fromJS(item));
            // }
            // if (data["CommentTypes"] && data["CommentTypes"].constructor === Array) {
            //     this.commentTypes = [];
            //     for (let item of data["CommentTypes"])
            //         this.commentTypes.push(CommentTypeDto.fromJS(item));
            // }
            if (data["ColorsConfiguration"]) {
                this.colorsConfiguration = {};
                for (let key in data["ColorsConfiguration"]) {
                    if (data["ColorsConfiguration"].hasOwnProperty(key))
                        this.colorsConfiguration[key] = data["ColorsConfiguration"][key];
                }
            }
            if (data["AvailablePayers"]) {
                this.availablePayers = {};
                for (let key in data["AvailablePayers"]) {
                    if (data["AvailablePayers"].hasOwnProperty(key))
                        this.availablePayers[key] = data["AvailablePayers"][key];
                }
            }
            // this.referralSpecialities = data["ReferralSpecialities"] ? PhysicianSpecialitiesDto.fromJS(data["ReferralSpecialities"]) : <any>undefined;
            // this.volumeUnits = data["VolumeUnits"] ? VolumeUnitsDto.fromJS(data["VolumeUnits"]) : <any>undefined;
            // this.visitCategories = data["VisitCategories"] ? AccountEnumsDto.fromJS(data["VisitCategories"]) : <any>undefined;
            if (data["AvailableProviders"]) {
                this.availableProviders = {};
                for (let key in data["AvailableProviders"]) {
                    if (data["AvailableProviders"].hasOwnProperty(key))
                        this.availableProviders[key] = data["AvailableProviders"][key];
                }
            }
            if (data["AvailableInsRelationships"]) {
                this.availableInsRelationships = {};
                for (let key in data["AvailableInsRelationships"]) {
                    if (data["AvailableInsRelationships"].hasOwnProperty(key))
                        this.availableInsRelationships[key] = data["AvailableInsRelationships"][key];
                }
            }
            if (data["AvailableLanguages"]) {
                this.availableLanguages = {};
                for (let key in data["AvailableLanguages"]) {
                    if (data["AvailableLanguages"].hasOwnProperty(key))
                        this.availableLanguages[key] = data["AvailableLanguages"][key];
                }
            }
            this.printPatientDetailsPage = data["PrintPatientDetailsPage"];
            this.printRoomSchedulePage = data["PrintRoomSchedulePage"];
            this.printPrepNotePage = data["PrintPrepNotePage"];
            this.printCommentsPage = data["PrintCommentsPage"];
            this.printPaymentPage = data["PrintPaymentPage"];
            this.printInvoicePage = data["PrintInvoicePage"];
            this.orderReportPage = data["OrderReportPage"];
            this.startWeekOn = data["StartWeekOn"];
            this.numberOfVisibleHours = data["NumberOfVisibleHours"];
            if (data["WorkTypes"]) {
                this.workTypes = {};
                for (let key in data["WorkTypes"]) {
                    if (data["WorkTypes"].hasOwnProperty(key))
                        this.workTypes[key] = data["WorkTypes"][key] !== undefined ? data["WorkTypes"][key] : {};
                }
            }
            this.accountProceduresAreAvailable = data["AccountProceduresAreAvailable"];
            this.accountDiagnosesAreAvailable = data["AccountDiagnosesAreAvailable"];
            // this.currentProfile = data["CurrentProfile"] ? UserProfileDto.fromJS(data["CurrentProfile"]) : <any>undefined;
            // if (data["AllProfiles"] && data["AllProfiles"].constructor === Array) {
            //     this.allProfiles = [];
            //     for (let item of data["AllProfiles"])
            //         this.allProfiles.push(UserProfileDto.fromJS(item));
            // }
            // this.orderCreationMode = data["OrderCreationMode"];
            if (data["OrderCreationTrigger"] && data["OrderCreationTrigger"].constructor === Array) {
                this.orderCreationTrigger = [];
                for (let item of data["OrderCreationTrigger"])
                    this.orderCreationTrigger.push(item);
            }
            if (data["VisitCreationTrigger"] && data["VisitCreationTrigger"].constructor === Array) {
                this.visitCreationTrigger = [];
                for (let item of data["VisitCreationTrigger"])
                    this.visitCreationTrigger.push(item);
            }
            this.workTypeSourceTable = data["WorkTypeSourceTable"];
            this.workTypeSourceColumn = data["WorkTypeSourceColumn"];
            // if (data["OrderCreationParameters"] && data["OrderCreationParameters"].constructor === Array) {
            //     this.orderCreationParameters = [];
            //     for (let item of data["OrderCreationParameters"])
            //         this.orderCreationParameters.push(OrderCreationParameterDto.fromJS(item));
            // }
            this.hasAccessToScheduler = data["HasAccessToScheduler"];
            this.isCrmEnabled = data["IsCrmEnabled"];
            this.isSchedulerAdmin = data["IsSchedulerAdmin"];
            this.isWorkWithPatientVisitAllowed = data["IsWorkWithPatientVisitAllowed"];
            this.isLocationFilterVis = data["IsLocationFilterVis"];
            this.isModalityFilterVis = data["IsModalityFilterVis"];
            this.isRoomFilterVis = data["IsRoomFilterVis"];
            this.isRoleFilterVis = data["IsRoleFilterVis"];
            this.isProviderFilterVis = data["IsProviderFilterVis"];
            this.isApptStatusFilterVis = data["IsApptStatusFilterVis"];
            this.isDaysFilterVis = data["IsDaysFilterVis"];
            this.isPhyGroupVis = data["IsPhyGroupVis"];
            this.isWtGroupVis = data["IsWtGroupVis"];
            this.isPaymentsEnabled = data["IsPaymentsEnabled"];
            this.isProcessPaymentsEnabled = data["IsProcessPaymentsEnabled"];
            // this.accountSettings = data["AccountSettings"] ? AccountSettingCollectionDto.fromJS(data["AccountSettings"]) : <any>undefined;
            this.isReferralRequired = data["IsReferralRequired"];
            this.viewPatientsInValidLocationsOnly = data["ViewPatientsInValidLocationsOnly"];
            this.isBillingNoteRequired = data["IsBillingNoteRequired"];
            this.isCreateOrderRequired = data["IsCreateOrderRequired"];
            this.isPendingEnabled = data["IsPendingEnabled"];
            this.isVisitReasonRequired = data["IsVisitReasonRequired"];
            this.preselectProcedureTypes = data["PreselectProcedureTypes"];
            if (data["PayerStates"]) {
                this.payerStates = {};
                for (let key in data["PayerStates"]) {
                    if (data["PayerStates"].hasOwnProperty(key))
                        this.payerStates[key] = data["PayerStates"][key];
                }
            }
            if (data["UsaStates"]) {
                this.usaStates = {};
                for (let key in data["UsaStates"]) {
                    if (data["UsaStates"].hasOwnProperty(key))
                        this.usaStates[key] = data["UsaStates"][key];
                }
            }
            // if (data["GenerateIDconfigs"] && data["GenerateIDconfigs"].constructor === Array) {
            //     this.generateIDconfigs = [];
            //     for (let item of data["GenerateIDconfigs"])
            //         this.generateIDconfigs.push(AccountGenerateIDconfigDto.fromJS(item));
            // }
            // if (data["AutorizationAlerts"] && data["AutorizationAlerts"].constructor === Array) {
            //     this.autorizationAlerts = [];
            //     for (let item of data["AutorizationAlerts"])
            //         this.autorizationAlerts.push(AuthorizationAlertDto.fromJS(item));
            // }
            this.patientCategoryRequired = data["PatientCategoryRequired"];
            this.isProcedureGlobalSearchEnabled = data["IsProcedureGlobalSearchEnabled"];
            this.sendEmailFromAddress = data["SendEmailFromAddress"];
            this.isDictator = data["IsDictator"];
            this.isAdmin = data["IsAdmin"];
            // this.hCPCSCodes = data["HCPCSCodes"] ? AccountEnumsDto.fromJS(data["HCPCSCodes"]) : <any>undefined;
            // this.enumsScheduledBy = data["EnumsScheduledBy"] ? AccountEnumsDto.fromJS(data["EnumsScheduledBy"]) : <any>undefined;
            // this.enumsPatientAilment = data["EnumsPatientAilment"] ? AccountEnumsDto.fromJS(data["EnumsPatientAilment"]) : <any>undefined;
            // this.enumsHeardOfUs = data["EnumsHeardOfUs"] ? AccountEnumsDto.fromJS(data["EnumsHeardOfUs"]) : <any>undefined;
            // this.enumsMaritalStatus = data["EnumsMaritalStatus"] ? AccountEnumsDto.fromJS(data["EnumsMaritalStatus"]) : <any>undefined;
            // this.enumContactRelation = data["EnumContactRelation"] ? AccountEnumsDto.fromJS(data["EnumContactRelation"]) : <any>undefined;
            // this.enumFiltersConfiguration = data["EnumFiltersConfiguration"] ? AccountEnumsDto.fromJS(data["EnumFiltersConfiguration"]) : <any>undefined;
            // this.enumContactType = data["EnumContactType"] ? AccountEnumsDto.fromJS(data["EnumContactType"]) : <any>undefined;
            // this.guarantorRelationShip = data["GuarantorRelationShip"] ? AccountEnumsDto.fromJS(data["GuarantorRelationShip"]) : <any>undefined;
            // this.enumPriority = data["EnumPriority"] ? AccountEnumsDto.fromJS(data["EnumPriority"]) : <any>undefined;
            // this.enumPendingReason = data["EnumPendingReason"] ? AccountEnumsDto.fromJS(data["EnumPendingReason"]) : <any>undefined;
            // this.enumEmploymentStatus = data["EnumEmploymentStatus"] ? AccountEnumsDto.fromJS(data["EnumEmploymentStatus"]) : <any>undefined;
            // this.enumDiagnosisFlags = data["EnumDiagnosisFlags"] ? AccountEnumsDto.fromJS(data["EnumDiagnosisFlags"]) : <any>undefined;
            // this.enumReferralGroups = data["EnumReferralGroups"] ? AccountEnumsDto.fromJS(data["EnumReferralGroups"]) : <any>undefined;
            // this.enumPaymentStatuses = data["EnumPaymentStatuses"] ? AccountEnumsDto.fromJS(data["EnumPaymentStatuses"]) : <any>undefined;
            // this.enumCreditCardTypes = data["EnumCreditCardTypes"] ? AccountEnumsDto.fromJS(data["EnumCreditCardTypes"]) : <any>undefined;
            // this.enumReferralSpecialities = data["EnumReferralSpecialities"] ? AccountEnumsDto.fromJS(data["EnumReferralSpecialities"]) : <any>undefined;
            // this.workingSchedule = data["WorkingSchedule"] ? WorkingScheduleDto.fromJS(data["WorkingSchedule"]) : <any>undefined;
            // this.enumAuthorizationUserStatuses = data["EnumAuthorizationUserStatuses"] ? AccountEnumsDto.fromJS(data["EnumAuthorizationUserStatuses"]) : <any>undefined;
            // this.enumMultipleIdentifierSource = data["EnumMultipleIdentifierSource"] ? AccountEnumsDto.fromJS(data["EnumMultipleIdentifierSource"]) : <any>undefined;
            // this.enumPatientCommentTransferredTo = data["EnumPatientCommentTransferredTo"] ? AccountEnumsDto.fromJS(data["EnumPatientCommentTransferredTo"]) : <any>undefined;
            this.isWarningMessagesEnabled = data["IsWarningMessagesEnabled"];
            this.isCommentForBlockingRequired = data["IsCommentForBlockingRequired"];
            this.isPatientDOBMandatory = data["IsPatientDOBMandatory"];
            // this.currentAcl = data["CurrentAcl"] ? AccessControlListDto.fromJS(data["CurrentAcl"]) : <any>undefined;
            // if (data["AvailableRoles"] && data["AvailableRoles"].constructor === Array) {
            //     this.availableRoles = [];
            //     for (let item of data["AvailableRoles"])
            //         this.availableRoles.push(UserRoleDto.fromJS(item));
            // }
            // this.availableAccessControlEntities = data["AvailableAccessControlEntities"] ? AccessControlListDto.fromJS(data["AvailableAccessControlEntities"]) : <any>undefined;
            this.isScheduleAppointmentByEstimationSlots = data["IsScheduleAppointmentByEstimationSlots"];
            this.isStateOfServiceEnabled = data["IsStateOfServiceEnabled"];
            this.isProcedureRequired = data["IsProcedureRequired"];
            // this.enumMammoLaterality = data["EnumMammoLaterality"] ? AccountEnumsDto.fromJS(data["EnumMammoLaterality"]) : <any>undefined;
            // this.enumMammoMammogramType = data["EnumMammoMammogramType"] ? AccountEnumsDto.fromJS(data["EnumMammoMammogramType"]) : <any>undefined;
            // this.enumMammoMammogramSubType = data["EnumMammoMammogramSubType"] ? AccountEnumsDto.fromJS(data["EnumMammoMammogramSubType"]) : <any>undefined;
            // this.enumMammoNodalStatus = data["EnumMammoNodalStatus"] ? AccountEnumsDto.fromJS(data["EnumMammoNodalStatus"]) : <any>undefined;
            // this.enumMammoTumorSize = data["EnumMammoTumorSize"] ? AccountEnumsDto.fromJS(data["EnumMammoTumorSize"]) : <any>undefined;
            // this.enumMammoBiopsyType = data["EnumMammoBiopsyType"] ? AccountEnumsDto.fromJS(data["EnumMammoBiopsyType"]) : <any>undefined;
            // this.enumMammoBirads = data["EnumMammoBirads"] ? AccountEnumsDto.fromJS(data["EnumMammoBirads"]) : <any>undefined;
            // this.enumMammoBreastDensity = data["EnumMammoBreastDensity"] ? AccountEnumsDto.fromJS(data["EnumMammoBreastDensity"]) : <any>undefined;
            // this.enumTestResultStatus = data["EnumTestResultStatus"] ? AccountEnumsDto.fromJS(data["EnumTestResultStatus"]) : <any>undefined;
            // this.allGenders = data["AllGenders"] ? AccountEnumsDto.fromJS(data["AllGenders"]) : <any>undefined;
            // this.allRaces = data["AllRaces"] ? RacesDto.fromJS(data["AllRaces"]) : <any>undefined;
            // this.allEthnicity = data["AllEthnicity"] ? EthnicitiesDto.fromJS(data["AllEthnicity"]) : <any>undefined;
            // this.allSmoking = data["AllSmoking"] ? AccountEnumsDto.fromJS(data["AllSmoking"]) : <any>undefined;
            // this.allPatientStatuses = data["AllPatientStatuses"] ? AccountEnumsDto.fromJS(data["AllPatientStatuses"]) : <any>undefined;
            // this.allSpecialNeeds = data["AllSpecialNeeds"] ? AccountEnumsDto.fromJS(data["AllSpecialNeeds"]) : <any>undefined;
            // this.allRelationships = data["AllRelationships"] ? AccountEnumsDto.fromJS(data["AllRelationships"]) : <any>undefined;
            // this.allEhrSystems = data["AllEhrSystems"] ? AccountEnumsDto.fromJS(data["AllEhrSystems"]) : <any>undefined;
            // if (data["AppointmentCheckListItems"] && data["AppointmentCheckListItems"].constructor === Array) {
            //     this.appointmentCheckListItems = [];
            //     for (let item of data["AppointmentCheckListItems"])
            //         this.appointmentCheckListItems.push(AppointmentCheckListItemDto.fromJS(item));
            // }
            // this.workingScheduleComplete = data["WorkingScheduleComplete"] ? WorkingScheduleDto.fromJS(data["WorkingScheduleComplete"]) : <any>undefined;
        }
    }

    static fromJS(data: any): AccountDto {
        let result = new AccountDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["Name"] = this.name;
        data["Id"] = this.id;
        data["MRNReadOnly"] = this.mRNReadOnly;
        data["IsMammographyActive"] = this.isMammographyActive;
        data["AccountName"] = this.accountName;
        data["State"] = this.state;
        data["LogoUrl"] = this.logoUrl;
        data["Address"] = this.address;
        data["Address2"] = this.address2;
        data["City"] = this.city;
        data["ZipCode"] = this.zipCode;
        data["Phone"] = this.phone;
        data["Text"] = this.text;
        // if (this.workingDays && this.workingDays.constructor === Array) {
        //     data["WorkingDays"] = [];
        //     for (let item of this.workingDays)
        //         data["WorkingDays"].push(item);
        // }
        // data["StartWorkingTime"] = this.startWorkingTime ? this.startWorkingTime.toJSON() : <any>undefined;
        // data["FinishWorkingTime"] = this.finishWorkingTime ? this.finishWorkingTime.toJSON() : <any>undefined;
        data["HourDivisionSegment"] = this.hourDivisionSegment;
        // if (this.physicianTypes && this.physicianTypes.constructor === Array) {
        //     data["PhysicianTypes"] = [];
        //     for (let item of this.physicianTypes)
        //         data["PhysicianTypes"].push(item.toJSON());
        // }
        // data["DefaultViewMode"] = this.defaultViewMode;
        // data["ScheduleMode"] = this.scheduleMode;
        // if (this.techCompleteSuggestionList && this.techCompleteSuggestionList.constructor === Array) {
        //     data["TechCompleteSuggestionList"] = [];
        //     for (let item of this.techCompleteSuggestionList)
        //         data["TechCompleteSuggestionList"].push(item.toJSON());
        // }
        // if (this.appointmentStatuses && this.appointmentStatuses.constructor === Array) {
        //     data["AppointmentStatuses"] = [];
        //     for (let item of this.appointmentStatuses)
        //         data["AppointmentStatuses"].push(item.toJSON());
        // }
        // if (this.preCachedResourses && this.preCachedResourses.constructor === Array) {
        //     data["PreCachedResourses"] = [];
        //     for (let item of this.preCachedResourses)
        //         data["PreCachedResourses"].push(item.toJSON());
        // }
        // if (this.unlinkedResourses && this.unlinkedResourses.constructor === Array) {
        //     data["UnlinkedResourses"] = [];
        //     for (let item of this.unlinkedResourses)
        //         data["UnlinkedResourses"].push(item.toJSON());
        // }
        // if (this.commentTypes && this.commentTypes.constructor === Array) {
        //     data["CommentTypes"] = [];
        //     for (let item of this.commentTypes)
        //         data["CommentTypes"].push(item.toJSON());
        // }
        if (this.colorsConfiguration) {
            data["ColorsConfiguration"] = {};
            for (let key in this.colorsConfiguration) {
                if (this.colorsConfiguration.hasOwnProperty(key))
                    data["ColorsConfiguration"][key] = this.colorsConfiguration[key];
            }
        }
        if (this.availablePayers) {
            data["AvailablePayers"] = {};
            for (let key in this.availablePayers) {
                if (this.availablePayers.hasOwnProperty(key))
                    data["AvailablePayers"][key] = this.availablePayers[key];
            }
        }
        // data["ReferralSpecialities"] = this.referralSpecialities ? this.referralSpecialities.toJSON() : <any>undefined;
        // data["VolumeUnits"] = this.volumeUnits ? this.volumeUnits.toJSON() : <any>undefined;
        // data["VisitCategories"] = this.visitCategories ? this.visitCategories.toJSON() : <any>undefined;
        if (this.availableProviders) {
            data["AvailableProviders"] = {};
            for (let key in this.availableProviders) {
                if (this.availableProviders.hasOwnProperty(key))
                    data["AvailableProviders"][key] = this.availableProviders[key];
            }
        }
        if (this.availableInsRelationships) {
            data["AvailableInsRelationships"] = {};
            for (let key in this.availableInsRelationships) {
                if (this.availableInsRelationships.hasOwnProperty(key))
                    data["AvailableInsRelationships"][key] = this.availableInsRelationships[key];
            }
        }
        if (this.availableLanguages) {
            data["AvailableLanguages"] = {};
            for (let key in this.availableLanguages) {
                if (this.availableLanguages.hasOwnProperty(key))
                    data["AvailableLanguages"][key] = this.availableLanguages[key];
            }
        }
        data["PrintPatientDetailsPage"] = this.printPatientDetailsPage;
        data["PrintRoomSchedulePage"] = this.printRoomSchedulePage;
        data["PrintPrepNotePage"] = this.printPrepNotePage;
        data["PrintCommentsPage"] = this.printCommentsPage;
        data["PrintPaymentPage"] = this.printPaymentPage;
        data["PrintInvoicePage"] = this.printInvoicePage;
        data["OrderReportPage"] = this.orderReportPage;
        data["StartWeekOn"] = this.startWeekOn;
        data["NumberOfVisibleHours"] = this.numberOfVisibleHours;
        if (this.workTypes) {
            data["WorkTypes"] = {};
            for (let key in this.workTypes) {
                if (this.workTypes.hasOwnProperty(key))
                    data["WorkTypes"][key] = this.workTypes[key];
            }
        }
        data["AccountProceduresAreAvailable"] = this.accountProceduresAreAvailable;
        data["AccountDiagnosesAreAvailable"] = this.accountDiagnosesAreAvailable;
        // data["CurrentProfile"] = this.currentProfile ? this.currentProfile.toJSON() : <any>undefined;
        // if (this.allProfiles && this.allProfiles.constructor === Array) {
        //     data["AllProfiles"] = [];
        //     for (let item of this.allProfiles)
        //         data["AllProfiles"].push(item.toJSON());
        // }
        // data["OrderCreationMode"] = this.orderCreationMode;
        if (this.orderCreationTrigger && this.orderCreationTrigger.constructor === Array) {
            data["OrderCreationTrigger"] = [];
            for (let item of this.orderCreationTrigger)
                data["OrderCreationTrigger"].push(item);
        }
        if (this.visitCreationTrigger && this.visitCreationTrigger.constructor === Array) {
            data["VisitCreationTrigger"] = [];
            for (let item of this.visitCreationTrigger)
                data["VisitCreationTrigger"].push(item);
        }
        data["WorkTypeSourceTable"] = this.workTypeSourceTable;
        data["WorkTypeSourceColumn"] = this.workTypeSourceColumn;
        // if (this.orderCreationParameters && this.orderCreationParameters.constructor === Array) {
        //     data["OrderCreationParameters"] = [];
        //     for (let item of this.orderCreationParameters)
        //         data["OrderCreationParameters"].push(item.toJSON());
        // }
        data["HasAccessToScheduler"] = this.hasAccessToScheduler;
        data["IsCrmEnabled"] = this.isCrmEnabled;
        data["IsSchedulerAdmin"] = this.isSchedulerAdmin;
        data["IsWorkWithPatientVisitAllowed"] = this.isWorkWithPatientVisitAllowed;
        data["IsLocationFilterVis"] = this.isLocationFilterVis;
        data["IsModalityFilterVis"] = this.isModalityFilterVis;
        data["IsRoomFilterVis"] = this.isRoomFilterVis;
        data["IsRoleFilterVis"] = this.isRoleFilterVis;
        data["IsProviderFilterVis"] = this.isProviderFilterVis;
        data["IsApptStatusFilterVis"] = this.isApptStatusFilterVis;
        data["IsDaysFilterVis"] = this.isDaysFilterVis;
        data["IsPhyGroupVis"] = this.isPhyGroupVis;
        data["IsWtGroupVis"] = this.isWtGroupVis;
        data["IsPaymentsEnabled"] = this.isPaymentsEnabled;
        data["IsProcessPaymentsEnabled"] = this.isProcessPaymentsEnabled;
        // data["AccountSettings"] = this.accountSettings ? this.accountSettings.toJSON() : <any>undefined;
        data["IsReferralRequired"] = this.isReferralRequired;
        data["ViewPatientsInValidLocationsOnly"] = this.viewPatientsInValidLocationsOnly;
        data["IsBillingNoteRequired"] = this.isBillingNoteRequired;
        data["IsCreateOrderRequired"] = this.isCreateOrderRequired;
        data["IsPendingEnabled"] = this.isPendingEnabled;
        data["IsVisitReasonRequired"] = this.isVisitReasonRequired;
        data["PreselectProcedureTypes"] = this.preselectProcedureTypes;
        if (this.payerStates) {
            data["PayerStates"] = {};
            for (let key in this.payerStates) {
                if (this.payerStates.hasOwnProperty(key))
                    data["PayerStates"][key] = this.payerStates[key];
            }
        }
        if (this.usaStates) {
            data["UsaStates"] = {};
            for (let key in this.usaStates) {
                if (this.usaStates.hasOwnProperty(key))
                    data["UsaStates"][key] = this.usaStates[key];
            }
        }
        // if (this.generateIDconfigs && this.generateIDconfigs.constructor === Array) {
        //     data["GenerateIDconfigs"] = [];
        //     for (let item of this.generateIDconfigs)
        //         data["GenerateIDconfigs"].push(item.toJSON());
        // }
        // if (this.autorizationAlerts && this.autorizationAlerts.constructor === Array) {
        //     data["AutorizationAlerts"] = [];
        //     for (let item of this.autorizationAlerts)
        //         data["AutorizationAlerts"].push(item.toJSON());
        // }
        data["PatientCategoryRequired"] = this.patientCategoryRequired;
        data["IsProcedureGlobalSearchEnabled"] = this.isProcedureGlobalSearchEnabled;
        data["SendEmailFromAddress"] = this.sendEmailFromAddress;
        data["IsDictator"] = this.isDictator;
        data["IsAdmin"] = this.isAdmin;
        // data["HCPCSCodes"] = this.hCPCSCodes ? this.hCPCSCodes.toJSON() : <any>undefined;
        // data["EnumsScheduledBy"] = this.enumsScheduledBy ? this.enumsScheduledBy.toJSON() : <any>undefined;
        // data["EnumsPatientAilment"] = this.enumsPatientAilment ? this.enumsPatientAilment.toJSON() : <any>undefined;
        // data["EnumsHeardOfUs"] = this.enumsHeardOfUs ? this.enumsHeardOfUs.toJSON() : <any>undefined;
        // data["EnumsMaritalStatus"] = this.enumsMaritalStatus ? this.enumsMaritalStatus.toJSON() : <any>undefined;
        // data["EnumContactRelation"] = this.enumContactRelation ? this.enumContactRelation.toJSON() : <any>undefined;
        // data["EnumFiltersConfiguration"] = this.enumFiltersConfiguration ? this.enumFiltersConfiguration.toJSON() : <any>undefined;
        // data["EnumContactType"] = this.enumContactType ? this.enumContactType.toJSON() : <any>undefined;
        // data["GuarantorRelationShip"] = this.guarantorRelationShip ? this.guarantorRelationShip.toJSON() : <any>undefined;
        // data["EnumPriority"] = this.enumPriority ? this.enumPriority.toJSON() : <any>undefined;
        // data["EnumPendingReason"] = this.enumPendingReason ? this.enumPendingReason.toJSON() : <any>undefined;
        // data["EnumEmploymentStatus"] = this.enumEmploymentStatus ? this.enumEmploymentStatus.toJSON() : <any>undefined;
        // data["EnumDiagnosisFlags"] = this.enumDiagnosisFlags ? this.enumDiagnosisFlags.toJSON() : <any>undefined;
        // data["EnumReferralGroups"] = this.enumReferralGroups ? this.enumReferralGroups.toJSON() : <any>undefined;
        // data["EnumPaymentStatuses"] = this.enumPaymentStatuses ? this.enumPaymentStatuses.toJSON() : <any>undefined;
        // data["EnumCreditCardTypes"] = this.enumCreditCardTypes ? this.enumCreditCardTypes.toJSON() : <any>undefined;
        // data["EnumReferralSpecialities"] = this.enumReferralSpecialities ? this.enumReferralSpecialities.toJSON() : <any>undefined;
        // data["WorkingSchedule"] = this.workingSchedule ? this.workingSchedule.toJSON() : <any>undefined;
        // data["EnumAuthorizationUserStatuses"] = this.enumAuthorizationUserStatuses ? this.enumAuthorizationUserStatuses.toJSON() : <any>undefined;
        // data["EnumMultipleIdentifierSource"] = this.enumMultipleIdentifierSource ? this.enumMultipleIdentifierSource.toJSON() : <any>undefined;
        // data["EnumPatientCommentTransferredTo"] = this.enumPatientCommentTransferredTo ? this.enumPatientCommentTransferredTo.toJSON() : <any>undefined;
        data["IsWarningMessagesEnabled"] = this.isWarningMessagesEnabled;
        data["IsCommentForBlockingRequired"] = this.isCommentForBlockingRequired;
        data["IsPatientDOBMandatory"] = this.isPatientDOBMandatory;
        // data["CurrentAcl"] = this.currentAcl ? this.currentAcl.toJSON() : <any>undefined;
        if (this.availableRoles && this.availableRoles.constructor === Array) {
            data["AvailableRoles"] = [];
            for (let item of this.availableRoles)
                data["AvailableRoles"].push(item.toJSON());
        }
        // data["AvailableAccessControlEntities"] = this.availableAccessControlEntities ? this.availableAccessControlEntities.toJSON() : <any>undefined;
        data["IsScheduleAppointmentByEstimationSlots"] = this.isScheduleAppointmentByEstimationSlots;
        data["IsStateOfServiceEnabled"] = this.isStateOfServiceEnabled;
        data["IsProcedureRequired"] = this.isProcedureRequired;
        // data["EnumMammoLaterality"] = this.enumMammoLaterality ? this.enumMammoLaterality.toJSON() : <any>undefined;
        // data["EnumMammoMammogramType"] = this.enumMammoMammogramType ? this.enumMammoMammogramType.toJSON() : <any>undefined;
        // data["EnumMammoMammogramSubType"] = this.enumMammoMammogramSubType ? this.enumMammoMammogramSubType.toJSON() : <any>undefined;
        // data["EnumMammoNodalStatus"] = this.enumMammoNodalStatus ? this.enumMammoNodalStatus.toJSON() : <any>undefined;
        // data["EnumMammoTumorSize"] = this.enumMammoTumorSize ? this.enumMammoTumorSize.toJSON() : <any>undefined;
        // data["EnumMammoBiopsyType"] = this.enumMammoBiopsyType ? this.enumMammoBiopsyType.toJSON() : <any>undefined;
        // data["EnumMammoBirads"] = this.enumMammoBirads ? this.enumMammoBirads.toJSON() : <any>undefined;
        // data["EnumMammoBreastDensity"] = this.enumMammoBreastDensity ? this.enumMammoBreastDensity.toJSON() : <any>undefined;
        // data["EnumTestResultStatus"] = this.enumTestResultStatus ? this.enumTestResultStatus.toJSON() : <any>undefined;
        // data["AllGenders"] = this.allGenders ? this.allGenders.toJSON() : <any>undefined;
        // data["AllRaces"] = this.allRaces ? this.allRaces.toJSON() : <any>undefined;
        // data["AllEthnicity"] = this.allEthnicity ? this.allEthnicity.toJSON() : <any>undefined;
        // data["AllSmoking"] = this.allSmoking ? this.allSmoking.toJSON() : <any>undefined;
        // data["AllPatientStatuses"] = this.allPatientStatuses ? this.allPatientStatuses.toJSON() : <any>undefined;
        // data["AllSpecialNeeds"] = this.allSpecialNeeds ? this.allSpecialNeeds.toJSON() : <any>undefined;
        // data["AllRelationships"] = this.allRelationships ? this.allRelationships.toJSON() : <any>undefined;
        // data["AllEhrSystems"] = this.allEhrSystems ? this.allEhrSystems.toJSON() : <any>undefined;
        // if (this.appointmentCheckListItems && this.appointmentCheckListItems.constructor === Array) {
        //     data["AppointmentCheckListItems"] = [];
        //     for (let item of this.appointmentCheckListItems)
        //         data["AppointmentCheckListItems"].push(item.toJSON());
        // }
        // data["WorkingScheduleComplete"] = this.workingScheduleComplete ? this.workingScheduleComplete.toJSON() : <any>undefined;
        return data; 
    }
}

export interface IAccountDto {
    name?: string;
    id: number;
    mRNReadOnly: boolean;
    isMammographyActive: boolean;
    accountName?: string;
    state?: string;
    logoUrl?: string;
    address?: string;
    address2?: string;
    city?: string;
    zipCode?: string;
    phone?: string;
    text?: string;
    // workingDays?: DayOfWeek[];
    // startWorkingTime: DayTime;
    // finishWorkingTime: DayTime;
    hourDivisionSegment: number;
    // physicianTypes?: PhysicianTypeDto[];
    // defaultViewMode: ReservationViewMode;
    // scheduleMode: ScheduleMode;
    // techCompleteSuggestionList?: TechCompleteSuggestionListDto[];
    // appointmentStatuses?: AppointmentStatusDto[];
    // preCachedResourses?: AppointmentResourceDto[];
    // unlinkedResourses?: AppointmentResourceDto[];
    // commentTypes?: CommentTypeDto[];
    colorsConfiguration?: { [key: string] : string; };
    availablePayers?: { [key: string] : string; };
    // referralSpecialities?: PhysicianSpecialitiesDto;
    // volumeUnits?: VolumeUnitsDto;
    // visitCategories?: AccountEnumsDto;
    availableProviders?: { [key: string] : string; };
    availableInsRelationships?: { [key: string] : string; };
    availableLanguages?: { [key: string] : string; };
    printPatientDetailsPage?: string;
    printRoomSchedulePage?: string;
    printPrepNotePage?: string;
    printCommentsPage?: string;
    printPaymentPage?: string;
    printInvoicePage?: string;
    orderReportPage?: string;
    startWeekOn: number;
    numberOfVisibleHours: number;
    workTypes?: { [key: string] : { [key: string] : string; }; };
    accountProceduresAreAvailable: boolean;
    accountDiagnosesAreAvailable: boolean;
    // currentProfile?: UserProfileDto;
    // allProfiles?: UserProfileDto[];
    // orderCreationMode: OrderCreationMode;
    orderCreationTrigger?: number[];
    visitCreationTrigger?: number[];
    workTypeSourceTable?: string;
    workTypeSourceColumn?: string;
    // orderCreationParameters?: OrderCreationParameterDto[];
    hasAccessToScheduler: boolean;
    isCrmEnabled: boolean;
    isSchedulerAdmin: boolean;
    isWorkWithPatientVisitAllowed: boolean;
    isLocationFilterVis: boolean;
    isModalityFilterVis: boolean;
    isRoomFilterVis: boolean;
    isRoleFilterVis: boolean;
    isProviderFilterVis: boolean;
    isApptStatusFilterVis: boolean;
    isDaysFilterVis: boolean;
    isPhyGroupVis: boolean;
    isWtGroupVis: boolean;
    isPaymentsEnabled: boolean;
    isProcessPaymentsEnabled: boolean;
    // accountSettings?: AccountSettingCollectionDto;
    isReferralRequired?: boolean;
    viewPatientsInValidLocationsOnly?: boolean;
    isBillingNoteRequired: boolean;
    isCreateOrderRequired: boolean;
    isPendingEnabled: boolean;
    isVisitReasonRequired: boolean;
    preselectProcedureTypes: boolean;
    payerStates?: { [key: string] : string; };
    usaStates?: { [key: string] : string; };
    // generateIDconfigs?: AccountGenerateIDconfigDto[];
    // autorizationAlerts?: AuthorizationAlertDto[];
    patientCategoryRequired: boolean;
    isProcedureGlobalSearchEnabled: boolean;
    sendEmailFromAddress?: string;
    isDictator: boolean;
    isAdmin: boolean;
    // hCPCSCodes?: AccountEnumsDto;
    // enumsScheduledBy?: AccountEnumsDto;
    // enumsPatientAilment?: AccountEnumsDto;
    // enumsHeardOfUs?: AccountEnumsDto;
    // enumsMaritalStatus?: AccountEnumsDto;
    // enumContactRelation?: AccountEnumsDto;
    // enumFiltersConfiguration?: AccountEnumsDto;
    // enumContactType?: AccountEnumsDto;
    // guarantorRelationShip?: AccountEnumsDto;
    // enumPriority?: AccountEnumsDto;
    // enumPendingReason?: AccountEnumsDto;
    // enumEmploymentStatus?: AccountEnumsDto;
    // enumDiagnosisFlags?: AccountEnumsDto;
    // enumReferralGroups?: AccountEnumsDto;
    // enumPaymentStatuses?: AccountEnumsDto;
    // enumCreditCardTypes?: AccountEnumsDto;
    // enumReferralSpecialities?: AccountEnumsDto;
    // workingSchedule?: WorkingScheduleDto;
    // enumAuthorizationUserStatuses?: AccountEnumsDto;
    // enumMultipleIdentifierSource?: AccountEnumsDto;
    // enumPatientCommentTransferredTo?: AccountEnumsDto;
    isWarningMessagesEnabled: boolean;
    isCommentForBlockingRequired: boolean;
    isPatientDOBMandatory: boolean;
    // currentAcl?: AccessControlListDto;
    availableRoles?: UserRoleDto[];
    // availableAccessControlEntities?: AccessControlListDto;
    isScheduleAppointmentByEstimationSlots: boolean;
    isStateOfServiceEnabled: boolean;
    isProcedureRequired: boolean;
    // enumMammoLaterality?: AccountEnumsDto;
    // enumMammoMammogramType?: AccountEnumsDto;
    // enumMammoMammogramSubType?: AccountEnumsDto;
    // enumMammoNodalStatus?: AccountEnumsDto;
    // enumMammoTumorSize?: AccountEnumsDto;
    // enumMammoBiopsyType?: AccountEnumsDto;
    // enumMammoBirads?: AccountEnumsDto;
    // enumMammoBreastDensity?: AccountEnumsDto;
    // enumTestResultStatus?: AccountEnumsDto;
    // allGenders?: AccountEnumsDto;
    // allRaces?: RacesDto;
    // allEthnicity?: EthnicitiesDto;
    // allSmoking?: AccountEnumsDto;
    // allPatientStatuses?: AccountEnumsDto;
    // allSpecialNeeds?: AccountEnumsDto;
    // allRelationships?: AccountEnumsDto;
    // allEhrSystems?: AccountEnumsDto;
    // appointmentCheckListItems?: AppointmentCheckListItemDto[];
    // workingScheduleComplete?: WorkingScheduleDto;
}