export default function Section({ id, title, children }) {
  return (
    <section id={id} className="section px-10">
      <div className="text-center">
        {title && (
          <>
            <h2
              className="text-3xl md:text-4xl font-bold
                   bg-gradient-to-r from-pink-800 via-gray-700 to-pink-400 
                   bg-clip-text text-transparent tracking-tight inline-block"
            >
              {title}
            </h2>
            <div className="mt-2 h-1 w-16 bg-pink-500 mx-auto rounded"></div>
          </>
        )}
        <div className={title ? "mt-10 text-left" : "text-left"}>
          {children}
        </div>
      </div>
    </section>
  );
}
