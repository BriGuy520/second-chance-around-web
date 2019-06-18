<?php 

$firstname = check_input($_POST['firstname']);
$lastname = check_input($_POST['lastname']);
$email = check_input($_POST['email']);
$details = check_input($_POST['details']);

?>

<html lang="en">
<body>
  <p>Your first name is: <?php echo $firstname; ?></p>
  <p>Your last name is: <?php echo $lastname; ?></p>
  <p>Your email name is: <?php echo $email; ?></p>
  <p>Details for your project: <?php echo $details; ?></p>

</body>
</html>

<?php 
function check_input ($data, $problem="")
{
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);

  if($problem && strlen($data) == 0)
  {
    die($problem);
  }
  return $data;
}
?>