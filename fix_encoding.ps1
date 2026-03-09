$bytes = [IO.File]::ReadAllBytes('index.html')
$text = [System.Text.Encoding]::UTF8.GetString($bytes)

$text = $text.Replace('í', '')
$text = $text.Replace([char]65279, '')

[IO.File]::WriteAllText('index.html', $text, [System.Text.Encoding]::UTF8)
