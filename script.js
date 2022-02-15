function sendMail(params){
    var tempParams ={
        name:document.getElementById("name").value ,
        phone:document.getElementById("phone").value ,
        email:document.getElementById("email").value ,
        message:document.getElementById("msg").value ,

    };
    emailjs.send('gmail','template_vtvu5nj',tempParams)
    .then(function(res){
        console.log("sucess", res.status);
    })

    }
    
