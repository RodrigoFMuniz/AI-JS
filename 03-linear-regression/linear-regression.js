function produto(x=[], y=[]){
    return x.map((num, index) => parseFloat((parseFloat(num) * parseFloat(y[index])).toFixed(4)))
}

function quadrados(x=[]){
    return x.map((num) =>  parseFloat((parseFloat(num)**2).toFixed(4)))
}

console.log(quadrados([5,6.65,7.53]))
console.log(produto([5,6.93,7.3], [1,2.42,3.3]))