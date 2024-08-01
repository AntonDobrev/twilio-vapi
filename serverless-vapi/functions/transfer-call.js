exports.handler = async function (context, event, callback) {
  const twiml = new Twilio.twiml.VoiceResponse();

  console.log("event message", JSON.stringify(event.message));

  console.log(
    "event call sid",
    event.message.toolCalls[0].function.arguments.callSid
  );

  console.log("event req", JSON.stringify(event.request));

  // Get the CallSid from the event
  const callSid = event.message.toolCalls[0].function.arguments.callSid;

  console.log("callSid:", callSid);

  // Redirect the call using the <Enqueue> verb
  twiml.enqueue({
    workflowSid: context.TWILIO_WORKFLOW_SID,
  });

  try {
    // Update the call with the new TwiML
    const client = context.getTwilioClient();
    await client.calls(callSid).update({
      twiml: twiml.toString(),
    });
    console.log("Call updated successfully");
    callback(null, twiml);
  } catch (error) {
    console.error("Error updating call:", error);
    callback(error);
  }
};
