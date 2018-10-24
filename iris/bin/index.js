

// index.js
const { RTMClient } = require('@slack/client');
const { CLIENT_EVENTS } = require('@slack/client');

// An access token (from your Slack app or custom integration - usually xoxb)
const token = 'xoxb-460537634338-460698335314-NloBh3FulBsCFI5NeyOy2YRk';

//var SlackClient = require('slack-client');

// var slackClient = new SlackClient('xoxb-460537634338-460698335314-NloBh3FulBsCFI5NeyOy2YRk');
const rtm = new RTMClient(token);
// Log all incoming messages
rtm.on('message', (event) => {
    // Structure of `event`: <https://api.slack.com/events/message>
    console.log(`Message from ${event.user}: ${event.text}`);
  })
  
  // Log all reactions
  rtm.on('reaction_added', (event) => {
    // Structure of `event`: <https://api.slack.com/events/reaction_added>
    console.log(`Reaction from ${event.user}: ${event.reaction}`);
  });
  rtm.on('reaction_removed', (event) => {
    // Structure of `event`: <https://api.slack.com/events/reaction_removed>
    console.log(`Reaction removed by ${event.user}: ${event.reaction}`);
  });
  
  // Send a message once the connection is ready
  rtm.on('ready', (event) => {
  
    // Getting a conversation ID is left as an exercise for the reader. It's usually available as the `channel` property
    // on incoming messages, or in responses to Web API requests.
  
     const conversationId = 'CDHU48JLQ';
     rtm.sendMessage('Hello, world!', conversationId);
  });