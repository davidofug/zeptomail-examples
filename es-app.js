// https://www.npmjs.com/package/zeptomail

// For ES6
// import { SendMailClient } from "zeptomail";

// For CommonJS
var { SendMailClient } = require("zeptomail");

const url = "api.zeptomail.com/";
const token = process.env.TOKEN;

let client = new SendMailClient({ url, token });

[
	{ name: "Wampamba", email: "davidwampamba@gmail.com" },
	{ name: "Ablestate Labs", email: "theablestate@gmail.com" },
].map((user) => {
	client
		.sendMail({
			from: {
				address: "noreply@ablestate.africa",
				name: "Insightify",
			},
			to: [
				{
					email_address: {
						address: user.email,
						name: user.name,
					},
				},
			],
			subject: "Congratulations!",
			htmlbody:
				"<div><b>Hello " +
				user.name +
				", Congratulations for registration on the insightify app.</b></div>",
		})
		.then((resp) => console.log("success"))
		.catch((error) => console.log("error"));
});
