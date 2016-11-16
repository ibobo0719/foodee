<?php
header('Content-Type:application/json;charset=utf-8');

$name=$_REQUEST['uname'];
$email=$_REQUEST['email'];
$occation=$_REQUEST['occation'];
$date=$_REQUEST['date'];
$message=$_REQUEST['message'];

//连接数据库
//include('0_config.php');//包含指定文件内容在当前位置
//$conn=mysqli_connect($db_url,$db_user,$db_pwd,$db_name,$db_port);
$conn = mysqli_connect(SAE_MYSQL_HOST_M, SAE_MYSQL_USER, SAE_MYSQL_PASS,  SAE_MYSQL_DB, SAE_MYSQL_PORT);
$sql="set names utf8";
mysqli_query($conn,$sql);

$sql="insert into myorder values(null,'$name','$email','$occation','$date','$message')";
$result=mysqli_query($conn,$sql);

$output=[];
if($result){
    $output['msg']='succ';
}else{
    $output['msg']='err';
}

echo json_encode($output);

?>