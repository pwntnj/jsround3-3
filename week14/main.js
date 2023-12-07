// import { CookieUtil } from "./MyLib/cookieUtil.js";

// document.cookie = "username=Natthanan"
// document.cookie = "course=INT201"
// document.cookie = "credit=3"
// document.cookie = "credit=2"
// const currentCookie  = document.cookie
// console.log(currentCookie);
// console.log(CookieUtil.get('course'));

// CookieUtil.set("username","Natthanan",new Date(2023,11,25))
// CookieUtil.set("course","INT201",new Date(2023,11,31))
// CookieUtil.set("credit","2",new Date(2024,0,1))

// console.log(CookieUtil.get('username'));
// console.log(CookieUtil.get('course'));
// console.log(CookieUtil.unset('credit'));
// console.log(CookieUtil.get('credit'));

//local
// let counter = localStorage.getItem('count')
// if (counter === null) {
//     counter = 1
//     localStorage.setItem('count',counter)
// }else localStorage.setItem('count' , ++counter)
// alert(`counter=${counter}`)

//session
let counter = sessionStorage.getItem('count')
if (counter === null) {
    counter = 1
    sessionStorage.setItem('count',counter)
}else sessionStorage.setItem('count' , ++counter)
alert(`counter=${counter}`)

sessionStorage.removeItem('count')
sessionStorage.clear //all item remove