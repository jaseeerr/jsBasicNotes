

let firstName = "bro";
let age = 20;
student = true;

let username;


console.log("Hey ", firstName)
console.log("You are ",age,"Years old");
console.log("Enrolled: ", student);



document.getElementById("p1").innerHTML = "hey " + firstName;
document.getElementById("p2").innerHTML = "you are " + age + " Years old";
document.getElementById("p3").innerHTML = "Enrolled: " + student;



document.getElementById("myButton").onclick = function(){

    username = document.getElementById("myText").value;
    console.log(username);
    document.getElementById("display").innerHTML = "Hey there " + username;
}

// math functions

//1-rounding

let x = 3.14;

console.log("Value of x is ",x)

x = Math.round(x); //round it to 3 if below .5 or rounds it to 4, while x is 3.14

console.log("Rounded normal value of x is ",x);

x = Math.floor(x);
console.log("Rounded to the lowest value of x is  ",x);

x = 3.14;

x=Math.ceil(x);
console.log("Rounded to the highest value of x is ",x);


//2-square root

let a = 4, y = 16, z = 25;

a = Math.sqrt(a);
console.log("The square root of 4 is ",a);

y = Math.sqrt(y);
console.log("The square root of 16 is ",y);

z = Math.sqrt(z);
console.log("The square root of 25 is ",z);

//3-Max & Min


let maximum;
let minimum;


maximum = Math.max(a,y,z);
console.log("largest number in", a,z,y," is ", maximum);

minimum = Math.min(a,y,z);
console.log("smallest number in", a,z,y," is ", minimum);


//4-rise to the power

a = Math.pow(a, 4);
y = Math.pow(y, 3);

console.log("2 to the power of 4 is ", a);
console.log("4 to the power of 3 is ", y);





// practice, finding the hypotenuos of a triangle with user inputs.
// using window promt, printing inside console.


/*
let as;
let bs;
let hyp;

as = window.prompt("Enter side A: ");
as = Number(as);

bs = window.prompt("Enter side B: ");
bs = Number(bs);


hyp = Math.sqrt(Math.pow(as, 2) + Math.pow(bs, 2));

console.log("The hypotenuse of the entered value is : ", hyp);

*/
//   the other way


let as;
let bs;
let hyp;


document.getElementById("submit").onclick = function(){

    as = document.getElementById("as").value;
    as = Number(as);
    bs = document.getElementById("bs").value;
    bs = Number(bs);

    hyp = Math.sqrt(Math.pow(as, 2) + Math.pow(bs, 2));

    document.getElementById("hyp").innerHTML = "the hypotenuse is " + hyp;



}




// counter program

let count = 0;

document.getElementById("counter").innerHTML = 0;

document.getElementById("down").onclick = function(){

    count = count-1;
    document.getElementById("counter").innerHTML = count;
}

document.getElementById("reset").onclick = function(){

    count = count=0;
    document.getElementById("counter").innerHTML = count;
}

document.getElementById("up").onclick = function(){

    count = count+1;
    document.getElementById("counter").innerHTML = count;
}


// roll the dice

let i;
let j;
let k;
let s;

document.getElementById("rollbtn").onclick = function(){

    i = Math.floor(Math.random() * 6) + 1;
    j = Math.floor(Math.random() * 6) + 1;
    k = Math.floor(Math.random() * 6) + 1;

    document.getElementById("rolla").innerHTML = i;
    document.getElementById("rollb").innerHTML = j;
    document.getElementById("rollc").innerHTML = k;
    i = String(i);
    j = String(j);
    k = String(k);

    s = i + j + k;

    document.getElementById("num").innerHTML = "Passcode generated: " + s;
    
    
  
    
   
}


// string properties and methods

let fname = "  alphacode  ";

console.log(fname.charAt(0)); //prints element at 0

console.log(fname.length); //prints the length of the string

console.log(fname.indexOf("a")); //prints out the place of an element

console.log(fname.lastIndexOf("a")); //prints the last occurence

console.log(fname);
fname = fname.trim();
console.log(fname);

fname = fname.toUpperCase();
console.log(fname);

fname = fname.toLowerCase();
console.log(fname);



let phonenumber = "123-456-789";

console.log(phonenumber);

phonenumber = phonenumber.replaceAll("-",".");

console.log(phonenumber);

//slicee


let fullName = "bro code";
let firstname;
lastname = fullName.slice("4");
console.log(lastname);
lastname = fullName.slice("4","7"); 
console.log(lastname);


//method chaining


let somename = "  bro";

let letter = somename.trim().charAt(0).toUpperCase();

console.log(letter);


//if-statements

let cap = 10;

if(cap<=10)
{
    console.log("if statement executed.");
}
else{
    console.log("Else statement executed.");
}


//checkbox and radio buttons



document.getElementById("btn").onclick = function(){

    
    myCheckbox = document.getElementById("checkbox");

    visaBtn = document.getElementById("visaBtn");
    masterBtn = document.getElementById("masterBtn");
    paypalBtn = document.getElementById("paypalBtn");




    if(myCheckbox.checked){

        console.log("Subscribed.");
        document.getElementById("status").innerHTML = "Subscribed.";

    }
    else{
        console.log("Not subscribed.");
        document.getElementById("status").innerHTML = "Not subscribed.";
    }


    if(visaBtn.checked){
        console.log("Visa card selected for payment");
        document.getElementById("pay").innerHTML = "Visa card selected for payment.";
    }

    else   if(masterBtn.checked){
        console.log("master card selected for payment");
        document.getElementById("pay").innerHTML = "master card selected for payment";
        
    }

    else   if(paypalBtn.checked){
        console.log("paypal selected for payment");
        document.getElementById("pay").innerHTML = "paypal selected for payment";
    }
    else{
        console.log("No payment method selected.");
        document.getElementById("pay").innerHTML = "No payment method selected.";
    }  

}


//Switches 

let mark = "A" ;

document.getElementById("grade").onclick = function(){

    mark = document.getElementById("case").value;
    mark = mark.toUpperCase();

switch(mark) 
{
        case mark = "A":
        console.log("VVAUSCS01");
        document.getElementById("stuid").innerHTML = "Your machine generated ID No. is VVAUSCS01.";
        break;
    
        case "B":
        console.log("VVBUSCS02");
        document.getElementById("stuid").innerHTML = "Your machine generated ID No. is VVBUSCS02.";
        break;    

        case "C":
        console.log("VVCUSCS03");
        document.getElementById("stuid").innerHTML = "Your machine generated ID No. is VVCUSCS03.";
        break;  

        case "D":
        console.log("VVDUSCS04");
        document.getElementById("stuid").innerHTML = "Your machine generated ID No. is VVDUSCS04.";
        break;

        case "E":
        console.log("VVEUSCS05");
        document.getElementById("stuid").innerHTML = "Your machine generated ID No. is VVEUSCS05.";
        break;    
        
        default: 
        console.log("Invalid grade.")
        document.getElementById("stuid").innerHTML = "Invalid grade.";


}

}


//not operator with if else.

let temp = 15;
let sunny = true;

if(!(temp > 0))  // using ! before a condtion makes it not.
{
    console.log("it's cold outside.");
}
else
{
    console.log("it's hot outside.");
}

if(!(sunny))
{
    console.log("it's cloudy outside.");
}
else
{
    console.log("it's not cloudy outside.");
}



//while loop 


let ii = 1;
let ad = 10;

console.log("Using while loop here.")

while(ii<=3)
{
    console.log(ii , 'Repeating' , ad);
    ii = ii + 1;
    ad++;

}






//do while loop.

let iii = 4;
let add = 10;
let f = true;
do{
    console.log("Do part") // this executes one time without checking the condition.

}while(iii<=3) // false condition

console.log("loop exited due to false condition");




//for loops

let jj = 1;
let repp = 3;
let jk = 1;

for(jj ; jj<=repp ; jj++)
{
    console.log("Printing in for loop.", jk);
    jk++;
}



// break and continue

console.log("Breaks and continues here.");


console.log("Break")


for(let aa=1;aa<=20;aa++)
{
    if(aa == 13)
    {
        break; // this gets the control out of the loop
    }
    console.log(aa);
    
}

console.log("Got out of the loop.");

console.log("continue.")
for(let bb=1;bb<=20;bb++)
{
    if(bb == 13)
    {
        continue; // this skips execution of the code inside and checks the condition 
    }             //again as if it's already executed the code inside.        
    console.log(bb);
    
}

console.log("Got out of the loop.");



//return


document.getElementById("startArea").onclick = function checkArea()
{
let area;
let width;
let height;

width = window.prompt("Enter the width: ");
height = window.prompt("Enter the height: ");

area = getArea(width, height);

document.getElementById("showArea").innerHTML = "The area is " + area + "cmSq";


function getArea(width, height)
{
    let result = width * height;
    let result1 = "Pooda cherkka ne ";
    return result1;
}

} 


//terinary operation:
                      //1. a condition with ? if true : if false;
                
                      
document.getElementById("agePro").onclick = function agePro()
{
    let adult = ageCheck(age);
age = window.prompt("Enter Your Age: ");
console.log(age);

function ageCheck(age)
{
    age >= 18 ? document.getElementById("showAge").innerHTML = "Adult" : document.getElementById("showAge").innerHTML = "Not Adult";



}

}






let rashi = 19;

rashi >= 18 ? console.log("He is ready for the party.") : console.log("He is not ready for the party.");



//template literals


let namee = "bro";
let item = 35;
let total = 650;


console.log(`Hey ${namee}`);
console.log(`you have ${item} items in cart`);
console.log(`total amount is ${total}`);


let brap = `Hey ${namee}, <br> 
You have ${item} items in your cart. <br>
Your total amount is ${total}.<br>
Thank you ${namee}  `;

document.getElementById("showTem").innerHTML = brap;



//to.LocaleString() : returns a string with language sensitive representation.
//                    Number.toLocaleString(locale, {options});


let myNum = 123456.789;

//myNum = myNum.toLocaleString("en-Us"); //US english
//myNum = myNum.toLocaleString("hi-IN"); // indian hindi
//myNum = myNum.toLocaleString("de-DE"); // std german
//myNum = myNum.toLocaleString("en-Us", {style: "currency", currency: "USD"});
//myNum = myNum.toLocaleString("en-Us", {style: "currency", currency: "INR"});
//myNum = myNum.toLocaleString("en-Us", {style: "currency", currency: "DHS"});
//myNum = myNum.toLocaleString("en-Us", {style: "percent"});
//myNum = myNum.toLocaleString(undefined, {style: "unit", unit: "celsius"});

console.log(myNum);



// Guess the number game.


const answer = Math.floor(Math.random()*10 + 1);
let guesses = 0;

document.getElementById("guessbtn").onclick = function()
{
    guess = document.getElementById("guess").value;
    guesses++;
    
    if(guess == answer)
    {
        alert(`Your guess ${answer} is right, it took you ${guesses} to guess it right`);
    }

    else if(guess < answer)
    {
        alert(`your guess is too small`);
    }
    else if(guess > answer)
    {
        alert(`Your guess is too big`);
    }

}






// Temperature convertor.

// let asnn = tempp * 9/5 + 32; (to farhenheit)
// asnn = (tempp - 32) * (5/9); (to celsius)




let tp;
let ans;

document.getElementById("fBtn").onclick = function()
{
    tp = document.getElementById("tp").value;
    ans = tp * 9/5 + 32;
    ans = ans.toLocaleString(undefined, {style: "unit" , unit: "fahrenheit"});
    document.getElementById("ans").innerHTML = ans;
}



let tp1;
let ans1;

document.getElementById("celBtn").onclick = function()
{
    tp1 = document.getElementById("tp1").value;
    ans1 = (tp1 - 32) * (5/9);
    ans1 = ans1.toLocaleString(undefined, {style: "unit" , unit: "celsius"});
    document.getElementById("ans1").innerHTML = ans1;
}



//Currency convertor


//dollars to rupee

let amt;
let ans2;

document.getElementById("rBtn").onclick = function()
{
    amt = document.getElementById("amt").value;
    ans2 = amt * 76.509026;
    ans2 = ans2.toLocaleString(undefined, {style: "currency", currency: "INR" })
    document.getElementById("rup").innerHTML = ans2;

}


let amt1;
let ans3;

document.getElementById("dBtn").onclick = function()
{
    amt1 = document.getElementById("amt1").value;
    ans3 = amt1 * 0.013070353;
    ans3 = ans3.toLocaleString(undefined, {style: "currency", currency: "USD" })
    document.getElementById("dol").innerHTML = ans3;

}    



// let's play with some arrays

let fruits = ["apple", "orange", "banana"];
console.log(fruits);
fruits[2] = "lemon"; //replace 2nd element with lemon
console.log(fruits);

fruits.push("lemon"); // adds an element at the last
console.log(fruits);

fruits.pop() // removes the last element
console.log(fruits);

fruits.unshift("mango"); //adds an element in starting
console.log(fruits);

fruits.shift(); //removes the first element.
console.log(fruits);

let length = fruits.length; // Shows the length of the array
let index = fruits.indexOf("orange"); //Shows the index of the element given

console.log("Index of orange is ", index); 
console.log("length of the array fruits is ", length);


//array of numbers


let prices = [120, 240, 360, 480, 570, 670, 760];

for(let p = 0; p < prices.length; p++)
{
    console.log(prices[p]);
}

console.log("**************************");
let price1 = [120, 240, 360, 480, 570, 670, 760];
ln = price1.length;

for (let q = ln ; ln >=0 ; ln--)
{
    console.log(price1[ln]);
}
console.log("**********");

for(let price of prices) //another way of iterating thru array. price can be named anything
{
   console.log(price);
}


// sorting arrays


let names = ["arham", "fasil", "domnic", "cleo", "basil", "ema"];

console.log(names);

names = names.sort(); // arranges the names in alphabetic order a to z.
console.log(names);

names = names.sort().reverse(); //this sorts the array in reverse alphabetic order z to a.
console.log(names);


//2D arrays

let frus = ["apple", "orange", "banana"];
let veg = ["carrots", "onions", "potatoes"];
let meat = ["egg", "chicken", "fish"];

let grossList = [frus, veg, meat]; //combines the arrays

grossList[0][2] = "mangoes"; // changes the value of an element.
grossList[2][0] = "steak";


for(let list of grossList )
{
    for(let food of list)
    {
        console.log(food);
    }
}



//Spread operator
//used to unpack elements of an array.
//sign "..."

let nums = [1,2,3,4,5,6,7,8,9,100];

let maxi = Math.max(nums);

console.log(maxi); //This gives NaN

//now let's do it using the spread operator.

maxi = Math.max(...nums);
console.log(maxi);

//merging two arrays using push


let class1 = ["aju", "basil", "cleo"];
let class2 = ["landon", "hope", "melton"];
console.log("Class 1: ",class1);
console.log("Class 2: ",class2);

class1.push(...class2);

console.log("After merge: ", ...class1)

//rest operator skipped at 2:37:43.


//callback

