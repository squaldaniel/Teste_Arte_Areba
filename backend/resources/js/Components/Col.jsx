export default function Col ({conteudo, colclass}){
    let classmonted = 'col'+ colclass;
return (
    <>
    <div className={classmonted}>
        {conteudo}
    </div>
    </>
)}

