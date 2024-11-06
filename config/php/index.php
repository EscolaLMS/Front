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

if (key_exists($_SERVER['HTTP_HOST'], $domains) || key_exists($_SERVER['SERVER_NAME'], $domains)) {

    $setup = key_exists($_SERVER['HTTP_HOST'], $domains) ? $domains[$_SERVER['HTTP_HOST']] : $domains[$_SERVER['SERVER_NAME']];

    if (isset($setup)) {
        if (isset($setup['VITE_APP_API_URL'])) {
            $content = preg_replace('/(?<=window.VITE_APP_API_URL=")(.*)(?=")/', $setup['VITE_APP_API_URL'], $content);
        }
        if (isset($setup['VITE_APP_SENTRYDSN'])) {
            $content = preg_replace('/(?<=window.VITE_APP_SENTRYDSN=")(.*)(?=")/', $setup['VITE_APP_SENTRYDSN'], $content);
        }
        if (isset($setup['VITE_APP_YBUG_ID'])) {
            $content = preg_replace('/(?<=window.VITE_APP_YBUG_ID=")(.*)(?=")/', $setup['VITE_APP_YBUG_ID'], $content);
        }
        if (isset($setup['VITE_APP_BASENAME'])) {
            $content = preg_replace('/(?<=window.VITE_APP_BASENAME=")(.*)(?=")/', $setup['VITE_APP_BASENAME'], $content);
        }
        if (isset($setup['VITE_APP_ROUTING_TYPE'])) {
            $content = preg_replace('/(?<=window.VITE_APP_ROUTING_TYPE=")(.*)(?=")/', $setup['VITE_APP_ROUTING_TYPE'], $content);
        }
        if (isset($setup['VITE_APP_URL'])) {
            $content = preg_replace('/(?<=window.VITE_APP_URL=")(.*)(?=")/', $setup['VITE_APP_URL'], $content);
        }
        if (isset($setup['VITE_APP_PUBLIC_IMG_URL'])) {
            $content = preg_replace('/(?<=window.VITE_APP_PUBLIC_IMG_URL=")(.*)(?=")/', $setup['VITE_APP_PUBLIC_IMG_URL'], $content);
        }

        foreach ($setup as $key => $value) {
            if (!in_array($key, ['VITE_APP_API_URL', 'VITE_APP_SENTRYDSN', 'VITE_APP_YBUG_ID', 'VITE_APP_BASENAME', 'VITE_APP_ROUTING_TYPE', 'VITE_APP_URL', 'VITE_APP_PUBLIC_IMG_URL'])) {
                $content = str_replace('</head>', "\n" . '<script>window.' . $key . '="' . $value . '"</script></head>', $content);
            }
        }
    }
}

echo $content;
