<?php
if ($_GET) {
	printf("<h2>Content of the %s array</h2>\n", '$_GET');
	foreach ($_GET as $key => $val)
		printf("%s = %s<br />\n", $key, $val);
}

if ($_POST) {
	printf("<h2>Content of the %s array</h2>\n", '$_POST');
	foreach ($_POST as $key => $val)
		printf("%s = %s<br />\n", $key, $val);
}
?>
