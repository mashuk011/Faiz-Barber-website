
// responsive navbar js code 

const header_navabr =  document.querySelector(".header");

const mobile_navbar =  document.querySelector(".mobile-nav-btn");

const toggleNav = () => {

    header_navabr.classList.toggle("active");
    
}

mobile_navbar.addEventListener("click", () => toggleNav());

//  sticky Navbar 

const scrollNavFixed = () => {

    let headerNav =  document.querySelector('.header');

    headerNav.classList.toggle("sticky", window.scrollY > 0);
    
}



window.addEventListener("scroll", () => scrollNavFixed());



// filter function 


let tablistBtun = document.querySelectorAll('.tablist');
let itembox = document.querySelectorAll('.pp-box');

    for(let i = 0; i<tablistBtun.length; i++){
        tablistBtun[i].addEventListener("click", function(){
            for(let j=0; j<tablistBtun.length; j++){
                tablistBtun[j].classList.remove('active');
            }

            this.classList.add('active');

            let dataFilter = this.getAttribute('data-filter');

            for(let k = 0; k<itembox.length; k++){
                itembox[k].classList.add('hide');
                itembox[k].classList.remove('active');

                if(itembox[k].getAttribute('data-item') == dataFilter || dataFilter == 'all' ){

                    itembox[k].classList.remove('hide');
                    itembox[k].classList.add('active');
                    
                }
                
            }


            
        })
    }



    // scroll top btun

    let scrollBtun = document.querySelector('.scroll-top-btun');
    let home_sec = document.querySelector('.hero-main-sec');


    const scrollTop = () => {

        home_sec.scrollIntoView({behavior: "smooth"});
        
    }
    


    scrollBtun.addEventListener("click", () => scrollTop());


    const listenscroll = () => {
    let scrolBtn = document.querySelector('.scroll-top-btun');

    let heightView = 700;

    let winScroll =  document.body.scrollTop || document.documentElement.scrollTop ;

    if(winScroll > heightView){
        scrolBtn.style.transform = "translateY(0)";
        scrolBtn.style.opacity = "1";
    } else{
        scrolBtn.style.transform = "translateY(-280px)";
        scrolBtn.style.opacity = "0";
    }

    

    }


    window.addEventListener("scroll", () => listenscroll());
    
    

    // preloader animation effect


    let preloader =  document.getElementById("preloader");

    function myFunction(){

        preloader.style.display = "none";
        
    }