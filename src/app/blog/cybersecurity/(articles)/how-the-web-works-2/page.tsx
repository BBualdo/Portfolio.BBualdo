import { BiLeftArrow } from "react-icons/bi";
import Image from "next/image";
import { cybersecurityArticles } from "@/constants/cybersecurityArticles";

export default function Page() {
  const currentArticle = cybersecurityArticles.find(art => art.day === 5)!;

  return (
    <>
      <header className="relative h-[200px] w-full flex items-center justify-center">
        <Image
          alt={currentArticle.imageAlt}
          src={currentArticle.imageUrl}
          fill
          className="filter-matrix opacity-20 object-cover xl:object-[0_-360px]"
        />
        <h1 className="absolute text-lightMatrixGreen text-center">{currentArticle.title}</h1>
      </header>
      <main className="py-4 px-4 xl:px-40 text-xl md:text-2xl">
        <div className="inline-block">
          <a
            href="."
            className="flex items-center gap-2 hover:text-matrixGreen hover:font-bold border-2 px-2 py-1 hover:border-matrixGreen"
          >
            <BiLeftArrow />
            <span className="text-xl">Back</span>
          </a>
        </div>
        <div className="flex flex-col gap-10 py-6 lg:py-16">
          <h2 className="font-bold text-lightMatrixGreen">Day 5</h2>
          <h3 className="font-bold text-lightMatrixGreen">HTTP and HTTPS</h3>
          <p>
            HTTP (HyperText Transfer Protocol) is the protocol that enables communication between a user’s browser and a
            server.
            Think of it as a waiter in a restaurant: the user places an order (request), and the server responds by
            delivering the dish (response).
            HTTPS is the secure version of this protocol, using encryption (SSL/TLS) to protect data from eavesdropping.
          </p>

          <h3 className="font-bold text-lightMatrixGreen">Request and Response</h3>
          <p>HTTP communication revolves around two key components:</p>
          <ul className="list-disc ml-6">
            <li>
              <strong>Request:</strong> When you type a website’s address in your browser, you send a request to the
              server.
              A request contains a method, a URL, headers, and optionally, data (e.g., form inputs).
            </li>
            <li>
              <strong>Response:</strong> The server processes the request and sends back a response, which includes a
              status code, headers, and the content (e.g., HTML of the webpage).
            </li>
          </ul>

          <h3 className="font-bold text-lightMatrixGreen">HTTP Methods</h3>
          <p>HTTP methods define the action to be performed on a resource:</p>
          <ul className="list-disc ml-6">
            <li><strong>GET:</strong> Retrieve data (e.g., a webpage).</li>
            <li><strong>POST:</strong> Send data to the server (e.g., form submissions).</li>
            <li><strong>PUT:</strong> Update data on the server.</li>
            <li><strong>DELETE:</strong> Remove data from the server.</li>
            <li><strong>HEAD:</strong> Retrieve only the headers of a response.</li>
            <li><strong>OPTIONS:</strong> Check which methods are supported by the server.</li>
          </ul>

          <h3 className="font-bold text-lightMatrixGreen">Status Codes</h3>
          <p>Each server response includes a status code:</p>
          <ul className="list-disc ml-6">
            <li><strong>1xx:</strong> Informational (e.g., `101 Switching Protocols`).</li>
            <li><strong>2xx:</strong> Success (e.g., `200 OK`, `201 Created`).</li>
            <li><strong>3xx:</strong> Redirection (e.g., `301 Moved Permanently`, `302 Found`).</li>
            <li><strong>4xx:</strong> Client errors (e.g., `404 Not Found`, `401 Unauthorized`).</li>
            <li><strong>5xx:</strong> Server errors (e.g., `500 Internal Server Error`, `503 Service Unavailable`).</li>
          </ul>

          <h3 className="font-bold text-lightMatrixGreen">Headers and Cookies</h3>
          <p>
            <strong>Headers:</strong> Carry additional information in requests and responses, such as:
          </p>
          <ul className="list-disc ml-6">
            <li><strong>Content-Type:</strong> Specifies the type of data (e.g., `text/html`).</li>
            <li><strong>Authorization:</strong> Contains login credentials.</li>
            <li><strong>Cache-Control:</strong> Provides caching instructions.</li>
          </ul>
          <p>
            <strong>Cookies:</strong> Small files stored on the user’s device that help servers remember data, such as
            login sessions or preferences.
          </p>

          <h3 className="font-bold text-lightMatrixGreen">HTML, CSS, and JavaScript</h3>
          <ul className="list-disc ml-6">
            <li><strong>HTML:</strong> Provides the structure of a webpage (e.g., headings, paragraphs, images).</li>
            <li><strong>CSS:</strong> Styles the webpage (e.g., colors, fonts, layouts).</li>
            <li><strong>JavaScript:</strong> Adds interactivity (e.g., animations, form validation).</li>
          </ul>

          <h3 className="font-bold text-lightMatrixGreen">Security Threats</h3>
          <p>
            <strong>Sensitive Data Exposure:</strong> Occurs when sensitive information (e.g., passwords) is not
            properly encrypted or secured.
          </p>
          <p>
            <strong>HTML Injection:</strong> An attack where malicious HTML code is injected into a webpage, potentially
            altering its behavior or stealing user data.
          </p>

          <h3 className="font-bold text-lightMatrixGreen">Web Infrastructure</h3>
          <ul className="list-disc ml-6">
            <li><strong>Load Balancer:</strong> Distributes traffic across multiple servers to prevent overload.</li>
            <li><strong>CDN:</strong> Speeds up content delivery by serving data from the nearest server.</li>
            <li><strong>Database:</strong> Stores dynamic data (e.g., user accounts, blog posts).</li>
            <li><strong>WAF:</strong> Protects web applications from attacks like SQL Injection or XSS.</li>
            <li><strong>Web Server:</strong> Software that handles HTTP requests (e.g., Apache, Nginx).</li>
            <li><strong>Virtual Hosts:</strong> Enable hosting multiple websites on one physical server.</li>
            <li><strong>Static vs Dynamic Content:</strong>
              <ul className="list-disc ml-6">
                <li><strong>Static:</strong> Fixed content (e.g., HTML files).</li>
                <li><strong>Dynamic:</strong> Generated in real-time (e.g., personalized pages).</li>
              </ul>
            </li>
            <li><strong>Scripting and Backend Languages:</strong> JavaScript (frontend), PHP, Python, Node.js (backend).
            </li>
          </ul>
        </div>
      </main>
    </>
  );
}
