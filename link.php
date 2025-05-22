<?php
header("Access-Control-Allow-Origin: *"); //hier dann die eigene Domain
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}
$json = file_get_contents("php://input");
$data = json_decode($json, true);
$filename = "data/" . $data['id'] . ".json";
file_put_contents($filename, json_encode($data, JSON_PRETTY_PRINT));
echo json_encode([
    "status" => "success",
    "message" => "Daten gespeichert unter $filename"
]);
?>
