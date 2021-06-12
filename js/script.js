function akanName(){
    let date = document.getElementById("date").value

    let YY = parseInt(date.substr(2,2))
    
    let MM = parseInt(date.substr(5,2))
    
    let CC = parseInt(date.substr(0,2))
    
    let DD = parseInt(date.substr(8));

    // console.log(YY)
    
    let dOfTW = parseInt(( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7);

    // console.log(dOfTW);

    let gender = document.getElementById("gender").value

    
    // console.log(gender)
    
    let femaleNames = ["Akosua","Adwoa", "Abenaa", "Akua", "Yaa", "Afua","Ama"];
    let maleNames = ["Kwasi", "Kwadwo","Kwabena","Kwaku","Yao","Kofi","Kwame"];
    let days = ["Monday","Tuesday" ,"Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    if(gender.toLowerCase() == "male"){
      alert(maleNames[dOfTW])  
    }else if(gender.toLowerCase() == "female"){
      alert(femaleNames[dOfTW])
    }else if(gender == "other"){
      alert("Please enter 'male' or 'female' as your gender")
    } 
    // document.getElementById("akan") = (maleNames[dOfTW]) || (femaleNames[dOfTW])
    
}  


// 2020-12-24