function exec(cmd, handler = function(error, stdout, stderr){console.log(stdout);if(error !== null){console.log(stderr)}})
{
    const childfork = require('child_process');
    return childfork.exec(cmd, handler);
}

const os = require("os");

os.platform() == "win32" ? exec('ng serve --port 44487 --ssl --ssl-cert %APPDATA%\\ASP.NET\\https\\%npm_package_name%.pem --ssl-key %APPDATA%\\ASP.NET\\https\\%npm_package_name%.key')
: exec("ng serve --port 44487 --ssl --ssl-cert $HOME/.aspnet/https/${npm_package_name}.pem --ssl-key $HOME/.aspnet/https/${npm_package_name}.key");
