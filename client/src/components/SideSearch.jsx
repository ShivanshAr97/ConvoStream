import React, { useState } from 'react'
import { ChatState } from '../context/ChatProvider'
import { useNavigate } from 'react-router-dom'
import axios from "axios"
import ChatLoading from '../components/ChatLoading'
import SingleModal from '../components/SingleModal'
import {getSender} from '../assets/chatLogics.js'
import UserList from '../components/UserList.jsx'

const SideSearch = () => {

    const [search, setSearch] = useState("")
    const [searchList, setSearchList] = useState([])
    const [loading,setLoading] = useState(false)
    const [loadingChat, setLoadingChat] = useState(false);
    const navigate = useNavigate();

    const {
      setSelectedChat,
      user,
      notification,
      setNotification,
      chats,
      setChats,
    } = ChatState();

    const logout=()=>{
      localStorage.removeItem("userInfo")
      navigate("/")
    }

    const handleSearch = async () => {
      if (!search) {
        console.log("Please Enter something in search");
        return;
      }
  
      try {
        setLoading(true);
        const config = {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        };
        const { data } = await axios.get(`/api/user?search=${search}`, config);
  
        setLoading(false);
        setSearchResult(data);
      } catch (error) {
        console.log("Failed to Load the Search Results", error);
      }
    };

  return (

    <>
<nav className="bg-gray-800 p-4 flex justify-between items-center text-white">
  <div className="flex items-center space-x-4">
    <div>Search</div>
  </div>
  <div className="flex items-center space-x-4">
    <div className="font-bold">Site Name</div>
  </div>
  <div className="flex items-center space-x-4">
    <div>Profile</div>
    <div>
    <img alt="tania andrew"
  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
  className="relative inline-block object-cover object-center w-12 h-12 rounded-full cursor-pointer"
  data-popover-target="profile-menu" />
<ul role="menu" data-popover="profile-menu" data-popover-placement="bottom"
  className="absolute z-10 flex min-w-[180px] flex-col gap-2 overflow-auto rounded-md border border-blue-gray-50 bg-white p-3 font-sans text-sm font-normal text-blue-gray-500 shadow-lg shadow-blue-gray-500/10 focus:outline-none">
  <button role="menuitem"
    className="flex w-full cursor-pointer select-none items-center gap-2 rounded-md px-3 pt-[9px] pb-2 text-start leading-tight outline-none transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
    <p className="block font-sans text-sm antialiased font-medium leading-normal text-inherit">
      My Profile
    </p>
  </button>
  <button role="menuitem"
    className="flex w-full cursor-pointer select-none items-center gap-2 rounded-md px-3 pt-[9px] pb-2 text-start leading-tight outline-none transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
    <p className="block font-sans text-sm antialiased font-medium leading-normal text-inherit">
      Edit Profile
    </p>
  </button>
  <button role="menuitem"
    className="flex w-full cursor-pointer select-none items-center gap-2 rounded-md px-3 pt-[9px] pb-2 text-start leading-tight outline-none transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
    <p className="block font-sans text-sm antialiased font-medium leading-normal text-inherit">
      Inbox
    </p>
  </button>
  <button role="menuitem"
    className="flex w-full cursor-pointer select-none items-center gap-2 rounded-md px-3 pt-[9px] pb-2 text-start leading-tight outline-none transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
    <p className="block font-sans text-sm antialiased font-medium leading-normal text-inherit">
      Help
    </p>
  </button>
  <hr className="my-2 border-blue-gray-50" role="menuitem" />
  <button role="menuitem"
    className="flex w-full cursor-pointer select-none items-center gap-2 rounded-md px-3 pt-[9px] pb-2 text-start leading-tight outline-none transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
    <p className="block font-sans text-sm antialiased font-medium leading-normal text-inherit">
      Sign Out
    </p>
  </button>
</ul>
    </div>
    
  </div>
</nav>

    </>
  )
}

export default SideSearch