import React from 'react'
import '../styles/navbar2.css'
import Avatar from '@material-ui/core/Avatar'
import { AiOutlineSetting, AiOutlineMessage } from 'react-icons/ai'
import { IoNotificationsOutline } from 'react-icons/io5'
import IconButton from '@material-ui/core/IconButton'
import { HiChevronLeft } from 'react-icons/hi'

function Navbar2() {
    return (
        <nav>
            <div className="title">
                <IconButton>
                    <HiChevronLeft />
                </IconButton>
                Dashboard
            </div>
            <div className="icons-container">
                <IconButton>
                    <div className="notif">21</div>
                    <IoNotificationsOutline />
                </IconButton>
                <IconButton>
                    <div className="notif">3</div>
                    <AiOutlineMessage />
                </IconButton>
                <IconButton>
                    <div className="notif">1</div>
                    <AiOutlineSetting />
                </IconButton>
                <div className="avatar-container">
                    <div className="text">
                        <div className="text1">Good morning</div>
                        <div className="text2">Ouali Othman</div>
                    </div>
                    <Avatar src="https://i.pravatar.cc/300" />
                </div>
            </div>
        </nav>
    )
}

export default Navbar2
