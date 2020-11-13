<?php


if(isset($_POST["submit"])){

    /* Données */
    $name = $_POST['name'];
    $mailFrom = $_POST['email'];
    $telephone = $_POST['telephone'];
    $sujet = $_POST['sujet'];
    $message = $_POST['message'];

    $mailTo = "andrew.mahe14@gmail.com";
    $headers = "From: PORTFOLIO - " . $mailFrom;
    $txt = "You are receive an e-mail from " .  $name . " | " . $telephone . " .\n\n" . $message;


    mail($mailTo, $sujet, $txt, $headers);

    header("Location:../main.php?mailsend");
}

header("Location:../main.php?error='Votre message est invalide'");
