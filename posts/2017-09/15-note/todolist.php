<?php
    $ongoing_arr = [];
    $completed_arr = [];
    if (!empty($_GET['action'])) {
        $action = $_GET['action'];
        switch($action) {
            case 'add': 
                add(@$_GET['item']);
                break;
            case 'delete':
                delete(@$_GET['id']);
                break;
            case 'complete':
                complete(@$_GET['id']);
                break;
            default: 
                echo "<script> alert('Nothing'); </script>";
        }
    }
    $ongoing_arr = showOngoing();
    $completed_arr = showComplete();

    function add($todo) 
    {
        $link = db_connect();

        if (!empty($todo)) {
            $query = "INSERT INTO todolist(content) VALUES('$todo')";
        
            mysqli_query($link, $query);
        
        } else {
            echo "<script>alert('没有输入!!');</script>";
        }

        db_close($link);
    }

    function delete($id)
    {
        $link = db_connect();

        if (!empty($id)) {
            $query = "DELETE FROM todolist WHERE id=$id";

            mysqli_query($link, $query);
        } else {
            echo "<script>alert('没有输入id');</script>";
        }

        db_close($link);
    }

    function complete($id)
    {
        $link = db_connect();

        if (!empty($id)){            
            $query = "UPDATE todolist SET status = 'completed' where id=$id";
            
            mysqli_query($link, $query);
        }

        db_close($link);
    }
    
    function showOngoing()
    {
        $link = db_connect();

        $get_todolist_query = "SELECT * FROM todolist where status='ongoing' ORDER BY id ASC";

        $todolist_result = mysqli_query($link, $get_todolist_query);

        $content = mysqli_fetch_all($todolist_result, MYSQLI_NUM);

        db_close($link);

        return $content;
    }
    
    function showComplete()
    {
        $link = db_connect();
    
        $get_todolist_query = "SELECT * FROM todolist where status='completed' ORDER BY id ASC";
    
        $todolist_result = mysqli_query($link, $get_todolist_query);
    
        $todolist_completed_arr = mysqli_fetch_all($todolist_result, MYSQLI_NUM);

        db_close($link);
    
       return $todolist_completed_arr;
    }
    
    function db_connect()
    {
        $db_host = 'localhost'; //不用修改
        $db_username = 'root';
        $db_password = '';
        $db_name = 'test';
    
        $link = @mysqli_connect($db_host, $db_username, $db_password, $db_name);
    
        if (!$link) {
            die('Connect Error (' . mysqli_connect_errno() . ') '
                . mysqli_connect_error());
        }
    
        return $link;
    }

    function db_close($link)
    {
        mysqli_close($link);
    }
?>
<!DOCTYPE html>
<html>
<head>
	<title>To DO List</title>
    <style>
    body{
        text-align:center;
        font-size:20px;
        line-hight:200%;
        background:url("./images/shattered.png");
        font-family: cursive;
    }
    input{
        width:60%;
        height:40px;
    }
    button{
        font-size:20px;
        height:40px;
        width:120px;
        font-family: cursive;
    }
    ul{
        list-style:none;
        line-height:200%;
        width:60%;
        margin:10px auto;
    }
    ul li{
        font-size:24px;

        border:1px solid #eeeeee;
        padding:10px;
    }
    .close{
        float:left;
        font-size:36px;
        color: red;
    }
    .complete{
        float:right;
        font-size:16px;
        color: blue;
    }
    h1{
        padding-top:40px;
        color:#eeeeee;
        height:130px;
        background:url("./images/lodyas.png")
    }
    h2{
        text-align:left;
        color:red;
    }
    </style>
</head>
<body>
    <h1>My To Do List</h1>
    <form action="todolist.php" method="get">
        <input type="text" name="action" value="add" hidden>
        <input type="text" name="item">
        <button type="submit">ADD</button>
    </form>
    <h2>Plan to do</h2>
    <ul>
        <?php for($i = 0; $i < count($ongoing_arr); $i++): ?>
            <li><a href="todolist.php?action=complete&id=<?php echo $ongoing_arr[$i][0]; ?>"><span class="complete">Complete</span></a><?php echo $ongoing_arr[$i][1]?>
            <a href="todolist.php?action=delete&id=<?php echo $ongoing_arr[$i][0]; ?>"><span class="close">&times;</span></a></li>
        <?php endfor; ?>
    </ul>
    <hr><hr>
    <h2 style="color:green">Completed</h2>
    <ul>
        <?php for($i = 0; $i < count($completed_arr); $i++): ?>
            <li><?php echo $completed_arr[$i][1]?>
        <a href="todolist.php?action=delete&id=<?php echo $completed_arr[$i][0]; ?>"><span class="close">&times;</span></a></li>
        <?php endfor; ?>
    </ul>
</body>
</html>