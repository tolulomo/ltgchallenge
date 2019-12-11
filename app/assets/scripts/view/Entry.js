import Elements from './Base';
import Calculator from '../model/Calculator';

class CalcEntry {
    constructor(){
        this.data = 0
        this.calculator = new Calculator();
        this.events();
        this.calcData();
    }

    events(){
        window.addEventListener("click", (e) => this.buttonPressed(e))
    }

    buttonPressed(e){
        const element = e.target.closest(".calc__row-item");
        if(!element){
            return
        }

        this.calculator.runEntryFunction(element.dataset.btn);
        this.calcData();
    }

    calcData() {
        this.data = this.calculator.calcData();
        Elements.calcDisplay.innerHTML = this.data;
    }

}

export default CalcEntry;