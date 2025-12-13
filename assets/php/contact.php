<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {

    $name    = trim($_POST["name"]);
    $email   = trim($_POST["email"]);
    $subject = trim($_POST["subject"]);
    $message = trim($_POST["message"]);

    $to = "dev.vivekgautam@gmail.com"; 
    $mailSubject = "New Portfolio Contact Message";

    $body = "
    New message from portfolio website:\n\n
    Name: $name
    Email: $email
    Subject: $subject

    Message:
    $message
    ";

    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    if (mail($to, $mailSubject, $body, $headers)) {
        echo "success";
    } else {
        echo "error";
    }
}
?>