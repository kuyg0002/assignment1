from flask import Flask, jsonify, request, send_from_directory

app = Flask(__name__, static_folder='public')

# This will store tasks in memory
tasks = []

@app.route('/tasks', methods=['GET'])
def get_tasks():
    return jsonify(tasks)

@app.route('/tasks', methods=['POST'])
def add_task():
    task_data = request.json
    tasks.append(task_data['task'])  # Assuming JSON contains a 'task' key
    return jsonify({'success': True}), 201

@app.route('/', methods=['GET'])
def serve_index():
    return send_from_directory('public', 'index.html')

if __name__ == '__main__':
    app.run(debug=True)

