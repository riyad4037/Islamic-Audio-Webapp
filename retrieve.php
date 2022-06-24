<?php
include_once 'database.php';
$result = mysqli_query($conn,"SELECT * FROM songs");
?>
<!DOCTYPE html>
<html>
 <head>
 <title> Retrive data</title>
 </head>
<body>
<?php

if (mysqli_num_rows($result) > 0) {
?>
  <table>
  
  <tr>
    <td>audioName</td>
    <td>authorName</td>
    <td>Type</td>
    <td>imageUrl</td>
    <td>audioUrl</td>
    <td>audioID</td>
  </tr>
<?php
$i=0;

while($row = mysqli_fetch_array($result)) {
  $path = $row["audioUrl"];
$image = $row["imageUrl"];
?>

<audio src='$path' autoplay></audio>

<tr>
    <td><?php echo $row["audioName"]; ?></td>
    <td><?php echo $row["authorName"]; ?></td>
    <td><?php echo $row["Type"]; ?></td>
    <td><?php echo $row["imageUrl"]; ?></td>
    <td><?php echo $row["audioUrl"]; ?></td>
    <td><?php echo $row["audioID"]; ?></td>
</tr>
<?php
$i++;
}
?>
</table>
 <?php
}
else{
    echo "No result found";
}
?>
 </body>
</html>