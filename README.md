# 3DPrinterOS-Server-API-Client
Ready to use code that allows 3D marketplaces to connect to 3DPrinterOS Server API

Please make some changes in $config array at the top of /client.php script:
$config = array(
    'url' => 'our_website_host',
    'type' => 'enter_your_api_name',
    'token' => 'enter_your_token',
    'email' => 'end_part_of_your_email'
);

And some additional changes in config array at the top of /js/scriptDemo.js:
var config = {
    url: 'our_website_host',
    type: 'enter_your_api_name'
};