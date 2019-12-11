import '../styles/style.css';
import { MobileMenu, CalcEntries } from './view';

//Switch Themes
new MobileMenu();

//Calculation Logics
new CalcEntries();

if(module.hot){
    module.hot.accept();
}