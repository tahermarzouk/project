/*import React, { useState } from 'react';
import Product from '../pages/Product';
const List = () => {

const [list , setList] = useState([
    {
        "id" : 1 , 
        "name" : "Au service de la République sous l'egide de Bourguiba" ,
        "image" : "1.jpg" ,
        "description" : "Le parcours, c’est celui d’un jeune Tunisien, issu d’une famille nationaliste de Ksar Helal, en plein cœur du Sahel, orphelin de père à l’âge de 10 ans, qui monte à Tunis, en 1943, suivre, sur les pas de son père, ses études à Sadiki, puis ira faire son droit à Paris (1954) où il se joindra à Bourguiba… pour ne plus le quitter jusqu’à sa déposition en 1987. Après lui, il refusera toute compromission avec Ben Ali et se murera dans un silence total, jusqu’à la Révolution. Il sera ainsi l’un des rares bourguibistes à rompre tout contact avec le geôlier de Bourguiba...",
        "price" : "40"
    
    },
    {
        "id" : 2 , 
        "name" :"Kalthoum Bornaz- L'étoile à la recherche du fil perdu" ,
        "image" : "kalthoum-bornaz-l-étoile-à-la-recherche-du-fil-perdu.jpg" ,
        "description" : "Le 3 septembre 2016, la réalisatrice tunisienne Kalthoum Bornaz nous quittait à l’âge de 71 ans. Pour lui rendre hommage, sa sœur Alia Baccar vient de sortir un livre autoédité, qui s’intitule « Kalthoum Bornaz, l’Étoile à la recherche du fil perdu ». Le livre parle de l’œuvre de Kalthoum et de sa vie. Sa préface a été rédigée par Ferid Boughedir, un ami de la réalisatrice.",
        "price" : "50"
    
    },
    {
        "id" : 3 , 
        "name" :"L'Emirat" ,
        "image" : "l-emirat.jpg" ,
        "description" : "2012, un groupe de jeunes barbus s'empare de Sejnane, dans le nord tunisien, ils ne tardent pas à proclamer le village Emirat. Dominé par les islamistes, le gouvernement laisse faire. ",
        "price" : "60"
    
    },
    {
        "id" : 4 , 
        "name" :"LA RÉGENCE DE TUNIS SOUS LE RÈGNE DES BEYS (1613-1957)" ,
        "image" : "la-régence-de-tunis-sous-le-règne-des-beys-1613-1957.jpg" ,
        "description" : "1943: Sur fond de guerre entre Allemands et Alliés, un commando Nazi se rend à un village situé à une soixantaine de kilomètres de Gabès.Leur mission ? Trouver le repaire abandonné du marge Aleister Crowley où il aurait enterré un terrible secret durant son épopée tunisienne de 1904. Un secret ancestral en rapport avec la famille Barca qui pourrait faire basculer le rapport des forces.",
        
        "price" : "50"
    
    },
    {
        "id" : 5 , 
        "name" :"Leader de ma vie " ,
        "image" : "leader-de-ma-vie.jpg" ,
        "description" : "Nous avons besoin de plus d’énergie, de diffuseurs de bonne humeur et d'éleveurs de l'esprit. Nous avons besoin de gens qui comme vous, rayonnent de positivité. Vous produisez de l’influence où que vous soyez, dites-vous. Tant qu’à faire, vous pouvez décider de laisser chaque personne que vous rencontrez un peu mieux que vous ne l’avez trouvé. Faites-en votre pratique quotidienne. Lorsque vous rencontrez quelqu'un, engagez-vous. Laissez-le un peu mieux que vous ne l’avez trouvé.Cette année, devenez la personne la plus généreuse que vous connaissez et observez votre vie changer.✨",
        "price" : "50"
    
    },
    {
        "id" : 6 , 
        "name" :"L'invention des modernités en islam  " ,
        "image" : "l-invention-des-modernités-en-islam.jpg" ,
        "description" : "L’islam découvre la modernité occidentale au XIXe siècle et veut être pleinement de son temps, c’est-à-dire moderne. Mais une civilisation puissante, forte d’une tradition qui avait durant des siècles tout préformé, du quotidien des gens à la vie de l’esprit, ne peut céder sans négocier. Aussi, prend-elle le soin de dissocier la modernité de sa matrice occidentale. C’est la condition pour que l’insertion dans la modernité ne soit pas perçue comme un renoncement. C’est ainsi que l’islam invente une modernité, à sa mesure. Il l’a conçue à la carte, guidé en cela par une intuition forte : se préserver dans son être… ",
        "price" : "70"
    
    },
    {
        "id" : 7 , 
        "name" :"La vie de Muhammad " ,
        "image" : "la-vie-de-muhammad.jpg" ,
        "description" : "Une somme de 1000 pages.Avec une grande érudition, un sens du récit et un regard critique aiguisé porté sur les sources, l’auteur offre du Prophète de l’islam un portrait captivant, à la fois scientifique et « philosophique », associant de manière saisissante l’homme inspiré et le stratège averti des réalités de terrain. Hichem Djaït est sans conteste l’un des grands maîtres  des études historiques en Tunisie et dans le monde arabe.  ",
        "price" : "60"
    
    },
    {
        "id" : 8, 
        "name" :"Maisons d'hôtes et hôtels de charme en Tunisie " ,
        "image" : "maisons-d-hôtes-et-hôtels-de-charme-en-tunisie.jpg" ,
        "description" : "Maisons d’hôtes et hôtels de charme en Tunisie est le dernier né des livres tunisiens qui propose une balade dans une sélection des plus belles maisons d’hôtes et hôtels de charme du pays. ",
        "price" : "30"
    
    },
    {
        "id" : 9 , 
        "name" :"Skein of wool" ,
        "image" : "skein-of-wool.jpg" ,
        "description" : "And perhaps it was a wake up call One that made me realize How much of a skein of wool my life is Messy Tangled Chaotic...The knots were endless  And the untying became paramount Thread by thread. ",
        "price" : "35"
    
    },
    {
        "id" : 10 , 
        "name" :"Smart SVT - 4ème sciences expérimentales" ,
        "image" : "smart-svt-4ème-sciences-expérimentales.jpg" ,
        "description" : "SMART SVT destiné aux élèves des classes de 4ème année sciences expérimentales. Son contenu guidera efficacement les élèves sur le chemin du savoir et de la méthodologie. Sa présentation claire structurée en couleur, les QCM et les exercices corrigés permettent à l’apprenant de bénéficier d’une parfaite autonomie pour bien comprendre, assimiler et se préparer au baccalauréat.",
        "price" : "40"
    
    }
    
    
    
    
    ])







    return ( <div>
<Product  list={list}/>
    </div> );
}
 
export default List;*/
