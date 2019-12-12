// Function to write to calculator memory
export const numbers = (entry, memory) => {
    if(memory.logic == null){
        const before = checkBeforeWrite(memory);
        if(before <=7){
            // Deny zero at the begining of an entry
            if(entry == "0"){
                if(memory.beforeLogic.length > 0){
                    return memory.beforeLogic.push(entry);
                }
                return
            }
            return memory.beforeLogic.push(entry);
        }
    } else {
        const after = checkBeforeWrite(memory);
        if(after <=7){
            // Deny zero at the begining of an entry
            if(entry == "0"){
                if(memory.afterLogic.length > 0){
                    return memory.afterLogic.push(entry);
                }
                return;
            }
            return memory.afterLogic.push(entry);
        }
    }
}

// Function execute when equal sign is pressed
export const equalTo = (memory) => {
    let before = memory.beforeLogic.findIndex(el => el === ".");
    let after = memory.afterLogic.findIndex(el => el === ".");
    if(memory.beforeLogic.length > 0){
        if(before <= -1){
            before = parseInt(memory.beforeLogic.reduce(combineNumbers, ''));
        }else {
            before = parseFloat(memory.beforeLogic.reduce(combineNumbers, ''));
        }
    } else {
        before = 0;
    }

    if(memory.afterLogic.length > 0) {
        if(after <= -1){
            after = parseInt(memory.afterLogic.reduce(combineNumbers, ''));
        }else{
            after = parseFloat(memory.afterLogic.reduce(combineNumbers, ''));
        }
    } else {
        after = 0;
    }

    switch(memory.logic){
        case "+":
            memory.memory = before + after;
            return clearMemory(memory);
        case "-":
            memory.memory = before - after;
            return clearMemory(memory)
        case "*":
            memory.memory = before * after;
            return clearMemory(memory)
        case "/":
            memory.memory = before/after;
            return clearMemory(memory)
        default:
            return;
        
    }
}

// Function checks for what mathematical operator is pressed 
// to determine calculation and addition entry
export const operator = (entry, memory) => {
    let operator = "+";
    if(entry == "+"){
        operator = "+";
    }else if(entry == "-"){
        operator = "-";
    } else if(entry == "/"){
        operator = "/";
    }else if(entry == "*"){
        operator = "*";
    }
    
    if(memory.afterLogic.length > 0){
        equalTo(memory);
        memory.beforeLogic.push(memory.memory);
        memory.logic = operator;
        return; 
    }
    if(memory.memory > 0){
        memory.beforeLogic.push(memory.memory);
        return memory.logic = operator;
    }
    return memory.logic = operator;
}

// Function checks for plus or minus operator and append it to the begining of an entry
export const plusorminus = (memory) => {
    const check = memory.beforeLogic.findIndex(el => el == "-");
    if(check > -1) {
        return memory.beforeLogic.splice(0,1);
    }
    if(memory.beforeLogic.length > 0){
        return memory.beforeLogic.unshift("-");
    }
}

// Combines entry input since its recieved into an array
export const combineNumbers =(a,b) =>{
    return `${a}${b}`;
} 

// Clear calculator memory after each calculation
const clearMemory = (memory) => {
    memory.beforeLogic = [];
    memory.afterLogic = [];
    return memory.logic = null;
}

// Function to check if maximum digit is reached (8 is max digit)
const checkBeforeWrite = (memory) => {
    let accum = 0;
    if(memory.logic == null){
        memory.beforeLogic.forEach(el => accum += el.length);
        return accum;
    } else {
        memory.afterLogic.forEach(el => accum += el.length);
        return accum;
    }
}