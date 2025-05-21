<?php
$name = $_POST['name'] ?? '';
file_put_contents("daten.txt", $name . PHP_EOL, FILE_APPEND);
echo "Danke, $name! Deine Daten wurden gespeichert.";
?>
