<?php

$json_string = file_get_contents('todo-list.json'); //leggo file esterno

$list = json_decode($json_string); //trasformo stringa in un array.



//"trasformo" il file PHP in file JSON
header('Content-Type: application/json');

//stampo lista ricodificata in stringa
echo json_encode($list);
