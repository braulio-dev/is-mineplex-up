import './App.css';
import { useEffect, useState } from 'react';
import Module from './module';
import ServerCard from './serverCard';

function App() {
  const [data, setData] = useState<any | null>(null);

  useEffect(() => {
    fetch('https://api.mcsrvstat.us/2/mineplex.com')
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
    <main className="min-h-screen flex items-center justify-around backdrop-blur-xl flex-wrap-reverse align-middle">
      <a href="https://discord.gg/mineplex">
        <Module imageSrc="./flame_white.svg" title="Latest Updates" description="Join the official Mineplex Discord server to get updates on the status of the server."/>
      </a>

      <div className="space-y-5 m-10">
        <div className="relative flex justify-center items-center">
            <img
                src="/header.png"
                alt=""
                width={600}
                height={120}
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
    </main>
  );
}

export default App;
