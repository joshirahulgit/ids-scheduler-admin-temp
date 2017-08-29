import { Component, Input } from "@angular/core";

@Component({
    selector: 'switch',
    templateUrl: './switch.component.html',
    styleUrls: [
        './switch.component.scss'
    ]
})
export class SwitchComponent {

    @Input()
    public isOn: boolean = false;

    @Input()
    public onCaption:string="";

    @Input()
    public offCaption:string="";
}