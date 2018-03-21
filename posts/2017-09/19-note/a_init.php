<?php 
$config = include('../config.php');

session_name($config['a']['session_name']);

session_start();

if (empty($_SESSION['name'])) {
    $_SESSION['name'] = 'a';
    echo 'Please refresh.';
} else {
    var_dump($_SESSION);
}