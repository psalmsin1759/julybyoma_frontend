
import React from 'react'

interface Props{
    input: string;
}
export default function H1({input}: Props) {
  return (
    <h1 className="text-lg md:text-3xl font-bold">{input}</h1>
  )
}
