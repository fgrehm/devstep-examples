<?php

require 'vendor/autoload.php';

$app = new \Slim\Slim();

$app->get('/', function ($name) {
    echo "Hello from Slim!";
});

$app->run();
