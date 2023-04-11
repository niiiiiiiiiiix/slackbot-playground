import dotenv from 'dotenv';
import pkg from '@slack/bolt';
import axios from 'axios';

dotenv.config();
const { App } = pkg;
const app = new App({
  token: process.env.SLACK_APP_BOT_TOKEN,
  socketMode: true,
  appToken: process.env.SLACK_APP_TOKEN,
  signingSecret: process.env.SLACK_APP_SIGNING_SECRET,
});

let regexCheck = /^[?]/;
app.message(regexCheck, async ({ event, say }) => {
  await say(`Hello <@${event.user}>, you entered ${event.text}`);
});

let notRegexCheck = /^[^?]/;
app.message(notRegexCheck, async ({ event, say }) => {
  await say('Please check your syntax');
});

(async () => {
  await app.start(3000);
  console.log('App started on port 3000');
})();
