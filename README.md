# Build an AI Assistant with Twilio and VAPI

For a detailed guide on how to integrate Twilio with VAPI AI Assistant and transfer calls between them, check out our blog post [insert link here](https://...). This blog post covers step-by-step instructions on sending calls from Twilio to VAPI AI Assistant and transferring calls back to Twilio for human agents.

Happy integrating!

## Prerequisites

Before getting started with this repository, make sure you have the following:

- A Twilio account. If you don't have one, you can sign up for free at [Twilio website](https://www.twilio.com/try-twilio).
- Twilio CLI installed on your machine. You can install it by following the instructions in the [Twilio CLI documentation](https://www.twilio.com/docs/twilio-cli/quickstart).

## Twilio Functions

This repository contains two serverless functions:

1. **engage-vapi-assistant**: This function is used to engage the VAPI AI assistant. It handles interactions with the assistant and provides responses based on user input.

2. **transfer-to-human-agent**: This function is used to transfer a call to a human agent. It handles the logic for transferring the call and ensuring a smooth transition from the AI assistant to a human agent.

To use these functions, follow the deployment steps mentioned below.

## Deploying the Serverless Function

To deploy the serverless function in this repository, follow these steps:

1. Clone the repository to your local machine:

```bash
git clone https://github.com/djayanna/twilio-vapi.git
```

2. Navigate to the project directory:

```bash
cd twilio-vapi

cd serverless-vapi
```

3. Update the necessary configuration variables in the `.env` file:

   ```bash
   cp .env.example .env
   ```

   Open the `.env` file and update the following variables:

   - `TWILIO_API_KEY`: # Your TWILIO API Key
   - `TWILIO_SECRET`=:Your TWILIO API Secret

   - `TWILIO_WORKFLOW_SID`: Your TWILIO Workflow SID for transfering calls to human agents

   - `VAPI_API_KEY`: Your VAPI API Key
   - `VAPI_PHONE_NUMBER_ID`: Your VAPI Phone Number ID
   - `VAPI_ASSISTANT_ID`: Your VAPI Assistant ID

Save the changes.

Now you are ready to use the serverless functions in the twilio-vapi repository.

4. Install the project dependencies:

```bash
npm install
```

5. Deploy the serverless function using the Twilio CLI:

```bash
twilio serverless:deploy
```

This command will deploy the serverless function to your Twilio account.

6. Once the deployment is successful, you will receive a URL for your serverless function. You can use this URL to access and test your function.

