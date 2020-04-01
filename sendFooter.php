<?php

$userName = $_POST['userName'];
$userPhone = $_POST['userPhone'];
$userQuestion = $_POST['userQuestion'];



// Load Composer's autoloader
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer\PHPMailer\PHPMailer();

try {
    //Server settings
    $mail->SMTPDebug = 0;                      // Enable verbose debug output
    $mail->isSMTP();                                            // Send using SMTP
    $mail->Host       = 'smtp.mail.ru';                    // Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'n2v@list.ru';                     // SMTP username
    $mail->Password   = 'VadimNekrasov51046';                               // SMTP password
    $mail->SMTPSecure = 'ssl';         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` also accepted
    $mail->Port       = 465;                                    // TCP port to connect to
    $mail->CharSet = "UTF-8";

    //Recipients
    $mail->setFrom('n2v@list.ru');
    $mail->addAddress('n2vvadim@gmail.com');     // Add a recipient

    $mail->Subject = 'Новая заявка с сайта';
    $mail->Body    = "Имя пользователя: ${userName}, его телефон: ${userPhone}. Его вопрос: ${userQuestion}";



//отправка формы через аякс 
   if ( $mail->send()) {
       echo "ok";
   } else {
    echo "Письмо не отправлено, есть ошибка. Код ошибки: {$mail->ErrorInfo}";
   }
   //$mail->send();
} 
catch (Exception $e) {
    echo "Письмо не отправлено, есть ошибка. Код ошибки: {$mail->ErrorInfo}";
}