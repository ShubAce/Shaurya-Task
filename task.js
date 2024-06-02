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
const total = document.querySelector(".total");
let totalRegistration = 0;

total.innerText = `Total registration till now: ${totalRegistration}`;
form.addEventListener("submit", (e) => {
	e.preventDefault();
	validateInputs();
	totalRegistration++;
	total.innerText = `Total registration till now: ${totalRegistration}`;
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

const validateInputs = () => {
	const nameValue = name.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const phoneValue = phone.value;
	const sport = document.querySelector("#SelectSport");
	let error = 0;
	// if (sport.value === "Sports") {
	// 	error += 1;
	// 	setError(sport, "Please select any sport");
	// 	alert("Select any sport value");
	// } else {
	// 	setSuccess(sport);
	// }
	if (nameValue === "") {
		setError(name, "username is required");
		if (setError) {
			alert("enter correct name");
			error += 1;
		}
	} else if (String(nameValue).length < 5) {
		setError(name, "Name must be greater than 5");
		if (setError) {
			alert("enter correct name");
			error += 1;
		}
	} else {
		setSuccess(name);
	}
	if (emailValue === "") {
		setError(email, "Email is req");
		if (setError) {
			error += 1;
			alert("enter correct email");
		}
	} else if (!isValidEmail(emailValue)) {
		setError(email, "provide valid email address");
		if (setError) {
			error += 1;
			alert("enter correct email");
		}
	} else {
		setSuccess(email);
	}
	if (passwordValue === "") {
		setError(password, "Password is required");
		if (setError) {
			error += 1;
			alert("enter correct password");
		}
	} else if (String(passwordValue).length < 8) {
		setError(password, "Password must be at least 8 character");
		if (setError) {
			error += 1;
			alert("enter correct password");
		}
	} else {
		setSuccess(password);
	}
	if (phoneValue === "") {
		setError(phone, "Phone number is required");
		if (setError) {
			error += 1;
			alert("enter correct number");
		}
	} else if (phoneValue.length == 10) {
		setSuccess(phone);
	} else {
		setError(phone, "Enter a valid Phone Number");
		if (setError) {
			error += 1;
			alert("enter correct number");
		}
	}
	if (error === 0) {
		console.log(`Name: ${String(nameValue)}`);
		console.log(`Email: ${String(emailValue)}`);
		console.log(`Password: ${String(passwordValue)}`);
		console.log(`Phone: ${phoneValue}`);
		console.log(`Sport: ${sport.value}`);
		genderValue();
		const popup = document.querySelector("main");
		const thank = document.querySelector(".done");

		popup.style.display = "none";
		thank.style.display = "flex";
	}
};
