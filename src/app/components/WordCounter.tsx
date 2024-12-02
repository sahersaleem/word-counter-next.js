'use client'

import React, { ChangeEvent } from 'react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Card , CardContent , CardDescription , CardFooter , CardHeader , CardTitle } from '@/components/ui/card'

import { useState } from 'react'




const WordCounter = () => {

const [text , setText] = useState<string>('')


const handleTextChange = (e:ChangeEvent<HTMLTextAreaElement>)=>{
  setText(e.target.value)

}

const clearText = ()=>{
setText("")
}

 const wordCount = text
    .trim()
    .split(/\s+/)
    .filter((word) => word).length;

const characterCount =text.length
  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <Card>
        
          <CardHeader>
            <CardTitle><h1 className='text-3xl text-center mb-2'>Text Analaysis</h1><p className='font-light text-md  text-center'>Enter text and see the word and character count</p></CardTitle>
          </CardHeader>
          <CardContent>
          <CardDescription>
               <Textarea placeholder='Enter your text here!' value={text} onChange={handleTextChange}></Textarea>
          </CardDescription>
          </CardContent>
          <CardFooter className='flex justify-around mt-4'>
            <div><p>{wordCount} words</p> <p>{ characterCount} characters</p> </div> <Button onClick={clearText}>Clear</Button>
          </CardFooter>
       
      </Card>
    </div>
  )
}

export default WordCounter
