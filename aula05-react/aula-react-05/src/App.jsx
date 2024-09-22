import './App.css'
import MainContent from './assets/components/MainContent'
import Header from './assets/components/Header'
import Footer from './assets/components/Footer'
import { ClickButton, InputField, KeyDownComponent, FocusBlurComponent, HoverComponent} from './assets/components/Events'
import './assets/components/style.scss'


function App() {
  

  return (
    <>
      <MainContent />
      <Header />
      <Footer />
      <ClickButton />
      <InputField />
      <KeyDownComponent />
      <FocusBlurComponent />
      <HoverComponent />
    </>
  )
}

export default App
