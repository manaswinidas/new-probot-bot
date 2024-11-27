# Probot app

> A GitHub App built with [Probot](https://github.com/probot/probot). This repository was built as part of a LinkedIn Learning course on [Building GitHub Bots](https://www.linkedin.com/learning/building-github-bots/). Please refer to the [Build a GitHub bot using Probot](https://www.linkedin.com/learning/building-github-bots/what-is-probot) section to learn more about how this was built and deployed on a cloud application hosting platform called [Render](https://render.com/).

## Setup

```sh
# Install dependencies
npm install

# Run the bot
npm start
```

## Docker

```sh
# 1. Build container
docker build -t first-probot-app .

# 2. Start container
docker run -e APP_ID=<app-id> -e PRIVATE_KEY=<pem-value> first-probot-app
```

## Contributing

If you have suggestions for how first-probot-app could be improved, or want to report a bug, open an issue! We'd love all and any contributions.

For more, check out the [Contributing Guide](CONTRIBUTING.md).

## License

[ISC](LICENSE) © 2024 manaswinidas
