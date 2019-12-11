export const numbers = (entry, memory) => {
    if(memory.logic == null){
        return memory.beforeLogic.push(entry);
    } else {
        return memory.afterLogic.push(entry);
    }
}


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

export const plusorminus = (memory) => {
    const check = memory.beforeLogic.findIndex(el => el == "-");
    if(check > -1) {
        return memory.beforeLogic.splice(0,1);
    }
    if(memory.beforeLogic.length > 0){
        return memory.beforeLogic.unshift("-");
    }
}

export const combineNumbers =(a,b) =>{
    return `${a}${b}`;
} 

const clearMemory = (memory) => {
    memory.beforeLogic = [];
    memory.afterLogic = [];
    return memory.logic = null;
}