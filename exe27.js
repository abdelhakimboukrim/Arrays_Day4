//methode without a new array
let arr=[1,2,3,4,5,6]
console.log(arr)
let i=0
let j=arr.length-1
let temp=0
while (i<j){
 temp=arr[i]
 arr[i]=arr[j]
 arr[j]=temp
i++
j--
}
console.log(arr)

