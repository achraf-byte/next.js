<?php


function getBrandesAction() {
    $brands = '[{"value":"-","name":"Marques populaires"},{"value":93,"name":"RENAULT"},{"value":88,"name":"PEUGEOT"},{"value":21,"name":"CITROËN"},{"value":121,"name":"VW"},{"value":5,"name":"AUDI"},{"value":16,"name":"BMW"},{"value":74,"name":"MERCEDES-BENZ"},{"value":35,"name":"FIAT"},{"value":84,"name":"OPEL"},{"value":36,"name":"FORD"},{"value":"-","name":"Toutes les marques"},{"value":3854,"name":"ABARTH"},{"value":2,"name":"ALFA ROMEO"},{"value":866,"name":"ALPINA"},{"value":138,"name":"CHEVROLET"},{"value":20,"name":"CHRYSLER"},{"value":139,"name":"DACIA"},{"value":185,"name":"DAEWOO"},{"value":25,"name":"DAIHATSU"},{"value":26,"name":"DAIMLER"},{"value":29,"name":"DODGE"},{"value":4468,"name":"DS"},{"value":776,"name":"FORD USA"},{"value":45,"name":"HONDA"},{"value":183,"name":"HYUNDAI"},{"value":1526,"name":"INFINITI"},{"value":1508,"name":"IRMSCHER"},{"value":54,"name":"ISUZU"},{"value":55,"name":"IVECO"},{"value":56,"name":"JAGUAR"},{"value":882,"name":"JEEP"},{"value":184,"name":"KIA"},{"value":63,"name":"LADA"},{"value":64,"name":"LANCIA"},{"value":1820,"name":"LAND ROVER"},{"value":842,"name":"LEXUS"},{"value":771,"name":"MASERATI"},{"value":2164,"name":"MAYBACH"},{"value":72,"name":"MAZDA"},{"value":75,"name":"MG"},{"value":1523,"name":"MINI"},{"value":77,"name":"MITSUBISHI"},{"value":80,"name":"NISSAN"},{"value":92,"name":"PORSCHE"},{"value":778,"name":"PROTON"},{"value":1580,"name":"PUCH"},{"value":95,"name":"ROVER"},{"value":99,"name":"SAAB"},{"value":104,"name":"SEAT"},{"value":106,"name":"SKODA"},{"value":1138,"name":"SMART"},{"value":175,"name":"SSANGYONG"},{"value":107,"name":"SUBARU"},{"value":109,"name":"SUZUKI"},{"value":111,"name":"TOYOTA"},{"value":1553,"name":"UAZ"},{"value":117,"name":"VAUXHALL"},{"value":120,"name":"VOLVO"}]';
    
    echo json_encode([
        "data" => json_decode($brands, true)
    ]);
}

?>