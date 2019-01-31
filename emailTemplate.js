const { GREED, FEAR } = require('./zones.json');

const backgroundColors = {
  [FEAR]: '#105e62',
  [GREED]: '#b5525c'
};

const messaging = {
  [FEAR]: 'Currently, market is in extreme fear zone. It seems like a good opportunity to buy some stocks!',
  [GREED]: 'Currently, market is in extreme greed zone. It seems like a good opportunity to sell some stocks!',
}


const emailTemplate = (zone, mmi) => `
<!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
  <!--[if gte mso 9]><xml>
     <o:OfficeDocumentSettings>
      <o:AllowPNG/>
      <o:PixelsPerInch>96</o:PixelsPerInch>
     </o:OfficeDocumentSettings>
    </xml><![endif]-->
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta name="viewport" content="width=device-width">
  <!--[if !mso]><!-->
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <!--<![endif]-->
  <title></title>
  <!--[if !mso]><!-- -->
  <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet" type="text/css">
  <!--<![endif]-->

  <style type="text/css" id="media-query">
    body {
      margin: 0;
      padding: 0;
    }

    table,
    tr,
    td {
      vertical-align: top;
      border-collapse: collapse;
    }

    .ie-browser table,
    .mso-container table {
      table-layout: fixed;
    }

    * {
      line-height: inherit;
    }

    a[x-apple-data-detectors=true] {
      color: inherit !important;
      text-decoration: none !important;
    }

    [owa] .img-container div,
    [owa] .img-container button {
      display: block !important;
    }

    [owa] .fullwidth button {
      width: 100% !important;
    }

    [owa] .block-grid .col {
      display: table-cell;
      float: none !important;
      vertical-align: top;
    }

    .ie-browser .num12,
    .ie-browser .block-grid,
    [owa] .num12,
    [owa] .block-grid {
      width: 555px !important;
    }

    .ExternalClass,
    .ExternalClass p,
    .ExternalClass span,
    .ExternalClass font,
    .ExternalClass td,
    .ExternalClass div {
      line-height: 100%;
    }

    .ie-browser .mixed-two-up .num4,
    [owa] .mixed-two-up .num4 {
      width: 184px !important;
    }

    .ie-browser .mixed-two-up .num8,
    [owa] .mixed-two-up .num8 {
      width: 368px !important;
    }

    .ie-browser .block-grid.two-up .col,
    [owa] .block-grid.two-up .col {
      width: 277px !important;
    }

    .ie-browser .block-grid.three-up .col,
    [owa] .block-grid.three-up .col {
      width: 185px !important;
    }

    .ie-browser .block-grid.four-up .col,
    [owa] .block-grid.four-up .col {
      width: 138px !important;
    }

    .ie-browser .block-grid.five-up .col,
    [owa] .block-grid.five-up .col {
      width: 111px !important;
    }

    .ie-browser .block-grid.six-up .col,
    [owa] .block-grid.six-up .col {
      width: 92px !important;
    }

    .ie-browser .block-grid.seven-up .col,
    [owa] .block-grid.seven-up .col {
      width: 79px !important;
    }

    .ie-browser .block-grid.eight-up .col,
    [owa] .block-grid.eight-up .col {
      width: 69px !important;
    }

    .ie-browser .block-grid.nine-up .col,
    [owa] .block-grid.nine-up .col {
      width: 61px !important;
    }

    .ie-browser .block-grid.ten-up .col,
    [owa] .block-grid.ten-up .col {
      width: 55px !important;
    }

    .ie-browser .block-grid.eleven-up .col,
    [owa] .block-grid.eleven-up .col {
      width: 50px !important;
    }

    .ie-browser .block-grid.twelve-up .col,
    [owa] .block-grid.twelve-up .col {
      width: 46px !important;
    }

    @media only screen and (min-width: 575px) {
      .block-grid {
        width: 555px !important;
      }

      .block-grid .col {
        vertical-align: top;
      }

      .block-grid .col.num12 {
        width: 555px !important;
      }

      .block-grid.mixed-two-up .col.num4 {
        width: 184px !important;
      }

      .block-grid.mixed-two-up .col.num8 {
        width: 368px !important;
      }

      .block-grid.two-up .col {
        width: 277px !important;
      }

      .block-grid.three-up .col {
        width: 185px !important;
      }

      .block-grid.four-up .col {
        width: 138px !important;
      }

      .block-grid.five-up .col {
        width: 111px !important;
      }

      .block-grid.six-up .col {
        width: 92px !important;
      }

      .block-grid.seven-up .col {
        width: 79px !important;
      }

      .block-grid.eight-up .col {
        width: 69px !important;
      }

      .block-grid.nine-up .col {
        width: 61px !important;
      }

      .block-grid.ten-up .col {
        width: 55px !important;
      }

      .block-grid.eleven-up .col {
        width: 50px !important;
      }

      .block-grid.twelve-up .col {
        width: 46px !important;
      }
    }

    @media (max-width: 575px) {

      .block-grid,
      .col {
        min-width: 320px !important;
        max-width: 100% !important;
        display: block !important;
      }

      .block-grid {
        width: calc(100% - 40px) !important;
      }

      .col {
        width: 100% !important;
      }

      .col>div {
        margin: 0 auto;
      }

      img.fullwidth,
      img.fullwidthOnMobile {
        max-width: 100% !important;
      }

      .no-stack .col {
        min-width: 0 !important;
        display: table-cell !important;
      }

      .no-stack.two-up .col {
        width: 50% !important;
      }

      .no-stack.mixed-two-up .col.num4 {
        width: 33% !important;
      }

      .no-stack.mixed-two-up .col.num8 {
        width: 66% !important;
      }

      .no-stack.three-up .col.num4 {
        width: 33% !important;
      }

      .no-stack.four-up .col.num3 {
        width: 25% !important;
      }

      .mobile_hide {
        min-height: 0px;
        max-height: 0px;
        max-width: 0px;
        display: none;
        overflow: hidden;
        font-size: 0px;
      }
    }
  </style>
</head>

<body class="clean-body" style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: transparent">
  <style type="text/css" id="media-query-bodytag">
    @media (max-width: 520px) {
      .block-grid {
        min-width: 320px !important;
        max-width: 100% !important;
        width: 100% !important;
        display: block !important;
      }

      .col {
        min-width: 320px !important;
        max-width: 100% !important;
        width: 100% !important;
        display: block !important;
      }

      .col>div {
        margin: 0 auto;
      }

      img.fullwidth {
        max-width: 100% !important;
      }

      img.fullwidthOnMobile {
        max-width: 100% !important;
      }

      .no-stack .col {
        min-width: 0 !important;
        display: table-cell !important;
      }

      .no-stack.two-up .col {
        width: 50% !important;
      }

      .no-stack.mixed-two-up .col.num4 {
        width: 33% !important;
      }

      .no-stack.mixed-two-up .col.num8 {
        width: 66% !important;
      }

      .no-stack.three-up .col.num4 {
        width: 33% !important;
      }

      .no-stack.four-up .col.num3 {
        width: 25% !important;
      }

      .mobile_hide {
        min-height: 0px !important;
        max-height: 0px !important;
        max-width: 0px !important;
        display: none !important;
        overflow: hidden !important;
        font-size: 0px !important;
      }
    }
  </style>
  <!--[if IE]><div class="ie-browser"><![endif]-->
  <!--[if mso]><div class="mso-container"><![endif]-->
  <table class="nl-container" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: transparent;width: 100%"
    cellpadding="0" cellspacing="0">
    <tbody>
      <tr style="vertical-align: top">
        <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
          <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: transparent;"><![endif]-->

          <div style="background-color:transparent;">
            <div style="Margin: 0 auto;min-width: 320px;max-width: 555px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: ${backgroundColors[zone]};"
              class="block-grid ">
              <div style="border-collapse: collapse;display: table;width: 100%;background-color:${backgroundColors[zone]};">
                <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="background-color:transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width: 555px;"><tr class="layout-full-width" style="background-color:${backgroundColors[zone]};"><![endif]-->

                <!--[if (mso)|(IE)]><td align="center" width="555" style=" width:555px; padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><![endif]-->
                <div class="col num12" style="min-width: 320px;max-width: 555px;display: table-cell;vertical-align: top;">
                  <div style="background-color: transparent; width: 100% !important;">
                    <!--[if (!mso)&(!IE)]><!-->
                    <div style="border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;">
                      <!--<![endif]-->


                      <div class="">
                        <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px;"><![endif]-->
                        <div style="color:#555555;font-family:'Lato', Tahoma, Verdana, Segoe, sans-serif;line-height:120%; padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px;">
                          <div style="font-size:12px;line-height:14px;color:#555555;font-family:'Lato', Tahoma, Verdana, Segoe, sans-serif;text-align:left;">
                            <p style="margin: 0;font-size: 12px;line-height: 14px;text-align: center"><span style="font-size: 12px; line-height: 14px;"><span
                                  style="font-size: 30px; line-height: 36px; color: rgb(255, 255, 255);">MMI = ${mmi}</span></span></p>
                          </div>
                        </div>
                        <!--[if mso]></td></tr></table><![endif]-->
                      </div>


                      <div class="">
                        <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 30px; padding-left: 30px; padding-top: 30px; padding-bottom: 30px;"><![endif]-->
                        <div style="color:#555555;font-family:'Lato', Tahoma, Verdana, Segoe, sans-serif;line-height:150%; padding-right: 30px; padding-left: 30px; padding-top: 30px; padding-bottom: 30px;">
                          <div style="font-size:12px;line-height:18px;color:#555555;font-family:'Lato', Tahoma, Verdana, Segoe, sans-serif;text-align:left;">
                            <p style="margin: 0;font-size: 14px;line-height: 21px;text-align: center"><span style="font-size: 18px; line-height: 27px; color: rgb(255, 255, 255);">
                              ${messaging[zone]}
                            </span></p>
                          </div>
                        </div>
                        <!--[if mso]></td></tr></table><![endif]-->
                      </div>

                      <!--[if (!mso)&(!IE)]><!-->
                    </div>
                    <!--<![endif]-->
                  </div>
                </div>
                <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
              </div>
            </div>
          </div>
          <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
        </td>
      </tr>
    </tbody>
  </table>
  <!--[if (mso)|(IE)]></div><![endif]-->


</body>

</html>
`;

module.exports = emailTemplate;