
let arr=["Apple","Mango","Orange"];

console.log("Before push");
for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
        }

arr.push("Guava")
arr.push("Tomato")
arr.push ("Potato")
arr.push(5);

console.log("After Push")
for(let i=0; i<arr.length; i++){
    console.log(arr[i])

}

arr.pop();

console.log("After pop:")
for(let i=0; i<arr.length; i++){
    console.log(arr[i])
}


let names=["Hamim","Fahim","Rahul"]

const a =names.toString()

console.log(a)

let X=["Toyota","Ferrari"];
let Y=[2023,2024]
let z=[2.5,1.4]
const r = x.concat(y).concat(z);
for(let i=0; i<r.length; i++){
    console.log(r[i])
}

let s=[10,5,100,50];
const  x =s.shift();
const y= s.shift()

for(let i=0; i<s/length; i++){
    console.log(s[i])
}

let R =["Lemon","Banana","Orange","Mango"]
r.unshift("Jack-fruit","Guava","Dates")

for(let i=0; i<r.length; i++){
    console.log(r[i]);
}

/*
let test=["Hand","Leg","Head","Nose","Hair"]

const S =test.slice(0,4);

console.log(s)

*/


let test =["Hand","Leg","Head","Nose","Hair"];

console.leg(test)


/*
let num = [5,2,1,8,3]
let sum = 0;

for(let i=0; i<num.length; i++){
    sum=sum+num[i];
}

console.log(sum)
*/

//function =1

/*
function add(){
let x=5;
let y=3;
let r=x+Y
console.log(r)
}

add()
sub()

*/

/*
const add =()=>{
    let x=5
    let y=3
    let r=x+Y
    console.log(r)
    }

    add()
    */

    function print(s,m,n){
        console.log("Hello "+s+" "+m+" "+n);
        let r =s+m+n
        console.log(r)
    }

    print(10,"Hi",2.7)

    print(5,2,5)


    function multi(x,y){
        let r = x*Y
        return r 
    }

    console.log(multi(4,3));
