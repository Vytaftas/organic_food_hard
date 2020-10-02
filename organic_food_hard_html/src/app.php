<?php
if(isset($_POST['submit'])){
    $name =  trim($_POST['name']);
    $email = trim($_POST['email']);
    $message = trim($_POST['message']);

   if(!empty($vardas) && !empty($email) && !empty($message)){
      if(filter_var($email, FILTER_VALIDATE_EMAIL)){
        $from = "$email";
        $to = "vytaftas@yahoo.com";
        $subject = "Nauja Zinute";
        $autorius = 'Nuo: ' . $name . ', ' . $email;
        $zinute = htmlspecialchars($message);
       // mail($to, $subject, $autorius, $zinute, $from);
       // echo "<script>alert('Dekojame. Jusu zinute Gauta. Neturkus susisieksime.')</script>";
        }
   }
   include('db.php');
}
?>