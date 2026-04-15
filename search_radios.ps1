$url = "http://de1.api.radio-browser.info/json/stations/search?name=Nuevo+Tiempo&limit=50"
$response = Invoke-RestMethod -Uri $url -Method Get
$response | Select-Object name, url, state, country | Format-Table -AutoSize

$url2 = "http://de1.api.radio-browser.info/json/stations/search?name=Adventista&limit=50"
$response2 = Invoke-RestMethod -Uri $url2 -Method Get
$response2 | Select-Object name, url, state, country | Format-Table -AutoSize
