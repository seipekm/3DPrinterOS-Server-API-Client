<?php

/**
 * Class Config
 *
 * Config manager
 */
class Config {

    /**
     * @var array
     */
    protected $params;

    public function __construct($configPath)
    {
        $this->params = parse_ini_file($configPath);
    }

    /**
     * Check is parameter exists
     *
     * @param string $name
     *
     * @return bool
     */
    public function exists($name)
    {
        return isset($this->params[$name]);
    }

    /**
     * Get parameter value
     *
     * @param string $name
     *
     * @return mixed
     * @throws Exception
     */
    public function get($name)
    {
        if (!$this->exists($name)) {
            throw new \Exception(sprintf('Parameter "%s" does not exists in configs', $name));
        }

        return $this->params[$name];
    }
}
