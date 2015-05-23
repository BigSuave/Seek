# Starting Servers — For Gist
 
#!/bin/bash
echo "Seek Server Services"
 
echo "------------------------------------------"
 
 
 
read -p "Do you wish to start the services (y or n)?" yn
 
case $yn in
 
    [Yy]* ) sudo forever start server.js;
 
            echo "Started general hosting server for seek" 
 
            break;;
 
    [Nn]* ) exit;;
 
        * ) echo "Please answer y(Yes) or n(No).";;
 
esac