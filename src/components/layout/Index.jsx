import React, { useState } from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import HeaderSticky from './HeaderSticky'

const Layout = () => {
    const [load, setLoad] = useState(false);
    const [care, setCare] = useState(false);
    const [check, setCheck] = useState(false);

    function handleAll(){
        if (load === true){
            setLoad(false)
        }
        else if (care === true){
            setCare(false)
        }
        else if (check === true){
            setCheck(false)
        }
    }
    return (
        <div onClick={handleAll}>
            <Header load={load} setLoad={setLoad} care={care} setCare={setCare} check={check} setCheck={setCheck}/>
            <HeaderSticky/>
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Layout