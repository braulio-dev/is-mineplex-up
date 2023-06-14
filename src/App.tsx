import './App.css';
import { useEffect, useState } from 'react';
import Module from './module';
import ServerCard from './serverCard';

function App() {
  const [data, setData] = useState<any | null>(null);

  useEffect(() => {
    fetch('https://api.mcsrvstat.us/2/hypixel.net')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.log(error));
  }, []);

  if (!data) return null;

  // Online status
  const online: boolean = data.online;
  const onlineColor: string = online ? 'text-green-600' : 'text-red-600';
  const onlineText: string = online ? 'Yes' : 'No';

  return (
    <main className="select-none min-h-screen items-center justify-evenly backdrop-blur-md flex flex-wrap align-middle">
      <div className="space-y-5 m-10 justify-center">
        <div className="items-center">
            <img
                src="/header.png"
                alt=""
                width={800}
                height={160}
            />
        </div>

        <ServerCard 
            hostName={`${data.hostname}`}
            online={online}
            motd={data.motd ? data.motd.html : null}
            icon={data.icon}
            onlinePlayers={data.players?.online}
            maxPlayers={data.players?.max}
        />
      </div>
      
      <div>
        <a className="m-7" href="https://discord.gg/mineplex">
          <Module imageSrc="./flame.svg" title="Latest Updates" description="Join the official Mineplex Discord server to get updates on the status of the server."/>
        </a>
        <a className="m-7" href="https://youtube.com/@MineplexGamesOfficial">
          <Module imageSrc="./video.svg" title="Mineplex YouTube" description="Take a look at the official Mineplex YouTube channel for the latest updates."/>
        </a>
      </div>

    </main>
  );
}

export default App;
