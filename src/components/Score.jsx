import React from 'react'

export const Score = ({score, length}) => {
    const restart = () => {
        window.location.reload()
    }
  return (
    <div className='bg-[#FCE0B0] h-[100vh] flex items-center justify-center'>
        <div className='bg-[#49302B] w-[96%] max-w-sm md:max-w-3xl mx-auto text-center h-60 flex items-center justify-center flex-wrap flex-col rounded-lg'>
            <p className='text-3xl mb-3'>You Scored:</p>
            <p className='text-4xl font-semibold'>{score}/{length}</p>
            <div>
                <button className='bg-[#FCE0B0] mt-3 py-2 px-1 rounded-lg ' onClick={restart}>Restart</button>
            </div>
        </div>
    </div>
  )
}
