const sgMail = require('@sendgrid/mail')


export default async (req,res)=> {
    if(req.method === "POST") //As it is a post Method we nedd to Sepecify that.

    {
        
            const {buyer_mail, name, OTP} = req.body;  // Destructuring the info got from the body.
            if(!name || !buyer_mail || !OTP){ //Checking if all Data is Given.
                return res.json({error: "Please fill all the fields."})
            }

        sgMail.setApiKey(process.env.SENDGRID_API_KEY)
        const msg = {
          to: buyer_mail, // Change to your recipient
          from: 'rajdeepdebajyoti@gmail.com', // Change to your verified sender
          subject: 'Verify Email - Booklee',
          text: `Use this code to Verify Your Purchase or Donation. The code is only valid fot 10 minutes..

          ************
          Hi , ${name}
          ************
          
          You recently requested to Verify Email. Please Tell this Secret Code to Seller/ Donator to Get an Invoice. This code is only valid 10 minutes
          
          ${OTP}
          
          For security, this request was received from a Booklee Server. If you did not request a Email Verify, please ignore this email.
          
          Thanks,
          The Booklee Team
          
          © 2022 Booklee. All rights reserved.
          
          Booklee, Team`,
          html: `</head>
          <body style="width: 100%; height: 100%; margin: 0; -webkit-text-size-adjust: none; font-family: 'Nunito Sans', Helvetica, Arial, sans-serif; background-color: #F2F4F6; color: #51545E;">
            <span class="preheader" style="display: none; visibility: hidden; mso-hide: all; font-size: 1px; line-height: 1px; max-height: 0; max-width: 0; opacity: 0; overflow: hidden;">Use this code to Verify Your Purchase or Donation. The code is only valid fot 10 minutes.</span>
            <table class="email-wrapper" width="100%" cellpadding="0" cellspacing="0" role="presentation" style="width: 100%; margin: 0; padding: 0; -premailer-width: 100%; -premailer-cellpadding: 0; -premailer-cellspacing: 0; background-color: #F2F4F6;" bgcolor="#F2F4F6">
              <tr>
                <td align="center" style="word-break: break-word; font-family: 'Nunito Sans', Helvetica, Arial, sans-serif; font-size: 16px;">
                  <table class="email-content" width="100%" cellpadding="0" cellspacing="0" role="presentation" style="width: 100%; margin: 0; padding: 0; -premailer-width: 100%; -premailer-cellpadding: 0; -premailer-cellspacing: 0;">
                    <!-- Email Body -->
                    <tr>
                      <td class="email-body" width="100%" cellpadding="0" cellspacing="0" style="word-break: break-word; font-family: 'Nunito Sans', Helvetica, Arial, sans-serif; font-size: 16px; width: 100%; margin: 0; padding: 0; -premailer-width: 100%; -premailer-cellpadding: 0; -premailer-cellspacing: 0;">
                        <table class="email-body_inner" align="center" width="570" cellpadding="0" cellspacing="0" role="presentation" style="width: 570px; margin: 0 auto; padding: 0; -premailer-width: 570px; -premailer-cellpadding: 0; -premailer-cellspacing: 0; background-color: #FFFFFF;" bgcolor="#FFFFFF">
                          <!-- Body content -->
                          <tr>
                            <td class="content-cell" style="word-break: break-word; font-family: 'Nunito Sans', Helvetica, Arial, sans-serif; font-size: 16px; padding: 45px;">
                              <div class="f-fallback">
                                <h1 style="margin-top: 0; color: #333333; font-size: 22px; font-weight: bold; text-align: left;">Hi ${name},</h1>
                                <p style="margin: .4em 0 1.1875em; font-size: 16px; line-height: 1.625; color: #51545E;">You recently requested to Verify Email. Please Tell this Secret Code  to Seller/ Donator to Get an Invoice. This code is only valid  10 minutes</p>
        
                                <table class="body-action" align="center" width="100%" cellpadding="0" cellspacing="0" role="presentation" style="width: 100%; margin: 30px auto; padding: 0; -premailer-width: 100%; -premailer-cellpadding: 0; -premailer-cellspacing: 0; text-align: center;">
                                  <tr>
                                    <td align="center" style="word-break: break-word; font-family: 'Nunito Sans', Helvetica, Arial, sans-serif; font-size: 16px;">
        
                                      <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                                        <tr>
                                          <td align="center" style="word-break: break-word; font-family: 'Nunito Sans', Helvetica, Arial, sans-serif; font-size: 16px;">
                                            <a class="f-fallback button button--green" aria-disabled="true" style="color: #FFF; background-color: #22BC66; border-top: 10px solid #22BC66; border-right: 18px solid #22BC66; border-bottom: 10px solid #22BC66; border-left: 18px solid #22BC66; display: inline-block; text-decoration: none; border-radius: 3px; box-shadow: 0 2px 3px rgba(0, 0, 0, 0.16); -webkit-text-size-adjust: none; box-sizing: border-box;">${OTP}</a>
                                          </td>
                                        </tr>
                                      </table>
                                    </td>
                                  </tr>
                                </table>
                                <p style="margin: .4em 0 1.1875em; font-size: 16px; line-height: 1.625; color: #51545E;">For security, this request was received from a Booklee Server. If you did not request a Email Verify, please ignore this email.</p>
                                <p style="margin: .4em 0 1.1875em; font-size: 16px; line-height: 1.625; color: #51545E;">Thanks,
                                  <br>The Booklee Team</p>
                              </div>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td style="word-break: break-word; font-family: 'Nunito Sans', Helvetica, Arial, sans-serif; font-size: 16px;">
                        <table class="email-footer" align="center" width="570" cellpadding="0" cellspacing="0" role="presentation" style="width: 570px; margin: 0 auto; padding: 0; -premailer-width: 570px; -premailer-cellpadding: 0; -premailer-cellspacing: 0; text-align: center;">
                          <tr>
                            <td class="content-cell" align="center" style="word-break: break-word; font-family: 'Nunito Sans', Helvetica, Arial, sans-serif; font-size: 16px; padding: 45px;">
                              <p class="f-fallback sub align-center" style="margin: .4em 0 1.1875em; line-height: 1.625; text-align: center; font-size: 13px; color: #A8AAAF;">&copy; 2022 Booklee. All rights reserved.</p>
                              <p class="f-fallback sub align-center" style="margin: .4em 0 1.1875em; line-height: 1.625; text-align: center; font-size: 13px; color: #A8AAAF;">
                                Booklee Team
                              </p>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </body>`,
        }
        sgMail
          .send(msg)
          .then(() => {
            console.log('Email sent')
          })
          .catch((error) => {
            console.error(error)
          })

}
}