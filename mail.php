<?php

    require 'phpmailer/PHPMailerAutoload.php';

    $mail = new PHPMailer;

    // $mail->SMTPDebug = 4;                               // Enable verbose debug output

    $mail->isSMTP();                                      // Set mailer to use SMTP
    $mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
    $mail->SMTPAuth = true;                               // Enable SMTP authentication
    $mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
    $mail->Port = 587;                                    // TCP port to connect to


    $mail->Username = 'jsebastianm1113@gmail.com';                 // SMTP username
    $mail->Password = 'sebasmedi98';                           // SMTP password

    // get all input form values
    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];

    $mail->setFrom('jsebastianm1113@gmail.com', 'Portafolio - Contacto');
    $mail->addAddress($_POST[$email]);     // Add a recipient
    $mail->addReplyTo('jsebastianm1113@gmail.com');
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = $_POST[$subject];

    // prepare email body text
    $Fields .= "Name: ";
    $Fields .= $name;
    $Fields .= "\n";

    $Fields.= "Email: ";
    $Fields .= $email;
    $Fields .= "\n";

    $Fields.= "Subject: ";
    $Fields .= $subject;
    $Fields .= "\n";

    $Fields .= "Message: ";
    $Fields .= $message;
    $Fields .= "\n";
    
    $mail->Body    = $Fields;
    $mail->AltBody = $_POST['message'];

    if(!$mail->send()) {
        echo 'Message could not be sent.';
        echo 'Mailer Error: ' . $mail->ErrorInfo;
    } else {
        echo 'Message has been sent';
    }

/*
//Update credentials
define('EMAIL', '');
define('PASS', '');

$name = $_POST["name"];
$email = $_POST["email"];
$subject = $_POST["subject"];
$message = $_POST["message"];


$EmailTo = "jsebastianm1113@gmail.com";
$Title = "New Message Received";

// prepare email body text
$Fields .= "Name: ";
$Fields .= $name;
$Fields .= "\n";

$Fields.= "Email: ";
$Fields .= $email;
$Fields .= "\n";

$Fields.= "Subject: ";
$Fields .= $subject;
$Fields .= "\n";

$Fields .= "Message: ";
$Fields .= $message;
$Fields .= "\n";


// send email
$success = mail($EmailTo,  $Title,  $Fields, "From:".$email); 
*/
?>

