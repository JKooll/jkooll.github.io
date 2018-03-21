<?php 
$config = include('../config.php');

session_name($config['b']['session_name']);

session_start();

if (empty($_SESSION['name'])) {
    $_SESSION['name'] = 'b';
    echo 'Please refresh.';
} else {
    var_dump($_SESSION);
}