const time = document.getElementById('time'),
    greeting = document.getElementById('greeting'),
    name = document.getElementById('name'),
    focus = document.getElementById('focus');
//Options
const showAmPm = true;
//Show Time
function showTime() {
    let today = new Date(),
        hour = today.getHours(),
        mins = today.getMinutes(),
        sec = today.getSeconds();

    // Set AM or PM
    const amPm = hour >= 12 ? 'PM' : 'AM';

    // 12hr Format
    hour = hour % 12 || 12;

    //Output Time
    time.innerHTML = `${hour}<span>:</span>${addZero(mins)}<span>:</span>${addZero(sec)} ${showAmPm ? amPm : ''}`;
    setTimeout(showTime, 1000);
}
//Add Zeros
function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}
//Set Background and Greeting
function setBgGreet() {
    let today = new Date(),
        hour = today.getHours();
    if (hour < 12) {
        //morning
        document.body.style.backgroundImage = "url('img/morning4.jpg')";
        document.body.style.backgroundPosition = 'center';
        document.body.style.backgroundSize = '100%';
        document.body.style.backgroundRepeat = 'no-repeat';
        greeting.textContent = 'Good Morning and welcome to Space Unlimited';
    } else if (hour < 18) {
        //Afternoon
        document.body.style.backgroundImage = "url('img/afternoon3.jpg')";
        document.body.style.backgroundPosition = 'center';
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundRepeat = 'no-repeat';
        greeting.textContent = 'Good Afternoon and welcomre to Space Unlimited';
    } else {
        //evening

        document.body.style.backgroundImage = "url('img/night1.jpg')";
        document.body.style.backgroundPosition = 'center';
        document.body.style.backgroundSize = '100%';
        document.body.style.backgroundRepeat = 'no-repeat';
        greeting.textContent = 'Good Evening and Welcome to Space Unlimited';
        document.body.style.color = '#fff';
    }

}

//Get Name
// function getName() {
//     if (localStorage.getItem('name') === null) {
//         name.textContent = '[Enter Name]';

//     } else {
//         name.textContent = localStorage.getItem('name');
//     }
// }
// function setName() {
//     if (e.type === 'keypress') {
//         //Make sure enter is pressed
//         if (e.which == 13 || e.keyCode == 13) {
//             localStorage.setItem('name', e.target.innerText);
//             name.blur();
//         }

//     } else {
//         localStorage.setItem('name', e.target.innerText);
//     }
// }

//Get Focus
// function getFocus() {
//     if (localStorage.getItem('focus') === null) {
//         focus.textContent = "[what's your focus today]";

//     } else {
//         focus.textContent = localStorage.getItem('focus');
//     }
// }
//Set Focus
// function setFocus() {
//     if (e.type === 'keypress') {
//         //Make sure enter is pressed
//         if (e.keyCode == 13) {
//             localStorage.setItem('focus', e.target.innerText);
//             focus.blur();
//         }

//     } else {
//         localStorage.setItem('focus', e.target.innerText);
//     }
// }

// name.addEventListener('keypress', setName);
// name.addEventListener('blur', setName);
// focus.addEventListener('keypress', setFocus);
// focus.addEventListener('blur', setFocus);

//Run
showTime();
setBgGreet();
getName();
getFocus();

