<?php
session_start();
if(isset($_SESSION["user"])){
header("Location:login.php");
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    

    <title>user dashboard</title>
</head>
<body>
    <div class="container">
        <h1>Welcome to dashboard</h1>
        <a href="logout.php" class="btn btn-warning"> Logout</a>


</div>

    
</body>
</html>