import React from "react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import {
	render,
	fireEvent,
	waitFor,
	screen,
	getNodeText,
	cleanup,
} from "@testing-library/react";

import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import Login from "../components/Login/Login";
import { BrowserRouter } from "react-router-dom";

const utils = render(
	<BrowserRouter>
		<Login />
	</BrowserRouter>
);
const loginPasswordInput = utils.getByTestId("login-password-input");
const loginEmailInput = utils.getByTestId("login-email-input");
const loginButton = utils.getByTestId("login-button");
const loginErrorContainer = utils.getByTestId("login-error");

test("Login - validates email and password correctly", async () => {
	await userEvent.type(loginEmailInput, "test@test");
	userEvent.click(loginButton);
	expect(getNodeText(loginErrorContainer)).toBe("Incorrect e-mail");
	await userEvent.clear(loginEmailInput);
	await userEvent.type(loginEmailInput, "test@test.com");
	await userEvent.type(loginPasswordInput, "");
	userEvent.click(loginButton);
	expect(getNodeText(loginErrorContainer)).toBe(
		"Password need to be at least 6 characters long"
	);
});
