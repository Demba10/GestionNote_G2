// filter-apprenants.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterApprenants'
})
export class FilterApprenantsPipe implements PipeTransform {
  transform(apprenants: any[], evaluationId: number): any[] {
    if (!apprenants || !evaluationId) {
      return apprenants;
    }

    return apprenants.filter(apprenant => apprenant.evaluationId === evaluationId);
  }
}
