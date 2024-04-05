from flask import Flask, render_template, jsonify

app = Flask(__name__)

# Sample service data (replace this with your actual data or connect to a database)
services_data = {
    "employee_training": {
        "name": "Employee Training Programs",
        "description": "We offer comprehensive training programs to enhance the skills and knowledge of your employees. Our training modules cover a wide range of topics, including leadership, communication, and technical skills."
    },
    "wellness_initiatives": {
        "name": "Employee Wellness Initiatives",
        "description": "The well-being of your employees is crucial. Our wellness initiatives focus on promoting a healthy work-life balance, stress management, and overall mental and physical well-being."
    },
    "team_building": {
        "name": "Corporate Events and Team Building",
        "description": "Foster a sense of camaraderie among your employees through our corporate events and team-building activities. These events are designed to strengthen teamwork, communication, and collaboration within your organization."
    }
}

@app.route('/')
def index():
    return render_template('service_page.html')

@app.route('/api/services')
def get_services():
    return jsonify(services_data)

if __name__ == '__main__':
    app.run(debug=True)