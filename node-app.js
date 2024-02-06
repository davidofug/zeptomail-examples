var nodemailer = require("nodemailer");
var transport = nodemailer.createTransport({
	host: "smtp.zeptomail.com",
	port: 587,
	auth: {
		user: "emailapikey",
		pass: process.env.PASS,
	},
});

var mailOptions = {
	from: '"Example Team" <noreply@ablestate.africa>',
	to: "theablestate@gmail.com",
	subject: "Test Email",
	html: "Test email sent successfully.",
};

transport.sendMail(mailOptions, (error, info) => {
	if (error) {
		return console.log(error);
	}
	console.log("Successfully sent");
});
