import { BiLeftArrow } from "react-icons/bi";
import Image from "next/image";
import { cybersecurityArticles } from "@/constants/cybersecurityArticles";
import { FaKey } from "react-icons/fa";

export default function Page() {
  const currentArticle = cybersecurityArticles.find(art => art.day === 2)!;

  return (
    <>
      <header className="relative h-[200px] w-full flex items-center justify-center">
        <Image alt={currentArticle.imageAlt} src={currentArticle.imageUrl} fill className="filter-matrix opacity-20 object-cover xl:object-[0_-360px]" />
        <h1 className="absolute text-lightMatrixGreen text-center">{currentArticle.title}</h1>
      </header>
      <main className="py-4 px-4 xl:px-40 text-xl md:text-2xl">
        <div className="inline-block">
          <a href="."
             className="flex items-center gap-2 hover:text-matrixGreen hover:font-bold border-2 px-2 py-1 hover:border-matrixGreen">
            <BiLeftArrow />
            <span className="text-xl">Back</span>
          </a>
        </div>
        <div className="flex flex-col gap-10 py-6 lg:py-16">
          <h2 className="font-bold text-lightMatrixGreen">Day 2</h2>
          <p>Every day, we deal with networks — whether it&apos;s in the context of public transportation, electricity,
            human interactions, or mail. <span
              className="font-bold text-lightMatrixGreen">&quot;Everything is connected&quot;</span>, as my favorite
            artists Opał and Gibbs say in their album&apos;s tagline. 😁</p>
          <p>In computer science, a network is defined as at least two devices connected to each other, enabling them to
            exchange information.</p>
          <p>The internet, on the other hand, is a <span
            className="font-bold text-lightMatrixGreen">network of networks</span>, a global infrastructure connecting
            countless local and global networks. These networks can be divided into:</p>
          <ul className="list-disc ml-6">
            <li><span className="font-bold text-lightMatrixGreen">Public networks</span> — accessible to everyone (e.g.,
              email servers, Discord, YouTube, Messenger).
            </li>
            <li><span className="font-bold text-lightMatrixGreen">Private networks</span> — restricted to a specific
              group of users, like <span className="font-bold text-lightMatrixGreen">LAN (Local Area Network)</span>.
            </li>
          </ul>
          <p>Each device in a network has its unique identifier:</p>
          <ul className="list-disc ml-6">
            <li><span className="font-bold text-lightMatrixGreen">IP Address (Internet Protocol)</span> — A numerical
              identifier assigned to a device in a network. It allows data to be transferred between devices and acts as
              a &quot;home address&quot; in the digital world. IP addresses can be dynamic (temporary) or static
              (permanent).
            </li>
            <li><span className="font-bold text-lightMatrixGreen">MAC Address (Media Access Control)</span> — A
              permanent, unique number assigned to a device&apos;s network card. It functions on a local level,
              facilitating communication within the same network. Think of it as the
              device&apos;s &quot;fingerprint&quot;.
            </li>
          </ul>
          <p>While MAC addresses can be used to manage network access, it&apos;s important to note that they can be
            spoofed. <span className="font-bold text-red-400">Spoofing</span> a MAC address can lead to unauthorized
            access or interception of data intended for another device.</p>
          <p>Devices within the same network identify each other using MAC addresses. This is achieved through the <span
            className="font-bold text-lightMatrixGreen">Address Resolution Protocol (ARP)</span>, which maps IP
            addresses to corresponding MAC addresses within a local network (LAN). Here&apos;s how it works:</p>
          <ol className="list-decimal ml-6">
            <li>Device A, wanting to communicate with Device B (IP XYZ), sends a broadcast: <span
              className="font-bold text-lightMatrixGreen">&quot;Who has IP XYZ?&quot;</span>.
            </li>
            <li><span className="font-bold text-lightMatrixGreen">All devices</span> in the network receive this
              message.
            </li>
            <li>Device B, which has IP XYZ, responds with a unicast message to Device A: <span
              className="font-bold text-lightMatrixGreen">&quot;I have IP XYZ. Here is my MAC address.&quot;</span>.
            </li>
            <li>Device A saves Device B&apos;s MAC address in its <span className="font-bold text-lightMatrixGreen">ARP cache</span>.
            </li>
          </ol>
          <p>In the future, when Device A needs to communicate with Device B again, it can use the cached information,
            bypassing the need for another ARP query. This streamlines communication and reduces latency.</p>
        </div>
        <div>
          <h3 className="text-lightMatrixGreen font-bold"><FaKey className="inline-block" /> Key words</h3>
          <ul className="flex flex-col gap-6 my-6">
            <li><span className="font-bold text-lightMatrixGreen">IP Address</span> - A unique identifier for a device
              in a network, allowing it to send and receive data.
            </li>
            <li><span className="font-bold text-lightMatrixGreen">MAC Address</span> - A hardware identifier unique to a
              device&apos;s network card, used for communication within a local network.
            </li>
            <li><span className="font-bold text-lightMatrixGreen">ARP (Address Resolution Protocol)</span> - A protocol
              used to map IP addresses to MAC addresses within a local network.
            </li>
            <li><span className="font-bold text-lightMatrixGreen">DHCP (Dynamic Host Configuration Protocol)</span> - A
              protocol that automatically assigns IP addresses to devices in a network, simplifying network
              configuration.
            </li>
          </ul>
        </div>
      </main>
    </>
  )
}
