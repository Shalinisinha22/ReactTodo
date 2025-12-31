import React from 'react'
import { useContext } from 'react'
import { LanguageContext } from '../Context/LanguageContext'

function Profile() {
    const {lang,changeLang,language}= useContext(LanguageContext)
  return (
    <div>
      <h1>Profile page</h1>

      {
        language.map((lang,id)=>{
          return  <button key={id} onClick={()=>changeLang(id)}>{lang}</button>
        })
      }

      <h2>Current language is {lang}</h2>
      {/* <button onClick={()=>changeLang()}>Change Language</button> */}
    </div>
  )
}

export default Profile
