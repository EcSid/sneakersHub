import Header from "./components/Header";



const App = () => {
  if (window.innerWidth < 767) {
    document.documentElement.style = {
        overflow-x: hidden;
        overflow-y: scroll;
        min-height: 2100px;
        max-height: 2100px
    }
  
    document.body.style = {
        overflow-x: hidden;
        overflow-y: scroll;
        min-height: 2100px;
        max-height: 2100px
    }   
  }

  }
  return (
    <>
       <Header /> 
    </>
  );
}

export default App
