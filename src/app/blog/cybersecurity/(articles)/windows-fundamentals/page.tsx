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
            <a className="link"
               href="https://www.malwarebytes.com/blog/101/2015/07/introduction-to-alternate-data-streams">Read more
              about ADS</a>
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
               href="https://www.howtogeek.com/346997/what-is-the-system32-directory-and-why-you-shouldnt-delete-it/">Read
              more
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
            operations needing administrator privileges, protecting the system from accidental or malicious
            changes. <br />
            <a className="link"
               href="https://learn.microsoft.com/en-us/windows/security/application-security/application-control/user-account-control/how-it-works">Read
              more about UAC</a>
          </p>
          <h3 className="font-bold text-lightMatrixGreen">Task Manager</h3>
          <p>
            Task Manager is a powerful tool for managing processes, applications, and system resources. It allows
            monitoring CPU, RAM, disk, and network usage and terminating unresponsive applications. <br />
            <a className="link" href="https://www.howtogeek.com/405806/windows-task-manager-the-complete-guide/">Read
              more about Task Manager</a>
          </p>
          <h2 className="font-bold text-lightMatrixGreen">Windows Fundamentals - Part II</h2>

          <h3 className="font-bold text-lightMatrixGreen">msconfig - System Configuration Tool</h3>
          <p>
            `msconfig` is a tool available in Windows that allows you to quickly manage system settings and boot
            configuration. Here are the details of the different tabs in the msconfig window:
          </p>
          <h4 className="font-bold text-lightMatrixGreen">General</h4>
          <p>
            This tab allows you to select the startup mode for the system. You can choose one of three modes:
          </p>
          <ul className="list-disc list-inside ml-6">
            <li><strong>Normal startup:</strong> Boots the system with default settings.</li>
            <li><strong>Diagnostic startup:</strong> Boots the system with a minimal set of drivers and programs,
              useful for troubleshooting.
            </li>
            <li><strong>Selective startup:</strong> Allows you to choose which elements of the system should be loaded
              during startup, such as services and startup programs.
            </li>
          </ul>
          <h4 className="font-bold text-lightMatrixGreen">Boot</h4>
          <p>
            In this tab, you can manage boot options, including:
          </p>
          <ul className="list-disc list-inside ml-6">
            <li><strong>Timeout:</strong> Specifies the time the system waits before selecting an operating system in
              case of dual boot.
            </li>
            <li><strong>Safe boot:</strong> Allows the system to boot in safe mode, useful for troubleshooting issues.
            </li>
          </ul>
          <h4 className="font-bold text-lightMatrixGreen">Services</h4>
          <p>
            This tab displays a list of system services that can be enabled or disabled. Enabling or disabling services
            can help improve system performance, but caution is needed to avoid disabling critical services.
          </p>
          <h4 className="font-bold text-lightMatrixGreen">Startup</h4>
          <p>
            In this tab, you can manage programs that run automatically at startup. You can enable or disable these
            applications to optimize boot time.
          </p>
          <h4 className="font-bold text-lightMatrixGreen">Tools</h4>
          <p>
            This tab contains shortcuts to various system tools, such as:
          </p>
          <ul className="list-disc list-inside ml-6">
            <li><strong>System Information</strong> (`msinfo32`)</li>
            <li><strong>Event Viewer</strong></li>
            <li><strong>Resource Monitor</strong></li>
            <li><strong>Command Prompt</strong></li>
            <li><strong>Registry Editor</strong></li>
          </ul>
          <h3 className="font-bold text-lightMatrixGreen">System Tools</h3>
          <h4 className="font-bold text-lightMatrixGreen">Computer Management</h4>
          <p>
            Computer Management is a tool that allows you to manage various aspects of your computer. It includes:
          </p>
          <ul className="list-disc list-inside ml-6">
            <li><strong>Disk Management:</strong> Allows you to manage hard drives, partitions, and volumes.</li>
            <li><strong>Device Manager:</strong> Allows you to manage installed devices, such as drivers and hardware.
            </li>
            <li><strong>Event Viewer:</strong> Allows you to view system event logs, useful for troubleshooting
              issues.
            </li>
          </ul>
          <h4 className="font-bold text-lightMatrixGreen">System Information</h4>
          <p>
            The System Information tool (`msinfo32`) provides detailed information about the system, including hardware,
            software, and drivers. It can be useful for diagnosing system issues.
          </p>
          <p>
            Link to detailed hardware resources information: <a className="link"
                                                                href="https://learn.microsoft.com/en-us/windows-hardware/drivers/kernel/hardware-resources">Hardware
            Resources</a>
          </p>
          <h4 className="font-bold text-lightMatrixGreen">Resource Monitor</h4>
          <p>
            Resource Monitor allows you to monitor system resource usage, such as CPU, memory, disk, and network usage.
            It helps identify which applications are consuming the most resources.
          </p>
          <h4 className="font-bold text-lightMatrixGreen">Command Prompt</h4>
          <p>
            The Command Prompt is a tool for entering system commands. Here are some useful commands:
          </p>
          <ul className="list-disc list-inside ml-6">
            <li><strong>hostname:</strong> Displays the computer&apos;s hostname.</li>
            <li><strong>whoami:</strong> Displays the current logged-in user.</li>
            <li><strong>ipconfig:</strong> Displays network configuration, including IP address.</li>
            <li><strong>/?:</strong> Displays help for available commands.</li>
            <li><strong>netstat:</strong> Displays information about network connections and ports.</li>
            <li><strong>net:</strong> Allows managing network and user settings.</li>
          </ul>
          <p>
            Full command list: <a className="link" href="https://ss64.com/nt/">SS64 Command List</a>
          </p>
          <h4 className="font-bold text-lightMatrixGreen">Registry Editor</h4>
          <p>
            The Registry Editor allows you to edit the system registry, which stores configuration settings for the
            system and applications. Editing the registry can help customize the system, but caution is needed to avoid
            damaging critical settings.
          </p>
          <p>
            Link to detailed registry information: <a className="link"
                                                      href="https://learn.microsoft.com/en-us/troubleshoot/windows-server/performance/windows-registry-advanced-users">Windows
            Registry - Advanced Users</a>
          </p>
          <h2 className="font-bold text-lightMatrixGreen">Windows Fundamentals - Part III</h2>

          <h3 className="font-bold text-lightMatrixGreen">Microsoft Update</h3>
          <p>
            Microsoft Update is an essential service that ensures your system remains secure and up-to-date. It provides
            patches for security vulnerabilities, feature updates, and driver installations. There are two main types of
            updates:
          </p>
          <ul className="list-disc list-inside">
            <li>
              <strong>Security Updates:</strong> These address critical vulnerabilities that could be exploited by
              attackers.
            </li>
            <li>
              <strong>Feature Updates:</strong> These introduce new functionalities or improvements to the operating
              system.
            </li>
          </ul>
          <p>
            Regular updates are vital for maintaining system security. However, some users may delay updates, risking
            exposure to known vulnerabilities. For businesses, tools like WSUS (Windows Server Update Services) help
            manage updates across multiple devices efficiently. <br />
            <a className="link" href="https://learn.microsoft.com/en-us/windows/deployment/update/windows-update">Read
              more about Windows Update</a>
          </p>

          <h3 className="font-bold text-lightMatrixGreen">Microsoft Defender</h3>
          <p>
            Microsoft Defender is Windows&apos; built-in antivirus solution, offering real-time protection against malware,
            viruses, and other threats. Key features include:
          </p>
          <ul className="list-disc list-inside">
            <li>Automatic scanning of files and downloads.</li>
            <li>Cloud-based threat analysis for faster detection.</li>
            <li>Integration with Microsoft Security Intelligence for up-to-date protection.</li>
          </ul>
          <p>
            Defender also includes tools like <strong>Controlled Folder Access</strong>, which protects sensitive
            folders from unauthorized changes, and a <strong>Firewall</strong> to monitor network activity. <br />
            <a className="link"
               href="https://learn.microsoft.com/en-us/windows/security/threat-protection/microsoft-defender-antivirus/microsoft-defender-antivirus-in-windows-10">Read
              more about Microsoft Defender</a>
          </p>

          <h3 className="font-bold text-lightMatrixGreen">Windows Firewall</h3>
          <p>
            The Windows Firewall acts as a barrier between your computer and potential threats from the internet or
            local networks. It monitors and controls incoming and outgoing network traffic based on predefined security
            rules. Key capabilities include:
          </p>
          <ul className="list-disc list-inside">
            <li>Blocking unauthorized access to your system.</li>
            <li>Allowing or denying specific applications or ports.</li>
            <li>Customizable rules for advanced users.</li>
          </ul>
          <p>
            The firewall is essential for protecting devices in both home and corporate environments. Advanced features
            like <strong>Windows Defender Firewall with Advanced Security</strong> enable granular control over network
            traffic. <br />
            <a className="link"
               href="https://learn.microsoft.com/en-us/windows/security/threat-protection/windows-firewall/windows-firewall-with-advanced-security">Read
              more about Windows Firewall</a>
          </p>

          <h3 className="font-bold text-lightMatrixGreen">BitLocker</h3>
          <p>
            BitLocker is a full-disk encryption feature in Windows that protects data from unauthorized access. It
            encrypts the entire drive, ensuring that even if a device is lost or stolen, the data remains secure. Key
            features include:
          </p>
          <ul className="list-disc list-inside">
            <li>Seamless integration with TPM (Trusted Platform Module) for secure key storage.</li>
            <li>Support for encrypting removable drives via BitLocker To Go.</li>
            <li>Recovery keys for emergency access.</li>
          </ul>
          <p>
            BitLocker is particularly useful in enterprise environments where data protection is critical. However,
            users must safeguard their recovery keys to avoid data loss. <br />
            <a className="link"
               href="https://learn.microsoft.com/en-us/windows/security/operating-system-security/data-protection/bitlocker/">Read
              more about BitLocker</a>
          </p>

          <h3 className="font-bold text-lightMatrixGreen">Volume Shadow Copy Service (VSS)</h3>
          <p>
            The Volume Shadow Copy Service (VSS) enables the creation of backup snapshots of files, even when they are
            in use. It’s commonly used for:
          </p>
          <ul className="list-disc list-inside">
            <li>Creating restore points for system recovery.</li>
            <li>Backing up open or locked files.</li>
          </ul>
          <p>
            However, attackers, especially ransomware creators, have exploited VSS. For instance, ransomware may delete
            shadow copies to prevent victims from recovering their files without paying a ransom. Tools
            like <code>vssadmin</code> can be abused to delete these backups. <br />
            <a className="link"
               href="https://learn.microsoft.com/en-us/windows-server/storage/file-server/volume-shadow-copy-service">Read
              more about VSS</a>
          </p>
        </div>
      </main>
    </>
  );
}
