import React, {useState} from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Collections from '../components/Collections'

import { Gents ,Ladies} from '../data'
import WomenCollection from '../components/WomenCollection'


const Mainpage = () => {
            const[gentsFashion,setGentsFashion] = useState(Gents)
            const[ladiesFashion,setLadiesFashion]=useState(Ladies)
    console.log(Gents)
    console.log(Ladies)
    return (
        <div>
           <Header/>
           <Banner/>
           <Collections gentsFashion={gentsFashion}/>
           <WomenCollection  ladiesFashion={ladiesFashion}/>
           <Footer/>
        </div>
    )
}

export default Mainpage;


