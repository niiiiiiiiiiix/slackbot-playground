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

app.message('hello', async ({ event, say }) => {
  let regexValue = /^[?]/;
  if (event.text.match(regexValue)) {
    console.log('contains ?');
  } else {
    await say(`Hello, <@${event.user}>`);
    console.log(event);
    console.log('hihi');
  }
});

(async () => {
  await app.start(3000);
  console.log('App started on port 3000');
})();
