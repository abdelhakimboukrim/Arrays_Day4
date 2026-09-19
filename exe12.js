arr1=[1, 2, 3, 4, 5]
arr2=[]

x=arr1[0]
let i=0;
while(i<4){
arr2[i]=arr1[i+1]
i++
}
arr2.push(x)
console.log(arr2)