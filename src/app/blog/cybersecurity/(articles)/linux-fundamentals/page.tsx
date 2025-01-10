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
            My 1.5-year journey into programming has often brought me across terms like Apache, Ubuntu, and the general
            idea that Linux is essential for software developers, especially in backend development. However, I never
            felt the need to explore it deeply — until now. It&apos;s time to fulfill my destiny!
          </p>
          <h2 className="font-bold text-lightMatrixGreen">Linux Fundamentals - Part I</h2>
          <p>
            Linux is a group of open-source operating systems renowned for their lightweight and reliable nature.
            Surprisingly, Linux is more prevalent in our lives than we might think:
          </p>
          <ul className="list-disc list-inside">
            <li>Websites: Many servers run on Linux.</li>
            <li>Car control panels.</li>
            <li>Traffic light systems.</li>
            <li>Point-of-sale and self-checkout systems in stores.</li>
          </ul>
          <p>
            However, this lightweight design comes with a trade-off: navigating files and performing operations requires
            using the command line (Terminal).
          </p>
          <h3 className="font-bold text-lightMatrixGreen">Basic Commands</h3>
          <p>Here are some essential commands I used during my Linux journey:</p>
          <ul className="list-disc list-inside">
            <li><code>echo</code>: Displays text in the console.</li>
            <li><code>whoami</code>: Shows the currently logged-in user.</li>
            <li><code>ls</code>: Lists folders and files in the current location.</li>
            <li><code>cd</code>: Navigates between directories.</li>
            <li><code>cat</code>: Reads files.</li>
            <li><code>pwd</code>: Displays the full path of the current location.</li>
            <li><code>find</code>: Locates files.</li>
            <li><code>grep</code>: Finds specific values in a file.</li>
          </ul>
          <h3 className="font-bold text-lightMatrixGreen">Shell Operators</h3>
          <ul className="list-disc list-inside">
            <li>
              <code>&</code>: Runs a task in the background, allowing you to continue working.
            </li>
            <li>
              <code>&&</code>: Chains commands, executing the second only if the first succeeds.
            </li>
            <li>
              <code>&gt;</code>: Redirects command output to a file (overwrites if it exists).
            </li>
            <li>
              <code>&gt;&gt;</code>: Redirects command output to a file (appends if it exists).
            </li>
          </ul>
          <h2 className="font-bold text-lightMatrixGreen">Linux Fundamentals - Part II</h2>
          <h3 className="font-bold text-lightMatrixGreen">SSH (Secure Shell)</h3>
          <p>
            SSH is a protocol that encrypts data exchanged between devices over the internet. It allows you to execute
            commands remotely on another device. To log in to a remote device, use:
          </p>
          <pre className="bg-gray-800 text-white p-4 rounded-md overflow-auto">
            <code>ssh [LOGIN]@[IP_ADDRESS]</code>
          </pre>
          <p>
            After entering the password, you can run commands that will execute on the remote device instead of your
            local one.
          </p>
          <h3 className="font-bold text-lightMatrixGreen">Flags and Switches</h3>
          <p>
            You can modify command behavior by adding arguments. For example, the <code>ls</code> command doesn’t show
            hidden files by default, but <code>ls -a</code> reveals them. Use <code>man [command]</code> to see all
            available flags.
          </p>
          <h3 className="font-bold text-lightMatrixGreen">Additional Commands</h3>
          <ul className="list-disc list-inside">
            <li><code>touch (name)</code>: Creates a new file.</li>
            <li><code>mkdir (name)</code>: Creates a new folder.</li>
            <li><code>cp (name1) (name2)</code>: Copies a file or folder.</li>
            <li><code>mv (name1) (name2)</code>: Moves or renames a file or folder.</li>
            <li><code>rm (name)</code>: Deletes a file. Use <code>-R</code> for folders.</li>
            <li><code>file (name)</code>: Displays file type/extension.</li>
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
          <p>
            <strong>File permissions:</strong> Permissions are shown as <code>-rw-rw-r--</code>, where:
          </p>
          <ul className="list-disc list-inside">
            <li>Owner: <code>rw-</code> (read, write).</li>
            <li>Group: <code>rw-</code> (read, write).</li>
            <li>Others: <code>r--</code> (read-only).</li>
          </ul>
          <h2 className="font-bold text-lightMatrixGreen">Linux Fundamentals - Part III</h2>
          <h3 className="font-bold text-lightMatrixGreen">Text Editors</h3>
          <p>
            Using <code>echo text &gt; file1</code> isn’t efficient for writing text. Better alternatives include:
          </p>
          <ul className="list-disc list-inside">
            <li>
              <strong>Nano:</strong> A simple text editor built into the terminal. Use <code>nano (file)</code> to open
              it.
            </li>
            <Image
              alt="Nano text editor"
              src="/cybersecurity-articles-images/articles-assets/linux-nano.png"
              width={800}
              height={400}
              className="mx-auto my-6"
            />
            <li>
              <strong>VIM:</strong> An advanced editor, enhanced from VI, offering extensive functionality beyond text
              editing.
            </li>
          </ul>
          <h3 className="font-bold text-lightMatrixGreen">Additional Commands</h3>
          <ul className="list-disc list-inside">
            <li><code>wget (url)</code>: Downloads a file.</li>
            <li>
              <code>scp</code>: Copies files/folders between local and remote devices via SSH.
            </li>
            <li>
              <code>python3 -m http.server</code>: Starts a simple web server on port 8000.
            </li>
            <li>
              <code>ps</code>: Displays processes with details like PID. Add <code>aux</code> to show all processes.
            </li>
            <li>
              <code>top</code>: Similar to <code>ps</code>, but updates in real time.
            </li>
            <li>
              <code>kill</code>: Terminates a process. Signals include:
              <ul className="list-disc list-inside ml-6">
                <li><code>SIGTERM</code>: Gracefully stops a process.</li>
                <li><code>SIGKILL</code>: Forcefully stops a process.</li>
                <li><code>SIGSTOP</code>: Pauses a process.</li>
              </ul>
            </li>
            <li>
              <code>fg</code>: Brings a background process to the foreground.
            </li>
          </ul>
          <h3 className="font-bold text-lightMatrixGreen">System Processes</h3>
          <p>
            Processes in Linux are often managed by <code>systemd</code>, which handles system initialization and
            service management. Processes can run in the foreground or background, enabling multitasking.
          </p>
          <h3 className="font-bold text-lightMatrixGreen">Automation with Cron</h3>
          <p>
            Automate tasks using cron jobs and the <code>crontab</code> command. Cron schedules tasks to run at specific
            times or intervals, making repetitive tasks easier to manage.
          </p>
          <h3 className="font-bold text-lightMatrixGreen">Package Management</h3>
          <p>
            Use <code>apt</code> to add or remove repositories, similar to <code>npm</code> or <code>NuGet</code>.
            Repositories contain software packages for installation and updates.
          </p>
          <p>
            When adding repositories, GPG keys ensure security. Imagine a box with two locks:
          </p>
          <ul className="list-disc list-inside">
            <li>
              The public key can only open the box (verify authenticity).
            </li>
            <li>
              The private key can only lock the box (sign the package).
            </li>
          </ul>
          <h3 className="font-bold text-lightMatrixGreen">Log Files</h3>
          <p>
            Logs in <code>/var/log</code> are crucial for troubleshooting. Pay special attention to access and error
            logs for insights into system and application behavior.
          </p>
        </div>
      </main>
    </>
  );
}
