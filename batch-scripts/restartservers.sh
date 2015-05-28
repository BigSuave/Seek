# Restart.sh — For Gist
 
#!/bin/bash
 
 
 
echo "Seek Services restart Protocol"
 
echo "--------------------------------------------------------"
 
echo "Restart"
 
echo "1 - Restart all servers"
 
echo "2 - Restart one or more"
 
echo "3 - Exit"

echo "These choices aren't available just yet...." 
 
 
 
read -p "Do you wish to start the services (y or n)?" yn
 
case $yn in
 
    [Yy]* ) sudo forever stopall;
			
			sudo forever start ../server.js;
 
            echo "Started general hosting server for seek" 
 
            break;;
 
    [Nn]* ) exit;;
 
        * ) echo "Please answer y(Yes) or n(No).";;
 
esac