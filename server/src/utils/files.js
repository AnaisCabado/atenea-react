import fs from 'fs';
import path from 'path';

function removeFile(fileName,folder="images") {
    try{
        const filePath = path.join(process.cwd(), 'public', folder, `${fileName}`);
        fs.unlinkSync(filePath);
        return true;
    }catch(error){
        console.log(error);
        return false;
    }
}

export {
    removeFile
};