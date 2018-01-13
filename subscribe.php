<?php
    if(isset($_POST['subscribe'])) {
        $email = $_POST['email'];
        //check name is set
        if($name ==''){
            $error[] = 'Name is required';
        }

        //check for a valid email address
        if(!filter_var($email, FILTER_VALIDATE_EMAIL)){
            $error[] = 'Please enter a valid email address';
        }
        
        //if no errors carry on
        if(!isset($error)){
            // Open the text file
	       $f = fopen("emails.txt", "w");
            // Write text line
	       fwrite($f,  $email + "/n");
            // Close the text file
	       fclose($f);
        }
    }
?>
