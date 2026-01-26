# Download Unsplash Images Script
$images = @(
    # India tours
    @{url='https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&q=80&w=1920'; name='kashmir_hero.jpg'},
    @{url='https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&q=75&w=1600'; name='himachal_hero.jpg'},
    @{url='https://images.unsplash.com/photo-1590393802679-0da00808a3d5?auto=format&fit=crop&q=75&w=1600'; name='heritage_uttarakhand_hero.jpg'},
    @{url='https://images.unsplash.com/photo-1598971861713-54ad16a7e72e?auto=format&fit=crop&q=80&w=1920'; name='golden_quadrangle_hero.jpg'},
    @{url='https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80&w=1200'; name='indian_temple.jpg'},
    @{url='https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&q=80&w=1920'; name='nepal_hero.jpg'},
    @{url='https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80&w=1920'; name='bhutan_hero.jpg'},
    @{url='https://images.unsplash.com/photo-1615836245337-f5b9b2303f10?auto=format&fit=crop&q=80&w=1200'; name='rajasthan_img.jpg'},
    
    # International tours
    @{url='https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=75&w=1600'; name='kenya_tanzania_hero.jpg'},
    @{url='https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&q=80&w=1200'; name='safari.jpg'},
    @{url='https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=75&w=1600'; name='greece_hero.jpg'},
    @{url='https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&q=80&w=1200'; name='santorini.jpg'},
    @{url='https://images.unsplash.com/photo-1508814436484-77af3497e82f?auto=format&fit=crop&q=80&w=1920'; name='north_america_hero.jpg'},
    @{url='https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&q=80&w=1200'; name='new_york.jpg'},
    @{url='https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&q=80&w=1920'; name='south_america_hero.jpg'},
    @{url='https://images.unsplash.com/photo-1587589391928-09916694cca2?auto=format&fit=crop&q=80&w=1200'; name='machu_picchu.jpg'},
    @{url='https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&q=80&w=1920'; name='australia_hero.jpg'},
    @{url='https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&q=80&w=1200'; name='sydney.jpg'},
    
    # International gallery
    @{url='https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=1200'; name='paris.jpg'},
    @{url='https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&q=80&w=1200'; name='dubai.jpg'},
    @{url='https://images.unsplash.com/photo-1549144511-f099e773c147?auto=format&fit=crop&q=80&w=1200'; name='tokyo.jpg'},
    @{url='https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&q=80&w=1200'; name='norway.jpg'},
    @{url='https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&q=80&w=1200'; name='thailand.jpg'},
    @{url='https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=1200'; name='dubai_city.jpg'},
    @{url='https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&q=80&w=1200'; name='barcelona.jpg'},
    @{url='https://images.unsplash.com/photo-1601645191163-3fc0d5d64e35?auto=format&fit=crop&q=80&w=1200'; name='istanbul.jpg'},
    @{url='https://images.unsplash.com/photo-1624138784614-87fd1b6528f8?auto=format&fit=crop&q=80&w=1200'; name='singapore.jpg'}
)

$basePath = "c:\Users\Lenovo\OneDrive\Desktop\New folder (17)\public\images"

foreach ($img in $images) {
    $outFile = Join-Path $basePath $img.name
    try {
        Write-Host "Downloading $($img.name)..."
        Invoke-WebRequest -Uri $img.url -OutFile $outFile -ErrorAction Stop
        Write-Host "✓ Downloaded $($img.name)"
    } catch {
        Write-Host "✗ Failed to download $($img.name): $_"
    }
}

Write-Host "`nDownload complete!"
