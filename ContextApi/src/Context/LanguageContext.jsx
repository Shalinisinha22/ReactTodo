import { createContext } from "react";
import { useState } from "react";
export const LanguageContext= createContext(null)

export function LanguageProvider({children}){
    const language=[
        'english'
        ,"hindi",
        "tamil"
    ]
    const [lang,setLang]=useState(language[0])


    const changeLang=(id)=>{
        setLang(language[id])
    }

    return(
        <LanguageContext.Provider value={{lang,changeLang,language}}>
            {
                children
            }
        </LanguageContext.Provider>
    )
}



