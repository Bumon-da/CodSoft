let display = document.getElementById('display')
let errMsg = document.getElementById('error')
function isOp(op) {
    return (op == '+' || op == '-' || op == '/' || op == '*')
}

window.addEventListener('keydown', function(event) {
    if (event.shiftKey && event.key === '+') {
        event.preventDefault(); // Prevent the default zoom-in behavior
        display.value += '+';
    } else if (!isNaN(event.key) || isOp(event.key)) {
        display.value += event.key;
    } else if (event.key === 'Enter') {
        event.preventDefault(); // Prevent the default behavior for Enter key
        calc();
    }
});

function calc() {
    try{
        let exp = display.value
        for (i in exp){
            console.log(i)
        }
        let ans = math.evaluate(exp)
        if( ans === undefined){
            throw "Error"
        } else {
            display.value = ans
        }
    } catch (e) {
        errMsg.innerHTML = "Expression gothilla"
        setInterval(() => {
            errMsg.innerHTML = ""
        }, 2000)
    }
}