
    function savedata()
   {
       var Name=document.getElementById("name").value;
       var Designation=document.getElementById("Designation").value;
       var Hours=document.getElementById("hours").value;
       
       if(Name!=="" && Designation !=="" && Hours !=="")
       {
          var Salary;
          if (Designation=="Manager")
          {
            Salary= Hours*90;
          }
          else if(Designation=="Consultant")
          {
            Salary=Hours*70;
          }
          else if(Designation=="Trainee")
          {
            Salary=Hours*45;
          }
       
         
           alert(Name+" who is a "+ Designation+" will get $"+ Salary);
        }
        else
        {
            alert("Employee Must Enter Name, Designation and the Hours!!!");
        }


    }
  
