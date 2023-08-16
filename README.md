# Fast_License
FAST LICENSE Web Site Lisanslama Yazılımı NodeJs / FAST LICENSE Website Licensing Software NodeJs

# 🎈 Images 🎈

![image](https://user-images.githubusercontent.com/63351166/220187115-4bde7f0b-a35a-4286-b3cb-f20b3187ea60.png)
![image](https://user-images.githubusercontent.com/63351166/220187288-201ab269-df9a-4628-8d60-9289cd58835d.png)
![image](https://user-images.githubusercontent.com/63351166/220187325-174a96f2-cc5f-46e6-a989-44ee4d8e1c26.png)
![image](https://user-images.githubusercontent.com/63351166/220187347-114b8fd3-cd22-425d-bcde-788ecef1ab63.png)
![image](https://user-images.githubusercontent.com/63351166/220187379-aa710998-02bb-4738-8299-577d48e1e713.png)
![image](https://user-images.githubusercontent.com/63351166/220187404-5408b17c-5360-4b9c-bcb6-a4c6a57d2721.png)
![image](https://user-images.githubusercontent.com/63351166/220187432-544e664e-40f1-417e-a1b9-2fea97e60e7a.png)
![image](https://user-images.githubusercontent.com/63351166/220187457-41a25f98-0eb3-45fc-b5a2-97dafc0c3f95.png)

## In addition

- Introduction Video: https://www.youtube.com/watch?v=_xmbr2mDISw&ab_channel=FastUptime
- If there are enough stars, I can make a few more updates to the script.

## For Licence Control

```
curl --location --request POST 'http://alanadiniz.com/api/v1' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'domain=domain.com' \
--data-urlencode 'key=KEY BURAYA' \
--data-urlencode 'action=expire_date'
```

```php
<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'http://alanadiniz.com/api/v1',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'POST',
  CURLOPT_POSTFIELDS => 'domain=domain.com&key=KEY%20BURAYA&action=expire_date',
  CURLOPT_HTTPHEADER => array(
    'Content-Type: application/x-www-form-urlencoded'
  ),
));

$response = curl_exec($curl);

curl_close($curl);
echo $response;
```

```
📦Fast_License
 ┣ 📂models
 ┃ ┣ 📜license.js
 ┃ ┣ 📜reports.js
 ┃ ┗ 📜scripts.js
 ┣ 📂routers
 ┃ ┣ 📂GET
 ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┣ 📜login.js
 ┃ ┃ ┗ 📜panel.js
 ┃ ┣ 📂POST
 ┃ ┃ ┣ 📜login.js
 ┃ ┃ ┗ 📜panel.js
 ┃ ┣ 📜api.js
 ┃ ┗ 📜routes.js
 ┣ 📂www
 ┃ ┣ 📂assets
 ┃ ┃ ┗ 📂panel
 ┃ ┃ ┃ ┣ 📂.github
 ┃ ┃ ┃ ┃ ┗ 📂workflows
 ┃ ┃ ┃ ┃ ┃ ┣ 📜handle-new-issue-comment.yml
 ┃ ┃ ┃ ┃ ┃ ┣ 📜handle-new-issue.yml
 ┃ ┃ ┃ ┃ ┃ ┗ 📜issue-staler.yml
 ┃ ┃ ┃ ┣ 📂assets
 ┃ ┃ ┃ ┃ ┣ 📂css
 ┃ ┃ ┃ ┃ ┃ ┗ 📜demo.css
 ┃ ┃ ┃ ┃ ┣ 📂img
 ┃ ┃ ┃ ┃ ┃ ┣ 📂avatars
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜1.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜5.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜6.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜7.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📂backgrounds
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜18.jpg
 ┃ ┃ ┃ ┃ ┃ ┣ 📂elements
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜1.jpg
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜11.jpg
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜12.jpg
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜13.jpg
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜17.jpg
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜18.jpg
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜19.jpg
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜2.jpg
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜20.jpg
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜3.jpg
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜4.jpg
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜5.jpg
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜7.jpg
 ┃ ┃ ┃ ┃ ┃ ┣ 📂favicon
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜favicon.ico
 ┃ ┃ ┃ ┃ ┃ ┣ 📂icons
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂brands
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜asana.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜behance.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜dribbble.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜facebook.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜github.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜google.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜instagram.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜mailchimp.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜slack.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜twitter.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂unicons
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜cc-primary.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜cc-success.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜cc-warning.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜chart-success.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜chart.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜paypal.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜wallet-info.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜wallet.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📂illustrations
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜girl-doing-yoga-light.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜man-with-laptop-light.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜page-misc-error-light.png
 ┃ ┃ ┃ ┃ ┃ ┗ 📂layouts
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜layout-container-light.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜layout-fluid-light.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜layout-without-menu-light.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜layout-without-navbar-light.png
 ┃ ┃ ┃ ┃ ┣ 📂js
 ┃ ┃ ┃ ┃ ┃ ┣ 📜config.js
 ┃ ┃ ┃ ┃ ┃ ┣ 📜dashboards-analytics.js
 ┃ ┃ ┃ ┃ ┃ ┣ 📜extended-ui-perfect-scrollbar.js
 ┃ ┃ ┃ ┃ ┃ ┣ 📜form-basic-inputs.js
 ┃ ┃ ┃ ┃ ┃ ┣ 📜main.js
 ┃ ┃ ┃ ┃ ┃ ┣ 📜pages-account-settings-account.js
 ┃ ┃ ┃ ┃ ┃ ┣ 📜ui-modals.js
 ┃ ┃ ┃ ┃ ┃ ┣ 📜ui-popover.js
 ┃ ┃ ┃ ┃ ┃ ┗ 📜ui-toasts.js
 ┃ ┃ ┃ ┃ ┗ 📂vendor
 ┃ ┃ ┃ ┃ ┃ ┣ 📂css
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂pages
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜page-account-settings.css
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜page-auth.css
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜page-icons.css
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜page-misc.css
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜core.css
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜theme-default.css
 ┃ ┃ ┃ ┃ ┃ ┣ 📂fonts
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂boxicons
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜boxicons.eot
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜boxicons.svg
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜boxicons.ttf
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜boxicons.woff
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜boxicons.woff2
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜boxicons.css
 ┃ ┃ ┃ ┃ ┃ ┣ 📂js
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜bootstrap.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜helpers.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜menu.js
 ┃ ┃ ┃ ┃ ┃ ┗ 📂libs
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂apex-charts
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜apex-charts.css
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜apexcharts.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂highlight
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜highlight-github.css
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜highlight.css
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜highlight.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂jquery
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜jquery.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂masonry
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜masonry.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂perfect-scrollbar
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜perfect-scrollbar.css
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜perfect-scrollbar.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂popper
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜popper.js
 ┃ ┃ ┃ ┣ 📂ckeditor
 ┃ ┃ ┃ ┃ ┣ 📂adapters
 ┃ ┃ ┃ ┃ ┃ ┗ 📜jquery.js
 ┃ ┃ ┃ ┃ ┣ 📂lang
 ┃ ┃ ┃ ┃ ┃ ┣ 📜en.js
 ┃ ┃ ┃ ┃ ┃ ┗ 📜tr.js
 ┃ ┃ ┃ ┃ ┣ 📂plugins
 ┃ ┃ ┃ ┃ ┃ ┣ 📂a11yhelp
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂dialogs
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂lang
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜af.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ar.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜az.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜bg.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ca.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜cs.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜cy.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜da.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜de-ch.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜de.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜el.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜en-au.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜en-gb.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜en.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜eo.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜es-mx.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜es.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜et.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜eu.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜fa.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜fi.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜fo.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜fr-ca.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜fr.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜gl.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜gu.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜he.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜hi.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜hr.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜hu.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜id.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜it.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ja.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜km.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ko.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ku.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜lt.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜lv.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜mk.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜mn.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜nb.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜nl.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜no.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜oc.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜pl.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜pt-br.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜pt.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ro.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ru.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜si.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜sk.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜sl.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜sq.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜sr-latn.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜sr.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜sv.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜th.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜tr.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜tt.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ug.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜uk.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜vi.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜zh-cn.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜zh.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜_translationstatus.txt
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜a11yhelp.js
 ┃ ┃ ┃ ┃ ┃ ┣ 📂about
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂dialogs
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂hidpi
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜logo_ckeditor.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜about.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜logo_ckeditor.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📂clipboard
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂dialogs
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜paste.js
 ┃ ┃ ┃ ┃ ┃ ┣ 📂colordialog
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂dialogs
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜colordialog.css
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜colordialog.js
 ┃ ┃ ┃ ┃ ┃ ┣ 📂copyformatting
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂cursors
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜cursor-disabled.svg
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜cursor.svg
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂styles
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜copyformatting.css
 ┃ ┃ ┃ ┃ ┃ ┣ 📂dialog
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂styles
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜dialog.css
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜dialogDefinition.js
 ┃ ┃ ┃ ┃ ┃ ┣ 📂div
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂dialogs
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜div.js
 ┃ ┃ ┃ ┃ ┃ ┣ 📂docprops
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂dialogs
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜docprops.js
 ┃ ┃ ┃ ┃ ┃ ┣ 📂exportpdf
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂tests
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂manual
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂integrations
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜easyimage.html
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜easyimage.md
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜configfilename.html
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜configfilename.md
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜emptyeditor.html
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜emptyeditor.md
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜integration.html
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜integration.md
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜notifications.html
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜notifications.md
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜notificationsasync.html
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜notificationsasync.md
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜paperformat.html
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜paperformat.md
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜readonly.html
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜readonly.md
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜stylesheets.html
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜stylesheets.md
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜tokenfetching.html
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜tokenfetching.md
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜tokentwoeditorscorrect.html
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜tokentwoeditorscorrect.md
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜tokentwoeditorswrong.html
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜tokentwoeditorswrong.md
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜tokenwithouturl.html
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜tokenwithouturl.md
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜wrongendpoint.html
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜wrongendpoint.md
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂_helpers
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜tools.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜authentication.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜exportpdf.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜notification.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜resourcespaths.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜statistics.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜stylesheets.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜CHANGELOG.md
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜LICENSE.md
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜plugindefinition.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜README.md
 ┃ ┃ ┃ ┃ ┃ ┣ 📂find
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂dialogs
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜find.js
 ┃ ┃ ┃ ┃ ┃ ┣ 📂forms
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂dialogs
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜button.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜checkbox.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜form.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜hiddenfield.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜radio.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜select.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜textarea.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜textfield.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂images
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜hiddenfield.gif
 ┃ ┃ ┃ ┃ ┃ ┣ 📂iframe
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂dialogs
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜iframe.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂images
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜placeholder.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📂image
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂dialogs
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜image.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂images
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜noimage.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📂link
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂dialogs
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜anchor.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜link.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂images
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂hidpi
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜anchor.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜anchor.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📂liststyle
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂dialogs
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜liststyle.js
 ┃ ┃ ┃ ┃ ┃ ┣ 📂magicline
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂images
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂hidpi
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜icon-rtl.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜icon.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜icon-rtl.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜icon.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📂pagebreak
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂images
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜pagebreak.gif
 ┃ ┃ ┃ ┃ ┃ ┣ 📂pastefromgdocs
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂filter
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜default.js
 ┃ ┃ ┃ ┃ ┃ ┣ 📂pastefromlibreoffice
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂filter
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜default.js
 ┃ ┃ ┃ ┃ ┃ ┣ 📂pastefromword
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂filter
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜default.js
 ┃ ┃ ┃ ┃ ┃ ┣ 📂pastetools
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂filter
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜common.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜image.js
 ┃ ┃ ┃ ┃ ┃ ┣ 📂preview
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂images
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜pagebreak.gif
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂styles
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜screen.css
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜preview.html
 ┃ ┃ ┃ ┃ ┃ ┣ 📂scayt
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂dialogs
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜dialog.css
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜options.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜toolbar.css
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂skins
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂moono-lisa
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜scayt.css
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜CHANGELOG.md
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜LICENSE.md
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜README.md
 ┃ ┃ ┃ ┃ ┃ ┣ 📂showblocks
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂images
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜block_address.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜block_blockquote.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜block_div.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜block_h1.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜block_h2.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜block_h3.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜block_h4.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜block_h5.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜block_h6.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜block_p.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜block_pre.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📂smiley
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂dialogs
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜smiley.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂images
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜angel_smile.gif
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜angel_smile.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜angry_smile.gif
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜angry_smile.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜broken_heart.gif
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜broken_heart.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜confused_smile.gif
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜confused_smile.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜cry_smile.gif
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜cry_smile.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜devil_smile.gif
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜devil_smile.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜embaressed_smile.gif
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜embarrassed_smile.gif
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜embarrassed_smile.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜envelope.gif
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜envelope.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜heart.gif
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜heart.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜kiss.gif
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜kiss.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜lightbulb.gif
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜lightbulb.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜omg_smile.gif
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜omg_smile.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜regular_smile.gif
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜regular_smile.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜sad_smile.gif
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜sad_smile.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜shades_smile.gif
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜shades_smile.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜teeth_smile.gif
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜teeth_smile.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜thumbs_down.gif
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜thumbs_down.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜thumbs_up.gif
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜thumbs_up.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜tongue_smile.gif
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜tongue_smile.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜tounge_smile.gif
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜whatchutalkingabout_smile.gif
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜whatchutalkingabout_smile.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜wink_smile.gif
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜wink_smile.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📂specialchar
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂dialogs
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂lang
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜af.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ar.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜az.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜bg.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ca.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜cs.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜cy.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜da.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜de-ch.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜de.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜el.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜en-au.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜en-ca.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜en-gb.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜en.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜eo.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜es-mx.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜es.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜et.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜eu.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜fa.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜fi.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜fr-ca.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜fr.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜gl.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜he.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜hr.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜hu.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜id.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜it.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ja.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜km.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ko.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ku.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜lt.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜lv.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜nb.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜nl.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜no.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜oc.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜pl.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜pt-br.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜pt.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ro.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ru.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜si.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜sk.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜sl.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜sq.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜sr-latn.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜sr.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜sv.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜th.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜tr.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜tt.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ug.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜uk.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜vi.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜zh-cn.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜zh.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜_translationstatus.txt
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜specialchar.js
 ┃ ┃ ┃ ┃ ┃ ┣ 📂table
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂dialogs
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜table.js
 ┃ ┃ ┃ ┃ ┃ ┣ 📂tableselection
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂styles
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜tableselection.css
 ┃ ┃ ┃ ┃ ┃ ┣ 📂tabletools
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂dialogs
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜tableCell.js
 ┃ ┃ ┃ ┃ ┃ ┣ 📂templates
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂dialogs
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜templates.css
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜templates.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂templates
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂images
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜template1.gif
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜template2.gif
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜template3.gif
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜default.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜templatedefinition.js
 ┃ ┃ ┃ ┃ ┃ ┣ 📂widget
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂images
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜handle.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜icons.png
 ┃ ┃ ┃ ┃ ┃ ┗ 📜icons_hidpi.png
 ┃ ┃ ┃ ┃ ┣ 📂samples
 ┃ ┃ ┃ ┃ ┃ ┣ 📂css
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜samples.css
 ┃ ┃ ┃ ┃ ┃ ┣ 📂img
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜github-top.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜header-bg.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜header-separator.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜logo.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜logo.svg
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜navigation-tip.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📂js
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜sample.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜sf.js
 ┃ ┃ ┃ ┃ ┃ ┣ 📂old
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂assets
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂inlineall
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜logo.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂outputxhtml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜outputxhtml.css
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂uilanguages
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜languages.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜posteddata.php
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜sample.jpg
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂dialog
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂assets
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜my_dialog.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜dialog.html
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂docprops
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜docprops.html
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂enterkey
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜enterkey.html
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂htmlwriter
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜outputhtml.html
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂magicline
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜magicline.html
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂toolbar
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜toolbar.html
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂wysiwygarea
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜fullpage.html
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ajax.html
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜api.html
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜appendto.html
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜datafiltering.html
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜divreplace.html
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜index.html
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜inlineall.html
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜inlinebycode.html
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜inlinetextarea.html
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜jquery.html
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜readonly.html
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜replacebyclass.html
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜replacebycode.html
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜sample.css
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜sample.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜sample_posteddata.php
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜tabindex.html
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜uicolor.html
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜uilanguages.html
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜xhtmlstyle.html
 ┃ ┃ ┃ ┃ ┃ ┣ 📂toolbarconfigurator
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂css
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜fontello.css
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂font
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜config.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜fontello.eot
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜fontello.svg
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜fontello.ttf
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜fontello.woff
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜LICENSE.txt
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜abstracttoolbarmodifier.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜fulltoolbareditor.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜toolbarmodifier.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜toolbartextmodifier.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂lib
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂codemirror
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜codemirror.css
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜codemirror.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜javascript.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜LICENSE
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜neo.css
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜show-hint.css
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜show-hint.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜index.html
 ┃ ┃ ┃ ┃ ┃ ┗ 📜index.html
 ┃ ┃ ┃ ┃ ┣ 📂skins
 ┃ ┃ ┃ ┃ ┃ ┗ 📂moono-lisa
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂images
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂hidpi
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜close.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜lock-open.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜lock.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜refresh.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜arrow.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜close.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜lock-open.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜lock.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜refresh.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜spinner.gif
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜dialog.css
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜dialog_ie.css
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜dialog_ie8.css
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜dialog_iequirks.css
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜editor.css
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜editor_gecko.css
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜editor_ie.css
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜editor_ie8.css
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜editor_iequirks.css
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜icons.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜icons_hidpi.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜readme.md
 ┃ ┃ ┃ ┃ ┣ 📂vendor
 ┃ ┃ ┃ ┃ ┃ ┗ 📜promise.js
 ┃ ┃ ┃ ┃ ┣ 📜bender-runner.config.json
 ┃ ┃ ┃ ┃ ┣ 📜build-config.js
 ┃ ┃ ┃ ┃ ┣ 📜CHANGES.md
 ┃ ┃ ┃ ┃ ┣ 📜ckeditor.js
 ┃ ┃ ┃ ┃ ┣ 📜config.js
 ┃ ┃ ┃ ┃ ┣ 📜contents.css
 ┃ ┃ ┃ ┃ ┣ 📜LICENSE.md
 ┃ ┃ ┃ ┃ ┣ 📜README.md
 ┃ ┃ ┃ ┃ ┣ 📜SECURITY.md
 ┃ ┃ ┃ ┃ ┗ 📜styles.js
 ┃ ┃ ┃ ┣ 📂fonts
 ┃ ┃ ┃ ┃ ┗ 📜boxicons.scss
 ┃ ┃ ┃ ┣ 📂js
 ┃ ┃ ┃ ┃ ┣ 📜bootstrap.js
 ┃ ┃ ┃ ┃ ┣ 📜helpers.js
 ┃ ┃ ┃ ┃ ┗ 📜menu.js
 ┃ ┃ ┃ ┣ 📂libs
 ┃ ┃ ┃ ┃ ┣ 📂apex-charts
 ┃ ┃ ┃ ┃ ┃ ┣ 📜apex-charts.scss
 ┃ ┃ ┃ ┃ ┃ ┗ 📜apexcharts.js
 ┃ ┃ ┃ ┃ ┣ 📂highlight
 ┃ ┃ ┃ ┃ ┃ ┣ 📜highlight-github.scss
 ┃ ┃ ┃ ┃ ┃ ┣ 📜highlight.js
 ┃ ┃ ┃ ┃ ┃ ┗ 📜highlight.scss
 ┃ ┃ ┃ ┃ ┣ 📂jquery
 ┃ ┃ ┃ ┃ ┃ ┗ 📜jquery.js
 ┃ ┃ ┃ ┃ ┣ 📂masonry
 ┃ ┃ ┃ ┃ ┃ ┗ 📜masonry.js
 ┃ ┃ ┃ ┃ ┣ 📂perfect-scrollbar
 ┃ ┃ ┃ ┃ ┃ ┣ 📜perfect-scrollbar.js
 ┃ ┃ ┃ ┃ ┃ ┗ 📜perfect-scrollbar.scss
 ┃ ┃ ┃ ┃ ┗ 📂popper
 ┃ ┃ ┃ ┃ ┃ ┗ 📜popper.js
 ┃ ┃ ┃ ┣ 📂scss
 ┃ ┃ ┃ ┃ ┣ 📂pages
 ┃ ┃ ┃ ┃ ┃ ┣ 📜page-account-settings.scss
 ┃ ┃ ┃ ┃ ┃ ┣ 📜page-auth.scss
 ┃ ┃ ┃ ┃ ┃ ┣ 📜page-icons.scss
 ┃ ┃ ┃ ┃ ┃ ┗ 📜page-misc.scss
 ┃ ┃ ┃ ┃ ┣ 📂_bootstrap-extended
 ┃ ┃ ┃ ┃ ┃ ┣ 📂forms
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜_floating-labels.scss
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜_form-control.scss
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜_form-range.scss
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜_form-select.scss
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜_input-group.scss
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜_labels.scss
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜_validation.scss
 ┃ ┃ ┃ ┃ ┃ ┣ 📂mixins
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜_alert.scss
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜_badge.scss
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜_buttons.scss
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜_caret.scss
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜_dropdown.scss
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜_forms.scss
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜_list-group.scss
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜_misc.scss
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜_navs.scss
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜_pagination.scss
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜_progress.scss
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜_table-variants.scss
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜_toasts.scss
 ┃ ┃ ┃ ┃ ┃ ┣ 📜_accordion.scss
 ┃ ┃ ┃ ┃ ┃ ┣ 📜_alert.scss
 ┃ ┃ ┃ ┃ ┃ ┣ 📜_badge.scss
 ┃ ┃ ┃ ┃ ┃ ┣ 📜_breadcrumb.scss
 ┃ ┃ ┃ ┃ ┃ ┣ 📜_button-group.scss
 ┃ ┃ ┃ ┃ ┃ ┣ 📜_buttons.scss
 ┃ ┃ ┃ ┃ ┃ ┣ 📜_card.scss
 ┃ ┃ ┃ ┃ ┃ ┣ 📜_carousel.scss
 ┃ ┃ ┃ ┃ ┃ ┣ 📜_close.scss
 ┃ ┃ ┃ ┃ ┃ ┣ 📜_dropdown.scss
 ┃ ┃ ┃ ┃ ┃ ┣ 📜_forms.scss
 ┃ ┃ ┃ ┃ ┃ ┣ 📜_functions.scss
 ┃ ┃ ┃ ┃ ┃ ┣ 📜_include.scss
 ┃ ┃ ┃ ┃ ┃ ┣ 📜_list-group.scss
 ┃ ┃ ┃ ┃ ┃ ┣ 📜_mixins.scss
 ┃ ┃ ┃ ┃ ┃ ┣ 📜_modal.scss
 ┃ ┃ ┃ ┃ ┃ ┣ 📜_nav.scss
 ┃ ┃ ┃ ┃ ┃ ┣ 📜_navbar.scss
 ┃ ┃ ┃ ┃ ┃ ┣ 📜_offcanvas.scss
 ┃ ┃ ┃ ┃ ┃ ┣ 📜_pagination.scss
 ┃ ┃ ┃ ┃ ┃ ┣ 📜_popover.scss
 ┃ ┃ ┃ ┃ ┃ ┣ 📜_progress.scss
 ┃ ┃ ┃ ┃ ┃ ┣ 📜_reboot.scss
 ┃ ┃ ┃ ┃ ┃ ┣ 📜_root.scss
 ┃ ┃ ┃ ┃ ┃ ┣ 📜_spinners.scss
 ┃ ┃ ┃ ┃ ┃ ┣ 📜_tables.scss
 ┃ ┃ ┃ ┃ ┃ ┣ 📜_toasts.scss
 ┃ ┃ ┃ ┃ ┃ ┣ 📜_tooltip.scss
 ┃ ┃ ┃ ┃ ┃ ┣ 📜_type.scss
 ┃ ┃ ┃ ┃ ┃ ┣ 📜_utilities-ltr.scss
 ┃ ┃ ┃ ┃ ┃ ┣ 📜_utilities.scss
 ┃ ┃ ┃ ┃ ┃ ┗ 📜_variables.scss
 ┃ ┃ ┃ ┃ ┣ 📂_components
 ┃ ┃ ┃ ┃ ┃ ┣ 📂mixins
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜_app-brand.scss
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜_avatar.scss
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜_footer.scss
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜_menu.scss
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜_misc.scss
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜_navbar.scss
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜_text-divider.scss
 ┃ ┃ ┃ ┃ ┃ ┣ 📜_app-brand.scss
 ┃ ┃ ┃ ┃ ┃ ┣ 📜_avatar.scss
 ┃ ┃ ┃ ┃ ┃ ┣ 📜_base.scss
 ┃ ┃ ┃ ┃ ┃ ┣ 📜_common.scss
 ┃ ┃ ┃ ┃ ┃ ┣ 📜_footer.scss
 ┃ ┃ ┃ ┃ ┃ ┣ 📜_include.scss
 ┃ ┃ ┃ ┃ ┃ ┣ 📜_layout.scss
 ┃ ┃ ┃ ┃ ┃ ┣ 📜_menu.scss
 ┃ ┃ ┃ ┃ ┃ ┣ 📜_mixins.scss
 ┃ ┃ ┃ ┃ ┃ ┣ 📜_text-divider.scss
 ┃ ┃ ┃ ┃ ┃ ┗ 📜_variables.scss
 ┃ ┃ ┃ ┃ ┣ 📂_custom-variables
 ┃ ┃ ┃ ┃ ┃ ┣ 📜_bootstrap-extended.scss
 ┃ ┃ ┃ ┃ ┃ ┣ 📜_components.scss
 ┃ ┃ ┃ ┃ ┃ ┣ 📜_libs.scss
 ┃ ┃ ┃ ┃ ┃ ┣ 📜_pages.scss
 ┃ ┃ ┃ ┃ ┃ ┗ 📜_support.scss
 ┃ ┃ ┃ ┃ ┣ 📂_theme
 ┃ ┃ ┃ ┃ ┃ ┣ 📜_common.scss
 ┃ ┃ ┃ ┃ ┃ ┗ 📜_theme.scss
 ┃ ┃ ┃ ┃ ┣ 📜core.scss
 ┃ ┃ ┃ ┃ ┣ 📜theme-default.scss
 ┃ ┃ ┃ ┃ ┣ 📜_bootstrap-extended.scss
 ┃ ┃ ┃ ┃ ┣ 📜_bootstrap.scss
 ┃ ┃ ┃ ┃ ┣ 📜_colors.scss
 ┃ ┃ ┃ ┃ ┗ 📜_components.scss
 ┃ ┃ ┃ ┣ 📂tasks
 ┃ ┃ ┃ ┃ ┣ 📜build.js
 ┃ ┃ ┃ ┃ ┗ 📜prod.js
 ┃ ┃ ┃ ┗ 📜build-config.js
 ┃ ┣ 📂main_page
 ┃ ┃ ┣ 📂css
 ┃ ┃ ┃ ┗ 📜main.css
 ┃ ┃ ┗ 📂js
 ┃ ┃ ┃ ┣ 📂extention
 ┃ ┃ ┃ ┃ ┣ 📜choices.js
 ┃ ┃ ┃ ┃ ┣ 📜custom-materialize.js
 ┃ ┃ ┃ ┃ ┗ 📜flatpickr.js
 ┃ ┃ ┃ ┗ 📜main.js
 ┃ ┣ 📂panel
 ┃ ┃ ┗ 📂pages
 ┃ ┃ ┃ ┣ 📂include
 ┃ ┃ ┃ ┃ ┣ 📜aside.ejs
 ┃ ┃ ┃ ┃ ┣ 📜footer.ejs
 ┃ ┃ ┃ ┃ ┣ 📜head.ejs
 ┃ ┃ ┃ ┃ ┗ 📜navbar.ejs
 ┃ ┃ ┃ ┣ 📜create_license.ejs
 ┃ ┃ ┃ ┣ 📜create_script.ejs
 ┃ ┃ ┃ ┣ 📜license.ejs
 ┃ ┃ ┃ ┣ 📜license_check.ejs
 ┃ ┃ ┃ ┣ 📜login.ejs
 ┃ ┃ ┃ ┗ 📜reports.ejs
 ┃ ┗ 📜index.ejs
 ┣ 📜config.js
 ┣ 📜index.js
 ┗ 📜package.json
```

## ⛳Tech Stack ⛳

**🗄️Server:** Node, Fs, Express, Colors, Moment, MongoDB, Mongoose

---
- ✨ [For Support](https://github.com/sponsors/fastuptime) <br>
- 💕 [Discord](https://fastuptime.com/discord)<br>
- 🏓 [Fast Uptime](https://fastuptime.com/)<br>
- 🪄 All kinds of projects are made <br>
- 🧨 You can contact us to make a paid project<br>
- ☄️ [Click For Contact](mailto:fastuptime@gmail.com)<br>

# 🎯 License 🎯
- ⚖️ Its protected by Creative Commons ([CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/))

<a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" title="BYNCSA40"><img src="https://licensebuttons.net/l/by-nc-sa/4.0/88x31.png"></a>
