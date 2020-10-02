<?php
    define("DB_SERVER", "localhost");
    define("DB_USER", "root");
    define("DB_PASSWORD", "");
    define("DB_NAME", "organic_food");

    $mysqli = new mysqli(DB_SERVER, DB_USER, DB_PASSWORD, DB_NAME);
    if($mysqli->connect_error){
        echo "Sorry, turim bedu..";
        echo 'Klaida: '. $mysqli->connect_error. '\n';
        exit();
    }

    mysqli_query($mysqli, "INSERT INTO msgfield (name, email, message)
    VALUES('$_POST[name]', '$_POST[email]', '$_POST[message]')");