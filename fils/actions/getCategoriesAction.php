<?php
function generateCategories($level, $length) {
    $categories = [];

    for ($i = 1; $i <= $length; $i++) {
        $category = [
            'id' => $i,
            'name' => "Category $i",
            'children' => [],
        ];

        if ($level > 1) {
            for ($j = 1; $j <= $length; $j++) {
                $subCategory = [
                    'id' => $j,
                    'name' => "Subcategory $i.$j",
                    'children' => [],
                ];

                if ($level > 2) {
                    for ($k = 1; $k <= $length; $k++) {
                        $subCategory['children'][] = [
                            'id' => $k,
                            'name' => "Subsubcategory $i.$j.$k",
                        ];
                    }
                }

                $category['children'][] = $subCategory;
            }
        }

        $categories[] = $category;
    }

    return $categories;
}

// Generate nested categories with three levels and a length of 15 in the first level

// Display the result


function getCategoriesAction($params) {
    echo json_encode([
        "data" => $nestedCategories = generateCategories(10, 15)
    ]);
}

?>
