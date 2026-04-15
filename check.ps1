[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12 -bor [Net.SecurityProtocolType]::Tls13
function Get-Redirect {
    param($url)
    try {
        $req = [System.Net.WebRequest]::Create($url)
        $req.AllowAutoRedirect = $false
        $res = $req.GetResponse()
        return $res.Headers["Location"]
    } catch {
        return $_.Exception.Response.Headers["Location"]
    }
}
Write-Host "1:" (Get-Redirect "https://www.facebook.com/share/v/1DHEqF1Tzm/")
Write-Host "2:" (Get-Redirect "https://www.facebook.com/share/v/17HASWdVfD/")
Write-Host "3:" (Get-Redirect "https://www.facebook.com/share/v/1TzVG4Z2Dy/")
Write-Host "4:" (Get-Redirect "https://www.facebook.com/share/v/1DWVLoRhjc/")
Write-Host "5:" (Get-Redirect "https://www.facebook.com/share/v/1ESVs4zBZw/")
Write-Host "6:" (Get-Redirect "https://www.facebook.com/share/v/1DPY66Ctq6/")
Write-Host "7:" (Get-Redirect "https://www.facebook.com/share/v/1AwQFaB3h8/")
Write-Host "8:" (Get-Redirect "https://www.facebook.com/share/v/1B4aTdws7Q/")
Write-Host "9:" (Get-Redirect "https://www.facebook.com/share/v/1VWp15VNHm/")
