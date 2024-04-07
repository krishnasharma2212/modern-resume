# Modern Portfolio Website
```
  _____                                
 |  __ \                               
 | |__) |___  ___ _   _ _ __ ___   ___ 
 |  _  // _ \/ __| | | | '_ ` _ \ / _ \
 | | \ \  __/\__ \ |_| | | | | | |  __/
 |_|  \_\___||___/\__,_|_| |_| |_|\___|
                                       
                                                                    
```

This is an online Library management system in PHP &amp; MySQL with payment gateway without API. It means we make a payment gateway that not need a API becuase it is a manual checking payment gateway. When any user buy our books and pay for it and submit the form. It's record is save in database like "<b>A user with _____ email ID is buy a ____ book and it's time is ___.</b>" Then we check out account for money come at that time. If come then we approve it's entry and the users found the book in it's dashboard.

<a href="https://www.buymeacoffee.com/mukulpandia"><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=☕&slug=mukulpandia&button_colour=FFDD00&font_colour=000000&font_family=Cookie&outline_colour=000000&coffee_colour=ffffff" /></a>
## ▶️ **Website Demo** - https://indrajit.rf.gd/
  | Features                 | 
  | -----------------------  | 
  | Payment Gateway ✔️       | 
  | Add Book ✔️              | 
  | Delete Book ✔️           | 
  |  Aprrove Payment ✔️      | 

  | Requirement                 |
  | -----------------------  | 
  | PHP       | 
  | MySQL              | 

## 📃: **Steps**
**Create Database in MySQL database**
``` 
Select database library_db
```
**Select your database**
```
use library_db;
```
**Creating Table users for users to login & signup**
```
CREATE TABLE users (
    sno INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    email VARCHAR(100),
    password VARCHAR(100),
    no_books TEXT
);
```
**Create Table for storing books**
```
CREATE TABLE books (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL,
    isbn VARCHAR(20) NOT NULL,
    copies INT NOT NULL,
    cost DECIMAL(10, 2) NOT NULL
);

```

## 🖼️: **Demo Images**

<img src="/demo_images/image_home.png" alt="Home Page" width="500"> <img src="/demo_images/image_checkout.png" alt="Checkout Page" width="500">
<img src="/demo_images/image_login.png" alt="Login Page" width="500"> <img src="/demo_images/image_signin.png" alt="Signin Page" width="500">
<img src="/demo_images/image_admin.png" alt="Admin Page" width="500"> <img src="/demo_images/image_admin_panel.png" alt="Admin Panel Page" width="500">
<img src="/demo_images/image_add_book.png" alt="Add Book Page" width="500"> <img src="/demo_images/image_upi_payment.png" alt="UPI Payment Page" width="500">
<img src="/demo_images/image_manage_books.png" alt="Add Book Page" width="500">

