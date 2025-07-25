import React from "react"
import "./index.css"
import Home from "./Portfolio/Home Page/Home"
import About from "./Portfolio/About Page/About"
import Contact from "./Portfolio/Contact Page/Contact"
import Skills from "./Portfolio/Skill Page/Skills"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./Layout"
import Projects from "./Portfolio/Resume Page/Projects"

const App = () => {
    const routing = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    path: "/",
                    element: <Home />
                },
                {
                    path: "/home",
                    element: <Home />
                },
                {
                    path: "/about",
                    element: <About />
                },
                {
                    path: "/contact",
                    element: <Contact />
                },
                {
                    path: "/skills",
                    element: <Skills />
                },
                {
                    path:"/projects",
                    element: <Projects/>
                }
            ]
        }
    ])
    return <RouterProvider router={routing}/>
}

export default App