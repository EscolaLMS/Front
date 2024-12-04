<?php

$content = file_get_contents("index.html");

// check variables first 

$domains = [];
$token = '<!-- inject env variables -->';

if (isset($_ENV['MULTI_DOMAINS'])) {
    foreach (explode(",", $_ENV['MULTI_DOMAINS']) as $domain) {
        $domain = trim($domain);
        $domainKey = str_replace(['.', '-'], '_',  strtoupper($domain));
        foreach (getenv() as $key => $value) {
            if (str_starts_with($key, $domainKey)) {
                $variableKey = str_replace($domainKey . '_', '', $key);
                $domains[$domain][$variableKey] = $value;
            }
        }
    }
}

if (is_file(dirname(__FILE__) . "/env_config.php")) {
    include_once "env_config.php";
}

if (key_exists($_SERVER['HTTP_HOST'], $domains) || key_exists($_SERVER['SERVER_NAME'], $domains)) {
    $setup = key_exists($_SERVER['HTTP_HOST'], $domains) ? $domains[$_SERVER['HTTP_HOST']] : $domains[$_SERVER['SERVER_NAME']];
    if (isset($setup)) {
        foreach ($setup as $key => $value) {
            if (str_starts_with($key, 'VITE_APP_') || str_starts_with($key, 'REACT_APP_')) {
                $content = str_replace($token, "\n" . 'window.' . $key . '="' . $value . '";' . $token, $content);
            }
        }
    }
}

echo $content;
