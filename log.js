let log = {
    typography:'font-size:14px; padding:5px;',
    info:(msg)=>{
        console.log(`%c${msg}`,`background: #FFDC00; color: black; ${log.typography}`)
    },
    warn:(msg)=>{
        console.log(`%c${msg}`,`background: #FF8C00; color: white; ${log.typography}`)
    },
    success:(msg)=>{
        console.log(`%c${msg}`,`background: #BADA55; color: black; ${log.typography}`)
    },
    error:(msg)=>{
        console.log(`%c${msg}`,`background: #FF0000; color: black; ${log.typography}`)
    }
}
