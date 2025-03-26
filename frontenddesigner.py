import google.generativeai as genai
from flask import Flask, request, jsonify, render_template

GEMINI_API_KEY = ""
genai.configure(api_key=GEMINI_API_KEY)

def generate_website(prompt):
    """Generate website code using the Google Gemini API"""
    model = genai.GenerativeModel("gemini-1.5-flash") 
    response = model.generate_content(prompt)
    return response.text if hasattr(response, 'text') else response

def generate_website_code(user_requirements):
    """Creates a website structure based on user requirements"""
    prompt = f"""
    Create a full website using {user_requirements} .
    Ensure a responsive design, a modern UI, and include proper comments.
    """
    return generate_website(prompt)

# Flask App
app = Flask(__name__)

@app.route('/')
def home():
    return render_template("index.html")

@app.route('/generate', methods=['POST'])
def generate():
    data = request.json
    user_requirements = data.get("requirements", "")
    website_code = generate_website_code(user_requirements)
    return jsonify({"code": website_code})

if __name__ == "__main__":
    app.run(debug=True)
