// Complete the braces function below.
function braces(values) {
    function check(text) {
        let tempAnswer = [];
        
        for (let j = 0; j < text.length; j++) {
            let s =text[j];
            
            if (s ==='(' || s === '[' || s === '{') {
                tempAnswer.push(s);
                continue;
            }
            
            if (tempAnswer.length === 0) {
                return false;
            }
            
            let test = [];
            switch (s) {
                case ')':
                    test = tempAnswer.pop();
                    if (test === '{' || test === '[')
                        return false;
                    break;
                case '}':
                    test = tempAnswer.pop();
                    if (test === '(' || test === '[')
                        return false;
                    break;
                case ']':
                    test = tempAnswer.pop();
                    if (test === '(' || test === '{')
                        return false;
                    break;
            }
        }
        
        return tempAnswer.length === 0;
    }
    let answers = [];
    for (let i = 0; i < values.length; i++) {
        const temp = values[i].split('');
        
        if (check(temp)) {
            answers[i] = 'YES'
        } else {
            answers[i] = 'NO'
        }
        
        
    }
    
    return answers;

}

