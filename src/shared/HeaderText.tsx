import React from 'react'

interface Props {
    children:React.ReactNode
}

const HeaderText = ({children}: Props) => {
    return (
        <div>
            <h1 className='basis-3/5 font-montserrat text-3xl font-bold'>
                {children}
            </h1>
        </div>
    )
}

export default HeaderText
