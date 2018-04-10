<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $from = 'From: '; 
    $to = 'charlotte.t@codeur.online'; 
    $subject = 'Bonjour vous avez un nouveau message de votre site';
    $human = $_POST['human'];

    $body = "From: $name\n E-Mail: $email\n Message:\n $message";

    if ($_POST['submit'] && $human == '4') {
        if (mail ($to, $subject, $body, $from)) { 
            echo '<p>Message envoyé!</p>';
            header('Location: index.html');
        } else { 
            echo '<p> Message non envoyé </p>'; 
        }
    } else if ($_POST['submit'] && $human != '4') {
        echo '<p>Réponse incorrecte</p>';
    }
    else {
        echo '<p>On recommence</p>';
        
    }
?>