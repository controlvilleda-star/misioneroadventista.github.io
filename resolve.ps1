[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12 -bor [Net.SecurityProtocolType]::Tls13
function Get-Redirect {
    param($url)
    try {
        $req = [System.Net.WebRequest]::Create($url)
        $req.AllowAutoRedirect = $false
        $req.UserAgent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"
        $res = $req.GetResponse()
        return $res.Headers["Location"]
    } catch {
        return $_.Exception.Response.Headers["Location"]
    }
}
$list = @(
    "https://www.facebook.com/share/v/1DHEqF1Tzm/",
    "https://www.facebook.com/share/v/17HASWdVfD/",
    "https://www.facebook.com/share/v/1TzVG4Z2Dy/",
    "https://www.facebook.com/share/v/1DWVLoRhjc/",
    "https://www.facebook.com/share/v/1ESVs4zBZw/",
    "https://www.facebook.com/share/v/1DPY66Ctq6/",
    "https://www.facebook.com/share/v/1AwQFaB3h8/",
    "https://www.facebook.com/share/v/1B4aTdws7Q/",
    "https://www.facebook.com/share/v/1VWp15VNHm/"
)
foreach ($url in $list) {
    Write-Host "$url -> " (Get-Redirect $url)
}
