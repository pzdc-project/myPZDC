#!/bin/bash
# Download latest node and install.
pzdclink=`curl -s https://api.github.com/repos/pzdc-project/pzdc/releases/latest | grep browser_download_url | grep linux64 | cut -d '"' -f 4`
mkdir -p /tmp/pzdc
cd /tmp/pzdc
curl -Lo pzdc.tar.gz $bwklink
tar -xzf pzdc.tar.gz
sudo mv ./bin/* /usr/local/bin
cd
rm -rf /tmp/pzdc
mkdir ~/.pzdc

# Setup configuration for node.
rpcuser=$(head /dev/urandom | tr -dc A-Za-z0-9 | head -c 13 ; echo '')
rpcpassword=$(head /dev/urandom | tr -dc A-Za-z0-9 | head -c 32 ; echo '')
cat >~/.pzdc/pzdc.conf <<EOL
rpcuser=$rpcuser
rpcpassword=$rpcpassword
daemon=1
txindex=1
addressindex=1
timestampindex=1
spentindex=1
EOL

# Start node.
pzdcd
