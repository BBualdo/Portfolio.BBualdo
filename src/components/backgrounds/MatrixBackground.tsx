import Image from "next/image";

const MatrixBackground = () => {
  return (
    <div className="fixed w-screen h-screen blur-md opacity-70 z-[-50]">
      <Image alt="" src="/matrix.gif" fill />
    </div>
    )
}

export default MatrixBackground