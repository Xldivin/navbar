import Navbar from '@/components/Navbar';

interface HomeProps {
  versions1: string[];
  versions2: string[];
  versions3: string[];
  links: string[];
  resources: string[];
}

export default function Home({ versions1, versions2, versions3, links, resources }: HomeProps) {
  const versions1Array = ['1.5.1', '1.4.0', '1.3.0', '1.1.0', '1.0.0', '0.1.0'];
  const versions2Array = ["2.0.0", "1.0.0", "0.8.0"];
  const versions3Array  = ["2.0.0-pre0", "1.1.0", "1.0.0"];
  const linksArray  = [
    "Release Notes",
    "Docs Repo",
    "Release Notes",
    "Netcode for GameObjects Repo",
    "Multiplayer Community Contributions",
    "Boss Room Repo",
    "Bitesize Samples Repo",
    "Contribution Guide",
    "Markdown Template"
  ];
  const resourcesArray  = [
    "Product Roadmap",
    "Discord",
    "Unity Multiplayer Forum",
    "Netcode for GameObjects Forum",
    "Unity Transport Forum"
  ];
  return (
    <>
      <Navbar
        text1={"MultiPlayer Networking"}
        text2={"Netcode for GameObjects"}
        text3={"Transport"}
        text4={"Multiplayer Tools"}
        versions1={versions1Array }
        versions2={versions2Array }
        versions3={versions3Array }
        links={linksArray }
        resources={resourcesArray }
      />
    </>
  );
}
