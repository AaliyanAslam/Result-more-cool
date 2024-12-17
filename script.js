function check() {
  let sub1 = document.getElementById("sub1").value;
  let sub2 = document.getElementById("sub2").value;
  let sub3 = document.getElementById("sub3").value;
  let sub4 = document.getElementById("sub4").value;
  let sub5 = document.getElementById("sub5").value;



  if (sub1 === "" || sub2 === "" || sub3 === "" ||  sub4 ==="" || sub5 === ""){
alert("Empty Field Detected !");
return;
  }

  sub1 = parseInt(sub1);
  sub2 = parseInt(sub2);
  sub3 = parseInt(sub3);
  sub4 = parseInt(sub4);
  sub5 = parseInt(sub5);

  let totalMarks = sub1 + sub2 + sub3 + sub4 + sub5;
  let percentage = totalMarks / 500 * 100;

  document.getElementById("data").innerHTML= (`Your Total Marks Is ${totalMarks}`);
  document.getElementById("data1").innerHTML= (`Your Total Percentage Is ${percentage}%`);

  if (percentage >= 90){
document.getElementById("data2").innerHTML= (`Congratulations You Passed With Best ${percentage}%`)
document.getElementById("full-data").style.backgroundColor= "green";
document.getElementById("full-data").style.color= "white";


  } else if ( percentage >= 80){

document.getElementById("data2").innerHTML= (`Congratulations You Passed With Good ${percentage}%`)
document.getElementById("full-data").style.backgroundColor= "green";
document.getElementById("full-data").style.color= "white";


  }else if ( percentage >= 70){

    document.getElementById("data2").innerHTML= (`Congratulations You Passed With Good ${percentage}%`)
    document.getElementById("full-data").style.backgroundColor= "yellow";
    document.getElementById("full-data").style.color= "black";

    
      }else if ( percentage >= 60){

        document.getElementById("data2").innerHTML= (`Congratulations You Passed ${percentage}%`)
        document.getElementById("full-data").style.backgroundColor= "yellow";
    document.getElementById("full-data").style.color= "black";

        
          } else if ( percentage >= 50){

            document.getElementById("data2").innerHTML= (`Congratulations You Passed ${percentage}%`)
            document.getElementById("full-data").style.backgroundColor= "yellow";
    document.getElementById("full-data").style.color= "black";

            
              } else if ( percentage >= 40){

                document.getElementById("data2").innerHTML= (`Congratulations You Pass ${percentage}%`)
                document.getElementById("full-data").style.backgroundColor= "orange";
    document.getElementById("full-data").style.color= "white";

                
                  }
               else if ( percentage >= 33){

                document.getElementById("data2").innerHTML= (`Congratulations You Pass ${percentage}%`)
                document.getElementById("full-data").style.backgroundColor= "orange";
    document.getElementById("full-data").style.color= "white";

                
                  }
                  
                  
                  
                  else{

                    

                        document.getElementById("data2").innerHTML= (`Alas! You Failed ${percentage}%`)
                        document.getElementById("full-data").style.backgroundColor= "red";
                        document.getElementById("full-data").style.color= "white";

                        
                          
                  }








}


























