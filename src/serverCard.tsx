function ServerCard(props: { hostName: string, online: boolean, motd?: string[], icon?: string, onlinePlayers?: number, maxPlayers?: number }) {
    const serverDescription: string[] = props.motd ? props.motd : ['Can\'t connect to server.'];
    const serverIcon: string = props.icon ? props.icon : "/minecraft-no_logo.jpeg";
    return (
        <div className="relative rounded-lg bg-server-card font-minecraft tracking-wider p-2">
            <img
                className="inline"
                src={serverIcon}
                height={100}
                width={100}
            />

            <div className="inline-block align-top text-red-800 text-2xl m-4 mt-6">
            {
                serverDescription.map((line) => (
                    <p dangerouslySetInnerHTML={{__html: line}}></p>
                ))
            }
            </div>

            <div className="absolute inline-block justify-end align-top text-xl mr-1 right-4">
                <p className="inline text-gray-400">{props.online ? props.onlinePlayers : 0}</p>
                <p className="inline text-gray-500">/</p>
                <p className="inline text-gray-400">{props.online ? props.maxPlayers : 0}</p>
                <img
                    className="inline ml-2 align-middle scale-[1.8]"
                    src={props.online ? "/ping.png" : "/no_ping.png"}
                />
            </div>
        </div>
    )
}

export default ServerCard;