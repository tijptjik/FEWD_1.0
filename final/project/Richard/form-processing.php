<?php

while (list($key, $val) = @each($_GET)) $GLOBALS[$key] = $val;
while (list($key, $val) = @each($_POST)) $GLOBALS[$key] = $val;
while (list($key, $val) = @each($_COOKIE)) $GLOBALS[$key] = $val;
while (list($key, $val) = @each($_FILES)) $GLOBALS[$key] = $val;
while (list($key, $val) = @each($_SESSION)) $GLOBALS[$key] = $val;

/* Subject and Email Variables */

	$emailSubject = 'Contact Form';
	$webMaster = 'richarddewalhalla@gmail.com';
	
/* Gathering Data Variables */

	$nameField = $_POST['Name'];
	$emailField = $_POST['Email'];
	$messageField = $_POST['Message'];
	
	$body = <<<EOD
<br><hr><br>
Name: $nameField <br>
Email: $emailField <br>
Message: $messageField <br>
EOD;

	$headers = "From: $email\r\n";
	$headers .= "Content-type: text/html\r\n";
	$success = mail($webMaster, $emailSubject, $body, $headers);
	
/* Results Rendered as HTML */

	$theResults = <<<EOD
<html>
<head>
<title></title>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1"><br />
<meta HTTP-EQUIV="REFRESH" content="0; url=http://richarddewalhalla.github.io/FEWD/final/Richard/index.html#">
<style type="text/css">
<!--
body {
	background-color: #fffff;
	font-family: Arial, Helvetica, sans-serif;
	font-size: 14px;
	font-style: normal;
	line-height: normal;
	font-weight: normal;
	color: #000000;
	text-decoration: none;
}
-->
</style>
</head>
<div align="left">
Redirecting you...</div>
</body>
</html>
EOD;
echo "$theResults";

?>