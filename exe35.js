arr=[1, 2, 3, 4, 5, 6,333,888];
even=[]
odd=[]
for(i of arr){
    if (i%2===0) {
        even.push(i)
    }
    else odd.push(i)

}
console.log("even:",even)
console.log("odd",odd)