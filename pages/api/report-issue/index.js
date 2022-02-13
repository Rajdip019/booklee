const sgMail = require("@sendgrid/mail");

export default async (req, res) => {
  if (req.method === "POST") {
    //As it is a post Method we nedd to Sepecify that.

    const {
      sender_email,
      sender_name,
      message,
    } = req.body; // Destructuring the info got from the body.
    if (
      !sender_email ||
      !sender_name ||
      !message
    ) {
      //Checking if all Data is Given.
      return res.json({ error: "Please fill all the fields." });
    }

    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
      to: "rajdeeptechbyparts019@gmail.com", // Change to your recipient
      from: "rajdeepdebajyoti@gmail.com", // Change to your verified sender
      subject: "Issue Reported - Booklee",
      text: `      
          Name : ${sender_name}
          Email: ${sender_email}
          Messege: ${message}

          © 2022 Booklee. All rights reserved.
          
          Booklee, Team`,
      html: `<body
          style="width: 100% !important; height: 100%; -webkit-text-size-adjust: none; font-family: &quot;Nunito Sans&quot;, Helvetica, Arial, sans-serif; background-color: #F2F4F6; color: #51545E; margin: 0;"
          bgcolor="#F2F4F6">
          <span class="preheader"
            style="display: none !important; visibility: hidden; mso-hide: all; font-size: 1px; line-height: 1px; max-height: 0; max-width: 0; opacity: 0; overflow: hidden;">This
            is an message from ${sender_name}. from Booklee Server</span>
          <table class="email-wrapper" width="100%" cellpadding="0" cellspacing="0" role="presentation"
            style="width: 100%; -premailer-width: 100%; -premailer-cellpadding: 0; -premailer-cellspacing: 0; background-color: #F2F4F6; margin: 0; padding: 0;"
            bgcolor="#F2F4F6">
                  <!-- Email Body -->
                  <tr>
                    <td class="email-body" width="570" cellpadding="0" cellspacing="0"
                      style="word-break: break-word; margin: 0; padding: 0; font-family: &quot;Nunito Sans&quot;, Helvetica, Arial, sans-serif; font-size: 16px; width: 100%; -premailer-width: 100%; -premailer-cellpadding: 0; -premailer-cellspacing: 0;">
                      <table class="email-body_inner" align="center" width="570" cellpadding="0" cellspacing="0"
                        role="presentation"
                        style="width: 570px; -premailer-width: 570px; -premailer-cellpadding: 0; -premailer-cellspacing: 0; background-color: #FFFFFF; margin: 0 auto; padding: 0;"
                        bgcolor="#FFFFFF">
                        <!-- Body content -->
                        <tr>
                          <td class="content-cell"
                            style="word-break: break-word; font-family: &quot;Nunito Sans&quot;, Helvetica, Arial, sans-serif; font-size: 16px; padding: 45px;">
                            <div class="f-fallback">
                              <p style="font-size: 16px; line-height: 1.625; color: #51545E; margin: .4em 0 1.1875em;">Some One
                                contacted Booklee Team with his Concern.</p>
                              <table class="attributes" width="100%" cellpadding="0" cellspacing="0" role="presentation"
                                style="margin: 0 0 21px;">
                                <tr>
                                  <td class="attributes_content"
                                    style="word-break: break-word; font-family: &quot;Nunito Sans&quot;, Helvetica, Arial, sans-serif; font-size: 16px; background-color: #F4F4F7; padding: 16px;"
                                    bgcolor="#F4F4F7">
                                    <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
                                      <tr>
                                        <td class="attributes_item"
                                          style="word-break: break-word; font-family: &quot;Nunito Sans&quot;, Helvetica, Arial, sans-serif; font-size: 16px; padding: 0;">
                                          <span class="f-fallback">
                                            <strong>Name :</strong> ${sender_name}
                                          </span>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td class="attributes_item"
                                          style="word-break: break-word; font-family: &quot;Nunito Sans&quot;, Helvetica, Arial, sans-serif; font-size: 16px; padding: 0;">
                                          <span class="f-fallback">
                                            <strong>Email:</strong> ${sender_email}
                                          </span>
                                          </td>
                                      </tr>
                                <tr>
                                  <td class="attributes_item"
                                    style="word-break: break-word; font-family: &quot;Nunito Sans&quot;, Helvetica, Arial, sans-serif; font-size: 16px; padding: 0;">
                                    <span class="f-fallback">
                                      <strong>Messege:</strong> ${message}
                                    </span>
                                  </td>
                                </tr>
                              </table>
                          </td>
                        </tr>
                      </table>
              
                      </div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td
                style="word-break: break-word; font-family: &quot;Nunito Sans&quot;, Helvetica, Arial, sans-serif; font-size: 16px;">
                <table class="email-footer" align="center" width="570" cellpadding="0" cellspacing="0" role="presentation"
                  style="width: 570px; -premailer-width: 570px; -premailer-cellpadding: 0; -premailer-cellspacing: 0; text-align: center; margin: 0 auto; padding: 0;">
                  <tr>
                    <td class="content-cell" align="center"
                      style="word-break: break-word; font-family: &quot;Nunito Sans&quot;, Helvetica, Arial, sans-serif; font-size: 16px; padding: 45px;">
                      <p class="f-fallback sub align-center"
                        style="font-size: 13px; line-height: 1.625; text-align: center; color: #A8AAAF; margin: .4em 0 1.1875em;"
                        align="center">© 2022 Booklee. All rights reserved.</p>
                      <p class="f-fallback sub align-center"
                        style="font-size: 13px; line-height: 1.625; text-align: center; color: #A8AAAF; margin: .4em 0 1.1875em;"
                        align="center">
                        Booklee, Team
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
    };
    sgMail
      .send(msg)
      .then(() => {
        console.log("Email sent");
      })
      .catch((error) => {
        console.error(error);
      });
    return res.json({ success: "Mail Sent Successfully" });
  }
};
