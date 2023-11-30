<?php


use Firebase\JWT\JWT;

$users = [
    [
        "username" => "146565464",
        "password" => "2654654654"
    ],

    [
        "username" => "246575874",
        "password" => "4657686784"
    ],

    [
        "username" => "346586284",
        "password" => "6658718914"
    ],
];

function loginAction($params) {
    
    $secret_key = "secret_key";
    $username = $params['username'];
    $password = $params['password'];
    $params['exp'] = time() + 600000;
    if(verifyUser($username , $password)){
        $jwt = JWT::encode($params, $secret_key, 'HS256');
        echo json_encode([
            "token" => $jwt
        ]);
    }else{
        echo json_encode([
            "error" => 'Non Valide Inputs'
        ]);
    }
}

function verifyUser($username, $password) {
    $users = [
        [
            "username" => "146565464",
            "password" => "2654654654"
        ],
    
        [
            "username" => "246575874",
            "password" => "4657686784"
        ],
    
        [
            "username" => "346586284",
            "password" => "6658718914"
        ],
    ];
    if($username == "" || $password == ""){
        return false;
    }
    $filteredUsers = array_filter($users, function ($user) use ($username, $password) {
        return $user['username'] === $username && $user['password'] === $password;
    });

    return !empty($filteredUsers); 
}

?>
