import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'forFilter'
})
export class ForFilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!value || !args) {
      return value;
    }
    
    return value.filter(item => item.step == args);
  }

}
