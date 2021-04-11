<!DOCTYPE html>
<html>
<head>
	<title>DEVNA</title>
	<link rel="stylesheet" type="text/css" href="../css/home.css">
</head>
<body>
	<header>
		<?php include "../../html/navbar.html"?>
	</header>
	<main>
		<div class="slider">
			<input type="radio" id="s1" name="slides" checked>
			<input type="radio" id="s2" name="slides">
			<input type="radio" id="s3" name="slides">
			<div class="inner">
				<div>
					<img src="../images/caterers.jpg">
				</div>
				<div>
					<img src="../images/buffet.jpg">
				</div>
				<div>
					<img src="../images/celebration.jpg">
				</div>
			</div>
			<label for="s1" id="slide1"></label>
			<label for="s2" id="slide2"></label>
			<label for="s3" id="slide3"></label>
		</div>
		<section>
			<h1>
				<a href="#">OFFERS</a>
			</h1>
			<div>
				<a href="#">
					<img src="../images/offers.jpg">
				</a>
			</div>
		</section>
		<section>
			<h1>
				<a href="caterer.html">CATERERS</a>
			</h1>
			<div>
				<a href="#">
					<img src="../images/offers.jpg">
				</a>
			</div>
		</section>
		<section>
			<h1>
				<a href="#">EVENT ORGANIZERS</a>
			</h1>
			<div>
				<a href="#">
					<img src="../images/offers.jpg">
				</a>
			</div>
		</section>
	</main>
	<footer>
		<?php include "../../html/footer.html"?>
	</footer>
</body>
</html>
