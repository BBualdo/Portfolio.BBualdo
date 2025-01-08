import { BiLeftArrow } from "react-icons/bi";
import Image from "next/image";
import { cybersecurityArticles } from "@/constants/cybersecurityArticles";
import { FaKey } from "react-icons/fa";

export default function Page() {
  const currentArticle = cybersecurityArticles.find(art => art.day === 4)!;

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
          <h2 className="font-bold text-lightMatrixGreen">Day 4</h2>
          <p>
            When we want to connect to a website, we simply type its name into the browser, like <span className="font-bold text-lightMatrixGreen">google.com</span>. Easy, right? But what if we had to type <span className="font-bold text-lightMatrixGreen">8.8.8.8</span> instead? That’s still manageable, but now imagine replacing all the websites we know with their IP addresses. Not so simple anymore, is it? This is where DNS (Domain Name System) comes to the rescue. Just like a postal address points to a specific house, a domain name points to a specific IP address of the website we want to connect to.
          </p>
          <p>DNS has its own hierarchy:</p>
          <Image alt="DNS Hierarchy" src="/cybersecurity-articles-images/articles-assets/dns-hierarchy.png" width={800} height={400} className="mx-auto" />
          <p>
            Starting from the rightmost part, we have the <span className="font-bold text-lightMatrixGreen">Top-Level Domain (TLD)</span>, such as <span className="font-bold text-lightMatrixGreen">.gov</span>, <span className="font-bold text-lightMatrixGreen">.com</span>, or <span className="font-bold text-lightMatrixGreen">.pl</span>. TLDs are further divided into two types:
          </p>
          <ul className="list-disc ml-6">
            <li><span className="font-bold text-lightMatrixGreen">gTLD (generic Top-Level Domain):</span> Meant to indicate the purpose of the site (e.g., <span className="font-bold text-lightMatrixGreen">.gov</span> for government, <span className="font-bold text-lightMatrixGreen">.com</span> for commercial, <span className="font-bold text-lightMatrixGreen">.edu</span> for education).</li>
            <li><span className="font-bold text-lightMatrixGreen">ccTLD (Country Code Top-Level Domain):</span> Indicates the region of the site (e.g., <span className="font-bold text-lightMatrixGreen">.pl</span> for Poland, <span className="font-bold text-lightMatrixGreen">.co.uk</span> for the United Kingdom).</li>
          </ul>
          <p>
            Next, we have the <span className="font-bold text-lightMatrixGreen">Second-Level Domain</span>, which is the unique name, like <span className="font-bold text-lightMatrixGreen">sebastianopozda</span>. Finally, there’s the <span className="font-bold text-lightMatrixGreen">Subdomain</span>, such as <span className="font-bold text-lightMatrixGreen">admin.sebastianopozda</span>. You can have as many subdomains as you want (e.g., <span className="font-bold text-lightMatrixGreen">x.y.z.abc.com</span>) as long as you stick to the maximum character limit (253) and use only allowed characters (letters, numbers, and hyphens).
          </p>
          <h3 className="font-bold text-lightMatrixGreen">What are DNS Records?</h3>
          <p>
            DNS records are like instructions that tell the DNS how to handle requests for a domain. Here are some common types:
          </p>
          <ul className="list-disc ml-6">
            <li><span className="font-bold text-lightMatrixGreen">A Record:</span> Maps a domain name to an IPv4 address.</li>
            <li><span className="font-bold text-lightMatrixGreen">AAAA Record:</span> Maps a domain name to an IPv6 address.</li>
            <li><span className="font-bold text-lightMatrixGreen">CNAME Record:</span> Points one domain to another domain (e.g., <span className="font-bold text-lightMatrixGreen">www.example.com</span> to <span className="font-bold text-lightMatrixGreen">example.com</span>).</li>
            <li><span className="font-bold text-lightMatrixGreen">MX Record:</span> Directs emails to the correct mail server for a domain.</li>
            <li><span className="font-bold text-lightMatrixGreen">TXT Record:</span> Stores text information for various purposes, like verifying domain ownership.</li>
          </ul>
          <h3 className="font-bold text-lightMatrixGreen">What Happens When You Make a DNS Request?</h3>
          <p>
            When you type a domain name into your browser, your computer first checks its local cache to see if it already knows the IP address. If not, it sends a request to a <span className="font-bold text-lightMatrixGreen">Recursive DNS Server</span> (usually provided by your ISP). If the server doesn’t have the answer, it forwards the request to the <span className="font-bold text-lightMatrixGreen">Root DNS Servers</span>.
          </p>
          <p>
            The root servers direct the request to the appropriate <span className="font-bold text-lightMatrixGreen">Top-Level Domain (TLD) Server</span>, which then refers it to the <span className="font-bold text-lightMatrixGreen">Authoritative DNS Server</span>. This final server holds the DNS records for the domain and sends the IP address back to your computer. The response is cached locally for faster future requests.
          </p>
          <Image alt="DNS Hierarchy" src="/cybersecurity-articles-images/articles-assets/dns-request.png" width={800} height={400} className="mx-auto" />
        </div>
        <div>
          <h3 className="text-lightMatrixGreen font-bold"><FaKey className="inline-block" /> Key words</h3>
          <ul className="flex flex-col gap-6 my-6">
            <li><span className="font-bold text-lightMatrixGreen">DNS</span> - A system that translates domain names into IP addresses.</li>
            <li><span className="font-bold text-lightMatrixGreen">A Record</span> - Maps a domain name to an IPv4 address.</li>
            <li><span className="font-bold text-lightMatrixGreen">CNAME Record</span> - Redirects one domain to another domain.</li>
            <li><span className="font-bold text-lightMatrixGreen">Recursive DNS Server</span> - A server that resolves domain names by querying other servers if necessary.</li>
            <li><span className="font-bold text-lightMatrixGreen">Authoritative DNS Server</span> - The server that holds the DNS records for a domain.</li>
          </ul>
        </div>
      </main>
    </>
  );
}