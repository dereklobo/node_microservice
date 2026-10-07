# node_microservice

An early, step-by-step version of [iris](https://github.com/dereklobo/iris), a Slack bot built to learn Node.js microservices. It connects to Slack, asks [wit.ai](https://wit.ai) what a message means, and replies in the channel.

> Archived learning project from 2018. The Slack RTM API it uses has been retired.

## What's here

- **`server/`**: the first version. A Slack RTM client (`slackClient.js`), a wit.ai client (`witClient.js`) and a `time` intent that, at this stage, only replies "I don't yet know the time in …".
- **`iris/`**: a later copy of the same project that adds a service registry, so a separate time service can be looked up and called. This evolved into the standalone [iris](https://github.com/dereklobo/iris) repo.
- **`iris-time` branch**: work on the time service, merged by pull request #1.

## Run it

1. `npm install`
2. Set your tokens in the environment:
   ```
   export witToken=your-wit-ai-server-token
   export slackToken=your-slack-bot-token
   ```
3. `node bin/run.js`

The bot answers messages that contain "iris", for example "iris what time is it in Vienna?".

## Known issues

- The intent loader in `server/slackClient.js` requires `../intent/<name>Intent`, which doesn't match the file `server/intent/timeintent.js` (wrong relative path and file-name case), so the intent handler isn't found on a case-sensitive filesystem.
- There are no tests in this repo.

## Stack

Node.js, Express, `@slack/client`, wit.ai, superagent.
