export default function Test({queryParam}) {
    let name = queryParam
    return (
        <>
            <h1 id="hello">Oh, Hello… {name}</h1>
            <style jsx>
                {`
                #hello {
                    color: hotpink;
                }
                `}
            </style>
        </>
    )
}

export function getServerSideProps({query}){ 
    // a way to create or set properties before component renders
    // since page is being constructed on backend, this is really useful

    //get query param from url
    let queryParam = query.name
    return {
        props: {
            queryParam // this structure must be this
        }
    }
}