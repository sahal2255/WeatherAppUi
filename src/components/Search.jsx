import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";

const Search=({handleSearch})=>{
    const [searchValue,setSearchValue]=useState('')

    const handleChange=(e)=>{
        setSearchValue(e.target.value)
    }
    const searchOption=()=>{
        console.log(searchValue)
        handleSearch(searchValue)
    }

    return (
        <div className="w-full flex p-5 justify-center ">
            <div className="flex items-center relative">
                <CiSearch className="absolute left-3 text-2xl"/>
                <input type="text" name="name" id="name" className="border-2 border-indigo-400 w-full pl-12 pr-4 py-2 rounded-l-lg" placeholder="Enter City Name..."  onChange={handleChange}/>
                <button className="w-24 h-10 rounded-lg bg-blue-600 hover:bg-indigo-600" onClick={searchOption} > Search</button>
            </div>
           
        </div>
    )
}

export default Search