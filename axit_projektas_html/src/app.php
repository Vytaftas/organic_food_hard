  
<?php
if(isset($_POST['submit'])){
    $name =  trim($_POST['name']);
    $email = trim($_POST['email']);
    $subject = trim($_POST['subject']);
    $message = trim($_POST['message']);

//    if(!empty($vardas) && !empty($email) && !empty($subject) && !empty($message)){
//       if(filter_var($email, FILTER_VALIDATE_EMAIL)){
//         $from = "$email";
//         $to = "vytaftasv@gmail.com";
//         $subject = "Nauja Zinute";
//         $autorius = 'Nuo: ' . $name . ', ' . $email;
//         $zinute = htmlspecialchars($message);
//        mail($to, $subject, $autorius, $zinute, $from);
//        echo "<script>alert('Dekojame. Jusu zinute Gauta. Neturkus susisieksime.')</script>";
//        }
//   }
   include('db.php');
}
?>
  
  <?php
if(isset($_POST['trial_button'])){
    $name =  trim($_POST['name']);
    $email = trim($_POST['email']);
    $password = trim($_POST['password']);
    $password = password_hash($password, PASSWORD_DEFAULT);
   include('trialdb.php');
}
?>