import React from 'react'
import ReactDOM from 'react-dom/client'
import { Cartwidget } from './props/cartwidget'
import { Greetings } from './props/itemlistcontainer'
import { Navbar } from './props/navbar'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <body>
        <Navbar/>
        <main>
            <Cartwidget/>
            <Greetings/>
        </main>
    </body>
)
