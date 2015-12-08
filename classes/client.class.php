<?php

/**
 * Class Client
 */
class Client {

    /**
     * @var Config
     */
    protected $config;

    /**
     * Client constructor.
     *
     * @param Config $config
     */
    public function __construct(Config $config)
    {
        $this->config = $config;
    }

    /**
     * Generate new random email
     *
     * @return string
     * @throws Exception
     */
    public function generateEmail()
    {
        return sprintf('printeros%s@%s', uniqid(), $this->config->get('host'));
    }

    /**
     * Create API session
     *
     * @param string $email
     *
     * @return string
     * @throws Exception
     */
    public function createSession($email)
    {
        $response = $this->callMethod('create_user', array(
            'email' => $email,
            'token' => $this->config->get('secret_key'),
        ));
        //Add client type for js client
        $data = json_decode($response, true);
        if ($data['success']) {
            $data['result']['type'] = $this->config->get('type');
        }

        return json_encode($data);
    }

    /**
     * Upload file
     *
     * @param string $email
     * @param string $session
     * @param string $filePath
     * @param string|null $name
     *
     * @return string
     * @throws Exception
     */
    public function uploadFile($email, $session, $filePath, $name = null)
    {
        if (!file_exists($filePath)) {
            throw new \Exception('File for upload does not exists');
        }
        if (!$name) {
            $name = substr($filePath, strrpos($filePath, DIRECTORY_SEPARATOR) + 1);
        }
        if (class_exists('CURLFile')) {
            //PHP >= 5.5
            $file = new CURLFile($filePath, 'application/sla', $name);
        } else {
            $file = '@' . $filePath;
        }

        return $this->callMethod('upload', array(
            'email' => $email,
            'token' => $this->config->get('secret_key'),
            'session' => $session,
            'file' => $file
        ));
    }

    /**
     * Call 3DPrinterOS API method
     *
     * @param string $method
     * @param string $params
     *
     * @return string
     * @throws Exception
     */
    protected function callMethod($method, $params)
    {
        $url = sprintf('%s/api/%s/%s', $this->config->get('url'), $this->config->get('type'), $method);
        $ch = curl_init($url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_POST, 1);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $params);
        curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: multipart/form-data'));
        curl_setopt($ch, CURLOPT_BINARYTRANSFER, 1);
        curl_setopt($ch, CURLOPT_CRLF, 0);
        curl_setopt($ch, CURLOPT_MAXREDIRS, 10);
        curl_setopt($ch, CURLOPT_HEADER, 0);


        $result = curl_exec($ch);

        //Check for errors
        $error = curl_errno($ch);
        if ($error > 0) {
            $message = curl_error($ch);
            curl_close($ch);

            throw new \Exception(sprintf('Can\'t connect to %s. Error (%s): %s', $url, $error, $message));
        }

        curl_close($ch);

        return $result;
    }
}
