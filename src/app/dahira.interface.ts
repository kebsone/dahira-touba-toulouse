export class AppUser {
    id?: number;
    nom: string;
    prenom: string;
    password: string;
    confirmedPassword: string;
    genre: string;
    telephone: string;
    mail: string;
    adresse: string;
}


export class Commission {
    id?: number;
    titre: string;
    description: string;
    contact: string;
    descriptionComplete: string;
}

export class Poste {
    id?: number;
    commission: Commission;
    libelle: string;
    numeroOrdre: number;

}

