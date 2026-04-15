$3abn = Get-Content 3abn.html -Raw
if ($3abn -match '<iframe.*?src=["\'](.*?)["\'].*?>') {
    Write-Host "3ABN iframe: $($matches[1])"
}
$nt = Get-Content nt.html -Raw
if ($nt -match '<iframe.*?src=["\'](.*?)["\'].*?>') {
    Write-Host "NT iframe: $($matches[1])"
}
