
interface Props {
    name:string,
    desription?:string,
    image:string    
}


const ClassesDescription = ({
    name,
    desription,
    image,

}: Props) => {
    const stylesOverlay=`p-5 absolute z-30 flex 
    h-[380px] w-[450px] flex-col items-center justify-center
    whitespace-normal bg-primary-500 text-center text-white
    opacity-0 transition duration-500 hover:opacity-85
    `

    return (
        <div className="relative mx-5 inline-block h-[380px] w-[450px]">
            <li>
                <div className={stylesOverlay}>
                    <p className="text-2xl">{name}</p>
                    <p className="mt-5">{desription}</p>
                </div>
                <img alt={`${image}`}
                src={image}
                ></img>
            </li>
            
        </div>
    )
}

export default ClassesDescription