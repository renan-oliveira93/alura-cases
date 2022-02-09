import Link from "../src/components/Link";
import Footer from "../src/components/patterns/Footer";



function Title ({ children, as }){
       const Tag = as;
       return(
           <React.Fragment>
               <Tag>
                   { children }
               </Tag>
               <style jsx>{`
                   ${Tag} {
                       color:red
                   }
               `}</style>
           </React.Fragment>
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