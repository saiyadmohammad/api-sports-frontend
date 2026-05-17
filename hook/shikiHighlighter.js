// hook/shikiHighlighter.js
"use client"
import { useEffect, useState } from 'react'
import { codeToHtml } from 'shiki'

export default function ShikiHighlighter({ text, lang = 'javascript' }) {
  const [html, setHtml] = useState('')

  useEffect(() => {
    codeToHtml(text, {
      lang: 'javascript',
      theme: 'vitesse-dark'
    }).then(setHtml)
  }, [text, lang])

  return <div dangerouslySetInnerHTML={{ __html: html }} />
}
