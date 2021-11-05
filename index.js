function saturdayFun(activity = 'roller-skate'){
return (`This Saturday, I want to ${activity}!`)
}

function mondayWork(task = 'go to the office'){
return (`This Monday, I will ${task}.`)
}

function wrapAdjective(emphasis = '*'){
    
   return function emphatic(adjective = 'special'){
        return `You are ${emphasis}${adjective}${emphasis}!`
    }
}

