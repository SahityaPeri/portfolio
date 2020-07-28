window.addEventListener('load', function(){
    var contactForm = document.querySelector('.form-post');
    
    contactForm.addEventListener('submit', async function(e){
        e.preventDefault();        
        var message = document.getElementById('message').value;
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var subject = document.getElementById('subject').value;
        
        if(!message || !name || !email || !subject)
            displayMessage('error', "Please enter all details...");
        else{
            var data = {message, name, email, subject};
            var res = await axios({
                method: "POST",
                url: "https://formspree.io/maypakgj",
                data: data
            });
            
            if(res.status === 200){
                displayMessage('success', "Thank you! Your message has been sent.");
            }
            else{
                displayMessage('error', "Oops! Something went wrong. Please try again!");
            }
        }
    });
});

/*<div class="form-messages success">
                Thank you! Your message has been sent.
            </div>
            <div class="form-messages error">
                Oops! Something went wrong.Please try again!
            </div> 
            */
// here type is either success or error
var displayMessage = function(type, message){
    hideMessage();
    var markup = `<div class="form-messages ${type}">
                ${message}
            </div>`;
    document.querySelector('.main-para').insertAdjacentHTML('afterend', markup);
    window.setTimeout(hideMessage, 7000);
};

var hideMessage = function(){
    var el = document.querySelector('.form-messages');
    if(el)  el.parentElement.removeChild(el);
}
