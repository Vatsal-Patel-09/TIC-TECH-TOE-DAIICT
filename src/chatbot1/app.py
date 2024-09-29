# from flask import Flask, request, jsonify
# import random_hello  # Import your random greeting generator
# import AI_chatbot_2  # Your chatbot logic

# app = Flask(__name__)

# # Endpoint to get a random greeting message
# @app.route('/random_hello', methods=['GET'])
# def get_greeting():
#     greeting_message = random_hello.get_random_greeting()  # Assumes a function in random_hello.py
#     return jsonify({'message': greeting_message})

# # Endpoint to process chat input
# @app.route('/Chat', methods=['POST'])
# def chat():
#     user_message = request.json.get('message')  # Get user input
#     if user_message:
#         bot_response = AI_chatbot_2.chat_session.send_message(user_message)  # Pass input to AI_chatbot_2.py
#         return jsonify({'response': bot_response.text})
#     else:
#         return jsonify({'error': 'No message provided'}), 400

# if __name__ == '__main__':
#     app.run(debug=True)


from flask import Flask, request, jsonify
from flask_cors import CORS  # Import CORS
import random_hello  # Import your random greeting generator
import AI_chatbot_2  # Your chatbot logic

app = Flask(__name__)
CORS(app, origins=['http://localhost:3000'])

# Endpoint to get a random greeting message
@app.route('/greeting', methods=['GET'])
def get_greeting():
    greeting_message = random_hello.get_random_greeting()  # Assumes a function in random_hello.py
    return jsonify({'message': greeting_message})

# Endpoint to process chat input
@app.route('/chat', methods=['POST'])
def chat():
    user_message = request.json.get('message')  # Get user input
    if user_message:
        bot_response = AI_chatbot_2.chat_session.send_message(user_message)  # Pass input to AI_chatbot_2.py
        return jsonify({'response': bot_response.text})
    else:
        return jsonify({'error': 'No message provided'}), 400

if __name__ == '__main__':
    app.run(debug=True)
