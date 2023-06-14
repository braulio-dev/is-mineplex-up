function Module(props: { imageSrc?: string, title: string, description: string}) {
    return (
        <div className="group bg-white opacity-80 hover:opacity-100 p-7 rounded-3xl transition ease-in-out delay-100 hover:shadow-2xl">
            <div className="flex mb-[20px] align-middle">
                {
                    props.imageSrc == undefined ? null :
                        <img
                            className="mr-2.5"
                            src={props.imageSrc}
                            alt=""
                            width={60}
                            height={60}
                        />
                }
                <h2 className={`text-6xl font-semibold`}>
                    {props.title}
                </h2>
            </div>

            <p className={`m-0 max-w-[30ch] text-4xl opacity-80 text-justify`}>
                {props.description}
            </p>
        </div>
    )
}

export default Module;