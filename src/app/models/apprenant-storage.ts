// apprenant-storage.ts
import { Apprenant } from './apprenant.model';

export class ApprenantStorage {
  static apprenants: Apprenant[] = [];

  static getApprenants(): Apprenant[] {
    return this.apprenants;
  }

  static setApprenants(apprenants: Apprenant[]): void {
    this.apprenants = apprenants;
  }
}
