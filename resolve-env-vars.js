/**
 * MIT License
 *
 * Copyright (c) 2018 Robin van der Vleuten <robin@webstronauts.co>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 **/

module.exports = function (prefix = "REACT_APP_") {
	const raw = Object.keys(process.env)
		.filter((key) => new RegExp(`^${prefix}`, "i").test(key))
		.reduce((env, key) => Object.assign(env, { [key]: process.env[key] }), {});

	const stringified = {
		"process.env": Object.keys(raw).reduce(
			(env, key) => Object.assign(env, { [key]: JSON.stringify(raw[key]) }),
			{}
		),
	};

	return { raw, stringified };
};
