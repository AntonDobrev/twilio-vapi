const axios = require("axios");

exports.handler = async function (context, event, callback) {
  console.log("event", event);

  console.log("call sid", event.CallSid);
  console.log("phone number", event.From);

  console.log("phonenumber id", context.VAPI_PHONE_NUMBER_ID);
  console.log("assistant id", context.VAPI_ASSISTANT_ID);

  let data = JSON.stringify({
    phoneNumberId: context.VAPI_PHONE_NUMBER_ID,
    phoneCallProviderBypassEnabled: true,
    customer: {
      number: event.From,
    },
    assistantOverrides: {
      variableValues: {
        callSid: event.CallSid,
      },
    },
    assistantId: context.VAPI_ASSISTANT_ID,
  });

  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${context.VAPI_API_KEY}`,
  };

  const response = await axios.post(`https://api.vapi.ai/call`, data, {
    headers: headers,
  });

  callback(null, response.data["phoneCallProviderDetails"]["twiml"]);

  // const twiml = new Twilio.twiml.VoiceResponse();
  // twiml.say("Hello World!");
  // callback(null, twiml);
};
