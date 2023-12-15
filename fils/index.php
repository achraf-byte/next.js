<?php

// Include headers
include 'headers.php';


// echo 'sdfdf';die;
// Include routes

// Include functions

function procedAplication(){
    include './routes.php'; 
    include 'actions/loginAction.php';
    include 'actions/getDataSearchVHAction.php';
    include 'actions/getSeachResultAction.php';
    include 'actions/getCategoriesAction.php';
    if($_SERVER['REQUEST_METHOD'] === 'POST'){
        $rawData = file_get_contents('php://input');
        $postData = json_decode($rawData, true);
        if (isset($postData['action']) && array_key_exists($postData['action'], $routes)) {
            $routes[$postData['action']]($postData['params']);
        } else {
            echo "Invalid action";
        }
    }
}
function authVerificationAction(){
    echo 'here';
}
?>
