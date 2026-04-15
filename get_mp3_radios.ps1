$url1 = "http://de1.api.radio-browser.info/json/stations/search?name=Nuevo+Tiempo&codec=MP3&limit=5"
$res1 = Invoke-RestMethod -Uri $url1
$res1 | ConvertTo-Json -Depth 3 | Out-File mp3_radios.json

$url2 = "http://de1.api.radio-browser.info/json/stations/search?name=Adventista&codec=MP3&limit=5"
$res2 = Invoke-RestMethod -Uri $url2
$res2 | ConvertTo-Json -Depth 3 | Out-File mp3_radios_adv.json
