exports.subscriptionEmail = (email,otp) => {
    return `<!DOCTYPE html>
  <html>
  
  <head>
    <meta charset="UTF-8">
    <title>Login Credentials</title>
    <style>
      body {
        background-color: #ffffff;
        font-family: Arial, sans-serif;
        font-size: 16px;
        line-height: 1.4;
        color: #333333;
        margin: 0;
        padding: 0;
      }
  
      .container {
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
        text-align: center;
      }
  
      .logo {
        max-width: 200px;
        margin-bottom: 20px;
      }
  
      .message {
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 20px;
      }
  
      .body {
        font-size: 16px;
        margin-bottom: 20px;
      }
  
      .cta {
        display: inline-block;
        padding: 10px 20px;
        background-color: #FFD60A;
        color: #000000;
        text-decoration: none;
        border-radius: 5px;
        font-size: 16px;
        font-weight: bold;
        margin-top: 20px;
      }
  
      .support {
        font-size: 14px;
        color: #999999;
        margin-top: 20px;
      }
  
      .highlight {
        font-weight: bold;
      }
    </style>
  </head>
  
  <body>
    <div class="container">
      <a href="#"><img class="logo" src="https://res.cloudinary.com/dqclqq2jy/image/upload/v1704799159/chat_app/zi0hmoldfzlgql1l65pf.png"
        alt="PlusCare Logo"></a>
      <div class="message">Welcome to the PlusCare</div>
      <div class="body">
        
        <p>Welcome to PlusCare family</p><br/>
        <p>Here are your login details:<br/>Username :  ${email} <br/>Password: ${otp}</p>
      
      </div>
      <div class="support">If you have any questions or need assistance, please feel free to reach out to us at <a
        href="mailto:info@plusCare.com">info@snackbae.com</a>. We are here to help!</div>
    </div>
  </body>
  
  </html>`;
  };