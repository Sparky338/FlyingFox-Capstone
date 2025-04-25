# Flying Fox

## Welcome to Flying Fox, a clone of [Squirrel](https://squirrel.ws/)

## View the live site here: [Flying Fox](https://flying-fox-capstone.onrender.com/)

Flying Fox jumps into human flight, providing a place to look at and purchase wingsuits, tracking suits, and parachutes for skydiving and BASE jumping. This project is based off of the Squirrel website where they sell similar items and other equipment.

## Technologies and Frameworks used:
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![Flask](https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white)

- Hosted on Render with a Postgres database

## MVP Core Features:
- Local Storage shopping cart
- Purchases/ Orders
- Reviews with AWS implementation
- Categories
- News

## Screenshots:
Home Page
![FlyingFox-home-page](./react-app/src/images/readme-assets/Homepage.png)

Login and Signup
![FlyingFox-login-signup-page](./react-app/src/images/readme-assets/loginAndSignUp.png)

Item page
![FlyingFox-item-page](./react-app/src/images/readme-assets/itemPage.png)

Cart
![FlyingFox-cart-page](./react-app/src/images/readme-assets/cart.png)

Order Page
![FlyingFox-order-page](./react-app/src/images/readme-assets/orderById.png)

News
![FlyingFox-news-page](./react-app/src/images/readme-assets/News.png)

News Article
![FlyingFox-news-article](./react-app/src/images/readme-assets/individualArticle.png)

## Getting Started

1. Clone this repository.

```bash
git clone https://github.com/Sparky338/FlyingFox-Capstone.git
```

2. Install dependencies

```bash
pipenv install -r requirements.txt
```

3. Create a **.env** file based on the example with proper settings for your
   development environment

4. Make sure the SQLite3 database connection URL is in the **.env** file

5. Get into your pipenv, migrate your database, seed your database, and run your Flask app

   ```bash
   pipenv shell
   ```

   ```bash
   flask db upgrade
   ```

   ```bash
   flask seed all
   ```

   ```bash
   flask run
   ```

6. To run the React App in development, in a new terminal, get into react-app, install the npm packages, and start it

   ```bash
   cd react-app
   ```

   ```bash
   npm install
   ```

   ```bash
   npm start
   ```

## Contact Information
[GitHub](http://github.com/Sparky338)

[LinkedIn](https://www.linkedin.com/in/matt-hutter-2a6620173)

[Portfolio](https://sparky338.github.io/)

[matthewjhutter@gmail.com](mailto:matthewjhutter@gmail.com)

## Troubleshooting

If you encounter
```bash
ImportError: cannot import name 'safe_str_cmp' from 'werkzeug.security' (.../FlyingFox-Capstone/.venv/lib/python3.9/site-packages/werkzeug/security.py)
```
some code must be added to import 'safe_str_cmp' using hmac due to the deprecation of
'safe_str_cmp'. Please find a working snippet here that can be added to the end of
```security.py```

<details>
   <summary>hmac 'safe_str_cmp' code</summary>

   ```python
   def safe_str_cmp(a: str, b: str) -> bool:
      """This function compares strings in somewhat constant time. This
      requires that the length of at least one string is known in advance.

      Returns `True` if the two strings are equal, or `False` if they are not.
      """

      if isinstance(a, str):
         a = a.encode("utf-8")  # type: ignore

      if isinstance(b, str):
         b = b.encode("utf-8")  # type: ignore

      return hmac.compare_digest(a, b)

    ```
</details>
