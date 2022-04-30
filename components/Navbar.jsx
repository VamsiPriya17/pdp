import React from 'react'
import { useState } from 'react'
import { Badge } from '@mui/material'
import { createTheme } from '@mui/material/styles'
import { AiOutlineHome, AiFillHome } from 'react-icons/ai'
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded'
import PersonRoundedIcon from '@mui/icons-material/PersonRounded'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded'
import SearchIcon from '@mui/icons-material/Search'
let theme = createTheme({
  palette: {
    primary: {
      main: '#fff',
    },
    secondary: {
      main: '#edf2ff',
    },
  },
})
function Navbar() {
  const [active, setActive] = useState(0)
  return (
    <div className=" navbar rounded-t-2xl bg-white">
      <div className="m-auto flex w-[95%] items-center justify-between px-4 py-4">
        <div
          onClick={() => {
            setActive(0)
          }}
        >
          {active === 0 ? (
            <AiFillHome className="text-2xl text-green-600" />
          ) : (
            <AiOutlineHome className="text-2xl text-gray-900" />
          )}
        </div>
        <div
          onClick={() => {
            setActive(1)
          }}
        >
          {active === 1 ? (
            <SearchIcon className="text-2xl text-green-600" />
          ) : (
            <SearchIcon className="text-2xl text-gray-900" />
          )}
        </div>
        <div
          onClick={() => {
            setActive(2)
          }}
        >
          <Badge badgeContent={4} color="primary">
            {active === 2 ? (
              <ShoppingCartRoundedIcon className="text-2xl text-green-600" />
            ) : (
              <ShoppingCartOutlinedIcon className="text-2xl text-gray-900" />
            )}
          </Badge>
        </div>
        <div
          onClick={() => {
            setActive(3)
          }}
        >
          {active === 3 ? (
            <PersonRoundedIcon className="text-2xl text-green-600" />
          ) : (
            <PersonOutlineRoundedIcon className="text-2xl text-gray-900" />
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar
