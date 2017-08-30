import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'hex2rgba'
})
export class Hex2RgbaPipe implements PipeTransform {

    transform(hexColor: string, ...args: any[]) {
        if (!hexColor)
            return "gray";

        // let pattern = new RegExp('^#(?:[0-9a-fA-F]{3}){1,2}$');
        let pattern = new RegExp('^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$');

        if (!pattern.test(hexColor))
            throw new Error("Value is not a valid hex color.");

        let c: any = hexColor.substring(1).split('');
        if (c.length == 3) {
            c = [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c = '0x' + c.join('');
        return 'rgba(' + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') + ',1)';
    }
}