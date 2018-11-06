module.exports = fs.readdir('./', 'utf8',(err,files)=>{
    if(err){
        throw err
    } else {
        ProcessingInstruction.stdout.write(files.joi('\n'));
        ProcessingInstruction.stdout.write("promp > ");
    }
})