import debounce from 'lodash/throttle';
import Elements from './Base';
class MobileMenu {
    constructor() {
        this.browserWidth = window.innerWidth;
        this.theme = "theme-1";
        this.onClickEvent();
        this.insertMobileBg();
    }
    
    //Event Handlers
    onClickEvent(){
        Elements.mobileIcon.addEventListener("click", ()=>this.toggleMenu());
        Elements.menuButtons.forEach((b,i) => this.switchThemes(b,i));
        window.addEventListener("resize", debounce(() => this.adjustWidth()), 53000);
    };


    // Function to Hide or show Menu
    toggleMenu(){
        Elements.menuContainer.classList.toggle("show-menu");
        Elements.mobileIcon.classList.toggle("nav__mobile-icon--toggle")
    }

    //Function Checks for which button is selected and switches theme
    switchThemes(button,index){
        button.addEventListener("click", (e)=>{
            e.preventDefault();
            Elements.menuButtons.forEach(el => el.classList.remove("is-current-link"));
            Elements.mobileIcon.classList.remove("nav__mobile-icon--toggle");
            Elements.menuContainer.classList.remove("show-menu");
            if(index==0){
                this.theme = "theme-1"
                Elements.themeContainer.classList.remove("theme-2");
                Elements.themeContainer.classList.add("theme-1");
                button.classList.add("is-current-link");
                this.insertMobileBg();
            } else {
                this.theme = "theme-2"
                Elements.themeContainer.classList.remove("theme-1");
                Elements.themeContainer.classList.add("theme-2");
                button.classList.add("is-current-link");
                this.insertMobileBg()
            }
        })
    }

    //Background color function adjuster for mobile 
    insertMobileBg(){
        if(this.browserWidth <= 520) {
            if(this.theme == "theme-1"){
                Elements.mobileBg.classList.remove("theme-2__calculator");
                Elements.mobileBg.classList.add("theme-1__calculator");
            } else {
                Elements.mobileBg.classList.remove("theme-1__calculator");
                Elements.mobileBg.classList.add("theme-2__calculator");
            }
        } else {
            Elements.mobileBg.classList.remove("theme-1__calculator");
            Elements.mobileBg.classList.remove("theme-2__calculator");
        }
    }

    // Function checks for if screen width is adjusted
    adjustWidth(){
        this.browserWidth = window.innerWidth;
        this.insertMobileBg();
    }
}


export default MobileMenu;