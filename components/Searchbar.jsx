import React from 'react'
import SearchIcon from '@mui/icons-material/Search'
function Searchbar() {
  return (
    <div className="flex w-full rounded-xl bg-gray-100 px-4 py-4">
      <SearchIcon />
      <input
        className="w-full rounded-xl bg-gray-100 px-2 text-[14px] outline-0"
        type="text"
        placeholder="Search for anything"
      />
    </div>
  )
}

export default Searchbar
