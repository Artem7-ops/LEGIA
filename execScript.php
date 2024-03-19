<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $postData = file_get_contents('php://input');
    file_put_contents('script.txt', $postData);
    echo "Data has been successfully written to 'script.txt' file.";
} else {
    header("HTTP/1.0 405 Method Not Allowed");
    echo "Only POST requests are allowed.";
}
?>