function Article ({title, id,  ...rest}: any) {
// state

//comportement

// Render
return (
    <div {...rest} className="mb-8">
        <h1 className="text-2xl mt-5">{id}. {title}</h1>
        <div className="mt-5">
            In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.
        </div>
        <button disabled className="mt-5 border-2 px-6 rounded-full">
          Ajouter +
        </button>
    </div>
)
}

export default Article;