<?php

header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type , Authorization");
header("Access-Control-Allow-Credentials: true");
header('Content-Type: application/json');
header("Access-Control-Max-Age: 86400"); 

require __DIR__ . '/vendor/autoload.php'; 
use Firebase\JWT\JWT;

$token = getAuthToken();



$rawData = file_get_contents('php://input');
$postData = json_decode($rawData, true);
if ($token !== null && $postData['action'] != 'login') {
    try {
        $secret_key = "secret_key";
        $decoded = JWT::decode($token, $secret_key, ['HS256']);
        procedAplication();
    } catch (Exception $e) {
        echo "Not authenticated.";
    }
} else if($postData['action'] == 'login') {
    procedAplication();
}else{
    echo "Not authenticated.";
    exit();
}

function getAuthToken() {
    $headersP = getallheaders();
    if (isset($headersP['Authorization'])) {
        $authHeader = $headersP['Authorization'];
        $token = str_replace('Bearer ', '', $authHeader);
        return $token;
    }
    // echo $_COOKIE['authorization'];
    // return $_COOKIE['authorization'];
}



?>
