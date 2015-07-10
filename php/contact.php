<?php 
// TODO finish
if(isset($_POST['submit'])){
    $to = "hello@dfwinnovationcenter.com"; // this is your Email address
    $name = $_POST['name'];
    $from = $_POST['email']; // this is the sender's Email address
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    $headers = "From:" . $from;
    $headers2 = "From:" . $to;
    mail($to,$subject,$message,$headers);
    mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender
    echo "Mail Sent. Thank you " . $name . ", we will contact you shortly.";
    // You can also use header('Location: thank_you.php'); to redirect to another page.
    // You cannot use header and echo together. It's one or the other.
    }
?>