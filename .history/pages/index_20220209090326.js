import react from "react";
import Link from "../src/components/Link";
import Footer from "../src/components/patterns/Footer";
import react from "react";


function Title ({ children, as }){
       const Tag = as;
       return(
           <react.Fragment>
               <Tag>
                   { children }
               </Tag>
               <style jsx>{`
                   ${Tag} {
                       color:red
                   }
               `}</style>
           </react.Fragment>
       )
}


export default function HomePage() {
    return(
        <div>
            <Title>Alura Cases - Home</Title>
            <Link href="faq">
            ir para o faq
            </Link>
            <Footer/>
            
        </div>
    )
}