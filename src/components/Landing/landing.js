import React, {Component} from 'react';
import logo from '../../images/sayaradz_logo.png';
import logo_big from '../../images/sayaradz_logo_2.png';
import slide1 from '../../images/img14.jpg';
import slide2 from '../../images/img11.jpg';
import slide3 from '../../images/img5.jpg';
import slide4 from '../../images/img16.jpg';
import slide5 from '../../images/img1.jpg';
import service1 from '../../images/img12.jpg';
import service2 from '../../images/service2.jpg';
import service3 from '../../images/img15.jpg';
import '../../css/foundation.css';
import '../../slick/slick.css';
import '../../css/style.css' ;
import '../../css/responsive.css' ;
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

//React Admin
import { Admin, Resource,ListGuesser } from 'react-admin';

// Files csv
import {filestock} from '../../Fichiers CSV/file stock.js';
import {filetarifs} from '../../Fichiers CSV/file tarifs.js';

// Components
import RestProvider from '../../RestProvider';
import AuthProvider from '../../AuthProvider';
import Dashboard from '../../Dashboard';
import { TarifsList, TarifsEdit } from '../../tarifs.js';
import { ModelList, ModelEdit, ModelCreate } from '../../Gerer Modeles/Model.js';
import { VersionList, VersionEdit, VersionCreate } from '../../Gerer versions/Version.js';
import { OptionsList, OptionsEdit, OptionsCreate } from '../../Gerer Options/Options.js';
import { ColorsList, ColorsEdit, ColorsCreate } from '../../Gerer coleurs/Colors.js';
import { NewcarsList } from '../../newcars.js';
import { CommandList,CommandEdit } from '../../Commande/Command.js';
// Icons
import ManufacturerIcon from '@material-ui/icons/DirectionsCar';
import ColorsIcon from '@material-ui/icons/Palette';
import FileIcon from '@material-ui/icons/PublishRounded';
import OptionsIcon from '@material-ui/icons/List';
import StockIcon from '@material-ui/icons/LocalCarWash';
import CommandIcon from '@material-ui/icons/Description';
import tarifIcon from '@material-ui/icons/MonetizationOn';
import indigo from '@material-ui/core/colors/indigo';
import { i18nProvider} from '../../myTheme.js';
import { createMuiTheme } from '@material-ui/core/styles';
import SimulerPrix from './../../SimulerPrix/simulerPrix';


const theme = createMuiTheme({
  palette: {
    secondary: indigo,
    //type: 'dark', // Switching the dark mode on is a single property value change.
  },
 });

function Login() {
  return (
    <div>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <Admin  locale="fr" i18nProvider={i18nProvider} theme={theme}   dashboard={Dashboard} authProvider={AuthProvider} dataProvider={RestProvider}>
        <Resource  name="models" options={{ label: 'Modèles' }} list={ModelList} edit={ModelEdit} create={ModelCreate} icon={ManufacturerIcon} />
        <Resource  name="versions" options={{ label: 'Versions' }} list={VersionList} edit={VersionEdit} create={VersionCreate} icon={ManufacturerIcon} />  
        <Resource  name="options" options={{ label: 'Options' }} list={OptionsList} edit={OptionsEdit} create={OptionsCreate} icon={OptionsIcon} />
        <Resource  name="colors" options={{ label: 'Couleurs' }} list={ColorsList} edit={ColorsEdit} create={ColorsCreate} icon={ColorsIcon} /> 
              
        <Resource  name ="stock" options={{ label: 'fichier stock' }} list={filestock} icon={FileIcon}  /> 
        <Resource  name="post-newcars-stock" options={{ label: 'Voitures en stock' }} list={NewcarsList} icon={StockIcon} />       
        <Resource name="tarifs"  options={{ label: 'fichier tarifs' }} list={filetarifs} icon={FileIcon} /> 
        <Resource  name ="tarifs-versions" options={{ label: 'tarifs des versions ' }} list={TarifsList} edit={TarifsEdit} icon={tarifIcon} /> 
        <Resource  name ="tarifs-options" options={{ label: 'tarifs des options ' }} list={TarifsList} edit={TarifsEdit} icon={tarifIcon}  /> 
        <Resource  name ="tarifs-colors" options={{ label: 'tarifs des couleurs ' }} list={TarifsList} edit={TarifsEdit}   icon={tarifIcon}/> 
        <Resource name="commands"  options={{ label: 'Commands entrées' }} list={CommandList}  edit={CommandEdit} icon={CommandIcon} /> 
        <Resource name="newcars"  options={{ label: 'Simuler Prix' }}  list={SimulerPrix}  icon={tarifIcon}/> 
      </Admin>
    </div>   
  );
 }

const Menu = (props) => {
    return(
         <div>
          <div class="large-3 medium-4 small-12 columns">
            <div id="logo">
              <a href="">
                <img src={logo} alt="Conmpany Name"/>SayaraDz
              </a>
            </div>
          </div>
         
          <div class="large-9 medium-8 small-12 columns">
            <nav class="top-bar" data-topbar role="navigation">
              <ul class="title-area">
                <li class="name"> </li>
                <li class="toggle-topbar menu-icon"><a href=""><span>Menu</span></a></li>
              </ul>
    
              <section class="top-bar-section">
                  <div>
                    <ul class="right">
                      <li class=""><Link to="/Home">{props.list[0]}</Link></li>
                      <li> <Link to="/Contact">{props.list[1]}</Link></li>
                      <li> <Link to="/About">{props.list[2]}</Link></li>
                      <li> <Link to="/SignIn">{props.list[3]}</Link></li>
                      <Link to="/Login">
                        <button class="button round" onClick={props.onClick}>
                              <span>Connexion</span>
                        </button>  
                      </Link>
                    </ul>
                  </div>
              
              </section>
            </nav>
          </div>
                    <Route exact path="/" component={Home}/>
                    <Route path="/Home" component={Home} />
                    <Route path="/Contact" component={Contact} />
                    <Route path="/About" component={About} />
                    <Route path="/SignIn" component={SignIn} />
                    <Route path="/Login" component={Login} />
          
        </div>
    );
 }
  
function Home() {
    return (
      <div>
        <Slider/>
          <Presentation titre="Vous etes les bienvenu" 
            text="SayaraDz est une palteforme destinée aux fabriquants des voitures en Algerie. 
            Vous pouvez facilement inscrire vos modèles pour les vendre"
          />
        <Services/>
      </div>
    );
  }

function Contact() {
    return (
      <div>
        <div class="inner-banner">
          <img src={slide4} alt="Contact" />
        </div>
        <div class="content-sec inner-sec">
          <div class="row">
            <div class="large-12 columns">
              <h2>Contact</h2>
              <p>Vous souhaitez contacter nous? Laissez-nous une ligne ci-dessous</p>
            </div>
            <div class="clearfix">
            </div>
            <form action="#" class="frm">
              <div class="large-6 medium-6 small-12 columns"><input name="" placeholder="Name" type="text" class="radius"/></div>
              <div class="large-6 medium-6 small-12 columns"><input name="" placeholder="Email" type="text" class="radius"/></div>
              <div class="large-6 medium-6 small-12 columns"><input name="" placeholder="Phone" type="text" class="radius"/></div>
              <div class="large-6 medium-6 small-12 columns"><input name="" placeholder="Subject" type="text" class="radius"/></div>
              <div class="large-12 columns"><textarea placeholder="Message" class="radius"></textarea></div>
              <div class="large-12 columns"><input name="submit" type="submit" value="Envoyer" class="button round"/></div>
            </form>
          </div>
        </div>  
      </div>
    );
  }
  
function About() {
    return (
      <div>
        <div class="inner-banner">
          <img src={slide3} alt="About" />
        </div>
        <div class="content-sec inner-sec">
          <div class="row">
            <div class="large-3 medium-3 small-12 columns">
              <div class="">
                <img src={logo_big} alt="About Us" />
              </div>
            </div>
            <div class="large-9 medium-9 small-12 columns">
              <h2>A propos</h2>
              <p>SayaraDz est une palteforme destinée aux fabriquants des voitures en Algerie. Vous pouvez facilement inscrire vos modèles pour les vendre via notre application SayaraDz-mobile.</p>
              <p>SayaraDz est une palteforme destinée aux fabriquants des voitures en Algerie. Vous pouvez facilement inscrire vos modèles pour les vendre via notre application SayaraDz-mobile.</p>
              <p>SayaraDz est une palteforme destinée aux fabriquants des voitures en Algerie. Vous pouvez facilement inscrire vos modèles pour les vendre via notre application SayaraDz-mobile.</p>
              <p>SayaraDz est une palteforme destinée aux fabriquants des voitures en Algerie. Vous pouvez facilement inscrire vos modèles pour les vendre via notre application SayaraDz-mobile.</p>
              <p>SayaraDz est une palteforme destinée aux fabriquants des voitures en Algerie. Vous pouvez facilement inscrire vos modèles pour les vendre via notre application SayaraDz-mobile.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
 
function SignIn() {
    return (
      <div>
        <Slider/>
          <Presentation titre="Vous etes les bienvenu" 
            text="SayaraDz est une palteforme destinée aux fabriquants des voitures en Algerie. 
            Vous pouvez facilement inscrire vos modèles pour les vendre via notre application SayaraDz-mobile "
          />
        <Services/>
      </div>
    );
  }
  
const Slider = () => {
    
    return(
      <div class="slider-sec">
        <div class="slider single-item">
            <div>
                <img src={slide1} alt=" " /></div>
            </div>
        <div class="row">
          <div class="large-12 columns no-pad">
            <div class="banner-txt">
              <h2 class="text">commencez maintenant<br /> pour une meilleure <br />experience</h2>
              <a href="" class="button round">S'inscrire</a> 
              &nbsp;&nbsp;&nbsp;&nbsp;
              <Link to="/Login">
                <button class="button round">
                  <span>Connexion</span>
                </button>  
               </Link>
            </div>
          </div>
        </div>
        <script type="text/javascript">
          $('.single-item').slick();
        </script>            
      </div>
    );
  }
  
const Presentation = (props) => {
    return(
      <div class="content-sec">
        <div class="row">
          <div class="large-12 columns text-center">
            <h2>{props.titre}</h2>
            <p>
            <Router>
              <div>
                <ButtonSuite/> 
              </div>
            </Router>
            </p>
          </div>
        </div>
    </div>  
    );
  }

function ShowButton(props) {
    return (
        <div class="slider-sec">
          <button class="button round" onClick={props.onClick}>
            LIRE LA SUITE
          </button>   
        </div>
    );
  }
  
function HideButton(props) {
    return (
        <div class="slider-sec"> 
          <button class="button round" onClick={props.onClick}>
            LIRE MOINS
          </button>        
        </div>
     
    );
  }
 
class ButtonSuite extends React.Component {
    constructor(props) {
      super(props);
      this.handleShowClick = this.handleShowClick.bind(this);
      this.handleHideClick = this.handleHideClick.bind(this);
      this.state = {isShown: false};
    }
  
    handleShowClick() {
      this.setState({isShown: true});
    }

    handleHideClick() {
      this.setState({isShown: false});
    }
  
    render() {
      const isShown = this.state.isShown;
      let button;
  
      if (isShown) {
        button = 
                <span>
                  <Route path="/" component={Suite} />
                    <Link to="/">
                        <HideButton onClick={this.handleHideClick} />
                    </Link>
                </span>
      } else {
        button = 
                <span> 
                  <Route path="/" component={Moins} />
                    <Link to="/">
                      <ShowButton onClick={this.handleShowClick} />
                    </Link>
                </span>
      }
  
      return (
        <span>
           {button}
        </span>
      );
    }
  }
  
const Suite = (props) => {
    return(
      <span >
        SayaraDz est une palteforme destinée aux fabriquants des voitures en Algerie. 
        Vous pouvez facilement inscrire vos modèles pour les vendre via notre application SayaraDz-mobile  
      </span>  
    );
  }
  
const Moins = (props) => {
    return(
      <span>SayaraDz est une palteforme destinée aux fabriquants des voitures en Algerie. 
      Vous pouvez facilement inscrire vos modèles pour les vendre ... </span>
    );
  }
  
const Service = (props) => {
    
    return(
      <div class="large-4 medium-4 small-12 columns">
      <div class="img-box"><img src={props.img} alt="Service1"/></div>
      <div class="txt-box text-center">
        <h3>{props.titre}</h3>
        <p>{props.text}</p>
        <br/>
        <a href="" class="button radius">LIRE LA SUITE</a>
      </div>
    </div>
    );
  }
  
const Services = (props) => {
    return(
      <div class="content-sec">
        <div class="row">
          <div class="large-12 columns">
            <h2>Nos Services</h2>
          </div>
          <Service nbr={1} titre="Inscrire vos modèles" img={service1} text="Uploader la liste et les informations des véhicules disponibles dans votre stock."/>
          <Service nbr={2} titre="Gérer vos données" img={service2} text="Gérer les modéles, les versions, les couleurs et les options des véhicules."/>
          <Service nbr={3} titre="Gérer vos commandes" img={service3} text="Recevoir et consulter les commandes pour leur validation ou leur rejet"/>
        </div> 
      </div>
    );
  }
  
const Footer = (props) => {
    return(
      <div>
        <div class="footer-sec">
          <div class="row">
            <div class="large-3 medium-3 small-12 columns">
              <div class="foot-1">
                <h4>Accès Rapide</h4>
                <ul>
                  <li><a href="" title="Home">ACCUEIL</a></li>
                  <li><a href="" title="About Us">CONTACT</a></li>
                  <li><a href="" title="FAQs">A PROPOS</a></li>
                </ul>
              </div>
            </div>
            <div class="large-3 medium-3 small-12 columns">
              <div class="foot-1">
                <h4>Services</h4>
                <ul>
                  <li><a href="" title="Services">Inscrire vos modèles</a></li>
                  <li><a href="" title="Services">Gérer vos données</a></li>
                  <li><a href="" title="Services">Gérer vos commandes</a></li>
                </ul>
              </div>
            </div>
            <div class="large-4 medium-3 small-12 columns">
              <div class="foot-1">
                <h4>Addresse</h4>
                <p>44 New Design Street, Melbourne 005+1 (123) 456-7890-321</p>
                <ul>
                  <li><a href="" target="_blank">info@sayaradz.dz</a></li>
                </ul>
              </div>
            </div>     
            <div class="large-2 medium-3 small-12 columns">
              <div class="foot-1">
                <h4>Suivez-Nous</h4>
                <div class="social">
                  <div class="facebook"><a href="" class="facebook"></a></div>
                  <div class="twitter"><a href="" class="twitter"></a></div>
                  <div class="gplus"><a href="" class="gplus"></a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="copy">
          <div class="row">
            <div class="large-12 columns">
              &copy; by 2019 SayaraDz
            </div>
          </div>
        </div>
      </div>
    );
  }
  
class Landing extends Component {
    
    render(){
      return(
        <body> 
          <Router>
            <Menu list={["ACCUEIL","CONTACT","APROPOS","S'inscrire"]}/>
            <Footer />
          </Router>
        </body>
      );
    }
  }

export default Landing;
 