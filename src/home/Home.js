import React,{useState, useRef, useEffect, useCallback} from 'react'
import { Link } from 'react-router-dom';
import "./Header.css"
import Hero from '../hero.jpg'
import Eric from '../eric.jpg'
import Yaki from '../yaki.png'
import Fassi from '../fassi.jpg'
import Mcd from '../mcd.png'
import Kfc from '../kfc.png'
import Burger from '../burger.png'
import Plate from '../plate.jpg'
import Cheif from '../cheif.jpg'
import Order from '../order.jpg'
import Apps from '../app.PNG'
import Google from '../google.PNG'

import poissons from '../poissons.jpg'
import coucous from '../coucous.jpg'
import marocains from '../marocains.jpg'
import saine from '../saine.jpg'
import oriental from '../oriental.avif'
import asiatique from '../asiatique.jpg'
import italia from '../italia.jpg'
import tajine from '../tajine.png'
import steak from '../steak.jpg'


function Home() {
      const divRef = useRef(null);
      const btnRef = useRef(null);
    const [types,setTypes] = useState(window.innerWidth<400?false:true)
const handleClick = useCallback((e) => {
  // Only run if window width is less than 400px
  if (window.innerWidth >= 400) return;

  if (
    types &&
    divRef.current &&
    !divRef.current.contains(e.target) &&
    btnRef.current &&
    !btnRef.current.contains(e.target)
  ) {
    setTypes(false);
  }
}, [types]);
     useEffect(() => {
  document.addEventListener("click", handleClick);

  return () => {
    document.removeEventListener("click", handleClick);
  };
}, [handleClick]);


  return (
    <>
        <header id="headerr">
            <h1 style={{color:'#fff'}}>LUNCHBOX</h1>
            <i ref={btnRef} onClick={()=>setTypes(!types)} id="bars" className="fa-solid fa-bars"></i>
            {types && 
            <div ref={divRef} id="types">
                <Link to="/restaurantownersignup"><span style={{color:'black',backgroundColor:'orange',fontSize:'0.9em',fontWeight:'bold'}}>Entreprise</span></Link>
                <Link to="/couriersignup"><span style={{color:'black',backgroundColor:'orange',fontSize:'0.9em',fontWeight:'bold'}}>Partenaire</span></Link>
                <Link to="/customersignup"><span style={{color:'black',backgroundColor:'orange',fontSize:'0.9em',fontWeight:'bold'}}>Salarié</span></Link>
                <Link to="/login"><span style={{color:'black',backgroundColor:'orange',fontSize:'0.9em',fontWeight:'bold'}}>Login</span></Link>
            </div>}
        </header>
        <main className='main' id="main">
            <img alt="image1" src={Hero} style={{objectFit:'cover',width:'100%',height:'500px'}} />
            <h1>"Profitez de votre pause, on vous livre directement au bureau."</h1>
        </main>
        <main className='main' id="cll">
                <span style={{backgroundColor:'green'}}>Ma position</span>
                <span style={{backgroundColor:'orange'}}>Saisissez l'adresse de votre entreprise pour découvrir votre menu</span>
        </main>
        <main className='main'>
            <h2 style={{marginTop:'10px'}}>Pour ajouter votre entreprise à notre liste, celle-ci doit ouvrir un compte Entreprise auprès de notre service</h2>
        </main>
        <main className='main' id="mm">
            <div>
                <span>1</span>
                <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span>
            </div>
            <div>
                <span>2</span>
                <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span>
            </div>
            <div>
                <span>3</span>
                <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span>
            </div>
            <div>
                <span>4</span>
                <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span>
            </div>
        </main>
        <main className='main' id="ph">
            <img alt="image2"src={Eric}/>
            <img alt="image3"src={Yaki}/>
            <img alt="image4"src={Fassi}/>
            <img alt="image5"src={Mcd}/>
            <img alt="image9"src={Kfc}/>
            <img alt="image7"src={Burger}/>
        </main>
        <main className='main php'>
            <div>
                <img alt="image8"src={Plate}/>
                <p>Nos partenaires comptent parmi les meilleurs restaurants de votre ville, avec une qualité élevée et une excellente réputation.</p>
            </div>
            <div>
                <img alt="image9"src={Cheif}/>
                <p>
                    50 plats dans un menu varié qui satisfait tous les gouts
                </p>
            </div>
            <div>
                <img alt="image10"src={Order}/>
                <p>
                    Des plats diversifiés et variés : marocain, oriental, italien, asiatique, français, burgers,
                    salades, cuisine saine, poissons. 
                </p>
            </div>
        </main>
        <main className='main'>
            <h2>Nous avons mis à votre disposition des cuisines variés afin de satisfaire tous les gouts</h2>
        </main>

        <main className='main php'>
            <div>
                <img alt="image11"src={poissons}/>
                <p>Cuisine marocaine.</p>
            </div>
            <div>
                <img alt="image12"src={coucous}/>
                <p>
                    Cuisine française.
                </p>
            </div>
            <div>
                <img alt="image13"src={marocains}/>
                <p>
                    Cuisine italienne 
                </p>
            </div>
            <div>
                <img alt="image14"src={saine}/>
                <p>
                    Cuisine asiatique 
                </p>
            </div>
            <div>
                <img alt="image15"src={oriental}/>
                <p>
                    Cuisine orientale 
                </p>
            </div>
            <div>
                <img alt="image16"src={asiatique}/>
                <p>
                    Cuisine saine 
                </p>
            </div>
            <div>
                <img alt="image17"src={italia}/>
                <p>
                    Cuisine marocaine 
                </p>
            </div>
            <div>
                <img alt="image18"src={tajine}/>
                <p>
                    Cuisine marocaine 
                </p>
            </div>
            <div>
                <img alt="image19"src={steak}/>
                <p>
                    Couscous
                </p>
            </div>
        </main>

        <main className='main' style={{background:"#fff",marginBottom:'10px'}}>
            <h2 id="h2"><span style={{color:"green"}}>Télécharger</span> <br/><span style={{color:"rgb(128,255,255)"}}>l'application</span><br/>  <span style={{color:"green"}}>REFECTORY</span></h2>
            <p>Désespérement bloqué dans les bouchons ou dans une réunion qui s'éternise ? Offrez-vous une pause déjeuner savoureuse, commandes en un clin d'oeil, et ce, sans lever le petit doight(ou presque).</p>
            <div className="apps" id="ppl">  
                <img alt="image20"src={Apps}/>
                <img alt="image21"src={Google}/>
            </div>
        </main>
        <main className='main' id="mmm">
            <div>
                <h2>Comment ça marche?</h2>
                <div className="footer">
                    <span>Accueil</span>
                    <span>Nos offres pros</span>
                    <span>Notre frigo connecté</span>
                </div>
            </div>
            <div>
                <h2>Nos valeurs</h2>
                <div className="footer">
                    <span>Notre histoire</span>
                    <span>Notre blog</span>
                    <span>Nos jobs</span>
                </div>
            </div>
            <div>
                <h2>Service clients</h2>
                <div className="footer">
                    <span>Besoin d'aide?</span>
                    <span>Contactez-nous</span>
                </div>
            </div>
            <div>
                <h2>Télécharger l'app</h2>
                <div className="apps">
                    <img alt="image22"src={Apps}/>
                    <img alt="image32"src={Google}/>
                </div>
            </div>

        </main>
        <main className='main'>
            <h2>&copy; 2025 REFECTORY</h2>
            {window.innerWidth<400? <div id="plm">
                <span>Données personnelles </span>
                <span> Politique sur les cookies </span>
                <span> Paramétrer vos cookies </span>
                <span> Conditions des offres en cours </span>
                <span> Mentions légales </span>
                <span> CSV</span>
            </div>:<div id="plm">
                <span>Données personnelles </span>|
                <span> Politique sur les cookies </span>|
                <span> Paramétrer vos cookies </span>|
                <span> Conditions des offres en cours </span>|
                <span> Mentions légales </span>|
                <span> CSV</span>
            </div> }
            
        </main>
    </>
  )
}

export default Home