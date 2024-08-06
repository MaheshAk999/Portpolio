  import PORTPOLIO from './STYLES/PORTPOLIO.css'
   import ReactDOM from 'react-dom/client'
   import { Route,Routes,BrowserRouter } from 'react-router-dom'
   import { lazy,Suspense } from 'react'
   import 'bootstrap/dist/css/bootstrap.min.css';
   import 'bootstrap/dist/js/bootstrap.bundle'
   const Home=lazy(()=>import('./PORTPOLIO COMPONENTS/Home'))
   function PORTPOLIO1() {
     return (
       <Suspense fallback={
         <div className='spinner-border' style={{display:'flex',justifyContent:'center',alignItems:'center',margin:'50vh auto 0',}}>
         </div>
       }> 
       <Routes> 
       <Route path="/" element={<Home />}/>
       </Routes> 
       </Suspense>
     )
   }
   const root=ReactDOM.createRoot(document.getElementById('root'))
   root.render(<BrowserRouter><PORTPOLIO1 /></BrowserRouter>)
