/* let r = document.getElementById("h");
console.log(r);

//document.getElementByClassName("")

let res = document.getElementsByClassName("class");
console.log(res);

//document.getElementByClassName("")
let p = document.getElementsByTagName("p");
console.log(p);

//query selector all

let element = document.querySelectorAll("p");
console.log(element);


//query selector

let ele = document.querySelector("p");
console.log(ele);

//FOR ID QUERY SELECTOR

let id = document.querySelector("#my");
console.log(id);

//FOR CLASS QUERY SELECTOR

let Q = document.querySelector(".class");
console.log(Q);


*/

/*
//Properties in DOM (document object model)

// * innerText
let div = document.querySelector("div");
console.log(div.innerText);

// * innerText change/set
let d = document.querySelector("div");
console.log(d.innerText = "abcd");


// * innerHTML
let dv = document.querySelector("div");
console.log(dv.innerHTML);

// * innerText change/set
let di = document.querySelector("div");
console.log(di.innerHTML = "<div>inner Html</div>");


*/

/*

//-----------Pratice------------//

let h1 = document.querySelector("h1");
console.log(h1.innerText);

h1.innerText = h1.innerText + " from youtube";


//-----------Pratice2------------//

let divs = document.querySelectorAll(".box");
console.log(divs);
//to access indiidual


/*
console.log(divs[0]);
console.log(divs[1]);
console.log(divs[2]);

*/


//to change text indiidual for beginner

/*

divs[0].innerText = "1st change";
divs[1].innerText = "2nd change";
divs[2].innerText = "3rd change";


*/

/*

//using for of loop
let idx = 1;
for(div of divs)
{
    div.innerText = `new uniques value ${idx}`;
    idx++;
}

*/


// Attriute in Document object model

/*
let div = document.querySelector("div");
console.log(div);

let id = div.getAttribute("class");

console.log(id);


let h2 = document.querySelector("h2");
console.log(h2);


let h = h2.setAttribute("id","id2");

*/

// style

/*
let div = document.querySelectorAll("div");
console.log(div);
console.log(div.style);

*/



/*
// INSERT  new element

let newbtn = document.createElement("button");
newbtn.innerText = "click me !";

let div = document.querySelector("div");
//div.append(newbtn);
//div.prepend(newbtn);
//div.before(newbtn);
div.after(newbtn);


*/

// Pratice


/*

let btn = document.createElement("button");
btn.innerText = "Click ME!";

btn.style.color = "white";
btn.style.backgroundColor = "red";


document.querySelector("body").prepend(btn);


*/