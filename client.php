<?php

$config = array(
    'url' => 'our_website_host',
    'type' => 'enter_your_api_name',
    'token' => 'enter_your_token',
    'email' => 'end_part_of_your_email'
);

//urls
$create_user_url = $config['url'] . "api/" . $config['type'] . "/create_user/";
$upload_file_url = $config['url'] . "api/" . $config['type'] . "/upload/";

//prepare request
$curlsession = curl_init();
if (!$curlsession) {
    return ERROR_HTTPERROR;
}
curl_setopt($curlsession, CURLOPT_HTTPHEADER, array('Content-Type: multipart/form-data'));
curl_setopt($curlsession, CURLOPT_REFERER, "http://" . $_SERVER['HTTP_HOST']);
curl_setopt($curlsession, CURLOPT_POST, true);
curl_setopt($curlsession, CURLOPT_HEADER, false);
curl_setopt($curlsession, CURLOPT_RETURNTRANSFER, true);
curl_setopt($curlsession, CURLOPT_BINARYTRANSFER, true);
curl_setopt($curlsession, CURLOPT_CRLF, false);
curl_setopt($curlsession, CURLOPT_MAXREDIRS, 10);

if ( !isset($_GET['files']) ){
    //generate token
    $email = "printeros" . time() . "@" . $config['email'];
    $post_data = array(
        'email' => $email,
        'token' => $config['token']
    );

    curl_setopt($curlsession, CURLOPT_URL, $create_user_url);
} else {
    //upload file
    $file_name_with_full_path = realpath("1.stl");
    $email = "";

    $file = null;
    if(class_exists('CURLFile')) // PHP >=5.5
        $file = new CurlFile($file_name_with_full_path, 'application/sla', '1.stl');
    else // Older PHP versions
        $file = '@'.$file_name_with_full_path;

    $post_data = array(
        'file'=>$file,
        'name'=>'1.stl',
        'email'=>$_POST['email'],
        'session'=>$_POST['session'],
        'token' => $config['token']
    );

    curl_setopt($curlsession, CURLOPT_URL, $upload_file_url);
}

curl_setopt($curlsession, CURLOPT_POSTFIELDS, $post_data);
$data = curl_exec($curlsession);

#add generated email
if ($email) {
    $data = json_decode($data);
    $data->result->email = $email;
    $data = json_encode($data);
}

echo ($data);