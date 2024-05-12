from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

# Initialize a list to store tasks
tasks = []

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/add', methods=['POST'])
def add_task():
    task = request.form['task']
    tasks.append(task)
    return jsonify({'success': True})

@app.route('/delete', methods=['POST'])
def delete_task():
    index = int(request.form['index'])
    del tasks[index]
    return jsonify({'success': True})

@app.route('/complete', methods=['POST'])
def complete_task():
    index = int(request.form['index'])
    tasks[index] = f'<del>{tasks[index]}</del>'
    return jsonify({'success': True})

if __name__ == '__main__':
    app.run(debug=True)
