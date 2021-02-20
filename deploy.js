var FtpDeploy = require("ftp-deploy");
var ftpDeploy = new FtpDeploy();

var config = {
    user: "root",
    // Password optional, prompted if none given
    password: "Aq1sw2de3",
    host: "115.29.36.23",
    port: 33,
    localRoot: __dirname + "/public/",
    remoteRoot: "/",
    include: ["*", "**/*"],      // this would upload everything except dot files
    // include: ["*.php", "dist/*", ".*"],
    // e.g. exclude sourcemaps, and ALL files in node_modules (including dot files)
    exclude: ["dist/**/*.map", "node_modules/**", "node_modules/**/.*", ".git/**"],
    // delete ALL existing files at destination before uploading, if true
    deleteRemote: false,
    // Passive mode is forced (EPSV command is not sent)
    forcePasv: true,
    // use sftp or ftp
    sftp: false
};

ftpDeploy
    .deploy(config)
    .then(res => console.log("finished:", res))
    .catch(err => console.log(err));


ftpDeploy.on("uploading", function (data) {
    console.log(data.totalFilesCount); // total file count being transferred
    console.log(data.transferredFileCount); // number of files transferred
    console.log(data.filename); // partial path with filename being uploaded
});