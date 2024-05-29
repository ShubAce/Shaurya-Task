const btn = document.querySelector("#Register");
btn.addEventListener("click", () => {
	const popup = document.querySelector("main");
	popup.style.display = "flex";
	btn.style.display = "none";
});
const form = document.querySelector(".form");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const phone = document.querySelector("#number");

form.addEventListener("submit", (e) => {
	e.preventDefault();
	validateInputs();
});
const genderValue = () => {
	const gender = document.getElementsByName("gender");
	for (let i = 0; i < gender.length; i++) {
		if (gender[i].checked) {
			console.log(`Gender: ${gender[i].value}`);
		}
	}
};
const setError = (element, message) => {
	const inputControl = element.parentElement;
	const errorDisplay = inputControl.querySelector(".error");
	errorDisplay.innerText = message;
	inputControl.classList.add("error");
	inputControl.classList.remove("success");
};
const setSuccess = (element) => {
	const inputControl = element.parentElement;
	const errorDisplay = inputControl.querySelector(".error");
	errorDisplay.innerText = "";
	inputControl.classList.add("success");
	inputControl.classList.remove("error");
};
const isValidEmail = (email) => {
	const re =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
};
const sportvalue = () => {
	const sport = document.querySelector("#SelectSport");
	console.log(`Sport: ${sport.value}`);
};
const validateInputs = () => {
	const nameValue = name.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const phoneValue = phone.value;
	if (nameValue === "") {
		setError(name, "username is required");
	} else if (String(nameValue).length < 5) {
		setError(name, "Name must be greater than 5");
	} else {
		setSuccess(name);
	}
	if (emailValue === "") {
		setError(email, "email is req");
	} else if (!isValidEmail(emailValue)) {
		setError(email, "provide valid email address");
	} else {
		setSuccess(email);
	}
	if (passwordValue === "") {
		setError(password, "Password is required");
	} else if (String(passwordValue).length < 8) {
		setError(password, "Password must be at least 8 character");
	} else {
		setSuccess(password);
	}
	if (phoneValue === "") {
		setError(phone, "Phone number is required");
	} else if (phoneValue.length == 10) {
		setSuccess(phone);
	} else {
		setError(phone, "Enter a valid Phone Number");
	}

	console.log(`Name: ${String(nameValue)}`);
	console.log(`Email: ${String(emailValue)}`);
	console.log(`Password: ${String(passwordValue)}`);
	console.log(`Phone: ${phoneValue}`);
	genderValue();
	sportvalue();
};
