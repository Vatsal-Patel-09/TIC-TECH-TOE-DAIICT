"""
Install the Google AI Python SDK

$ pip install google-generativeai
"""

import os
import markdown
import google.generativeai as genai

genai.configure(api_key="AIzaSyCYdk3QrOoq_qzkvmHodWDlge9Unld7a8M")

# Create the model
generation_config = {
  "temperature": 1,
  "top_p": 0.95,
  "top_k": 64,
  "max_output_tokens": 8192,
  "response_mime_type": "text/plain",
}

model = genai.GenerativeModel(
  model_name="tunedModels/giftgeniev1pro20-4lga8lsj5a95",
  generation_config=generation_config,
  # safety_settings = Adjust safety settings
  # See https://ai.google.dev/gemini-api/docs/safety-settings
)

chat_session = model.start_chat(
  history=[
  ]
)

def chat_with_bot():
    print("Chatbot is ready! Type 'exit' to end the conversation.\n")    
    while True:
        user_input = input("You: ")  # Take user input dynamically

        if user_input.lower() == "exit":
            print("Chatbot: Goodbye!")
            break

        # Send the user's message to the chatbot
        response = chat_session.send_message(user_input)
        
        # Print the chatbot's response
        formatted_response = markdown.markdown(response.text)
        print(f"Chatbot: {formatted_response}\n")

