import { numbers, equalTo, operator, plusorminus, combineNumbers } from './_calcUtility';
class Calculator {
    constructor(){
        this.entryMem = {
            memory: 0,
            beforeLogic: [],
            afterLogic: [],
            logic: null
        };
    }

    // This function is used to handle all entry
    runEntryFunction(entry){
        switch(entry){
            case "start":
                return this.entryMem = {
                    memory: 0,
                    beforeLogic: [],
                    afterLogic: []
                }
            case "plusorminus": 
                return plusorminus(this.entryMem);
            case "%":
                return operator(entry, this.entryMem);
            case "/":
                return operator(entry, this.entryMem);
            case "*":
                return operator(entry, this.entryMem);
            case "-":
                return operator(entry, this.entryMem);
            case "+":
                return operator(entry, this.entryMem);
            case "=":
                return equalTo(this.entryMem);
            default:
                return numbers(entry, this.entryMem);

        }
    }

    // Display data based on entry or calculator state and passes it to Entry.js
    calcData() {
       if(this.entryMem.afterLogic.length > 0){
            const numbers = this.entryMem.afterLogic.reduce(combineNumbers,"");
            return numbers;
        } else if(this.entryMem.beforeLogic.length > 0){
            const numbers = this.entryMem.beforeLogic.reduce(combineNumbers,"");
            return numbers;
        } else if(this.entryMem.memory > 0){
            return this.entryMem.memory;
        } else {
            return 0;
        }
    }
    
}

export default Calculator;