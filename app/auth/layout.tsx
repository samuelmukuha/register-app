

const Authlayout = ({children}: {children: React.ReactNode}) => {
  return (
    <section className="w-full">
        <div className="h-screen flex flex-col justify-center items-center">
            {children}
        </div>
    </section>
  )
}

export default Authlayout
