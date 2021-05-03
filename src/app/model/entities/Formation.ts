import {Domaine} from './Domaine'
export class Formation {
	IdFormation:number; 
     titre:  String ;
	 annee: number;
	nb_session: number;
	 duree: number;
	
    budget: number;
	typeF:TypeFormation;
	Dom_domaine_id :number;
	domaine: Domaine;
    
    }

	export enum TypeFormation {
		national ,international
	  }