$urls = @(
    "https://stream.zeno.fm/qpwxtz942wzuv", # NT Peru (zeno id for NT Peru) - let's find the correct ones
    "https://hopemedia.live/hopemedia.mp3",
    "https://stream.zenomedia.com/492v7ymxtmzuv", # Example
    "http://stream.radios.org.br/nuevotiempo"
)

foreach ($url in $urls) {
    try {
        $res = Invoke-RestMethod -Uri $url -Method Default -ErrorAction Stop -TimeoutSec 5
        Write-Host "$url : OK"
    } catch {
        Write-Host "$url : FAIL - $_"
    }
}
