import Form from "./components/Form"
import Header from "./components/Header"
import Results from "./components/Results"


const Core = () => {
  return (
    <div className="min-w-[320px] bg-gradient-to-l from-slate-300 to-sky-100 h-screen">
        <Header />
        <Form />
        <Results />
    </div>
  )
}

export default Core