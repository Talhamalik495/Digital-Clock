let month = [" January",
    " February",
    " March",
    " April",
    " May",
    " June",
    " July",
    " August",
    " Sep",
    " Out",
    " Nov",
    " December",
];
let week = [
    "Sanday",
    "Monday",
    "Tuesday",
    "wednesday",
    "Thersday",
    "Friday",
    "Saturday"
]
// first part time 
let a = document.getElementById("hours")
let l = document.getElementById("zero2")
let b = document.getElementById("minus")
let c = document.getElementById("ampm")
let e = document.getElementById("zero")
let d = document.getElementById("seconds")
let zero6 = document.getElementById("zero5")

// let f = document.getElementById("zero")
// second part date 
let p = document.getElementById("zero3")
let g = document.getElementById("days")
let h = document.getElementById("date")
let i = document.getElementById("year")
let k = document.getElementById("zero1")
let j = document.getElementById("month")
let t = document.getElementById("zero4")

setInterval(() => {

    // past timey
    // currentdate 
    let currentdate = new Date();
    // hours 
    let z = currentdate.getHours()
    if (z > 12) {
        hours = z - 12;
    } else {
        hours = z;
    }
    a.innerHTML = hours, z;
    //ampm
    if (z >= 12) {
        ampm = "PM"
    }
    else {
        ampm = "AM"
    }
    c.innerHTML = ampm;
    let r = currentdate.getMinutes();
    b.innerHTML = r;
    if (r < 10) {
        zero6.innerHTML = "0"
    }
    if (z < 10) {
        // l.innerHTML = z;
        heno = "0"
    } else {
        heno = "";
    }
    l.innerHTML = heno;
    // seconds 
    let x = currentdate.getSeconds();
    d.innerHTML = x;
    if (x < 10) {
        hero = "0";
    }
    else {
        hero = ""
    }
    e.innerHTML = hero;

    // e.innerHTML = x;
    // f.innerHTML = currentdate.getHours();
    // past date 
    // day 
    let v = week[currentdate.getDay()].slice(0, 3);
    g.innerHTML = v;
    // if (v < 10) {
    //     haro = "0"
    // }
    // else {
    //     haro = ""
    // }
    // p.innerHTML = haro;
    // date 
    let w = currentdate.getDate();
    h.innerHTML = w;
    if (w < 10) {
        hazo = "0"
    }
    else {
        hazo = ""

    }
    // month 
    let y = month[currentdate.getMonth()].slice(0, 4); + 1
    j.innerHTML = y;
    // if (y < 10) {
    //     q = "0"
    // }
    // k.innerHTML = q;
    // year 
    i.innerHTML = currentdate.getFullYear();
}, 1000);


