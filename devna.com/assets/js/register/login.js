$(document).on("ready", function()
{

});

$(document).on("click", "#btnSignup", function()
{
	window.location.href = "signup.html";
});

$(document).on("click", "#btnLoginCred", function()
{
	let otp = false;
	let isValidated = validation(otp);
	if(isValidated)
	{
		login();	
	}
});

$(document).on("click", "#btnLoginOtp", function()
{
	let otp = true;
	let isValidated = validation(otp);
	if(isValidated)
	{
		$("#loginWrapper:first-child").find("i").attr("class", "fas fa-lock-open");
		$("#loginWrapper div:nth-child(2)").html("OTP Verification");
		$("small").attr("style", "display: none !important");
		$("#btnLoginCred").css("display", "none");
		$("#btnLoginOtp").css("display", "none");
		$("#btnVerify").css("display", "block");
		$(".textWithIcon").eq(0).attr("style", "display: none !important");
		$(".textWithIcon").eq(1).attr("style", "display: none !important");
		$(".textWithIcon").eq(2).removeAttr("style")
		sendOtp();
	}
});

$(document).on("click", "#btnVerify", function()
{
	let txtOtp = $("#txtOtp").val();

	if(txtOtp == "")
	{
		$.alert
		(
			{
				title: 'Alert!',
				content: 'Please Enter OTP',
				type: 'red',
				typeAnimated: true,
				icon: 'fa fa-warning',
				theme: 'modern',
				useBootstrap: 'false',
				draggable: false
			}
		);
	}
	else
	{
		if($.trim(txtUsername).match(/^\d((?!\D).)*$/gm))
		{
			//otp check code goes here
		}
		else
		{
			$("#invalidOtp").attr("style", "display: block !important");
		}
	}
})

function validation(otp)
{
	let txtUsername = $("#txtUsername").val();
	let txtPassword = $("#txtPassword").val();

	let validated = false;

	if((txtUsername == "" || txtPassword == "") && !otp)
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
		if(txtUsername.match(/@/gm))
		{
			console.log("if");
			if($.trim(txtUsername).match(/^[a-zA-Z0-9.!#$%&'*+\/\=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/gm))
			{
				$("#invalidUsername").attr("style", "display: block !important");
				validated = true;
				return validated;
			}
			else
			{
				return validated;
			}
		}
		else
		{
			if($.trim(txtUsername).match(/^\d((?!\D).)*$/gm))
			{
				validated = true;
				return validated;
			}
			else
			{
				$("#invalidUsername").attr("style", "display: block !important");
				return validated;
			}
		}
	}
}