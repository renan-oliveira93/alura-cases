import react from "react";
import Link from "../src/components/Link";


function Title ({ children, as }){
       const Tag = as;
       return(
           <react.Fragment>
               <Tag>
                   { children }
               </Tag>
               <style jsx>{`
                   &{Tag} {
                       color:red
                   }
               `}</style>
           </react.Fragment>
       )
}


export default function HomePage() {
    return(
        <div>
            <h1>Alura Cases - Home</h1>
            <Link href="faq">
            <a >ir para o faq</a>
            </Link>
            
        </div>
    )
}