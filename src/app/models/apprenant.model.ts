// apprenant.model.ts
// export interface Apprenant {
//     nom: string;
//     note: number | undefined;
//   }
  
export class Apprenant {
  public id: number = 1;
  public matricule: string = "";
  public nom: string = "";
  public prenom: string = "";
  public email: string = "";
  public numero: string = "";
  public classe: string = "";
  public pass: string = "";
  public photo: string = "";
  public etat: string = "";
  public evaluationId: number | null = null; // Ajout de la propriété evaluationId
  public note: number | null = null; // Ajout de la propriété note

  constructor(matricule: string, nom: string, prenom: string, email: string, numero: string, classe: string, pass: string, id: number, photo: string, etat: string) {
    this.id = id;
    this.matricule = matricule;
    this.nom = nom;
    this.prenom = prenom;
    this.email = email;
    this.numero = numero;
    this.classe = classe;
    this.pass = pass;
    this.photo = photo;
    this.etat = etat;
  }
}
