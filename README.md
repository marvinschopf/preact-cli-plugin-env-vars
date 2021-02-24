# preact-cli-plugin-env-vars

Consume variables in your environment with the Preact CLI.

[![NPM version](https://img.shields.io/npm/v/@marvman/preact-cli-plugin-env-vars.svg)](https://www.npmjs.com/package/preact-cli-plugin-env-vars) [![Node.js CI](https://github.com/marvinschopf/preact-cli-plugin-env-vars/actions/workflows/node.js.yml/badge.svg)](https://github.com/marvinschopf/preact-cli-plugin-env-vars/actions/workflows/node.js.yml)

## Installation

```
$ yarn add @marvman/preact-cli-plugin-env-vars
```

And include in your project by creating a `preact.config.js`:

```js
import envVars from "@marvman/preact-cli-plugin-env-vars";

export default function (config, env, helpers) {
	envVars(config, env, helpers);
}
```

## Usage

The plugin allows to use any environment variables prefixed with `PREACT_APP_` to be used within your script:

```js
console.log(process.env.PREACT_APP_SECRET_CODE);
```

The environment variables are embedded during the build time.

### Adding development Environment Variables in `.env`

To define permanent environment variables, create a file called `.env` in the root of your project:

```
PREACT_APP_SECRET_CODE=abcdef
```

These variables will act as the defaults if the machine does not explicitly set them.
Please refer to the [dotenv documentation](https://github.com/motdotla/dotenv) for more details.

## License

MIT © [Robin van der Vleuten](https://www.robinvdvleuten.nl)
