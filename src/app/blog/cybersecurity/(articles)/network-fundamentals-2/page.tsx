import { BiLeftArrow } from "react-icons/bi";
import Image from "next/image";
import { cybersecurityArticles } from "@/constants/cybersecurityArticles";
import { FaKey } from "react-icons/fa";

export default function Page() {
  const currentArticle = cybersecurityArticles.find(art => art.day === 3)!;

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
          <h2 className="font-bold text-lightMatrixGreen">Day 3</h2>
          <p>To standardize the way devices exchange data in a network, the OSI (Open Systems Interconnection) Model was created. It defines how devices send, receive, and interpret data.</p>
          <p>The OSI Model consists of seven layers:</p>
          <ol className="list-decimal ml-6">
            <li><span className="font-bold text-lightMatrixGreen">Application Layer</span> — Handles user interaction with applications, like web browsers or email clients.</li>
            <li><span className="font-bold text-lightMatrixGreen">Presentation Layer</span> — Translates data formats, ensuring compatibility between different systems.</li>
            <li><span className="font-bold text-lightMatrixGreen">Session Layer</span> — Manages and maintains communication sessions between devices.</li>
            <li><span className="font-bold text-lightMatrixGreen">Transport Layer</span> — Ensures reliable data transfer through protocols like TCP.</li>
            <li><span className="font-bold text-lightMatrixGreen">Network Layer</span> — Handles routing and addressing, ensuring data reaches the correct destination.</li>
            <li><span className="font-bold text-lightMatrixGreen">Data Link Layer</span> — Manages communication within the same network, using MAC addresses.</li>
            <li><span className="font-bold text-lightMatrixGreen">Physical Layer</span> — Deals with the physical connection, like cables and signals.</li>
          </ol>
          <p>In networking, data is broken into packets, which are like envelopes containing smaller envelopes (frames). Each layer of the OSI Model adds its own &quot;envelope&quot; with specific instructions, ensuring the data is delivered correctly.</p>
          <p>The TCP/IP Model simplifies the OSI Model into four layers: Application, Transport, Internet, and Network Interface. It uses protocols like TCP (Transmission Control Protocol) and UDP (User Datagram Protocol). TCP ensures reliable data transfer with mechanisms like the Three-Way Handshake:</p>
          <ol className="list-decimal ml-6">
            <li>Device A sends a SYN request to Device B.</li>
            <li>Device B responds with a SYN-ACK.</li>
            <li>Device A replies with an ACK, establishing the connection.</li>
          </ol>
          <p>Devices communicate through ports, which act as &quot;doors&quot; for specific types of data. For example, HTTP uses port 80, and HTTPS uses port 443.</p>
          <p>Network forwarding ensures data moves efficiently through routers. Firewalls protect networks by filtering traffic, while VPNs (Virtual Private Networks) secure data by encrypting it. VLANs (Virtual Local Area Networks) organize devices within a network for better management and security.</p>
        </div>
        <div>
          <h3 className="text-lightMatrixGreen font-bold"><FaKey className="inline-block" /> Key words</h3>
          <ul className="flex flex-col gap-6 my-6">
            <li><span className="font-bold text-lightMatrixGreen">OSI Model</span> - A framework defining how devices communicate in a network, consisting of seven layers.</li>
            <li><span className="font-bold text-lightMatrixGreen">TCP/IP Model</span> - A simplified model for network communication, with four layers.</li>
            <li><span className="font-bold text-lightMatrixGreen">Three-Way Handshake</span> - A process to establish a reliable connection using TCP.</li>
            <li><span className="font-bold text-lightMatrixGreen">Firewall</span> - A network security device that filters traffic based on predefined rules.</li>
            <li><span className="font-bold text-lightMatrixGreen">VPN</span> - A secure connection that encrypts data over the internet.</li>
          </ul>
        </div>
      </main>
    </>
  );
}
