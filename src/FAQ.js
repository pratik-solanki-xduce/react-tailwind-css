import React, {useState} from 'react'
import { faqQuestion } from './Data/faqQuestion';

export const FAQs = () => {
  const [faqSelect, setFaqSelect] = useState(faqQuestion[0].qno)

  const items = faqQuestion.map((faq,index) => {
    return <FAQItems itemData={faq} faqSelect={faqSelect} setFaqSelect={setFaqSelect} key={index} />
  })
  
  return (
    <div>
      <h1 className='text-5xl font-bold mb-5 mt-3'>Frequently Asked Questions (FAQs)</h1>
      <div className='faqOuter'>
        {items}
      </div>
    </div>
  )
}

export const FAQItems = ({itemData, faqSelect, setFaqSelect}) => {
  return (
    <div className='faqItems'>
      <h2 className='text-2xl cursor-pointer' onClick={() => setFaqSelect(itemData.qno)}>{itemData.qno}. {itemData.question}</h2>
      <p className={faqSelect === itemData.qno ? "showFAQ" : ""}>{itemData.answer}</p>
    </div>
  )
}

