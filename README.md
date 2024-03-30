#EC File Assignment

## client:- frontend
step1:- npm i
step2:- npm start -->start the webpage

## server:- backend
step:- npm i 
step:- node server.js -->start the server

## Connect Your MongoDB Database

mongoose.connect('your-databse-mongodb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Database connected successfully!'))
.catch(err => console.error('Database connection error:', err));

## To create a transporter using Nodemailer for sending emails via Gmail SMTP, you need to provide your Gmail credentials (email address and password). Here are the steps to create the transporter:

1.Enable Less Secure Apps: Before you can use Gmail SMTP with Nodemailer, you need to allow less secure apps to access your Gmail account. Follow these steps:
Go to your Google Account settings. link:- https://myaccount.google.com/security
Under "Security", find the section for "Less secure app access".
Turn on "Allow less secure apps".

2.Create a Gmail Account: If you don't have a Gmail account, you'll need to create one. This will be used as the sender email address.

3.Replace Placeholder Values: In the code snippet you provided, replace the placeholder values 'your_email@gmail.com' and 'your_email_password' with your actual Gmail email address and password, respectively.
