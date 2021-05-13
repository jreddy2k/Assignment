import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'FilterPipe',
})
export class FilterPipe implements PipeTransform {
    
    transform(value: any, input: string) {
        
        console.log('test');
        
        if (input) {
            input = input.toLowerCase();
            return value.filter(function (el: any) {
                console.log();
                return (el.title+' '+el.body).toLowerCase().indexOf(input) > -1;
            })
        }
        return value;
    }
}
