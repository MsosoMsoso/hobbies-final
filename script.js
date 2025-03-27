const firebaseConfig = {
    apiKey: "AIzaSyDTUeNPwK89BIR0ct4Bux6Bb3dn9gAhE-Q",
    authDomain: "trickal-commentsection.firebaseapp.com",
    databaseURL: "https://trickal-commentsection-default-rtdb.firebaseio.com",
    projectId: "trickal-commentsection",
    storageBucket: "trickal-commentsection.firebasestorage.app",
    messagingSenderId: "148119104387",
    appId: "1:148119104387:web:d6d76a1b47d666677064b6"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // reference your database
var commentsectionDB = firebase.database().ref('commentsection');

document.getElementById('commentForm').addEventListener('submit', submitForm);


function submitForm(e){
    e.preventDefault();

    var name = getElementval('name');
    var emailid = getElementval('emailid');
    var msgContent = getElementval('msgContent');

    saveMessages(name, emailid, msgContent);

     // Check for empty fields
     if (name === "" || emailid === "" || msgContent === "") {
        showAlert("All fields are required!", "error");
        return;
    }

    // enable alert
    document.querySelector('.Alert').style.display = 'block';

    //remove the alert
    setTimeout(() => {
        document.querySelector('.Alert').style.display = 'none';
    }, 3000);

    //reset the form
    document.getElementById('commentForm').reset();
}

const saveMessages = (name, emailid, msgContent) => {
    var newcommentsection = commentsectionDB.push();

    newcommentsection.set({
        name : name,
        emailid : emailid,
        msgContent : msgContent,
    });
};

const getElementval = (id) => {
    return document.getElementById(id).value;
};