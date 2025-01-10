import { BiLeftArrow } from "react-icons/bi";
import Image from "next/image";
import { cybersecurityArticles } from "@/constants/cybersecurityArticles";

export default function Page() {
  const currentArticle = cybersecurityArticles.find(art => art.day === 7)!;

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
          <h2 className="font-bold text-lightMatrixGreen">Day 7</h2>
          <p>
            Raise your hand if you&apos;ve never used Windows... Alright, probably no one! Windows 95, 98, XP (😍), Vista
            (🤢), 7, 8, 10, 11... Everyone has used at least one version. Some still cling to the good old XP, and
            honestly, who can blame them? A reliable classic. Back in the day, all that mattered was running
            Counter-Strike 1.6 and a Mozilla icon copied from a USB stick. Anyway, now it&apos;s time to dive into the
            mysteries of this system—well, the newer versions, because they have more options 😁.
          </p>
          <h2 className="font-bold text-lightMatrixGreen">Windows Fundamentals - Part I</h2>
          <h3 className="font-bold text-lightMatrixGreen">File System</h3>
          <p>
            The file system is how an operating system organizes data on a disk. Windows supports several types of file
            systems, but the most important ones are:
          </p>
          <ul className="list-disc list-inside">
            <li>
              <strong>FAT (File Allocation Table):</strong> One of the earliest file systems introduced by Microsoft.
              Its simplicity allowed broad compatibility, but it had many limitations, like no support for files larger
              than 4 GB and lack of advanced security features.
            </li>
            <li>
              <strong>HPFS (High Performance File System):</strong> Introduced in OS/2, HPFS was more advanced than FAT,
              offering better performance and support for larger files. However, it was eventually replaced by NTFS.
            </li>
            <li>
              <strong>NTFS (New Technology File System):</strong> The current standard in Windows systems. It solves
              many of its predecessors&apos; limitations and offers features like:
              <ul className="list-disc list-inside ml-6">
                <li>Support for files larger than 4 GB.</li>
                <li>Detailed permissions for files and folders.</li>
                <li>File and folder compression.</li>
                <li>Encryption (Encryption File System, EFS).</li>
              </ul>
            </li>
            <li>
              <a className="link"
                 href="https://learn.microsoft.com/en-us/troubleshoot/windows-client/backup-and-storage/fat-hpfs-and-ntfs-file-systems">Read
                more about File Systems</a>
            </li>
          </ul>
          <h3 className="font-bold text-lightMatrixGreen">NTFS Permissions</h3>
          <p>
            NTFS allows precise management of file and folder permissions, enabling control over who can access data and
            what they can do with it (read, write, execute). These permissions are crucial in environments where data
            security is paramount.
          </p>
          <Image alt="List of Windows file/folder permissions"
                 src="/cybersecurity-articles-images/articles-assets/windows-ntfs-permissions.png" width={800}
                 height={400} className="mx-auto" />
          <h3 className="font-bold text-lightMatrixGreen">Alternate Data Streams (ADS)</h3>
          <p>
            NTFS introduces a feature called Alternate Data Streams (ADS), which allows storing additional data in files
            without changing their traditional size. ADS can be used for both good and malicious purposes (e.g., by
            malware). <br />
            <a className="link" href="https://www.malwarebytes.com/blog/101/2015/07/introduction-to-alternate-data-streams">Read more about ADS</a>
          </p>

          <h3 className="font-bold text-lightMatrixGreen">Environment Variables and the System32 Folder</h3>
          <p>
            Environment variables in Windows are dynamic values that store information about the system&apos;s
            environment. Examples include:
          </p>
          <ul className="list-disc list-inside">
            <li><strong>PATH:</strong> Specifies directories where the system looks for executable files.</li>
            <li><strong>TEMP:</strong> Location for temporary files.</li>
          </ul>
          <p>
            The System32 folder is the heart of Windows, containing critical system files like drivers, DLL libraries,
            and command-line tools. Deleting this folder can render the system inoperable. <br />
            <a className="link"
               href="https://www.howtogeek.com/346997/what-is-the-system32-directory-and-why-you-shouldnt-delete-it/">Read more
              about System32</a>
          </p>
          <h3 className="font-bold text-lightMatrixGreen">User and Group Management</h3>
          <p>
            Windows allows managing users and groups via the <code>lusrmgr.msc</code> (Local Users and Groups) tool. You
            can:
          </p>
          <ul className="list-disc list-inside">
            <li>Create new users.</li>
            <li>Assign users to groups (e.g., Administrators, Users).</li>
            <li>Set passwords and manage resource access.</li>
          </ul>
          <p>
            Administrators have higher privileges than regular users, enabling them to install programs, change system
            settings, and manage other accounts.
          </p>
          <h3 className="font-bold text-lightMatrixGreen">User Account Control (UAC)</h3>
          <p>
            UAC is a security mechanism that limits application actions on the system. It requires user confirmation for
            operations needing administrator privileges, protecting the system from accidental or malicious changes. <br />
            <a className="link" href="https://learn.microsoft.com/en-us/windows/security/application-security/application-control/user-account-control/how-it-works">Read more about UAC</a>
          </p>
          <h3 className="font-bold text-lightMatrixGreen">Task Manager</h3>
          <p>
            Task Manager is a powerful tool for managing processes, applications, and system resources. It allows
            monitoring CPU, RAM, disk, and network usage and terminating unresponsive applications. <br />
            <a className="link" href="https://www.howtogeek.com/405806/windows-task-manager-the-complete-guide/">Read more about Task Manager</a>
          </p>
        </div>
      </main>
    </>
  );
}
