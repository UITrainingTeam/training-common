const fs = require('fs-extra');
const glob = require('glob');

function pathExists(path) {
    try {
        fs.accessSync(path, fs.constants.R_OK | fs.constants.W_OK);
        return true;
    } catch (err) {
        return false;
    }
}

function ensurePathExists(path) {
    if (pathExists(path)) {
        return true;
    }
    try {
        fs.mkdirsSync(path);
        return true;
    } catch (err) {
        return false;
    }
}

function copyDebug() {
    // create /dist folder
    ensurePathExists("./dist/");

    // package.json
    fs.copyFileSync("./package_to_distribute.json", "./dist/package.json", 0, (err) => {
        if (err) {
            throw err;
        }
    });

    // g3js.js
    fs.copyFileSync("./build/bundle.js", "./dist/healthcare-common.js", 0, (err) => {
        if (err) {
            throw err;
        }
    });

    //typings
    const files = glob.sync("./build/src/**/*.d.ts");
    for (var i = 0; i < files.length; ++i) {
        const src = files[i];
        if (src.indexOf('src/local/thirdparty') >= 0) {
            continue;
        }
        const dst = "./dist/" + files[i].substring(11); // replace './build/src/' by './dist'
        ensurePathExists(dst.substring(0, dst.lastIndexOf('/')));
        try {
            fs.copyFileSync(src, dst, 0);
        } catch (err) {
            throw err;
        }
    }
    fs.renameSync("./dist/index.d.ts", "./dist/healthcare-common.d.ts");
};
copyDebug();