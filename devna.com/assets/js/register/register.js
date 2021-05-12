$(document).on("ready", function()
{

});

$(document).on("click", "#btnLogin", function()
{
	window.location.href = "login.html";
});

$(document).on("click", "#btnSignup", function()
{
	let isValidated = validation();
	if(isValidated)
	{
		register();
	}
});

function validation()
{
	let validated = false;

	let txtName = $("#txtName").val();
	let txtPhoneNo = $("#txtPhoneNo").val();
	let txtPassword = $("#txtPassword").val();
	let txtConfirmPassword = $("#txtConfirmPassword").val();

	if(txtName == "" || txtPhoneNo == "" || txtPassword == "" || txtConfirmPassword == "")
	{
		$.alert
		(
			{
				title: 'Alert!',
				content: 'Please Fill All Data',
				type: 'red',
				typeAnimated: true,
				icon: 'fa fa-warning',
				theme: 'modern',
				useBootstrap: 'false',
				draggable: false
			}
		);
		return validated;
	}
	else
	{
		if(txtPassword === txtConfirmPassword)
		{
			if(txtName.match(/^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/gm))
			{
				$("#invalidPassword").attr("style", "display: block !important");
				return validated;
			}
			else
			{
				if(txtPhoneNo.match(/^[a-zA-Z!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/gm))
				{
					$("#invalidNumber").attr("style", "display: block !important");
					return validated;
				}
				else
				{
					validated = true;
					return validated;
				}
			}
		}
		else
		{
			console.log("WRONG");
			$("#invalidPassword").attr("style", "display: block !important");
			return validated;
		}
	}
}

function register()
{
	// ajax call to be added
}