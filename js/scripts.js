
 const firebaseConfig = {
    apiKey: "AIzaSyCHkPYjc5bWoguW0YYcFAWI1ovKHJSecY4",
    authDomain: "feedback-form-7de41.firebaseapp.com",
    databaseURL: "https://feedback-form-7de41-default-rtdb.firebaseio.com",
    projectId: "feedback-form-7de41",
    storageBucket: "feedback-form-7de41.appspot.com",
    messagingSenderId: "11189690921",
    appId: "1:11189690921:web:b3b3687ff04dd33202b238"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

// Reference messages collection
var messageRef = firebase.database().ref('Messages');

document.getElementById('contactForm').addEventListener('submit',submitForm);

// Function for submitting form
function submitForm(event){
event.preventDefault();

var names = getInputVal("name")
var emails = getInputVal("email")
var phones = getInputVal("phone")
var messagess = getInputVal("message")

saveMessage(names,emails,phones,messagess)

}

function getInputVal(id){
    return document.getElementById(id).value;
}


// Save message to firebase
function saveMessage(name,email,phone,message){
    var newMessageRef = messageRef.push();
    newMessageRef.set({
     name : name,
     email : email,
     phone:phone,
     message:message
    });
}

// HTML FUNCTIONS**

function showAlert(){
    document.querySelector('.alert').style.display = 'block';
    console.log("Show alert called!")
   }
   
   function hideAlert(){
   
   setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
      document.getElementById('contactForm').reset();
   },5000)
   }
   
   function manage() {
           var bt = document.getElementById('submitBt');
           var name = document.getElementById('name')
           var phone = document.getElementById('phone')
           var email = document.getElementById('email')
           var message = document.getElementById('message')
           if (name.value != '' && phone.value != '' && email.value != ''  && message.value != '') {
               showAlert();
               hideAlert();
              
           }
   
           
       }




