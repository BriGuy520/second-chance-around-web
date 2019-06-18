<?php 
$myemail = "brianfalasz@gmail.com";

$firstname = check_input($_POST['firstname'], "Enter Your First Name");
$lastname = check_input($_POST['lastname'], "Enter Your Last Name");
$email = check_input($_POST['email'], "Enter Your Email");
$start = check_input($_POST['startdate'], "Pick a Start Date");
$end = check_input($_POST['enddate'], "Pick an End Date");
$details = check_input($_POST['details']);

if(!preg_match("/([\w\-]+\@[\w\-]+\.[\w\-]+)/", $email))
{
  die("E-mail addess not valid");
}

$message = "Hello,

Your contact form has been submitted by:
  
Name: $firstname $lastname
E-mail: $email

Details: 
$details

";

mail($myemail, $subject. $message);

function check_input($data, $problem = "")
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

function show_error($myError)
{
?>
  <html>
  <body>
    <b>Please correct the following error: </b><br />
    <?php echo $myError; ?>

  </body>
  </html>

<?php
exit();
}
?>

?>

<html lang="en">
<body>
  <p>Your first name is: <?php echo $firstname; ?></p>
  <p>Your last name is: <?php echo $lastname; ?></p>
  <p>Your email name is: <?php echo $email; ?></p>
  <p>Your start date is: <?php echo $start; ?></p>
  <p>Your end date is: <?php echo $end; ?></p>
  <p>Details for your project: <?php echo $details; ?></p>

</body>
</html>

<?php 

?>