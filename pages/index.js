import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { useState } from 'react';

const questions = [
  {
    question: "What's Snape's first name?",
    answer: "Severus",
  }
]

export default function Home() {
  const question = questions[0]
  const [answer, setAnswer] = useState('')

  const updateAnswer = (event) => {
    setAnswer(event.target.value)
  }

  const submit = () => { 
    if (answer.toLowerCase() === question.answer.toLowerCase()) {
      alert('Thats right!!')
    } else {
      alert('Thats wrong!!')
    }
  }

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Welcome to the Harry Potter quiz!</p>
        <p>
          <b>Question:</b> {question.question}
        </p>
        <p>
          <input type="text" name="answer" onChange={updateAnswer} />
          <input type="submit" style={{ backgroundColor: 'red' }} onClick={submit} />
        </p>
        <p>
          
        </p>
      </section>
    </Layout>
  )
}
