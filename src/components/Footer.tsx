const Footer = () => {
  return (
    <footer className="flex items-center justify-center border-t border-zinc-800 bg-black py-5 text-center text-sm font-bold text-white/70 xs:max-xl:px-4 xl:text-base">
      © Copyright {new Date().getFullYear()}. Designed and developed by
      BBualdo.
    </footer>
  );
};

export default Footer;
