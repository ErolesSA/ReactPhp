<?php



/*================= CONNECTION =================*/
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);

$mysqli = new mysqli('localhost', 'root', '', 'test1');

$mysqli->set_charset('utf8mb4');

printf("<a href='index.html'></a>");

if (isset($_POST["submit"])) {



	$tipo = $_POST["tipo"];
	$tabla = $_POST["tabla"];
	$newVar = $_POST["newVar"];
	$result = 0;

	echo $tipo;
	echo $tabla;
	echo $newVar;



	$result = $mysqli->query("ALTER TABLE $tabla ADD COLUMN $newVar $tipo(10);");

	if ($result != 0) {
		echo "<script>alert('Column Add');</script>";
		echo"<a href='index.html'>Volver</a>";
	}
}

if (isset($_POST["submit2"])) {

	$tabla = $_POST["tabla"];
	$newVar = $_POST["newVar"];
	$result2 = 0;

	$result2 = $mysqli->query("ALTER TABLE $tabla DROP $newVar;");

	if ($result2 != 0) {

		echo "<script>alert('Column Delete');</script>";
		echo"<a href='index2.html'>Volver</a>";
	}
}
