let toggler = 1;
let modetoggler = 1;
let value = '200px';
let year = new Date().getFullYear();
let age = parseInt(year)-2004;
let timestamp = document.getElementsByClassName('timestamp')
var slider = document.getElementById('ranger');
var range_value_show = document.getElementsByClassName('range_value_show')[0]
var card = document.getElementsByClassName('card')
var academic = document.getElementById('academic')
var work = document.getElementById('work')

const sections = document.querySelectorAll("[type='section']");
const navLi = document.querySelectorAll(".linkpointer");

var lastScrollTop = 0;
window.addEventListener('scroll', (event) => {
    var st = window.pageYOffset || document.documentElement.scrollTop; 
    if (st >= lastScrollTop || st ==0){
      document.getElementById('scroller').style.top = "110%"
    } else {
        document.getElementById('scroller').style.top = "85%"
    }


    if ( st ==0){
        document.getElementById('onescroll').style.opacity = "1"
      } else {
          document.getElementById('onescroll').style.opacity = "0"
      }

    lastScrollTop = st <= 0 ? 0 : st;
        

        var current = "";
      
        sections.forEach((section) => {

          const sectionTop = section.offsetTop;
          if (scrollY >= sectionTop - 60) {
            current = section.getAttribute("id"); 

        
        }
        });
      
        navLi.forEach((a) => {

          a.classList.remove("active");
          if (a.href.includes(current)) {
            a.classList.add('active');
            }
        });
   

});




modetoggle = ()=>
{
    if (modetoggler == 1)
    {

        document.querySelector(':root').style.setProperty('--dgreen', '#E7F1FB');
        document.querySelector(':root').style.setProperty('--textcolor', '#002233');
        document.body.style.color = '#002233';
        document.querySelector(':root').style.setProperty('--dark', '#00223349');

        modetoggler = 0;

    }
    else{
        document.querySelector(':root').style.setProperty('--dgreen', '#002233');
        document.querySelector(':root').style.setProperty('--textcolor', '#E7F1FB');
        document.querySelector(':root').style.setProperty('--dark', '#001D2C');
        document.body.style.color = 'white';

        modetoggler =1;



    }
}

for (let i = 0; i< card.length; i++) {
card[i].style.display = 'none';
    
    }


// updating range value 

outputUpdate(slider);
function outputUpdate(e) {


for (let i = 0; i< card.length; i++) 
{
    card[i].style.display = 'inline-block';
   
}
        
    
function cardvalue(a)
{
    card[a].style.opacity = '1';


    document.getElementsByClassName('screen')[0].scrollTo({ left: Number(document.getElementsByClassName('screen')[0].scrollWidth)/5*a, behavior: 'smooth' });
       
}
   
    if (e.value == 0 )
    {
        
        cardvalue(0);
    }
    else if (e.value >= 2 && e.value <= 12  )
    {
        cardvalue(1);

    }
    else if (e.value == 13  )
    {
        cardvalue(2);

    }
    else if (e.value == 15 )
    {
        cardvalue(3);

    }
    else if (e.value == 17 )
    {
        cardvalue(4);

    }

    let div_width = range_value_show.offsetWidth;
    let val = (((e.value/age))*100);
    let thumbSize = 10;
    var offsetsrange = e.getBoundingClientRect();
    var offsetsdiv = range_value_show.getBoundingClientRect();
    range_value_show.style.left =`calc(${val}% + (${age - val * 0.3}px))`;
    range_value_show.innerHTML = Number(e.value)+2004;
    
}

function timeline_button(e) {
    let edu_work_button = document.getElementsByClassName('timeline_button');
    edu_work_button[0].classList.remove("active_button");
    edu_work_button[1].classList.remove("active_button");
    edu_work_button[0].classList.add("passive_button");
    edu_work_button[1].classList.add("passive_button");

    e.classList.remove("passive_button")
    e.classList.add("active_button")

    if(e.id == 'academic_button')
    {
        work.style.display = 'none';
        academic.style.display = 'block';
    } 
    else
    {
        academic.style.display = 'none';
        work.style.display = 'block';
    }
}




function closetoggel()
{
    if (window.innerWidth < 960) {
        document.getElementById('navbar').style.transform = `translateY(${value})`;
        document.getElementById('ham').innerHTML = "<i class='uil uil-bars'>";
        toggler = 1;
    }

}



function mobtoggel()
{


    if (toggler==0 )
    {


    document.getElementById('navbar').style.transform = `translateY(${value})`;
    document.getElementById('ham').innerHTML = "<i class='uil uil-bars'>";

        toggler = 1;
    }
    else
    {

        document.getElementById('navbar').style.transform = `translateY(0)`;
        document.getElementById('ham').innerHTML = "<i class='uil uil-times'>";

        toggler = 0
    }

}



focus_skill=(e)=>{
    
    let a = e.childNodes[3]
    let b = document.getElementsByClassName('skill_category')

    for (let i = 0; i < b.length; i++) {
        b[1].childNodes[3].childNodes[0].className = 'uil uil-angle-right';
        
    }
    let closer = document.getElementsByClassName('closer');

    
if (a.id == "close")
{
    for (let i = 0; i < closer.length; i++) {
        closer[i].id = 'close';
    }
    e.childNodes[1].childNodes[3].childNodes[0].className= 'uil uil-angle-down';
    // console.log(e.childNodes[1].childNodes[3].childNodes[0].className)

    a.id = "open"
}
else if(a.id == "open"){



    for (let i = 0; i < closer.length; i++) {
        closer[i].id = 'close';
    }

    closer.id = 'close';
    e.childNodes[1].childNodes[3].childNodes[0].className = 'uil uil-angle-right';
  
}
}



window.onscroll = function(e) {
        closetoggel();
  }


function formdata()
{
    var name  = document.querySelectorAll('input[type="text"]')[0].value;
    var email  = document.querySelectorAll('input[type="email"]')[0].value;
    var body  = document.querySelectorAll('textarea')[0].value;
    var maillink = document.getElementById('maillink').href = `mailto:sushantaneupane123@gamil.com?subject=Contact by ${name}. &body=${body}`
    
}

function sendMail()
{
    alert("Sent!")
}