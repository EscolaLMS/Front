<?php

$content = file_get_contents("index.html");

// check variables first 

$domains = [];

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

if (key_exists($_SERVER['HTTP_HOST'], $domains)) {
    $setup = $domains[$_SERVER['HTTP_HOST']];

    if (isset($setup)) {
        if (isset($setup['REACT_APP_API_URL'])) {
            $content = preg_replace('/(?<=window.REACT_APP_API_URL=")(.*)(?=")/', $setup['REACT_APP_API_URL'], $content);
        }
        if (isset($setup['REACT_APP_SENTRYDSN'])) {
            $content = preg_replace('/(?<=window.REACT_APP_SENTRYDSN=")(.*)(?=")/', $setup['REACT_APP_SENTRYDSN'], $content);
        }
        if (isset($setup['REACT_APP_YBUG'])) {
            $content = preg_replace('/(?<=window.REACT_APP_YBUG=")(.*)(?=")/', $setup['REACT_APP_YBUG'], $content);
        }
    }
}

echo $content;
