import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <div className="scroll-smooth bg-lightGray min-h-screen">
      <Component {...pageProps} />
    </div>
    
  )
}
