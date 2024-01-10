
function Footer() {
  
    const date=new Date().getFullYear()
  return (
    <footer className="w-full text-xl p-4 justify-center text-center bg-white shadow flex items-center mt-20 fixed bottom-0">
       <p className='text-center'> Copyright Reserved @ Rajneesh © {date}</p>
    </footer>
  )
}

export default Footer
