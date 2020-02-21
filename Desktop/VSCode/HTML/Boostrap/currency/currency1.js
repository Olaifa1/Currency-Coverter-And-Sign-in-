function currencyconvert(){

    /* Declare variable currency */
    var currency = document.getElementById("currency").value;
    
    /* Declare variable amount */
    var amount = document.getElementById("amount").value;

    //If amount is not a number
    // if(isNaN(amount)){
    //     //Display an error msg
    //     document.getElementById("demo").innerHTML = "You have a wrong input";
    // }
    // else{
    //     //run the program
    //     //if currency is dollar
    //     if(currency == "dollar"){
        
        
    //                     var output = amount * 366.835;
    //                     document.getElementById("demo").innerHTML = output;
    // }

    //      //if currency is Euro
    // else if(currency == "euro"){
        
    //         var output = amount * 399.251;
    //         document.getElementById("demo").innerHTML = output;
	// }
		

    //      //if currency is Pound
    // else if(currency == "pounds"){
        
    //         var output = amount * 475.855;
    //         document.getElementById("demo").innerHTML = output;
	// }

	// //if currency is Japanese Yen
    // else if(currency == "yen"){
        
    //                 var output = amount * 3.342;
    //                 document.getElementById("demo").innerHTML = output;
	// }
	
    //  //if currency is Indian Rupees
    // else if(currency == "rupees"){
        
    //     var output = amount * 5.143;
    //     document.getElementById("demo").innerHTML = output;
	// }

	// else {
        
	// var output = amount * 36867800;
	// document.getElementById("demo").innerHTML = output;
	// }

    // }
   switch(currency){
	   case "dollar":
			var output = amount * 366.835;
        	document.getElementById("demo").innerHTML = output;
		break;

		case "euros":
			var output = amount * 399.251;
			document.getElementById("demo").innerHTML = output;
		break;

		case "pounds":
			var output = amount * 475.855;
            document.getElementById("demo").innerHTML = output;
			break;

		case "yen":
			var output = amount * 3.342;
			document.getElementById("demo").innerHTML = output;
			break;

		case "rupees":
			var output = amount * 5.143;
        	document.getElementById("demo").innerHTML = output;
			break;

		case "bitcoin":
				var output = amount * 36867800;
				document.getElementById("demo").innerHTML = output;
			break;

		default:
			//Display an error msg
			document.getElementById("demo").innerHTML = "You have a wrong input";


   }
	}
	
	function Signin(){
		var username = document.getElementById("Username").value;
		var password = document.getElementById("Password").value;

		if(username== "olaifawaliu@rocketmail.com" && password=="Godisgood"){
			location.href = "https://semicolon.africa";
		}
		else{
			document.getElementById("demo1").innerHTML = "Invalid Username and/or Password";	
		}
	}
	

	 