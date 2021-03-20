// var a =5;
// var b = '5';


// if (a == b )
// {
//     console.log('true')
// }else{
//     console.log('false')
// }



// var btn = document.getElementById("myBtn");
// btn.onclick=function()
// {
//     alert('Hello, Wolrd');
//     alert('Bye, Wolrd');
// }



// function runMe()
// {
//     alert('Simple Message');
// }


// setTimeout( runMe, 3000)



// function runMe()
// {
//     console.log('Simple Message');
// }


// setInterval( runMe, 1000)

var u_name = document.myForm.u_name;
var u_pass = document.myForm.u_pass;

var userName = "FatalFury"
var passWord = "123"

function runMe()
{
    if(u_name.value==userName && u_pass.value==passWord)
    {
        console.log('Login Success');
    }else {
        console.log('Login Error');
    }
}