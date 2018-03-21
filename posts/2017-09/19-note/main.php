<?php
session_start();
$action = @$_GET['action'];

switch($action) {
    case 'login':
        login($_GET['username'], $_GET['password']);
        break;
    case 'logout':
        logout();
        break;
}

function login($username, $password)
{
    $_SESSION['username'] = $username;
    $_SESSION['password'] = $password;
}

function logout()
{
    $_SESSION['username'] = '';
    $_SESSION['password'] = '';
}

function hasLogined()
{
    if (!empty($_SESSION['username']) && !empty($_SESSION['password'])) {
        echo '已经登录过了';
        return true;
    }

    echo '未登录';
    return false;
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Session Auth</title>
    <style>
        #main {
            border: 1px solid #666666;
            width: 80%;
            margin: 20px auto;
            text-align: center;
            padding: 20px;
        }

        input {
            display: block;
            margin: 0 auto;
        }
    </style>
</head>
<body>
    <div id="main">
        <?php if (!hasLogined()): ?>

            <div id="login">
                <form action="main.php">
                    <input type="hidden" name="action" value="login">
                    <input type="text" name="username" placeholder="username" />
                    <input type="text" name="password" placeholder="password" />
                    <button type="submit">Login</button>
                </form>
            </div>

        <?php else: ?>

        <div>
            <form action="main.php">
                <input type="hidden" name="action" value="logout" hidden>
                <button type="submit">Logout</button>
            </form>
        </div>

        <?php endif; ?>
    </div>
</body>
</html>