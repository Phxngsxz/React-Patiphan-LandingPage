import React from 'react'

function InfoTwo() {
    return (
        <div className='container mx-auto flex items-center py-16'>
            <div className="w-1/2 px-6">
                <h2 className='text-3xl font-semibold'>Welcome to Our Website</h2>
                <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore accusantium qui officiis provident deleniti ratione doloremque hic officia commodi esse!</p>
            </div>
            <div className="w-1/2">
                <img src="https://images.unsplash.com/photo-1634704784915-aacf363b021f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='w-full h-auto rounded-lg' />
            </div>
        </div>
    )
}

export default InfoTwo
