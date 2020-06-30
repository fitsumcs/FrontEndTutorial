const Pagestate = function()
{
    let currentState = new homeState(this);

    this.init = function()
    {
        this.changeState(new homeState);
    }
    this.changeState = function(state)
    {
        currentState = state;
    }
}

// home state 
const homeState = function(page){
    document.getElementById('header').textContent = "Home";
    document.getElementById('content').textContent = "This is the Home page of the website..";
}
// about 
const aboutstate = function(page){
    document.getElementById('header').textContent = "About";
    document.getElementById('content').textContent = "This is the About page of the website..";
}
// contact 
const contactstate = function(page){
    document.getElementById('header').textContent = "Contact";
    document.getElementById('content').textContent = "This is the Contact page of the website..";
}

// init
const page = new Pagestate();
page.init();

// Ui
const home = document.getElementById('home'),
      about = document.getElementById('about'),
      contact = document.getElementById('contact');
    
    //event 
    home.addEventListener('click',(e)=>{
        page.changeState(new homeState);
        e.preventDefault();

    });   
    about.addEventListener('click',(e)=>{
        page.changeState(new aboutstate);
        e.preventDefault();

    }); 
    contact.addEventListener('click',(e)=>{
        page.changeState(new contactstate);
        e.preventDefault();

    }); 