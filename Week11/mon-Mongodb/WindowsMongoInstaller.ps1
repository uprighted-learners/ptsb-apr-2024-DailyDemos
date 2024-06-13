# Check if PowerShell is running as administrator
if (-not ([Security.Principal.WindowsPrincipal] [Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole] "Administrator")) {
    Write-Host "Please run this script as an administrator as shown on README.md file"
    Exit
}

# Install Chocolatey if not installed
if (!(Test-Path 'C:\ProgramData\chocolatey\choco.exe')) {
    Write-Host "Installing Chocolatey..."
    Set-ExecutionPolicy Bypass -Scope Process -Force; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
} else {
    Write-Host "Chocolatey is already installed."
}

function InstallIfNotInstalled($packageName) {
    $installedApps = Get-Package | ForEach-Object { $_.Name }

    $isInstalled = $false
    foreach ($app in $installedApps) {
        if ($app -like "*$packageName*") {
            $isInstalled = $true
            break
        }
    }

    if (-not $isInstalled) {
        Write-Host "Installing $packageName..."
        choco install $packageName -y
    } else {
        Write-Host "$packageName is already installed."
    }
}

InstallIfNotInstalled "mongodb"
InstallIfNotInstalled "mongodb-shell"
InstallIfNotInstalled "mongodb-compass"
InstallIfNotInstalled "mongodb-database-tools"

Write-Host "Installation complete."