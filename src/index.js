import Person from "./person";
import './styles/style.sass'
import logo from './images/logo.svg'
import arrow from './images/arrow.svg'
import box1 from './images/box1.svg'
import box2 from './images/box2.svg'
import burger from './images/burger.svg'
import cash from './images/cash.svg'
import email from './images/email.svg'
import item2 from './images/item2.svg'
import item3 from './images/item3.svg'
import ladder from './images/ladder.svg'
import main from './images/main.svg'
import one from './images/one.svg'
import telegram from './images/telegram.svg'
import viber from './images/viber.svg'
import watsap from './images/watsap.svg'
import {NavigationComponent} from "./components/navigation.component";
import {MagazineComponent} from "./components/magazine.component";
import {DeliveryComponent} from "./components/delivery.component";
import {ContactsComponent} from "./components/contacts.component";
import {BurgerComponent} from "./components/burger.component";

const navigation = new NavigationComponent('nav')
const magazin = new MagazineComponent('magazin')
const delivery = new DeliveryComponent('delivery')
const contacts = new ContactsComponent('contacts')
new BurgerComponent('burger')

navigation.registerTabs([
    {name: 'magazin', component: magazin},
    {name: 'delivery', component: delivery},
    {name: 'contacts', component: contacts},
])