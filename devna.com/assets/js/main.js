$(document).ready(function()
{
	$( "#dropdown" ).select2({
		theme: "bootstrap-5",
		selectionCssClass: "select2--large", // For Select2 v4.1
		dropdownCssClass: "select2--large",
	});

	$("#dropdown").on("select2:open", function()
	{
		$("input.select2-search__field").prop("placeholder", "Start typing City Name");

		$('input.select2-search__field')[0].focus();
	});

	populateDropdown();
});

async function populateDropdown()
{
	let options = `<option></option>`;
	let country = "India";
	let fetchedCities = [];
	let url = "https://tsar10.github.io/DEVNA/devna.com/assets/devnaConstants/cities.json";
	await $.ajax
	(
		{
			url: url,
			type: "GET",

			success: function(res)
			{
				// console.log(res);
				$.each(res, function(key, data)
				{
					options += `<option>${data.city}, ${data.state}</option>`
				});
			}
		}
	);
	$("#dropdown").html(options);
}

$(document).on("click", "#btnLoginNav", function()
{
	window.location.href = "login.html";
});

$(document).on("click", "#btnSignupNav", function()
{
	window.location.href = "signup.html";
});