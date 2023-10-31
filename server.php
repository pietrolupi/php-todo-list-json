<?php

$json_string = file_get_contents('todo-list.json'); //leggo file esterno

$list = json_decode($json_string, true); //trasformo stringa in un array.


if(isset($_POST['todoItem'])){

  $newItem = $_POST['todoItem'];
  $list[] = $newItem;


  file_put_contents('todo-list.json', json_encode($list) );
}


//rimozione elemento
if(isset($_POST['indexToDelete'])){
  
  array_splice($list, $_POST['indexToDelete'],1);

  file_put_contents('todo-list.json', json_encode($list) );
}

///////////////////////////////////////////////////////////////
//"trasformo" il file PHP in file JSON
header('Content-Type: application/json');

//stampo lista ricodificata in stringa
echo json_encode($list);

