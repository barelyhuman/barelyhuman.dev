amazon-linux-extras install golang1.11 
go mod init deploy
go get github.com/barelyhuman/statico@v0.0.1-dev.1
export PATH=$PATH:$HOME/go/bin/

if ! command -v statico &> /dev/null
then
    echo "statico could not be found"
    exit
fi

statico
