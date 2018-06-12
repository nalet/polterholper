# Polterholper

Download the .net Core Framework at https://www.microsoft.com/net/download for your operating system and install it.

Setting the enviroment variables:

```bash
#PowerShell:
$env:ASPNETCORE_Environment = "Development"
#CMD:
SET ASPNETCORE_Environment=Development
#Linux/MacOs:
export ASPNETCORE_Environment=Development
```

Clone the repo und start the app:

```bash
git clone https://github.com/nalet/polterholper
cd polterholper
#Before running set the enviroment variable correctly! 
dotnet watch run
```

Navigate to https://localhost:5001 ignore the certificate errors of the self signed certificate.
