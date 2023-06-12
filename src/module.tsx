function Module(props: { imageSrc?: string, title: string, description: string}) {
    return (
        <div className="p-5 rounded-xl transition ease-in-out delay-100 scale-125 hover:scale-[1.4] hover:shadow-2xl text-white">
            <div className="flex mb-[16px]">
                {
                    props.imageSrc == undefined ? null :
                        <img
                            className="mr-2.5"
                            src={props.imageSrc}
                            alt=""
                            width={30}
                            height={30}
                        />
                }
                <h2 className={`text-2xl font-semibold`}>
                    {props.title}
                    <span className="pl-1 inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                        -&gt;
                    </span>
                </h2>
            </div>

            <p className={`m-0 max-w-[30ch] text-sm opacity-80 text-justify`}>
                {props.description}
            </p>
        </div>
    )
}

export default Module;