function display(num){
    result.value += num
}
function allClear(){
    result.value = ''
}
function output(){
    result.value = eval(result.value)
}

function back(){
    result.value = result.value.slice(0,-1)
}