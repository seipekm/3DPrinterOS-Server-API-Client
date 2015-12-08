<?php

set_time_limit(0);

require_once 'classes/config.class.php';
require_once 'classes/client.class.php';
require_once 'classes/response.class.php';

$config = new Config(realpath(dirname(__FILE__) . '/config/parameters.ini'));
$client = new Client($config);

$method = isset($_POST['method']) ? $_POST['method'] : null;
try {
    $code = null;
    switch ($method) {
        case 'create_session': {
            $result = $client->createSession($client->generateEmail());
        }
            break;

        case 'upload': {
            if (empty($_FILES[0]) || empty($_POST['session']) || empty($_POST['email'])) {
                throw new Exception('Invalid request data');
            }
            $name = $_FILES[0]['file']['name'];
            $tempFile = $_FILES[0]['file']['tmp_name'];
            $result = $client->uploadFile($_POST['email'], $_POST['session'], $tempFile, $name);
        }
            break;

        case 'static_upload': {
            if (empty($_POST['session']) || empty($_POST['email'])) {
                throw new Exception('Invalid request data');
            }
            $filePath = realpath(dirname(__FILE__) . '/public/1.' . $_POST['file_type']);
            $result = $client->uploadFile($_POST['email'], $_POST['session'], $filePath, 'example.stl');
        }
            break;

        default: {
            $code = 400;
            $result = array(
                'error' => true,
                'message' => 'Bad Request'
            );
        }
    }

    //Send response
    $response = new Response($result, $code);
    $response->send();

} catch (Exception $e) {
    $response = new Response(array(
        'error' => true,
        'message' => $e->getMessage()
    ), 500);
    $response->send();
}