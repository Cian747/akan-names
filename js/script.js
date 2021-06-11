function akanName(){

    let YY = document.getElementById("date").value
    
    let MM = document.getElementById("date").value
    
    let CC = document.getElementById("date").value
    
    let DD = document.getElementById("date").value
    
    if(MM < 1 && MM > 12){
      document.getElementById("output") = "fill in correct date."
    }else if(CC >20 && CC < 19){
       document.getElementById("output") = "Fill in the correct century"
    }else if(DD < 1 && DD > 31){
       document.getElementById("output") = "The day you put in was incorrect."
    }
    
    
    let dOfTW = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7;

    let gender = document.getElementById("gender").value
    
    
    let femaleNames = ["Akosua","Adwoa", "Abenaa", "Akua", "Yaa", "Afua","Ama"];
    let maleNames = ["Kwasi", "Kwadwo","Kwabena","Kwaku","Yao","Kofi","Kwame"];
    
    if(gender == "male"){
      console.log("Your akan name is " + femaleNames[dOfTW])  
    }else if(gender == "female"){
      console.log("your akan name is" + maleNames[dOfTW])
    }
}  