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

// const server = setupServer(
// 	res.post("/api/login", (req, res, ctx) => {
// 		return res(ctx.json({
//          token: 'abc123abc123abc123',
//          userId: 'abc123abc123abc123',
//          recipes: []
//       }));
// 	})
// );

// beforeAll(() => server.listen())
// afterEach(() => server.resetHandlers())
// afterAll(() => server.close())

// test('login displays server error', async () => {
//    server.use(
//       rest.post('/api/login', (req,res,ctx)=>{
//          return res(ctx.status(500))
//       })
//    )
// })

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
