function getData() {
    var name = document.getElementById("names").value;
    var email = document.getElementById("emaill").value;
    var destinasi = document.getElementById("destinasii").value;
    var date = document.getElementById("datee").value;

    document.getElementById("viewName").innerHTML = name;
    document.getElementById("viewEmail").innerHTML = email;
    document.getElementById("viewDestinasi").innerHTML = destinasi;
    document.getElementById("viewDate").innerHTML = date;
    
  }