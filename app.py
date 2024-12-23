from flask import Flask, render_template

app = Flask(__name__)
@app.route('/')
def home():
    return render_template('index.html')


@app.route('/about.html')
def about():
    return render_template('about.html')

@app.route('/blog.html')
def blog():
    return render_template('blog.html')
@app.route('/cart.html')
def cart():
    return render_template('cart.html')

@app.route('/contact.html')
def contact():
    return render_template('contact.html')

@app.route('/shop.html')
def shop():
    return render_template('shop.html')

@app.route('/sign.html')
def sign():
    return render_template('sign.html')

if __name__== '__main__':
    app.run(debug=True)