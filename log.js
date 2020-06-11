let log = {
    typography:'font-size:14px; padding:5px;',
    info:(msg)=>{
        console.log(`%c${msg}`,`background: #FFDC00; color: #000000; ${log.typography}`)
    },
    warn:(msg)=>{
        console.log(`%c${msg}`,`background: #FF8C00; color: #FFFFFF; ${log.typography}`)
    },
    success:(msg)=>{
        console.log(`%c${msg}`,`background: #BADA55; color: #FFFFFF; ${log.typography}`)
    },
    error:(msg)=>{
        console.log(`%c${msg}`,`background: #FF0000; color: #000000; ${log.typography}`)
    }
}
