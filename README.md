# curso_node
Curso Inicial de node js

--usando o powershell windows executado como administrador rodar o comando abaixo
Set-ExecutionPolicy Bypass -Scope Process -Force; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))

Get-ExecutionPolicy -- Deve retornar 'RemoteSigned', caso contrário, rodar o comando abaixo
Set-ExecutionPolicy RemoteSigned

--instalando com o chocolatey o node lts
choco install -y nodejs-lts

npm init

npm install express -save

npm install -g nodemon

npm install mysql --save

npm install consign --save

npm install body-parser --save

//npm install express-validator --save
npm install express-validator@2.20.8 --save
