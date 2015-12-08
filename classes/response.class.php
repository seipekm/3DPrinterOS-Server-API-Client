<?php

class Response {

    /**
     * Response body
     *
     * @var array|string
     */
    protected $body;

    /**
     * Response constructor. Set response body, send headers
     *
     * @param array|string $body
     * @param int $code
     */
    public function __construct($body, $code = 200)
    {
        $this->body = $body;
        //Send status header
        if (function_exists('http_response_code')) {
            http_response_code($code);
        } else {
            header(' ', true, $code);
        }
        //Sent content type header
        header('Content-Type: application/json');
    }

    /**
     * Send response
     */
    public function send()
    {
        $response = $this->body;
        if (is_array($response)) {
            $response = json_encode($response);
        }

        echo $response;
        exit();
    }
}
