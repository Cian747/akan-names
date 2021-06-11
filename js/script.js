function akanName(){
    let date = document.getElementById("date").value

    let YY = parseInt(date.substr(2,2))
    
    let MM = parseInt(date.substr(5,2))
    
    let CC = parseInt(date.substr(0,2))
    
    let DD = parseInt(date.substr(8));

    // console.log(YY)
    
    if(MM < 1 || MM > 12){
      document.getElementById("output") = "fill in correct date."
    }else if(CC >20 && CC < 19){
       document.getElementById("output") = "Fill in the correct century"
    }else if(DD < 1 && DD > 31){
       document.getElementById("output") = "The day you put in was incorrect."
    }
    
    
    let dOfTW = parseInt(( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7);

    // console.log(dOfTW);

    let gender = document.getElementById("gender").value
    
    console.log(gender)
    
    let femaleNames = ["Akosua","Adwoa", "Abenaa", "Akua", "Yaa", "Afua","Ama"];
    let maleNames = ["Kwasi", "Kwadwo","Kwabena","Kwaku","Yao","Kofi","Kwame"];
    
    if(gender == "male"){
      console.log("Your akan name is " + maleNames[dOfTW])  
    }else if(gender == "female"){
      console.log("your akan name is " + femaleNames[dOfTW])
    }
}  

function akanTest(){
    let date = document.getElementById("date").value

    let YY = date.substr(2,2)
    
    let MM = date.substr(5,2)
    
    let CC = date.substr(0,2)
    
    let DD = date.substr(8)

    console.log(YY);
    console.log(MM);
    console.log(CC);
    console.log(DD);
}
// 2020-12-24