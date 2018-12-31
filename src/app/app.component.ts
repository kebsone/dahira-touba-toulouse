import { Component } from '@angular/core';
import { Khalif } from './khalif/Khalif';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dahiraApp';

 khalifs: Khalif[] = [
   {
     id: 1,
     nom: 'MBACKE',
     prenom: 'Serigne Moustapha',
     annee: '1927-1945',
     urlImg: './assets/img/serigne_moustapha.jpg',
     descriptionCourte: "Lorsque, de guerre lasse, au terme d’un exil pénible et inique en Afrique Centrale, le Pouvoir Colonial se résolut à ramener Cheikh Ahmadou BAMBA au Sénégal, il se trouva placé devant un constat d’échec quant à sa tentative de liquidation du Cheikh et de (...)",
   },
   {
    id: 2,
    nom: 'MBACKE',
    prenom: 'Serigne Fallou',
    annee: '1945-1968',
    urlImg: './assets/img/serigne_fallou.jpg',
    descriptionCourte: "Un des signes distinctifs par lesquels on identifie le croyant véritable est la résignation devant les arrêts divins, si cruels puissent-ils paraître. Ainsi, lorsque le 13 juillet 1945, Cheikh Mamadou Moustapha fut ravi à l’affection de la Communauté (...)"
  },
  {
    id: 3,
    nom: 'MBACKE',
    prenom: 'Serigne Abdoul Ahad',
    annee: '1968-1989',
    urlImg: './assets/img/serigne_abdou_lahad.png',
    descriptionCourte:"Quand, en 1914, naquit à Diourbel Cheikh Abdoul Ahad, celui qui allait devenir le troisième Khalife Général des Mourides, Cheikh Ahmadou BAMBA, prenant à témoin ses plus proches disciples déclara : Priez pour lui afin qu’Allah lui accorde longue vie (...)"
  },
  {
    id: 4,
    nom: 'MBACKE',
    prenom: 'Serigne Abdou Khadre',
    annee: '1989-1990',
    urlImg: './assets/img/serigne_abdou_hadr.jpg',
    descriptionCourte:"Le sentiment le mieux partagé qui habite la communauté islamique sénégalaise à l’évocation du khalifat de Cheikh Abdou Khadr MBACKE est assurément l’amertume. En effet, seulement onze mois d’exercice pour ce quatrième Khalife de Cheikh Ahmadou BAMBA. Nous (...)"
  },
  {
    id: 5,
    nom: 'MBACKE',
    prenom: 'Serigne Saliou',
    annee: '1990-2007',
    urlImg: './assets/img/serigne_saliou.jpg',
    descriptionCourte: "Yâ ayuhal lazina âmanô wa hamilu s sâlihâti Ô vous, croyants véridiques, constants dans la vertu, prenez grand soin de bien choisir les noms que vous donnez à vos enfants. Cela peut être d’une grande importance pour leur destin. Nous tenons de Ghazali (...)"
  },
  {
    id: 6,
    nom: 'MBACKE',
    prenom: 'El Hadji Lamine Bara',
    annee: '2007-2010',
    urlImg: './assets/img/serigne_bara_fallou.jpg',
    descriptionCourte: "Appelé affectueusement El Hadji Bara, il est l’homonyme de Serigne Mouhamadou Lamine Bara MBACKE, fils de Cheikh AHMADOU BAMBA car il est venu au monde pendant que ce dernier était en visite chez Mouhammadou Fadilou Mbacké. Son père le confia très (...)"
  },
  {
    id: 7,
    nom: 'MBACKE',
    prenom: 'Cheikh Sidy Al Moukhtar',
    annee: '2010-2018',
    urlImg: './assets/img/serigne_cheikh_sidy.png',
    descriptionCourte: "Cheikh Sidi Moukhtar Mbacké, petit-fils de cheikh Ahmadou Bamba Mbacké de par son père Serigne Bara ibn Khadim Rassoul. Cheikh Sidi Moukhtar Mbacké est venu au monde en 1924 à Mbacké Kadior (arrondissement de Darou Mousty), un village qui fait partie (...)"
  }
  ];
}
