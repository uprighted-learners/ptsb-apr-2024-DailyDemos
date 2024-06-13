#!/bin/bash

# Function to check if the script is run as root and exit if true
check_root() {
    if [ "$(id -u)" -eq 0 ]; then
        echo "Please do not run this script as root."
        exit 1
    fi
}

# Function to install Homebrew if not installed
install_homebrew() {
    if ! command -v brew &> /dev/null; then
        echo "Installing Homebrew..."
        /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    else
        echo "Homebrew is already installed."
    fi
}

# Function to install or update a package if installed
install_or_update() {
    local package_name="$1"
    if brew list --cask "$package_name" &> /dev/null || brew list "$package_name" &> /dev/null; then
        echo "Updating $package_name..."
        if [[ "$package_name" == "nodejs-lts" ]]; then
            brew upgrade node@lts
        else
            brew upgrade --cask "$package_name" || brew upgrade "$package_name"
        fi
    else
        echo "Installing $package_name..."
        if [[ "$package_name" == "nodejs-lts" ]]; then
            brew install node@lts
        else
            brew install --cask "$package_name" || brew install "$package_name"
        fi
    fi
}

# Check if the script is run as root
check_root

# Install Homebrew if not installed
install_homebrew

#get mongo packages
brew tap mongodb/brew
# Update Homebrew to get the latest package information
brew update

# Install or update packages
install_or_update "mongodb-community"
install_or_update "mongosh"
install_or_update "mongodb-compass"
install_or_update "mongodb-database-tools"

echo "Installation and update complete."