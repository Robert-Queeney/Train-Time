

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDA2LOHjVGFd9-d-okTU6vHKL83MpD2SqM",
    authDomain: "train-schedule-2c7a8.firebaseapp.com",
    databaseURL: "https://train-schedule-2c7a8.firebaseio.com",
    projectId: "train-schedule-2c7a8",
    storageBucket: "train-schedule-2c7a8.appspot.com",
    messagingSenderId: "530535888258"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  $(document).on("click", "#submit-btn", function(e){
    e.preventDefault();
    var varTrain = $("#train-name-input").val().trim(); 
    var varDestination = $("#destination-input").val().trim();  
    var varTime = $("#time-input").val().trim();
    var varFrequency = $("#frequency-input").val().trim();

    // this will be pushded to firebase
    const pushObject = {
        name: varTrain, 
        destination: varDestination, 
        time: varTime, 
        frequency: varFrequency, 
    }

    // pushes the info into firebase
    database.ref().push(pushObject);
    // console.log(varTrain.name); 
    // console.log(varDestination.destination); 
    // console.log(varTime.time); 
    // console.log(varFrequency.frequency); 

    alert("Train successfully added");

    // clears out the input areas
    $("#train-name-input").val("");  
    $("#destination-input").val("");   
    $("#time-input").val(""); 
    $("#frequency-input").val(""); 

    database.ref().on("child_added", function(childSnapshot, prevChildKey) {

      // console.log(childSnapshot.val());
    
      // Store everything into a variable.
      var varTrain = childSnapshot.val().name;
      var varDestination = childSnapshot.val().destination;
      var varTime = childSnapshot.val().time;
      var varFrequency = childSnapshot.val().frequency;
      
      // Train Info
      // console.log(varTrain);
      // console.log(varDestination);
      // console.log(varTime);
      // console.log(varFrequency);
    



      // time variables


      // calculating the next train
      // var nextTrain = moment().diff(moment.unix(varTrain, "X"), "minutes");
      // console.log(nextTrain, "moment");

      console.log(varTime); 
    
    
      // Add each train's data into the table
      $("#schedule-table > tbody").append("<tr><td>" + varTrain + "</td><td>" + varDestination + "</td><td>" +
      varFrequency + "</td><td>" + "need to calculate" + "</td><td>" + "need to calculate" + "</td></tr>");
    });


  })