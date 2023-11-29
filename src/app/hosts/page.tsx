import { UserButton } from '@clerk/nextjs';

export default function Hosts() {
    return (
        <div>
            <p>Ceci est l'emplacement déstiné aux loueurs</p>
            <UserButton afterSignOutUrl="/"/>
        </div>
    )
}