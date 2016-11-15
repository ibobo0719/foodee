<?php
header('Content-Type:application/json;charset=utf-8');
$tid=$_REQUEST['tid'];

//连接数据库
include('0_config.php');//包含指定文件内容在当前位置
$conn=mysqli_connect($db_url,$db_user,$db_pwd,$db_name,$db_port);
$sql="set names utf8";
mysqli_query($conn,$sql);

$sql="select mname,pic,price,detail,type from mtype,menu where tid=$tid and tname=type";
$result=mysqli_query($conn,$sql);
$list=mysqli_fetch_all($result,MYSQLI_ASSOC);
echo json_encode($list);

?>