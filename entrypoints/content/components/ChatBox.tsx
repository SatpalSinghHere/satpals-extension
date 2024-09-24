import React from 'react'
import arrow from '@/assets/Arrow.png'
import Prompt from './Prompt'
import Response from './Response'
import GenerateButton from './GenerateButton'
import Regenerate from './Regenerate'


const ChatBox = ({removeChatHandler}:{removeChatHandler:Function}) => {
    const [inputValue, setInputValue] = useState('')
    const [chatEntries, setChatEntries] = useState<string[]>([])

    const addPrompt = () => {
        setChatEntries((prevList)=>{
            return [...prevList, inputValue, "Thank you for the opportunity! If you have any more questions or if there's anything else I can help you with, feel free to ask."]
        })
                
    }

    const insertResponse = ()=>{

        removeChatHandler();

        const messageBox = document.querySelector('.msg-form__contenteditable') as HTMLElement
        const pMessage = messageBox.querySelector('p')
        const p = document.createElement('p')
        p.innerText = chatEntries[chatEntries.length-1]
        
        if(messageBox){
            messageBox.innerHTML = ' '
            
            messageBox.focus()
            
            messageBox.setAttribute('aria-label', '')
            
            messageBox.appendChild(p)
            console.log('p appended')
        }
    }

    useEffect(()=>{
        console.log(chatEntries)
    }, [chatEntries])

    return (
        <div className='w-1/3 shadow-lg rounded-md z-[1010] bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
            <div className="flex flex-col p-4 gap-2 w-full h-full bg-white border rounded-md shadow-sm text-slate-700">
                {chatEntries.map((entry, index)=> index%2 === 0 ? <Prompt text={entry} key={index} /> : <Response text={entry} key={index} />)}

                
                <input value={inputValue} onChange={(e)=>{setInputValue(e.target.value)}} type="text" placeholder="Your prompt" className="w-full px-4 py-2 border border-gray-300 rounded-md" />
                {chatEntries.length > 1 ? <Regenerate insertResponse={insertResponse} /> : <GenerateButton addPrompt={addPrompt} />}
            </div>
        </div>
    )
}

export default ChatBox
