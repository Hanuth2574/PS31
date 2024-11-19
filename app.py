from flask import Flask, request, jsonify
import os
import google.generativeai as genai

app = Flask(__name__)

genai.configure(api_key='AIzaSyB5TvELjrn4IBXBoqBgJ_KBwCZPPUwbo-E')

# Define generation config
generation_config = {
  "temperature": 1,
  "top_p": 0.95,
  "top_k": 40,
  "max_output_tokens": 8192,
  "response_mime_type": "text/plain",
}

# Initialize model
model = genai.GenerativeModel(
  model_name="tunedModels/fitnesschatpromptcompletiondataset-fglgk",
  generation_config=generation_config,
)

@app.route('/generate', methods=['POST'])
def generate_response():
    try:
        # Get the message from the request body
        data = request.json
        if not data:
            raise ValueError("No message provided")
        
        message = data.get('message', '')
        
        # Start a new chat session
        chat_session = model.start_chat(
            history=[]
        )
        
        # Generate response
        response = chat_session.send(message)
        
        return jsonify({'response': str(response.content, 'utf-8')})
    
    except Exception as e:
        error_message = f"An error occurred: {str(e)}"
        return jsonify({'error': error_message}), 500

if __name__ == '__main__':
    app.run(debug=True)