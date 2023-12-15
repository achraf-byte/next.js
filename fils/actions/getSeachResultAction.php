<?php


function getSeachResultAction($params) {
    include 'products.php';
    echo json_encode([
        "data" => $data
    ]);
}

?>
