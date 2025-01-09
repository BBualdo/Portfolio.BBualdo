import { BiLeftArrow } from "react-icons/bi";
import Image from "next/image";
import { cybersecurityArticles } from "@/constants/cybersecurityArticles";

export default function Page() {
  const currentArticle = cybersecurityArticles.find(art => art.day === 6)!;

  return (
    <>
      <header className="relative h-[200px] w-full flex items-center justify-center">
        <Image alt={currentArticle.imageAlt} src={currentArticle.imageUrl} fill className="filter-matrix opacity-20 object-cover xl:object-[0_-360px]" />
        <h1 className="absolute text-lightMatrixGreen text-center">{currentArticle.title}</h1>
      </header>
      <main className="py-4 px-4 xl:px-40 text-xl md:text-2xl">
        <div className="inline-block">
          <a href="." className="flex items-center gap-2 hover:text-matrixGreen hover:font-bold border-2 px-2 py-1 hover:border-matrixGreen">
            <BiLeftArrow />
            <span className="text-xl">Back</span>
          </a>
        </div>
        <div className="flex flex-col gap-10 py-6 lg:py-16">
          <h2 className="font-bold text-lightMatrixGreen">Day 6</h2>
          <p>
            The moment has finally arrived. During my 1.5-year journey with programming, I often encountered terms like Apache, Ubuntu, and the general statement that knowledge of Linux is crucial for software developers (especially in backend development). Yet, I never felt the need to delve into the intricacies of this system—until now. It&apos;s time to fulfill my destiny!
          </p>

          <h3 className="font-bold text-lightMatrixGreen">Linux Fundamentals - Part I</h3>
          <p>
            Linux is a group of open-source operating systems known for their lightweight nature and reliability. Surprisingly, we encounter Linux more often than we think:
          </p>
          <ul className="list-disc ml-6">
            <li>Websites—many servers hosting them run on Linux.</li>
            <li>Car control panels.</li>
            <li>Traffic light systems.</li>
            <li>Cash registers and self-service kiosks in stores.</li>
          </ul>
          <p>
            However, this lightweight nature comes with a drawback—navigating files and performing operations often requires typing commands in the command line (Terminal).
          </p>

          <h4 className="font-bold text-lightMatrixGreen">Commands Used in Part I:</h4>
          <ul className="list-disc ml-6">
            <li><code>echo</code> — Displays text entered after the command.</li>
            <li><code>whoami</code> — Shows the currently logged-in user.</li>
            <li><code>ls</code> — Lists folders and files in the current directory.</li>
            <li><code>cd</code> — Allows navigation between directories.</li>
            <li><code>cat</code> — Reads file contents.</li>
            <li><code>pwd</code> — Displays the full path of the current directory.</li>
            <li><code>find</code> — Finds a file you&apos;re looking for.</li>
            <li><code>grep</code> — Searches for specific values in a file.</li>
          </ul>

          <h4 className="font-bold text-lightMatrixGreen">Shell Operators:</h4>
          <ul className="list-disc ml-6">
            <li><code>&</code> — Tells the terminal, &quot;Hey, this task might take some time. Run it in the background while I handle other tasks.&quot;</li>
            <li><code>&&</code> — Executes multiple commands sequentially, e.g., <code>command1 && command2</code>. Note that <code>command2</code> will not run if <code>command1</code> fails.</li>
            <li><code>&gt;</code> — An output redirector. Sends command results elsewhere, e.g., <code>echo hey &gt; welcome</code> creates a file &quot;welcome&quot; with the content &quot;hey&quot; (overwrites if the file exists).</li>
            <li><code>&gt;&gt;</code> — Similar to <code>&gt;</code>, but appends the result to the file instead of overwriting it.</li>
          </ul>

          <h3 className="font-bold text-lightMatrixGreen">Linux Fundamentals - Part II</h3>
          <p>
            <span className="font-bold">SSH (Secure Shell)</span> is a protocol that encrypts data exchanged between devices over the internet, allowing remote command execution on another device.
          </p>
          <p>
            To log into a remote device, use the command:
          </p>
          <pre className="bg-gray-900 text-white p-4 rounded-md">ssh [LOGIN]@[IP_ADDRESS]</pre>
          <p>
            After entering the password, you can execute commands on the remote device instead of your own.
          </p>

          <h3 className="font-bold text-lightMatrixGreen">Flags and Switches</h3>
          <p>
            Every command can be modified with arguments to change its behavior. For example,
            the <code>ls</code> command (list) doesn&apos;t show hidden files or folders by default. Adding
            the <code>-a</code> flag (e.g., <code>ls -a</code>) reveals them, marked with a dot at the beginning
            (e.g., <code>.folder</code>). You can view all flags for a command using the <code>man</code> (manual)
            command: <code>man [command]</code>.
          </p>
          <p>
            In the second part of Linux fundamentals, I used the following commands:
          </p>
          <ul className="list-disc ml-6">
            <li><code>touch (name)</code> — Creates a new file with the specified name.</li>
            <li><code>mkdir (name)</code> — Creates a new folder with the specified name.</li>
            <li><code>cp (name1) (name2)</code> — Copies the element specified in the first argument (and its contents)
              to the location specified in the second argument.
            </li>
            <li>
              <code>mv (name1) (name2)</code> — Moves the element instead of copying it. Renaming a file can be done by
              specifying the same location but a different name.
            </li>
            <li>
              <code>rm (name)</code> — Deletes the specified file. To delete a folder, add the <code>-R</code> switch.
            </li>
            <li><code>file (name)</code> — Displays the type/extension of the specified file.</li>
          </ul>
          <p>
            Each file contains information about its owner and permissions (read, write, execute). To check this, use
            the <code>ls -l</code> command in the directory.
          </p>
          <Image
            alt="Linux terminal file details"
            src="/cybersecurity-articles-images/articles-assets/linux-ls-l.png"
            width={800}
            height={400}
            className="mx-auto"
          />
          <ul className="list-disc ml-6">
            <li>
              <code>-rw-rw-r--</code> indicates permissions for the owner (<code>rw-</code>), group (<code>rw-</code>),
              and others (<code>r--</code>).
            </li>
            <li>Number of hard links—ways to access the file (e.g., a folder starts with 2 links but increases with
              subfolders).
            </li>
            <li>Owner name.</li>
            <li>Group name.</li>
            <li>File size in bytes.</li>
            <li>Last modification date (month, day, time/year).</li>
            <li>File name.</li>
          </ul>
          <h3 className="font-bold text-lightMatrixGreen">Important Directories</h3>
          <ul className="list-disc ml-6">
            <li>
            <span className="font-bold">/etc</span> — Contains system and application configuration files.
              <ul className="list-disc ml-6">
                <li><code>/etc/passwd</code> — User information.</li>
                <li><code>/etc/fstab</code> — File system configuration.</li>
                <li><code>/etc/ssh/sshd_config</code> — SSH server configuration.</li>
              </ul>
            </li>
            <li>
              <span className="font-bold">/var</span> — Stores variable data that changes during system operation.
              <ul className="list-disc ml-6">
                <li><code>/var/log</code> — System and application logs.</li>
                <li><code>/var/spool</code> — Task queues (e.g., printing, mail).</li>
                <li><code>/var/cache</code> — Application caches.</li>
              </ul>
            </li>
            <li>
              <span className="font-bold">/root</span> — Home directory for the root user (administrator).
            </li>
            <li>
              <span className="font-bold">/tmp</span> — Temporary files created by applications and the system.
            </li>
          </ul>
        </div>
      </main>
    </>
  );
}
