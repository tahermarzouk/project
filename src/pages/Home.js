import React,  {useState} from 'react'
import BookList from '../components/BookList'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal } from 'react-bootstrap';
const Accueil = () => {

    const [list,setList] = useState([
        {
            id : 1 , 
            Title : "Au service de la République sous l'egide de Bourguiba" ,
            Image : "1.jpg" ,
            Descr : "Le parcours, c’est celui d’un jeune Tunisien, issu d’une famille nationaliste de Ksar Helal, en plein cœur du Sahel, orphelin de père à l’âge de 10 ans, qui monte à Tunis, en 1943, suivre, sur les pas de son père, ses études à Sadiki, puis ira faire son droit à Paris (1954) où il se joindra à Bourguiba… pour ne plus le quitter jusqu’à sa déposition en 1987. Après lui, il refusera toute compromission avec Ben Ali et se murera dans un silence total, jusqu’à la Révolution. Il sera ainsi l’un des rares bourguibistes à rompre tout contact avec le geôlier de Bourguiba...",
            price: "40",
            Rating:"3"
        
        },
        {
            id : 2 , 
            Title :"Kalthoum Bornaz- L'étoile à la recherche du fil perdu" ,
            Image : "kalthoum-bornaz-l-étoile-à-la-recherche-du-fil-perdu.jpg" ,
            Descr : "Le 3 septembre 2016, la réalisatrice tunisienne Kalthoum Bornaz nous quittait à l’âge de 71 ans. Pour lui rendre hommage, sa sœur Alia Baccar vient de sortir un livre autoédité, qui s’intitule « Kalthoum Bornaz, l’Étoile à la recherche du fil perdu ». Le livre parle de l’œuvre de Kalthoum et de sa vie. Sa préface a été rédigée par Ferid Boughedir, un ami de la réalisatrice.",
            price : "50",
            Rating:"4"
        
        },
        {
            id : 3 , 
            Title :"L'Emirat" ,
            Image : "l-emirat.jpg" ,
            Descr : "2012, un groupe de jeunes barbus s'empare de Sejnane, dans le nord tunisien, ils ne tardent pas à proclamer le village Emirat. Dominé par les islamistes, le gouvernement laisse faire. ",
           price: "60",
           Rating:"4"
        
        },
        {
            id : 4 , 
            Title :"LA RÉGENCE DE TUNIS SOUS LE RÈGNE DES BEYS (1613-1957)" ,
            Image : "op.jpg" ,
            Descr : "1943: Sur fond de guerre entre Allemands et Alliés, un commando Nazi se rend à un village situé à une soixantaine de kilomètres de Gabès.Leur mission ? Trouver le repaire abandonné du marge Aleister Crowley où il aurait enterré un terrible secret durant son épopée tunisienne de 1904. Un secret ancestral en rapport avec la famille Barca qui pourrait faire basculer le rapport des forces.",
            
            price : "50",
            Rating:"4"
        
        },
        {
            id: 5 , 
            Title :"Leader de ma vie " ,
            Image : "leader-de-ma-vie.jpg" ,
            Descr : "Nous avons besoin de plus d’énergie, de diffuseurs de bonne humeur et d'éleveurs de l'esprit. Nous avons besoin de gens qui comme vous, rayonnent de positivité. Vous produisez de l’influence où que vous soyez, dites-vous. Tant qu’à faire, vous pouvez décider de laisser chaque personne que vous rencontrez un peu mieux que vous ne l’avez trouvé. Faites-en votre pratique quotidienne. Lorsque vous rencontrez quelqu'un, engagez-vous. Laissez-le un peu mieux que vous ne l’avez trouvé.Cette année, devenez la personne la plus généreuse que vous connaissez et observez votre vie changer.✨",
            price : "50",
            Rating:"4"
        
        },
        {
            id : 6 , 
            Title :"L'invention des modernités en islam  " ,
            Image : "l-invention-des-modernités-en-islam.jpg" ,
            Descr : "L’islam découvre la modernité occidentale au XIXe siècle et veut être pleinement de son temps, c’est-à-dire moderne. Mais une civilisation puissante, forte d’une tradition qui avait durant des siècles tout préformé, du quotidien des gens à la vie de l’esprit, ne peut céder sans négocier. Aussi, prend-elle le soin de dissocier la modernité de sa matrice occidentale. C’est la condition pour que l’insertion dans la modernité ne soit pas perçue comme un renoncement. C’est ainsi que l’islam invente une modernité, à sa mesure. Il l’a conçue à la carte, guidé en cela par une intuition forte : se préserver dans son être… ",
            price : "70",
            Rating:"3"
        
        },
        {
            id : 7 , 
            Title :"La vie de Muhammad " ,
            Image : "la-vie-de-muhammad.jpg" ,
            Descr : "Une somme de 1000 pages.Avec une grande érudition, un sens du récit et un regard critique aiguisé porté sur les sources, l’auteur offre du Prophète de l’islam un portrait captivant, à la fois scientifique et « philosophique », associant de manière saisissante l’homme inspiré et le stratège averti des réalités de terrain. Hichem Djaït est sans conteste l’un des grands maîtres  des études historiques en Tunisie et dans le monde arabe.  ",
            price : "60",
            Rating:"2"
        
        },
        {
            id : 8, 
            Title :"Maisons d'hôtes et hôtels de charme en Tunisie " ,
            Image : "maisons-d-hôtes-et-hôtels-de-charme-en-tunisie.jpg" ,
            Descr : "Maisons d’hôtes et hôtels de charme en Tunisie est le dernier né des livres tunisiens qui propose une balade dans une sélection des plus belles maisons d’hôtes et hôtels de charme du pays. ",
            price : "30",
            Rating:"3"
        
        },
        {
            id : 9 , 
            Title :"Skein of wool" ,
            Image : "skein-of-wool.jpg" ,
            Descr : "And perhaps it was a wake up call One that made me realize How much of a skein of wool my life is Messy Tangled Chaotic...The knots were endless  And the untying became paramount Thread by thread. ",
            price : "35",
            Rating:"5"
        
        },
        {
            id : 10 , 
            Title :"Smart SVT - 4ème sciences expérimentales" ,
            Image : "smart-svt-4ème-sciences-expérimentales.jpg" ,
            Descr : "SMART SVT destiné aux élèves des classes de 4ème année sciences expérimentales. Son contenu guidera efficacement les élèves sur le chemin du savoir et de la méthodologie. Sa présentation claire structurée en couleur, les QCM et les exercices corrigés permettent à l’apprenant de bénéficier d’une parfaite autonomie pour bien comprendre, assimiler et se préparer au baccalauréat.",
            price : "40",
            Rating:"4"

        
        }
        
        
        
        
        ])

        const [show, setShow] = useState(false);
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
    
        const [searchlist, setSearchlist] = useState(list)
        const [empty,setEmpty] = useState(true)
    
    const [searchByRate, setSearchByRate] = useState(list)
    const [starClicked, setstarClicked] = useState(false)
    
    
    
    const AddMovie = () => {
        let nouv = {}
        Object.assign(nouv , {
            Title : document.getElementById("newTitle").value ,
            Image: document.getElementById("newImage").value,
            Descr: document.getElementById("newDescr").value,
            Rating : document.getElementById("newRating").value
        })
    
        setList([...list ,nouv ])
    }
    
    
    const search = (e) => {
    let tab=[]
    
    if(!starClicked)
    tab = searchByRate.filter(el=> el.Title.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()) )
    else 
    tab = list.filter(el=> el.Title.includes(e.target.value) )
    
    setSearchlist(tab)
    
    if (e.target.value.length > 0) setEmpty(false)
    else setEmpty(true)
    
    }
    
    const searchRate = (e)=> {
        let tab2 =[]
        let x = e.target.value
        console.log(x)
        if(empty)
        tab2=searchlist.filter(e=>e.Rating === x)
        else 
        tab2=list.filter(e=>e.Rating === x)
    
        setSearchByRate(tab2)
        setstarClicked(true)
    }
    
    
    
    
        return ( <div>
    
            <input placeholder="search book here" style={{padding:10 , margin:50, width:270}} onChange={search} />
    
            <table>
                <tr> search by rate ..
                    <td>
                        <input value="1"
                    type="image"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Empty_Star.svg/1200px-Empty_Star.svg.png"
                    height="20"
                    onClick={searchRate}></input>
                    </td>
                    <td>
                        <input value="2"
                    type="image"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Empty_Star.svg/1200px-Empty_Star.svg.png"
                    height="20"
                    onClick={searchRate}></input>
                    </td>
                    
                    <td>
                        <input value="3"
                    type="image"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Empty_Star.svg/1200px-Empty_Star.svg.png"
                    height="20"
                    onClick={searchRate}></input>
                    </td>
                    <td>
                        <input value="4"
                    type="image"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Empty_Star.svg/1200px-Empty_Star.svg.png"
                    height="20"
                    onClick={searchRate}></input>
                    </td>
                    <td>
                        <input value="5"
                    type="image"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Empty_Star.svg/1200px-Empty_Star.svg.png"
                    height="20"
                    onClick={searchRate}></input>
                    </td>
                    </tr>
            </table>
    
    <Button variant="primary" onClick={handleShow}>
            Add Book
          </Button>
    
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
    
    <table>
        <tr>
            <td>
              <input placeholder="Book Title" id="newTitle"></input>
            </td>
        </tr>
    
        <tr>
            <td>
              <input placeholder="Book Image" id="newImage"></input>
            </td>
        </tr>
    
        <tr>
            <td>
              <input placeholder="Book Description" id="newDescr"></input>
            </td>
        </tr>
    
    
        <tr>
            <td>
              <select placeholder="Book Description" id="newRating">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
              </select>
            </td>
        </tr>
    
    </table>
    
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={AddMovie}>
                Add Book
              </Button>
            </Modal.Footer>
          </Modal>
    
    
    
    <BookList list={
        (empty && !starClicked) ? list : (!empty && !starClicked) ? searchlist : (!empty && starClicked) ?searchlist : searchByRate
    }/>
        </div> );
    }
     
    export default Accueil ;