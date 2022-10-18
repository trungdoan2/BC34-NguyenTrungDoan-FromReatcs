import React from 'react';
import { useState } from 'react';

export default function Search() {
    const [query, setQuery] = useState("")
  return (
    <div className='container m-2'>
        <input type="text" className="search" placeholder="Search..." />
    </div>
  )
}

