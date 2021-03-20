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

// var u_name = document.myForm.u_name;
// var u_pass = document.myForm.u_pass;

// var userName = "FatalFury"
// var passWord = "123"

// function runMe()
// {
//     if(u_name.value==userName && u_pass.value==passWord)
//     {
//         console.log('Login Success');
//     }else {
//         console.log('Login Error');
//     }
// }


var u_name = document.myForm.u_name;
var message = document.getElementById('message');

function runMe()
{
    if(u_name.value.length < 3)
    {
        message.innerHTML="need more characters";
        message.style.color="red";
        u_name.style.backgroundColor="red";
        u_name.style.color="white"
    }else if (u_name.value.length ==5)
    {
        message.innerHTML="Nice, Ok";
        message.style.color="green"
        u_name.style.backgroundColor="green";
        u_name.style.color="white"
    }else if (u_name.value.length > 8 )
    {
        message.innerHTML="Limit has been reached";
        message.style.color="orange"
        u_name.style.backgroundColor="orange";
        u_name.style.color="white"
    }
}